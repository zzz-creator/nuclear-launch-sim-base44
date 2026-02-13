const DEFAULT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 60_000);
const DEFAULT_MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX_REQUESTS || 120);

const buckets = new Map();

const getClientIp = (req) => {
    const forwardedFor = req.headers['x-forwarded-for'];
    if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
        return forwardedFor.split(',')[0].trim();
    }

    return req.ip || req.socket?.remoteAddress || 'unknown';
};

const createRateLimiter = ({
    windowMs = DEFAULT_WINDOW_MS,
    maxRequests = DEFAULT_MAX_REQUESTS,
    keyPrefix = 'global'
} = {}) => {
    return (req, res, next) => {
        const now = Date.now();
        const key = `${keyPrefix}:${getClientIp(req)}`;
        const existing = buckets.get(key);

        if (!existing || existing.resetAt <= now) {
            buckets.set(key, { count: 1, resetAt: now + windowMs });
            return next();
        }

        if (existing.count >= maxRequests) {
            const retryAfterSeconds = Math.ceil((existing.resetAt - now) / 1000);
            res.set('Retry-After', String(retryAfterSeconds));
            return res.status(429).json({
                error: 'Too many requests',
                retryAfterSeconds
            });
        }

        existing.count += 1;
        return next();
    };
};

module.exports = {
    createRateLimiter
};


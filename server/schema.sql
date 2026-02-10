-- Create Users table for authentication
CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    email NVARCHAR(255) UNIQUE NOT NULL,
    passwordHash NVARCHAR(255) NOT NULL,
    role NVARCHAR(50) DEFAULT 'user',
    created_date DATETIME DEFAULT GETDATE()
);

-- AdminAuditLog table
CREATE TABLE AdminAuditLog (
    id INT IDENTITY(1,1) PRIMARY KEY,
    action NVARCHAR(100) NOT NULL,
    targetUser NVARCHAR(255),
    performedBy NVARCHAR(255) NOT NULL,
    details NVARCHAR(MAX), -- JSON stored as string
    ipAddress NVARCHAR(50),
    success BIT DEFAULT 1,
    errorMessage NVARCHAR(MAX),
    created_date DATETIME DEFAULT GETDATE()
);

-- AdminAccessControl table
CREATE TABLE AdminAccessControl (
    id INT IDENTITY(1,1) PRIMARY KEY,
    userEmail NVARCHAR(255) NOT NULL,
    adminAccessEnabled BIT DEFAULT 0,
    isSuperAdmin BIT DEFAULT 0,
    accessDisabledReason NVARCHAR(MAX),
    accessDisabledUntil DATETIME,
    lastLoginTime DATETIME,
    lastActivityTime DATETIME,
    failedLoginAttempts INT DEFAULT 0,
    sessionToken NVARCHAR(MAX),
    sessionExpiresAt DATETIME,
    created_date DATETIME DEFAULT GETDATE()
);

-- Insert a default admin user (password: admin123)
-- Note: In a real app, you'd use a hashed password. 
-- For this training tool, we assume 'admin123' hashed with bcrypt is:
-- $2a$10$xG95G.RkY9A6k8v8K8K8KeK8K8K8K8K8K8K8K8K8K8K8K8K8K8K8
-- (This is just a placeholder, the user should provide a real hash)
INSERT INTO Users (email, passwordHash, role) 
VALUES ('admin@example.com', '$2y$10$S8ZcR8L8Z8R8L8Z8R8L8Z8R8L8Z8R8L8Z8R8L8Z8R8L8Z8R8L8Z8', 'admin');

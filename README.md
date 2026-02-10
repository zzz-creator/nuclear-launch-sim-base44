**Nuclear Launch Simulator**

About

This repository contains the web app (front-end + lightweight server) used for running and developing the Nuclear Launch Simulator experience. 4.

Key features

- **Simulator UI**: interactive simulator pages and mission playback (see `src/components/simulator`).
- **Admin tools**: scenario editor, audit log viewer, user management, analytics (see `src/components/admin`).
- **Server & API**: simple Node/Express server and routes for auth, comms, and simulator endpoints (see `server/`).
- **Data & SQL**: sample SQL schema and stored procedures for SAS codes and repository logic (see `src/components/data`).
- **Modular UI library**: reusable components and primitives under `src/components/ui`.

Prerequisites

1. Node.js (v18+ recommended) and npm installed
2. Git

Local setup

1. Clone the repository and enter it:

	`git clone <repo-url>`
	`cd nuclear-launch-sim-base44`

2. Install dependencies:

	`npm install`
    `cd server & npm install`

3. Create an `.env.local` file in the server root at `/server`:

	`DB_USER= \
    DB_PASSWORD=
    DB_SERVER=
    DB_DATABASE=
    PORT=3001 #Keep this the same
    GEMINI_API_KEY=`


4. Start the app for development:

	`npm run dev`


Useful files & locations

- Front-end entry: `src/main.jsx`
- App shell: `src/App.jsx`
- Simulator pages: `src/components/simulator`
- Admin tools: `src/components/admin`
- Server code: `server/index.js`, `server/routes`
- SQL/data schema: `src/components/data/SASCodePuzzler.sql`, `src/components/data/SQLServerSchema.sql`

Troubleshooting

- If the dev server fails, confirm Node version and re-run step 2.
- Ensure `.env.local` variables are set and not conflicting with system env.

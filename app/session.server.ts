// session.server.ts
import { createCookieSessionStorage, json } from "@remix-run/node";

// Configure session storage
const { getSession, commitSession } = createCookieSessionStorage({
  // Cookie options
  cookie: {
    name: "__session",
    // Secure cookies are only sent to the server with an encrypted request over the HTTPS protocol.
    secure: process.env.NODE_ENV === "production",
    secrets: ["s3cret1"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
});

export { getSession, commitSession };

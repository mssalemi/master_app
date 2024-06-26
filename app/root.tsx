import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
``;

import { Analytics } from "@vercel/analytics/react";

import "./styles.css";

import { Navbar } from "./master-components/";
import { Footer } from "./components/Footer/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="corporate">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

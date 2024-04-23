import type { MetaFunction } from "@remix-run/node";

// Metadata for the settings page
export const meta: MetaFunction = () => {
  return [
    { title: "Account Settings" },
    {
      name: "description",
      content: "Manage your account and application settings.",
    },
  ];
};

export default function SettingsPage() {
  return <>Setting</>;
}

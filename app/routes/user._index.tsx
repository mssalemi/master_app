import type { MetaFunction } from "@remix-run/node";

// Metadata for the settings page
export const meta: MetaFunction = () => {
  return [
    { title: "User Account" },
    {
      name: "description",
      content: "View/Manage your user user account.",
    },
  ];
};

export default function UserPage() {
  return <>User Page</>;
}

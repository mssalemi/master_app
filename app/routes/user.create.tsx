import type { MetaFunction } from "@remix-run/node";

// Metadata for the settings page
export const meta: MetaFunction = () => {
  return [
    { title: "User Profile" },
    {
      name: "description",
      content: "View/Manage your user profile settings.",
    },
  ];
};

export default function UserCreatePage() {
  return <>UserCreate</>;
}

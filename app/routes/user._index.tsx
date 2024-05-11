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
  return <Layout>User Page</Layout>;
}

const Layout = ({ children }) => {
  return <div className="flex flex-col px-16 py-8">{children}</div>;
};

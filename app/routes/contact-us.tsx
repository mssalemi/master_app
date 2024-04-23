import type { MetaFunction } from "@remix-run/node";

// Metadata for the settings page
export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us" },
    {
      name: "description",
      content: "Contact strengthtraining.ai.",
    },
  ];
};

export default function ProfilePage() {
  return <>Contact Us</>;
}

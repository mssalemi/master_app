import type { MetaFunction } from "@remix-run/node";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "app/master-components/shadcn/avatar";

import { Badge } from "app/master-components/shadcn/badge";

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

const Props = {
  user: {
    username: "medxman",
    firstName: "Med",
    lastName: "Xman",
    email: "medxman@strengthtrainning.ai.com",
  },
};

export default function ProfilePage() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold">
        {Props.user.firstName}
        {"'s"} Profile
      </h2>
      <Avatar className="w-20 h-20">
        <AvatarImage
          src="https://i.postimg.cc/Kvp221Xn/IMG-2673.jpg"
          alt="@medxman"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Badge>Edit</Badge>
    </Layout>
  );
}

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col px-16 py-8 gap-4 justify-center items-center">
      {children}
    </div>
  );
};

import type { MetaFunction } from "@remix-run/node";
import { Form, FormField } from "../master-components";

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
  const formFields: FormField[] = [
    {
      key: "username",
      type: "string",
      placeholder: "Username",
      value: "",
    },
    {
      key: "email",
      type: "string",
      placeholder: "Email",
      value: "",
    },
    {
      key: "first-name",
      type: "string",
      placeholder: "First Name",
      value: "",
    },
    {
      key: "last-name",
      type: "string",
      placeholder: "Last Name",
      value: "",
    },
    {
      key: "password",
      type: "string",
      placeholder: "Password",
      value: "",
    },
    {
      key: "password-confirm",
      type: "string",
      placeholder: "Password",
      value: "",
    },
  ];

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold mb-4">Sign Up Today</h2>
      <div className="card bg-base-100 shadow-xl flex flex-col-reverse md:flex-row md:w-full">
        <Form
          fields={formFields}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target);
          }}
          title={"Sign Up"}
        />
      </div>
    </div>
  );
}

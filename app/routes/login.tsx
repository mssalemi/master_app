import type { MetaFunction } from "@remix-run/node";
import { Form, FormField } from "../master-components";

// Metadata for the settings page
export const meta: MetaFunction = () => {
  return [
    { title: "Login" },
    {
      name: "description",
      content: "User Login Page",
    },
  ];
};

const IMG_URL =
  "https://i.postimg.cc/8cf2X6cy/DALL-E-2024-04-23-14-05-39-Create-an-image-of-a-wide-angle-zoomed-out-view-of-a-bodybuilding-gym.webp";

export default function LoginPage() {
  const formFields: FormField[] = [
    {
      key: "username",
      type: "string",
      placeholder: "Username",
      value: "",
    },
    {
      key: "password",
      type: "string",
      placeholder: "Password",
      value: "",
    },
  ];

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold mb-4">Login to your account</h2>
      <div className="card bg-base-100 shadow-xl flex flex-col-reverse md:flex-row md:w-full">
        <ImageDisplay imgUrl={IMG_URL} />
        <Form fields={formFields} onSubmit={() => console.log("hey")} />
      </div>
    </div>
  );
}

const ImageDisplay = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <figure className="md:w-1/2">
      <img src={imgUrl} alt="Gym" className="w-full h-full object-cover" />
    </figure>
  );
};

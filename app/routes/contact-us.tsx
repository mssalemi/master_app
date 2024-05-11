import type { MetaFunction } from "@remix-run/node";
import { Textarea } from "app/master-components/shadcn/textarea";
import { Button } from "app/master-components/shadcn/button";

// Metadata for the contact page
export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us" },
    {
      name: "description",
      content: "Contact strengthtraining.ai for assistance or inquiries.",
    },
  ];
};

export default function ContactPage() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
      <p className="text-lg text-gray-600 mb-4">
        Have a question or need help? Drop us a message below and we'll get back
        to you as soon as possible.
      </p>
      <div className="grid w-full gap-2">
        <Textarea
          placeholder="Type your message here."
          className="bg-gray-200 "
        />
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-70">
          Send Message
        </Button>
      </div>
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

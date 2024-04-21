import type { MetaFunction } from "@remix-run/node";
import { MainContentV1 } from "../components/MainContent/MainContentV1.tsx";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <MainContentV1 />
    </>
  );
}

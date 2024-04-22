import React from "react";

interface Props {
  children: React.ReactNode;
}

function AdtechV1({ children }: Props) {
  return <div className="flex justify-center">{children}</div>;
}

export default AdtechV1;

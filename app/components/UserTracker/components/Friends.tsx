import React, { useState } from "react";
import {
  Layout,
  LayoutBody,
  LayoutHeader,
} from "../../../master-components/shadcn/layout";
import { IconChevronRight } from "@tabler/icons-react";

import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../../master-components/shadcn/breadcrumb";

import { Link } from "@remix-run/react";

export function Friends() {
  const items = [{ title: "Friends" }, { title: "Home" }].map(
    ({ href, title }) => (
      <BreadcrumbItem key={title}>
        {href ? (
          <Link
            className="text-muted-foreground underline decoration-muted-foreground decoration-dashed underline-offset-4 hover:text-foreground hover:decoration-solid"
            to={href}
          >
            {title}
          </Link>
        ) : (
          <span className="text-muted-foreground">{title}</span>
        )}
      </BreadcrumbItem>
    )
  );

  const [pinInput, setPinInput] = useState("");
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <Breadcrumb separator={<IconChevronRight size={18} />}>
          {items}
        </Breadcrumb>
      </LayoutHeader>
      <LayoutBody className="flex flex-col" fixedHeight>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Friends</h2>
            <p className="text-muted-foreground">
              Here&apos;s a view of your friends, and their progress - see how
              they&apos;re doing!
            </p>
          </div>
        </div>
      </LayoutBody>
    </Layout>
  );
}

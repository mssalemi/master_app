import React from "react";

import { Search } from "../../../master-components/shadcn/search";
import {
  Layout,
  LayoutBody,
  LayoutHeader,
} from "../../../master-components/shadcn/layout";
import { DataTable } from "../../../master-components/shadcn/data-table";
import { columns } from "../../../master-components/shadcn/columns";
import { Button } from "../../../master-components/shadcn/button";

import { apps } from "./apps";

export function WorkoutProgramsTab() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <Search />
      </LayoutHeader>

      <LayoutBody className="flex flex-col" fixedHeight>
        <div>
          <ul className="no-scrollbar grid gap-4 overflow-y-scroll pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => (
              <li
                key={app.name}
                className="rounded-lg border p-4 hover:shadow-md"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div
                    className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                  >
                    {app.logo}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      app.connected
                        ? "border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900"
                        : ""
                    }`}
                  >
                    {app.connected ? "Connected" : "View"}
                  </Button>
                </div>
                <div>
                  <h2 className="mb-1 font-semibold">{app.name}</h2>
                  <p className="line-clamp-2 text-gray-500">{app.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Your Workout Programs!
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your workouts for this month!
            </p>
          </div>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <DataTable data={tasks} columns={columns} />
        </div>
      </LayoutBody>
    </Layout>
  );
}

export const tasks = [
  {
    id: "PRG-WRK-1",
    title: "12-Week Strength Training Program",
    status: "active",
    label: "strength training",
    priority: "high",
  },
  {
    id: "PRG-WRK-2",
    title: "6-Week HIIT Cardio Challenge",
    status: "active",
    label: "HIIT",
    priority: "medium",
  },
  {
    id: "PRG-WRK-3",
    title: "8-Week Yoga for Flexibility Program",
    status: "active",
    label: "yoga",
    priority: "low",
  },
  {
    id: "PRG-WRK-4",
    title: "10-Week Marathon Training Plan",
    status: "upcoming",
    label: "running",
    priority: "medium",
  },
  {
    id: "PRG-WRK-5",
    title: "4-Week Bodyweight Workout Challenge",
    status: "active",
    label: "bodyweight",
    priority: "high",
  },
  {
    id: "PRG-WRK-6",
    title: "6-Week Core Strengthening Program",
    status: "active",
    label: "core",
    priority: "low",
  },
];

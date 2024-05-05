import React from "react";

import { Search } from "../../../master-components/shadcn/search";
import {
  Layout,
  LayoutBody,
  LayoutHeader,
} from "../../../master-components/shadcn/layout";
import { DataTable } from "../../../master-components/shadcn/data-table";
import { columns } from "../../../master-components/shadcn/columns";
import {QuickWorkoutAdd} from "../components/QuickWorkoutAdd"


export function WorkoutsTab() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <Search />
      </LayoutHeader>

      <LayoutBody className="flex flex-col" fixedHeight>
        <QuickWorkoutAdd />

        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Your workouts!
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
    title: "Week 1 - Full Body Strength Training",
    status: "in progress",
    label: "strength training",
    priority: "high",
  },
  {
    id: "PRG-WRK-2",
    title: "Week 2 - Upper Body Hypertrophy",
    status: "completed",
    label: "hypertrophy",
    priority: "medium",
  },
  {
    id: "PRG-WRK-3",
    title: "Week 3 - Cardio and Core Focus",
    status: "pending",
    label: "cardio",
    priority: "low",
  },
  {
    id: "PRG-WRK-4",
    title: "Week 4 - Lower Body Strength Training",
    status: "in progress",
    label: "strength training",
    priority: "medium",
  },
  {
    id: "PRG-WRK-5",
    title: "Week 5 - Yoga and Flexibility",
    status: "completed",
    label: "yoga",
    priority: "high",
  },
  {
    id: "PRG-WRK-6",
    title: "Week 6 - HIIT and Endurance",
    status: "pending",
    label: "HIIT",
    priority: "low",
  },
  {
    id: "PRG-WRK-7",
    title: "Week 7 - Upper Body Strength and Power",
    status: "in progress",
    label: "strength training",
    priority: "high",
  },
  {
    id: "PRG-WRK-8",
    title: "Week 8 - Rest and Recovery",
    status: "completed",
    label: "recovery",
    priority: "medium",
  },
  {
    id: "PRG-WRK-9",
    title: "Week 9 - Active Rest and Mobility",
    status: "pending",
    label: "mobility",
    priority: "low",
  },
  {
    id: "PRG-WRK-10",
    title: "Week 10 - Full Body Circuit Training",
    status: "in progress",
    label: "circuit training",
    priority: "medium",
  },
  {
    id: "PRG-WRK-11",
    title: "Week 11 - Endurance Run",
    status: "completed",
    label: "running",
    priority: "high",
  },
  {
    id: "PRG-WRK-12",
    title: "Week 12 - Final Assessment and Progress Check",
    status: "pending",
    label: "assessment",
    priority: "low",
  },
  {
    id: "PRG-WRK-13",
    title: "Week 1 - Introduction to Weightlifting",
    status: "in progress",
    label: "weightlifting",
    priority: "medium",
  },
  {
    id: "PRG-WRK-14",
    title: "Week 2 - Upper Body Strength Training",
    status: "completed",
    label: "strength training",
    priority: "high",
  },
  {
    id: "PRG-WRK-15",
    title: "Week 3 - Lower Body Hypertrophy",
    status: "pending",
    label: "hypertrophy",
    priority: "low",
  },
  {
    id: "PRG-WRK-16",
    title: "Week 4 - Core Stability and Balance",
    status: "in progress",
    label: "core",
    priority: "medium",
  },
  {
    id: "PRG-WRK-17",
    title: "Week 5 - Yoga for Flexibility",
    status: "completed",
    label: "yoga",
    priority: "high",
  },
  {
    id: "PRG-WRK-18",
    title: "Week 6 - Endurance Swim",
    status: "pending",
    label: "swimming",
    priority: "low",
  },
  {
    id: "PRG-WRK-19",
    title: "Week 7 - Upper Body Strength and Power",
    status: "in progress",
    label: "strength training",
    priority: "high",
  },
  {
    id: "PRG-WRK-20",
    title: "Week 8 - Rest and Recovery",
    status: "completed",
    label: "recovery",
    priority: "medium",
  },
  {
    id: "PRG-WRK-21",
    title: "Week 9 - Active Rest and Mobility",
    status: "pending",
    label: "mobility",
    priority: "low",
  },
  {
    id: "PRG-WRK-22",
    title: "Week 10 - Full Body Circuit Training",
    status: "in progress",
    label: "circuit training",
    priority: "medium",
  },
  {
    id: "PRG-WRK-23",
    title: "Week 11 - Endurance Run",
    status: "completed",
    label: "running",
    priority: "high",
  },
  {
    id: "PRG-WRK-24",
    title: "Week 12 - Final Assessment and Progress Check",
    status: "pending",
    label: "assessment",
    priority: "low",
  },
  {
    id: "PRG-WRK-25",
    title: "Week 1 - Introduction to Bodyweight Training",
    status: "in progress",
    label: "bodyweight",
    priority: "medium",
  },
  {
    id: "PRG-WRK-26",
    title: "Week 2 - Upper Body Strength and Endurance",
    status: "completed",
    label: "strength training",
    priority: "high",
  },
  {
    id: "PRG-WRK-27",
    title: "Week 3 - Lower Body Power",
    status: "pending",
    label: "power",
    priority: "low",
  },
];

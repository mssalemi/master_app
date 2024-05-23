import type { MetaFunction } from "@remix-run/node";
import { WORKOUT_PROGRAMS_EXAMPLE } from "../lib/mehdi_bench_template";
import { Search } from "../master-components/shadcn/search";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../master-components/shadcn/table";

import {
  Layout,
  LayoutBody,
  LayoutHeader,
} from "../master-components/shadcn/layout";

import { Outlet, Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Workout Programs" },
    {
      name: "description",
      content:
        "Browse all different workouts plans, and find one tailored to your goals!",
    },
  ];
};

export default function WorkoutProgramsPage() {
  return (
    <Layout>
      <LayoutHeader>
        <div className="text-center flex flex-col items-center md:px-16 md:py-8">
          <h1 className="text-5xl font-bold mb-4 px-8">
            Explore our{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              workout program
            </span>{" "}
            library.
          </h1>
          <p className="mb-4 text-md opacity-80 font-light px-4">
            Discover workout programs tailored to your goals. Whether you're
            looking to build muscle, lose weight, or improve your overall
            fitness, we have a program for you.
          </p>
        </div>
      </LayoutHeader>
      <LayoutBody>
        <WorkoutProgramsSearchTable />
      </LayoutBody>
    </Layout>
  );
}

const invoices = [
  {
    id: 1,
    url: "/workoutprograms/123",
    workoutProgramName: "Mehdi Bench 5 Week Cycle",
    workoutsPerWeek: "3-5",
    numberOfWeeks: 5,
    author: "MedxMan",
  },
];

const WorkoutProgramsSearchTable = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Search />
      </div>
      <Table>
        <TableCaption>A list of workout programs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Workout Program</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className="text-center">Workouts per Week</TableHead>
            <TableHead className="text-center">Number of Weeks</TableHead>
            <TableHead className="text-right">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                {invoice.workoutProgramName}
              </TableCell>
              <TableCell>{invoice.author}</TableCell>
              <TableCell className="text-center">
                {invoice.workoutsPerWeek}
              </TableCell>
              <TableCell className="text-center">
                {invoice.numberOfWeeks}
              </TableCell>
              <TableCell className="text-right link">
                <Link to={invoice.url}>View</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </>
  );
};

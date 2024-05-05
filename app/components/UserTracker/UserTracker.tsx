import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../master-components/shadcn/tabs";

import { DashboardTab } from "./tabs/DashboardTab";
import { WorkoutProgramsTab } from "./tabs/WorkoutProgramsTab";
import { WorkoutsTab } from "./tabs/WorkoutsTab";
import { AnalyticsTab } from "./tabs/AnalyticsTab";
import { FriendsTab } from "./tabs/FriendsTab";

export function UserTracker() {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Dashboard
        </h1>
      </div>
      <Tabs
        orientation="vertical"
        defaultValue="overview"
        className="space-y-4"
      >
        <div className="w-full overflow-x-scroll pb-2">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="reports">Analytics</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview" className="space-y-4">
          <DashboardTab />
        </TabsContent>
        <TabsContent value="workouts" className="space-y-4">
          <WorkoutsTab />
        </TabsContent>
        <TabsContent value="programs" className="space-y-4">
          <WorkoutProgramsTab />
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <AnalyticsTab />
        </TabsContent>
        <TabsContent value="friends" className="space-y-4">
          <FriendsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

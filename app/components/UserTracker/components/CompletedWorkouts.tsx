import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../master-components/shadcn/avatar";

const users = [
  {
    id: 1,
    name: "Week 1 Day 5 Bench Day - May 6th, 2024",
    email: "Candito 6 Week Strength Program",
    revenue: "+ abs workout",
    avatarSrc: "/avatars/01.png",
    fallback: "CND",
  },
  {
    id: 2,
    name: "Week 1 Day 4 Back Day - May 3rd, 2024",
    email: "Candito 6 Week Strength Program",
    revenue: "+ strength workout",
    avatarSrc: "/avatars/02.png",
    fallback: "CND",
  },
  {
    id: 3,
    name: "Week 1 Day 3 Bench Day - May 3rd, 2024",
    email: "Candito 6 Week Strength Program",
    revenue: "+ 6 day streak",
    avatarSrc: "/avatars/03.png",
    fallback: "CND",
  },
  {
    id: 4,
    name: "Week 1 Day 2 Bench Dat - May 3rd, 2024",
    email: "Candito 6 Week Strength Program",
    revenue: "+ new 1rm",
    avatarSrc: "/avatars/04.png",
    fallback: "CND",
  },
];

export function CompletedWorkouts() {
  return (
    <div className="space-y-8">
      {users.map((user) => (
        <div key={user.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.avatarSrc} alt="Avatar" />
            <AvatarFallback>{user.fallback}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div className="ml-auto font-medium">{user.revenue}</div>
        </div>
      ))}
    </div>
  );
}

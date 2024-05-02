import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../master-components/shadcn//avatar";

import { Team } from "./Team";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQ";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../master-components/shadcn/card";

export function InfoHeroContent() {
  return (
    <div className="p-6">
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
    </div>
  );
}

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "Loved the Candito 6-week program! My bench increased by 15 lbs!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe1",
    comment:
      "Dropped 10 lbs while doing the 6-week Starting Strength cycle. Amazing results!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe2",
    comment:
      "The HIIT workouts on this platform are killer! Boosted my stamina tremendously.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe3",
    comment:
      "After following the 12-week hypertrophy guide, my muscle gain is noticeable to everyone. So pumped!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe4",
    comment:
      "The personalized meal plans and workout routines are perfect! Saw visible changes in just 3 weeks.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe5",
    comment:
      "Great program for beginners. I feel stronger and more motivated than ever!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-16 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold">
        Unlock your
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          training potential{" "}
        </span>
        and maximize your results!
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Join the thousands of athletes who have achieved their goals with our
        training programs.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

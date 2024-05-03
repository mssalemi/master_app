import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../master-components/shadcn/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../master-components/shadcn//avatar";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.postimg.cc/Kvp221Xn/IMG-2673.jpg",
    name: "Med",
    userName: "@MedxMan",
    comment:
      "Bench Press 🚀 - Love this workout tracker, and the AI generated programs are amazing. I can set the amount of weeks I have, and focus the program on bench press!",
  },
  {
    image:
      "https://i.postimg.cc/c1QGphZY/DALL-E-2024-05-03-07-00-45-Create-a-realistic-avatar-image-of-a-young-Caucasian-female-athletic-b.webp",
    name: "Jenny",
    userName: "@jenny_fit_peach",
    comment:
      "Created my own custom Booty workout plan and I'm loving it - me and my girls have been following it and see amazing results. Both in the analytics and our ass!",
  },
  {
    image:
      "https://i.postimg.cc/mrwFpCkG/DALL-E-2024-05-03-07-00-49-Create-a-realistic-avatar-image-of-a-middle-aged-Black-male-athletic-b.webp",
    name: "Jimmy",
    userName: "@pump_it_like_jimmy",
    comment:
      "I can easily manage my clients workouts programs, and set long terms goals. The marketing and email tools are amazing for re-booking contacts and contacting leads!",
  },
  {
    image:
      "https://i.postimg.cc/0jnqS5yx/DALL-E-2024-05-03-07-15-31-Create-a-realistic-avatar-image-of-a-Caucasian-male-named-Chad-interme.webp",
    name: "Chad",
    userName: "@sam_wes_smithy_boy",
    comment:
      "After following the 12-week hypertrophy guide, my muscle gain is noticeable to everyone. So pumped... and pumped hehe!",
  },
  {
    image:
      "https://i.postimg.cc/26TjfxNC/DALL-E-2024-05-03-07-06-28-Create-a-realistic-avatar-image-of-a-young-Hispanic-male-athletic-buil.webp",
    name: "Manual",
    userName: "@sexy_boi69",
    comment:
      "The personalized meal plans and workout routines are perfect! Saw visible changes in just 3 weeks.",
  },
  {
    image:
      "https://i.postimg.cc/XvkBpd6z/DALL-E-2024-05-03-07-10-12-Create-a-realistic-avatar-image-of-a-mid-40s-African-American-male-sli.webp",
    name: "Stanley",
    userName: "@dadbod_no_more",
    comment:
      "Great program for beginners. I feel stronger and more motivated than ever! Im ready to start another round of the 6-week beginger cycle, with my new maxes!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-16 sm:py-16 text-center">
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

import React from "react";

import { Team } from "./Team";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQ";

import { Testimonials } from "./Testimonials";

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

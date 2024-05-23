import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../master-components/shadcn/form";
import { Input } from "../../master-components/shadcn/input";
import { Button } from "../../master-components/shadcn/button";
import { cn } from "../../lib/utils";

import { FormulaType } from "../Calculator/types";

interface QuickCalculatorFormProps {
  formula: FormulaType;
  handleonerepmaxchange: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}

const ORM_SUBMIT_BTN_TEXT = "Calculate 1 Rep Max";

const formSchema = z.object({
  // email: z
  //   .string()
  //   .min(1, { message: "Please enter your email" })
  //   .email({ message: "Invalid email address" }),
  // password: z
  //   .string()
  //   .min(1, {
  //     message: "Please enter your password",
  //   })
  //   .min(7, {
  //     message: "Password must be at least 7 characters long",
  //   }),
  // confirmPassword: z.string(),
  weight: z.number().min(1, { message: "Please enter your weight" }),
  reps: z.number().min(1, { message: "Please enter your reps" }),
  pounds: z.boolean().optional(),
});

export function QuickCalculatorForm({
  formula,
  handleOneRepMaxChange,
}: QuickCalculatorFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reps: 5,
      weight: 225,
      pounds: true,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const newOneRepMaxEstimate = Math.round(
      formula.formula(data.weight, data.reps)
    );
    handleOneRepMaxChange(newOneRepMaxEstimate);
    setIsLoading(false);
  };

  return (
    <div className={cn("grid gap-6")}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2 bg-base-100 p-4">
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem className="space-y-1 text-left">
                  <FormLabel>Weight</FormLabel>
                  <FormControl>
                    <Input placeholder="225" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reps"
              render={({ field }) => (
                <FormItem className="space-y-1 text-left">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-2">{ORM_SUBMIT_BTN_TEXT}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

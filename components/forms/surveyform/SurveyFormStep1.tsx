"use client";
import CustomFormField from "@/components/CustomFormField";
import { Form, FormControl } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormFieldType } from "../LoginForm";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { forWhomOptions } from "@/constants";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type SurveyFormStep1Props = {
  onNext: (data: z.infer<typeof firstStepSchema>) => void;
};

export const firstStepSchema = z.object({
  forWhom: z
    .enum(["voor mij", "voor een naaste", "unknown"]) // Valid options including "unknown"
    .refine((val) => val !== "unknown", {
      message: "Geef aan of het voor u of een naaste is.",
    }),
});
const SurveyFormStep1 = ({ onNext }: SurveyFormStep1Props) => {
  const form = useForm<z.infer<typeof firstStepSchema>>({
    resolver: zodResolver(firstStepSchema),
  });

  const onSubmit = (data: z.infer<typeof firstStepSchema>) => {
    onNext(data);
  };
  return (
    <div>
      <h3 className="text-3xl from-bold">Is het voor u of een naasten</h3>
      <p className="text-gray-500 text-sm mt-3"></p>
      <div className="mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="gap-10 mb-5">
              <CustomFormField
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="forWhom"
                renderSkeleton={(field) => (
                  <FormControl>
                    <RadioGroup
                      className="flex h-11 gap-6 xl:justify-between"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      {forWhomOptions.map((option) => (
                        <div key={option} className="radio-group">
                          <RadioGroupItem
                            value={option.toLowerCase()}
                            id={option}
                          />
                          <Label
                            htmlFor={option}
                            className="cursor-pointer text-white"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </div>
            <Button type="submit" className="mt-5 w-full">
              Volgende
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SurveyFormStep1;

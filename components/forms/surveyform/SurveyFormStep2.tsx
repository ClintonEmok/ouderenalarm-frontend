"use client";
import CustomFormField from "@/components/CustomFormField";
import { Form, FormControl } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormFieldType } from "../LoginForm";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { livingSituationOptions } from "@/constants";
import { Label } from "@/components/ui/label";

type SurveyFormStep2Props = {
  onNext: (data: z.infer<typeof secondStepSchema>) => void;
};

export const secondStepSchema = z.object({
  livingSituation: z.enum([
    "alleen",
    "met partner",
    "met kinderen",
    "met ouders",
  ]),
});
const SurveyFormStep2 = ({ onNext }: SurveyFormStep2Props) => {
  const form = useForm<z.infer<typeof secondStepSchema>>({
    resolver: zodResolver(secondStepSchema),
  });

  const onSubmit = (data: z.infer<typeof secondStepSchema>) => {
    onNext(data);
  };
  return (
    <div>
      <h3 className="text-3xl from-bold">Register for an account</h3>
      <p className="text-gray-500 text-sm mt-3">
        Lets start with a little bit of information
      </p>
      <div className="mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="gap-10 mb-5">
              <CustomFormField
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="livingSituation"
                renderSkeleton={(field) => (
                  <FormControl>
                    <RadioGroup
                      className="flex h-11 gap-6 xl:justify-between"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      {livingSituationOptions.map((option) => (
                        <div key={option} className="radio-group">
                          <RadioGroupItem value={option} id={option} />
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
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SurveyFormStep2;

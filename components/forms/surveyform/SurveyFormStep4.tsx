"use client";
import CustomFormField from "@/components/CustomFormField";
import { Form, FormControl } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormFieldType } from "../LoginForm";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { medicalConditionOptions } from "@/constants";
import { Label } from "@/components/ui/label";

type SurveyFormStep4Props = {
  onNext: (data: z.infer<typeof fourthStepSchema>) => void;
};

export const fourthStepSchema = z.object({
  name: z
    .string()
    .min(1, "Naam is verplicht.")
    .max(100, "Naam mag maximaal 100 tekens bevatten."),
  email: z
    .string()
    .email("Voer een geldig e-mailadres in.")
    .min(1, "E-mail is verplicht."),
  phone: z
    .string()
    .regex(
      /^(\+)?(\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Voer een geldig telefoonnummer in."
    )
    .min(1, "Telefoonnummer is verplicht."),
});
const SurveyFormStep4 = ({ onNext }: SurveyFormStep4Props) => {
  const form = useForm<z.infer<typeof fourthStepSchema>>({
    resolver: zodResolver(fourthStepSchema),
  });

  const onSubmit = (data: z.infer<typeof fourthStepSchema>) => {
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
                      {medicalConditionOptions.map((option) => (
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

export default SurveyFormStep4;

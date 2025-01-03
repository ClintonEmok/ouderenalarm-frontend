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
import { Button } from "@/components/ui/button";

type SurveyFormStep3Props = {
  onNext: (data: z.infer<typeof thirdStepSchema>) => void;
  onBack: () => void;
};

export const thirdStepSchema = z.object({
  medicalCondition: z.enum(["ja", "nee"]),
});
const SurveyFormStep3 = ({ onNext, onBack }: SurveyFormStep3Props) => {
  const form = useForm<z.infer<typeof thirdStepSchema>>({
    resolver: zodResolver(thirdStepSchema),
  });

  const onSubmit = (data: z.infer<typeof thirdStepSchema>) => {
    console.log(data);
    onNext(data);
  };
  return (
    <div>
      <h3 className="text-3xl from-bold">Heeft u een medische aandoening</h3>
      <p className="text-gray-500 text-sm mt-3"></p>
      <div className="mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="gap-10 mb-5">
              <CustomFormField
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="medicalCondition"
                renderSkeleton={(field) => (
                  <FormControl>
                    <RadioGroup
                      className="flex h-11 gap-6 xl:justify-between"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      {medicalConditionOptions.map((option) => (
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
            <div className="flex justify-between gap-5">
              <Button type="submit" className="mt-5 w-full">
                Volgende
              </Button>
              <Button className="mt-5 w-full" onClick={onBack}>
                Terug
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SurveyFormStep3;

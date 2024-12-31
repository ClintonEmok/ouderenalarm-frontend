"use client";
import CustomFormField from "@/components/CustomFormField";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormFieldType } from "../LoginForm";
import { Button } from "@/components/ui/button";
import { SurveyFormSchema } from "@/lib/validation";

// TODO: ADD animation
type SurveyFormStep4Props = {
  handleSubmit: (data: z.infer<typeof SurveyFormSchema>) => void;
  onBack: () => void;
  formData: any;
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
const SurveyFormStep4 = ({
  handleSubmit,
  onBack,
  formData,
}: SurveyFormStep4Props) => {
  const form = useForm<z.infer<typeof SurveyFormSchema>>({
    resolver: zodResolver(SurveyFormSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: z.infer<typeof SurveyFormSchema>) => {
    handleSubmit(data);
  };
  return (
    <div>
      <h3 className="text-3xl from-bold">
        Gefeliciteerd u komt in aanmerking voor de gratis test
      </h3>
      <p className="text-gray-500 text-md mt-3">
        Vul uw contactgegevens in en claim je plaats.
      </p>
      <div className="mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="gap-10 mb-5">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="name"
                label="Naam"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                label="Email"
              />
              <CustomFormField
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="phone"
                label="Telefoonnummer"
              />
            </div>
            <div className="flex justify-between gap-5">
              <Button
                type="submit"
                className="mt-5 w-full"
                disabled={form.formState.isSubmitting}
              >
                Verstuur
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

export default SurveyFormStep4;

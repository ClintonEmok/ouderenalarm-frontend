import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import SurveyForm from "../forms/SurveyForm";

type SurveyDialogProps = {
  button: React.ReactNode;
  triggerClassName?: string;
};
const SurveyDialog = ({ button, triggerClassName }: SurveyDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className={triggerClassName}>{button}</DialogTrigger>
      <DialogContent className="bg-white w-full flex-col justify-center">
        <DialogTitle className="text-center">
          Doe de GRATIS veiligheidstest
        </DialogTitle>
        <SurveyForm />
      </DialogContent>
    </Dialog>
  );
};

export default SurveyDialog;

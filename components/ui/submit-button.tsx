import { LoaderCircle } from "lucide-react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

export const SubmitButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={`flex gap-2 w-full ${pending ? "opacity-70" : "opacity-100"}`}
      disabled={pending}
    >
      {pending && <LoaderCircle className="animate-spin" />}
      {text}
    </Button>
  );
};

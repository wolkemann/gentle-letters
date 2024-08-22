import { LoaderCircle } from "lucide-react";
import { Button, buttonVariants } from "./button";
import { useFormStatus } from "react-dom";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

type SubmitButton = {
  children: ReactNode;
  variant?: "default" | "window";
  className?: string;
};

export const SubmitButton = ({
  children,
  className,
  variant,
}: SubmitButton) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant={variant || "default"}
      className={`flex gap-2 ${pending ? "opacity-70" : "opacity-100"} ${className}`}
      disabled={pending}
    >
      {pending && <LoaderCircle className="animate-spin" />}
      {children}
    </Button>
  );
};

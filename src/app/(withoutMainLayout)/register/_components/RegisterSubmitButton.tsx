"use client";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const RegisterSubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {pending ? <Spinner></Spinner> : children}
    </Button>
  );
};

export default RegisterSubmitButton;

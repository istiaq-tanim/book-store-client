"use client";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { signUpUser } from "../../action/authAction";
import RegisterSubmitButton from "./RegisterSubmitButton";

export function SignupForm() {
  const [state, formAction] = useFormState(signUpUser, null);
  const ref = createRef<HTMLFormElement>();
  useEffect(() => {
    if (state && state?.success) {
      toast(state?.message);
      ref.current?.reset();
      redirect("/login");
    }
    if (state && !state?.success) {
      toast(state?.message);
    }
  }, [state, ref]);
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={ref} action={formAction}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Max" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" />
            </div>
            <RegisterSubmitButton>Register</RegisterSubmitButton>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { logInUser } from "../../action/authAction";
import RegisterSubmitButton from "../../register/_components/RegisterSubmitButton";

export function LoginForm() {
  const defaultCredentials = {
    admin: {
      email: "istiaq.tanim@gmail.com",
      password: "123456",
    },
    user: {
      email: "istiaq.tanim17@gmail.com",
      password: "123456",
    },
  };

  const [state, formAction] = useFormState(logInUser, null);

  const [credentials, setCredentials] = useState(defaultCredentials.user);
  credentials;

  useEffect(() => {
    if (state && state?.success) {
      toast(state?.message);
      redirect("/");
    }
    if (state && !state?.success) {
      toast(state.message);
    }
  }, [state]);

  const handleUserSwitch = (role: "admin" | "user") => {
    setCredentials(defaultCredentials[role]);
  };

  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <RegisterSubmitButton>Login</RegisterSubmitButton>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="register" className="underline">
            Register
          </Link>
        </div>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => handleUserSwitch("admin")}
            className="mr-2 underline"
          >
            Login as Admin
          </button>
          <button
            type="button"
            onClick={() => handleUserSwitch("user")}
            className="underline"
          >
            Login as User
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

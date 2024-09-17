"use client";

import { serverSignIn } from "@/app/server-actions/signInAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    startTransition(async () => {
      const result = await serverSignIn(email, password);

      if (!result.success) {
        toast({
          title: "Login Error",
          description: result.message,
        });
      } else {
        toast({
          title: "Login Success",
          description: result.message,
        });

        router.push("/profile");
      }

      setLoading(false);
    });
  };

  return (
    <Card className='w-full max-w-sm'>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              name='email'
              type='email'
              id='email'
              placeholder='m@example.com'
              required
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input name='password' id='password' type='password' required />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type='submit'
            className='w-full'
            disabled={loading || isPending}
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

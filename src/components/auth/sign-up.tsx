"use client";

import React from "react";
import { UserPlus, X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { signUp } from "@/actions/sign-up";
import { Loading } from "../ui/loading";
import { toast } from "sonner";
import { SignUpResponse, signUpSchema } from "@/lib/types/sign-up.types";

const SignUpForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    try {
      const response: SignUpResponse | any = await signUp(data);
      console.log(response);

      const user = {
        email: response?.user?.email,
        password: data.password,
      };

      const result = await signIn("credentials", {
        ...user,
        redirect: false,
        callbackUrl: "/",
      });

      if (result?.error) {
        toast.error(result.error, {
          style: {
            backgroundColor: "#c9080f",
            color: "#ffffff",
          },
        });
      }

      if (result?.ok && !result.error) {
        toast.success("Login Success.", {
          style: {
            backgroundColor: "#17c40e",
            color: "#ffffff",
          },
        });
        router.replace(result.url || "/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex relative w-full p-5 rounded-lg flex-col gap-4 border border-slate-500"
      >
        <div
          onClick={() => router.replace("/")}
          className="absolute top-2 right-2 p-1"
        >
          <X className="h-6 w-6 border p-1 border-slate-500 rounded-full" />
        </div>
        <div className="mb-3 flex items-center justify-center gap-2 w-full">
          <UserPlus className="h-10 w-10" />
          <span className="text-lg font-bold">Sign Up</span>
        </div>
        <div className="mb-5">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            type="button"
            variant="outline"
            className="w-full rounded p-2 bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-600"
          >
            <FcGoogle className="mr-3 h-5 w-5 flex items-center" />
            Sign Up with Google
          </Button>
        </div>
        <div className="relative mb-5 flex items-center justify-center">
          <div className="w-full h-[1px] bg-slate-500" />
          <div className="absolute bg-white dark:bg-black p-1 -top-3 left-[50%] right-[50%] rounded-full h-5 w-5 flex items-center justify-center">
            <span>or</span>
          </div>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input
                  className="w-full border border-slate-500 outline-none rounded p-2 focus:border-blue-600"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <input
                  className="w-full border border-slate-500 outline-none rounded p-2 focus:border-blue-600"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-sm flex items-center justify-between">
          <Link
            className="underline text-blue-500 underline-offset-2"
            href="/auth/sign-in"
          >
            Already have an account? Sign in here.
          </Link>
        </div>
        <Button
          type="submit"
          variant={"outline"}
          disabled={isSubmitting}
          className="rounded p-2 bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-600"
        >
          {isSubmitting ? <Loading /> : "Sign Up"}
        </Button>
        <small className="text-sm">
          By signing up, you agree to our{" "}
          <Link
            className="underline text-blue-500 underline-offset-2"
            href={"/"}
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            className="underline text-blue-500 underline-offset-2"
            href={"/"}
          >
            Conditions
          </Link>
        </small>
      </form>
    </Form>
  );
};

export default SignUpForm;

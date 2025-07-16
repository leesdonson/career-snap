"use client";

import { Loading } from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const UserStatus = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  // console.log(session);
  if (status === "loading") {
    <Loading />;
  }

  if (status === "unauthenticated")
    return (
      <div className="">
        <Button
          onClick={() => router.push("/auth/sign-in")}
          className="rounded"
        >
          Sign in
        </Button>
      </div>
    );

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/auth/sign-in",
    });
    toast.success("Signed out successfully.", {
      style: {
        backgroundColor: "#17c40e",
        color: "#ffffff",
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {session?.user?.image ? (
          <div className="relative h-7 w-7">
            <Image
              src={session.user.image}
              alt={session.user.name!}
              fill
              sizes="100%"
              className="rounded-full"
            />
          </div>
        ) : (
          <CircleUserRound className="h-7 w-7" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => router.push(`/users/${session?.user?.id}`)}
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleSignOut}>
          {status === "loading" ? <Loading /> : <span>Sign out</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

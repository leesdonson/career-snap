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
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

export const UserStatus = () => {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "unauthenticated") return redirect("/auth/sign-in");

  if (status === "loading") {
    <Loading />;
  }

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
          <Image
            src={session.user.image}
            alt={session.user.name!}
            className="h-7 w-7 rounded-full"
          />
        ) : (
          <CircleUserRound className="h-7 w-7" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={handleSignOut}>
          {status === "loading" ? <Loading /> : <span>Sign out</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

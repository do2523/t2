"use client"; 

import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "note/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div>Chat</div>
  
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
                  router.refresh();
                }} />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
  }
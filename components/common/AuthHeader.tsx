"use client";
import React, { useMemo } from "react";
import { signInUser, signOutUser } from "@/actions/auth";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";

const AuthHeader = () => {
  const session = useSession();
  
  const is_signedIn = useMemo(() => {
    return session?.data?.user ? true : false;
  }, [session]);

  if(session.status === 'loading') return null;

  return (
    <div>
      {is_signedIn ? (
        <form action={signOutUser}>
          <Button color="danger" type="submit" radius="sm" size="sm">
            Sign Out
          </Button>
        </form>
      ) : (
        <form action={signInUser}>
          <Button color="primary" type="submit" radius="sm" size="sm">
            Sign In
          </Button>
        </form>
      )}
    </div>
  );
};

export default AuthHeader;

import { signInUser, signOutUser } from "@/actions/auth";
import { auth } from "@/auth/auth";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();

  // if (session?.user?.id) {
  //   redirect("/home");
  // }
  return (
    <div className="h-screen">
      <form action={signInUser}>
        <Button color="primary" type="submit">Sign In</Button>
      </form>
      <form action={signOutUser}>
        <Button color="primary" type="submit">Sign Out</Button>
      </form>
      <p>{`${session?.user ? "Signed In" : "Signed Out"}`}</p>
    </div>
  );
};

export default Home;

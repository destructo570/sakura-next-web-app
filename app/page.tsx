import { auth } from "@/auth/auth";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();

  if (session?.user?.id) {
    redirect("/home");
  }
  return (
    <div className="h-screen">
      <Button color="primary">Hello</Button>
    </div>
  );
};

export default Home;

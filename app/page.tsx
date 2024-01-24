import { auth } from "@/auth/auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();

  if (session?.user?.id) {
    redirect("/home");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
};

export default Home;

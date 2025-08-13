"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <div>Home</div>
      <button
        onClick={() => {
          router.push("/auth/login");
        }}
      >
        Login
      </button>
    </>
  );
};

export default Home;

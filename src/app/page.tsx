import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return(
    <main>
      <Header/>
      <div className="p-4">
        <h2 className="text-xl font-semibold">Welcome to our Good Deed Mapping App!</h2>
        <p className="mt-2">Start sharing your good deeds today.</p>
      </div>
    </main>
  );
}

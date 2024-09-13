import Link from "next/link";
import Header from "@/components/Header"


export default function Home() {

  return (
    <main className="flex justify-center items-center flex flex-col items-center h-[calc(100vh-166px)]">
      <Header includeBackground={false}>
        <div className="text-left">
          <h1 className="text-4xl font-bold text-secondary mb-2">DecimDev</h1>
          <h3 className="text-2xl text-tertiary">Software Engineer</h3>
        </div>
      </Header>
    </main>
  );
}
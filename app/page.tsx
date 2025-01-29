import { Header } from "@/app/components/Header";

export default function Home() {
  return (
    <>
      <head>
          <title>Medium Blog</title>
        </head>
      <div className="max-w-7xl mx-auto">
        
        <Header />

        <div  className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
          <div className="px-10 space-y-5">
            <h1 className=" text-6xl max-w-xl font-serif"><span className="underline decoration-black decoration-4">Medium</span> is a place to write, raed and connect</h1>
            <h2>It&apos;s easy and free to post your thinking on any topic or connect with millions of readers.</h2>
          </div>
          <img  className="hidden md:inline-flex h-16 lg:h-60" src='/images/medium-old.svg' alt='medium' />
        </div>
      </div>
    </>
  );
}

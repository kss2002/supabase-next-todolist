import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Hello, Next.js with Supabase!</h1>
      <p>This is a simple starter template.</p>
      <button>
        <Link href="/dashboard">Go to Dashboard</Link>
      </button>

      <div className="h-screen w-full bg-slate-300">
        <h1>테일윈드 맛보기</h1>

        <p className="text-xl text-slate-900 font-bold font-serif">
          안녕하세요
        </p>
        <p className="m-10">margin test</p>
        <p className="bg-black text-white w-fit py-2 px-4">padding test</p>

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="bg-red-700 w-10 h-10 text-center">1</div>
          <div className="bg-red-700 w-10 h-10 text-center">2</div>
          <div className="bg-red-700 w-10 h-10 text-center">3</div>
        </div>

        <div className="m-5 w-28 h-28 bg-white shadow-lg shadow-amber-500  rounded-xl">
          shadow test
        </div>

        <div className="z-10">z-index</div>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <button>
        <Link href="/">Go to Home</Link>
      </button>
    </main>
  );
}

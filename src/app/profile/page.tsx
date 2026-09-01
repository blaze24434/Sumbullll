import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/profile">Profile</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/products">Products</Link>
      </nav>
    </div>
  );
}
import Recipe from "@/components/Recipe";
import Link from "next/link";

export default function Home() {
  const recipeName = "Steak";

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Recipe Manager</h1>
      <p>Manage your recipes!</p>
      <Link href="/taco-salad">Taco Salad</Link>
    </main>
  );
}

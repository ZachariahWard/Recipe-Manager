import Tile from "../components/Tile";

export default function Home() {
  const recipeName = "Steak";

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Recipe Manager</h1>
      <p>Manage your recipes!</p>
      <div className="flex">
        <Tile
          name="Veggie Salad"
          description="This is a description of a recipe that should wrap at some point."
          prepTime={10}
          cookTime={20}
          link="/taco-salad"
        />
        <Tile
          name="Veggie Salad"
          description="This is a description of a recipe that should wrap at some point."
          prepTime={10}
          cookTime={20}
          link="/taco-salad"
        />
        <Tile
          name="Veggie Salad"
          description="This is a description of a recipe that should wrap at some point."
          prepTime={10}
          cookTime={20}
          link="/taco-salad"
        />
        <Tile
          name="Veggie Salad"
          description="This is a description of a recipe that should wrap at some point."
          prepTime={10}
          cookTime={20}
          link="/taco-salad"
        />
        <Tile
          name="Veggie Salad"
          description="This is a description of a recipe that should wrap at some point."
          prepTime={10}
          cookTime={20}
          link="/taco-salad"
        />
      </div>
    </main>
  );
}

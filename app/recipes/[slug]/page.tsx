import Recipe from "@/components/Recipe";
import RecipeProps from "@/components/Recipe";

async function getRecipe(slug: string): Promise<Recipe | undefined> {
  const response = await fetch(`http://localhost:3000/recipes/${slug}.json`);

  if (!response.ok) {
    return undefined;
  }

  return (await response.json()) as Recipe;
}

export default async function Home(props: { params: { slug: string } }) {
  const recipe = await getRecipe(props.params.slug);

  if (!recipe) {
    return <div>404 No Recipe Found</div>;
  }

  return (
    <div>
      <Recipe recipe={recipe} />
    </div>
  );
}

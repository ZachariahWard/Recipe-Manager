import Recipe from "@/components/Recipe";
import { sectionHeaders } from "@/components/Recipe";

export default function Home() {
  const recipeName = "Veggie Salad";

  return (
    <Recipe
      name="Veggie Salad"
      servings={4}
      sections={[
        {
          ingredients: [
            { name: "larry", amount: 3, unit: "tbsp" },
            { name: "peach", amount: 10, unit: "count" },
            { name: "junior", amount: 6, unit: "oz" },
          ],
          header: sectionHeaders.prep,
          order: 1,
          description: "this is a description",
        },
        {
          ingredients: [
            { name: "bob", amount: 2, unit: "cups" },
            {
              name: "This is a really descriptive ingredient",
              amount: 1,
              unit: "",
            },
            {
              name: "This is a really descriptive ingredient with a unit!",
              amount: 10000,
              unit: "Wow such a unit!",
            },
          ],
          header: sectionHeaders.cook,
          order: 2,
          description:
            "this is another description that is much longer than the first one and will wrap to the next line.",
        },
        {
          ingredients: [],
          header: sectionHeaders.serve,
          order: 3,
          description: "eat!",
        },
      ]}
    />
  );
}

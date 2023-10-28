import { FC } from "react";

interface RecipeProps {
  recipe: Recipe;
}

interface Recipe {
  name: string;
  servings: number;
  sections: Array<Section>;
  subRecipeProps: Array<Recipe>;
}

interface Section {
  order: number;
  header: string;
  ingredients: Array<Ingredient>;
  description: string;
}

interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

const Recipe: FC<RecipeProps> = ({
  recipe: { name, servings, sections, subRecipeProps },
}) => {
  return (
    <span>
      <div className="align-left-top border-2 border-solid border-slate-800 m-11 p-5 rounded-md shadow-md bg-indigo-200 bg-opacity-10">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <h3 className="text-xl font-semibold">servings {servings}</h3>
        {sections.map((section) => (
          <div key={section.order}>
            <h3 className="text-xl font-semibold text-white m-2">
              {section.header}
            </h3>
            <div className="m-2 border-solid border-2 grid grid-cols-12 bg-indigo-400 bg-opacity-10 rounded-md">
              {section.ingredients.length > 0 && (
                <div className="md:col-start-1 md:col-end-5 xl:col-end-4 col-span-full">
                  {section.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-6 m-2 items-start"
                    >
                      <span className="font-extrabold ml-auto col-span-1 md:col-span-2 lg:col-span-1">
                        {ingredient.amount}
                      </span>
                      <span className="font-semibold mx-2 col-span-2">
                        {ingredient.unit}
                      </span>
                      <span className="col-span-3 md:col-span-2 xl:col-span-3">
                        {ingredient.name}
                      </span>
                    </li>
                  ))}
                </div>
              )}
              <p className="p-4 md:col-start-6 lg:col-start-5 col-span-full border-solid md:border-l-2 border-t-2 md:border-t-0 pl-2">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {subRecipeProps.map((subRecipe) => (
        <Recipe key={subRecipe.name} recipe={subRecipe} />
      ))}
    </span>
  );
};

export default Recipe;

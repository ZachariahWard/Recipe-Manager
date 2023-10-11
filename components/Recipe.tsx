import { FC } from "react";

export enum sectionHeaders {
  "prep" = "Prep",
  "cook" = "Cook",
  "serve" = "Serve",
  "save" = "Save",
}

interface RecipeProps {
  name: string;
  servings: number;
  sections: Array<{
    order: number;
    header: sectionHeaders;
    ingredients: Array<ingredient>;
    description: string;
  }>;
}

interface ingredient {
  name: string;
  amount: number;
  unit: string;
}

const Recipe: FC<RecipeProps> = ({ name, servings, sections }) => {
  return (
    <div className="flex flex-col align-left-top border-2 border-solid border-slate-800 m-11 p-5 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold">{name}</h2>
      <h3 className="text-xl font-semibold">servings {servings}</h3>
      {sections.map((section) => (
        <div key={section.order}>
          <h3 className="text-xl font-semibold">{section.header}</h3>
          <div className="m-2 p-2 border-solid border-2 grid grid-cols-12">
            <div className="md:col-start-1 md:col-end-4 col-span-full">
              {section.ingredients.map((ingredient) => (
                <li
                  key={"${section.order}-${ingredient.name}"}
                  className="grid grid-cols-6 m-2 items-start"
                >
                  <span className="font-extrabold ml-auto mr-2 col-span-1 md:col-span-2">
                    {ingredient.amount}
                  </span>
                  <span className="font-semibold mr-2 col-span-1 md:col-span-2">
                    {ingredient.unit}
                  </span>
                  <span className="col-span-3 md:col-span-2">
                    {ingredient.name}
                  </span>
                </li>
              ))}
            </div>
            <p className="m-2 p-2 border-2 md:col-start-5 md:col-end-12 col-span-full">
              {section.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipe;

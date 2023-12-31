import { FC } from "react";
import Link from "next/link";

interface TileProps {
  name: string;
  description: string;
  prepTime: number;
  cookTime: number;
  link: string;
}

const Tile: FC<TileProps> = ({
  name,
  description,
  prepTime,
  cookTime,
  link,
}) => {
  return (
    <div className="grid align-left-top border-2 border-solid border-slate-800 m-11 p-5 rounded-md shadow-md bg-indigo-200 bg-opacity-10 max-w-xs max-h-40">
      <h2 className="text-md font-semibold">{name}</h2>
      <h3 className="text-xs font-semibold m-1">
        prep time: {prepTime} cook time: {cookTime}
      </h3>
      <p>{description}</p>
      <Link href={link} className="text-blue-500">
        View Recipe
      </Link>
    </div>
  );
};

export default Tile;

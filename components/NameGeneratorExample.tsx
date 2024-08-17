"use client";
import { useEffect, useState } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
  colors,
} from "unique-names-generator";
import { Button } from "./ui/button";
import { Dices } from "lucide-react";

export default function NameGeneratorExample() {
  const [name, setName] = useState<string>();

  useEffect(() => {
    generateName();
  }, []);

  const generateName = () => {
    const randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      length: 3,
    });
    setName(randomName);
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-10">
      <div>
        <strong>{name}</strong>
      </div>
      <div>
        <Button onClick={generateName}>
          <Dices className="mr-2 h-4 w-4" />
          Generate example
        </Button>
      </div>
    </div>
  );
}

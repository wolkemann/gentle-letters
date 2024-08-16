"use client";
import { useEffect, useState } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
  colors,
} from "unique-names-generator";
import { Button } from "../ui/button";

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
    <div>
      <div>
        <strong>{name}</strong>
      </div>
      <div>
        <Button onClick={generateName}> Try it ! </Button>
      </div>
    </div>
  );
}

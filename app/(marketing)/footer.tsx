import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  const languages = [
    {
      name: "Croatian",
      flagPath: "/hr.svg",
    },
    {
      name: "Spanish",
      flagPath: "/es.svg",
    },
    {
      name: "French",
      flagPath: "/fr.svg",
    },
    {
      name: "Italian",
      flagPath: "/it.svg",
    },
    {
      name: "Japanese",
      flagPath: "/jp.svg",
    },
  ];
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {languages.map((language) => (
          <Button size="lg" variant="ghost" className="w-full">
            <Image
              src={language.flagPath}
              alt={language.name}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />
            {language.name}
          </Button>
        ))}
      </div>
    </footer>
  );
};

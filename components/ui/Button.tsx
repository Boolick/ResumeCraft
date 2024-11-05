import { Fugaz_One } from "next/font/google";
import { ReactNode } from "react";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

interface ButtonProps {
  title: string;
  theme: "light" | "dark";
  children?: ReactNode;
}

export function Button({ title, theme }: ButtonProps): React.JSX.Element {
  return (
    <button
      className={
        " rounded-full overflow-hidden border-2 duration-200 hover:opacity-50 border-solid bg-indigo-600" +
        (theme === "light" ? "text-indigo-600" : "text-white bg-indigo-600")
      }
    >
      <p className={"px-7 sm:px-10 whitespace-nowrap py-2" + fugaz.className}>
        {title}
      </p>
    </button>
  );
}

import Main from "@/components/Main";
import Textarea from "@/components/Textarea";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RB · Crafting",
};

function CraftPage() {
  return (
    <Main className={" bg-slate-800"}>
      <div>Craft yuor resume</div>
      <Textarea />
    </Main>
  );
}

export default CraftPage;

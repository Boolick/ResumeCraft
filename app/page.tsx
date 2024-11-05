import Hero from "@/components/Hero";
import Main from "@/components/Main";


function HomePage() {
  return (
    <Main className="flex flex-1">
      <p className="text-lg">
        Simple resume builder. Craft resume and download it in .docx or .pdf
      </p>
      <Hero />
    </Main>
  );
}

export default HomePage;


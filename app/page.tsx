import Hero from "@/components/Hero";
import Main from "@/components/Main";

function HomePage() {
  return (
    <Main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <p className="text-lg">
        Simple resume builder. Craft resume and download it in .docx or .pdf
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        {`Let's started`}
      </button>
    </Main>
  );
}

export default HomePage;


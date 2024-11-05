import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const Hero = () => {
  const theme = "light";
  return (
    <Link href="/craft-page" passHref>
      <Button title="Let's try" theme={theme} />
    </Link>
  );
};

export default Hero;

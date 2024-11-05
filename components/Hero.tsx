import React from "react";
import { Button } from "./Button";

const Hero = () => {
  const theme = "light";
  return (
      <div>
        <Button title="Let's try" theme={theme} />
      </div>
  );
};

export default Hero;

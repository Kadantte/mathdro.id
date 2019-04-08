import React from "react";
import { css } from "@emotion/core";

import Button from "./button";

const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
const darkIndex = 3;
const lightIndex = 7;

const Toggle = ({ dark, setDark = () => null, phaseTimeout = 50 }) => {
  const [phaseIndex, setPhaseIndex] = React.useState(
    dark ? darkIndex : lightIndex
  );

  const movePhase = phase => {
    const nextPhase = phase === 7 ? 0 : phase + 1;
    setPhaseIndex(nextPhase);
    if (nextPhase === darkIndex || nextPhase === lightIndex) {
      setDark(!dark);
    } else {
      setTimeout(movePhase, phaseTimeout, nextPhase);
    }
  };

  const toggle = () => {
    movePhase(phaseIndex);
  };

  return (
    <>
      <Button
        css={css`
          color: ${dark ? "white" : "black"};
          position: fixed;
          top: 1rem;
          right: 1rem;
          font-weight: 200;
          transition: color 0.5s ease-in-out;
        `}
        onClick={toggle}
      >
        {phases[phaseIndex]}
      </Button>
    </>
  );
};

export default Toggle;

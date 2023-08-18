import React, { FC } from "react";
import LoaderWrapper from "@/core/components/Loader/loader.style";
import { LoaderProps } from "@/types/core/Loader";

const Loader: FC<LoaderProps> = ({ className }) => {
  const addAllClasses: string[] = ["reusecore__loader"];

  if (className) addAllClasses.push(className);

  const generateCircles = () => {
    const circles: JSX.Element[] = [];

    for (let i = 0; i < 3; i++) {
      circles.push(
        <circle fill="#ff00a4" stroke="none" cx={6 + 20 * i} cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin={0.1 * (i + 1)}
          />
        </circle>
      );
    }

    return circles;
  };

  return (
    <LoaderWrapper className={addAllClasses.join(" ")}>
      <svg enableBackground="new 0 0 0 0">{generateCircles()}</svg>
    </LoaderWrapper>
  );
};

export default Loader;

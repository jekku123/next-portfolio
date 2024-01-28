"use client";

import { MaskContainer } from "./mask-container";

export function MaskDemo() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold">
            Vitun hyvä on
          </p>
        }
        className="w-full"
        size={80}
        revealSize={80}
      >
        <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-primary">
          Ihan paska on
        </p>
      </MaskContainer>
    </div>
  );
}

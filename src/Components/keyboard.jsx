/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../assets/styles/colors";

export function Header({ children, name, color }) {
  return (
    <div
      css={css`
        display: grid;
        max-width: 265px;
        max-height: 50px;
        grid-template-columns: 25% 1fr;
        grid-template-rows: 1fr 1fr;
        align-items: center;

        background: ${color};
        color: white;
        font-family: sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
      `}
    >
      {children}
      <br />
      {name}
    </div>
  );
}

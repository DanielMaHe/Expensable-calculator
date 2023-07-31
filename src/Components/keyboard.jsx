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

export const HeaderStyle = {
  iconStyle: `
  grid-column: 1;
  grid-row: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left:12px;

  `,
  titleStyle: `
grid-column: 2;
grid-row: 1;
display: flex;
align-items: center;
width: 104px;
height: 16px;
font-family: sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 16px;
margin: 0;

`,
  nameStyle: `
grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
  width: 104px;
  height: 24px;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;

`,
};

export function Display({ children }) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 254px;
        height: 50px;
        background: ${colors.white};
        font-family: sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: ${colors.gray[600]};
        text-align: center;
        border: 1px solid #ebebeb;
      `}
    >
      {children}
    </div>
  );
}

export function Keyboard({ children }) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        position: center;
        width: 254px;
        height: 203px;
        background: ${colors.gray[200]};
        gap: 1px;
        border: 1px solid #ebebeb;
      `}
    >
      {children}
    </div>
  );
}

export const columnStyle = css`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1px;
`;

export function Calculator({ children }) {
  return (
    <div
      css={css`
        display: grid;

        max-width: 256px;
        margin: 50px auto;
        padding: 23px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      `}
    >
      {children}
    </div>
  );
}

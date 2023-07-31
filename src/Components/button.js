/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../global/colors";
import deleteButton from "../assets/images/deleteButton.svg";
import checkButton from "../assets/images/checkButton.svg";
import equalButton from "../assets/images/equalButton.svg";

const buttonStyles = {
  numbers: `
  background: #FFFFFF;
  color: ${colors.gray[600]};
  border: none;
  
  `,
  operators: `
  background: ${colors.gray[100]};
  color: ${colors.gray[600]};
  border: none;
  
  `,
  equal: `
  width: 50px;
  height: 101px;
  border:none;
  background-image: url(${equalButton});
  background-repeat: no-repeat;
  background-position: center;
  `,
  delete: `
  background: #FFFFFF;
  color: ${colors.gray[600]};
  border: none;
  
  background-image: url(${deleteButton});
  background-repeat: no-repeat;
  background-position: center;
  `,
  check: `
  width: 50px;
  height: 101px;
  border:none;
  background-image: url(${checkButton});
  background-repeat: no-repeat;
  background-position: center;
  `,
};

function Button({ onClick, value, children, type = "numbers", color }) {
  return (
    <button
      value={value}
      onClick={onClick}
      css={css`
        width: 50px;
        height: 50px;
        font-family: sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        border: none;
        background: ${color};
        ${buttonStyles[type]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;

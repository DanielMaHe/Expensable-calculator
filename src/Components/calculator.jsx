/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Button from "./button";
import {
  Calculator,
  Keyboard,
  Header,
  Display,
  columnStyle,
  HeaderStyle,
} from "./keyboard";

function FunctionCalculator({ category }) {
  function actuator(key) {
    const operants = {
      1: () => handleClick(key),
      2: () => handleClick(key),
      3: () => handleClick(key),
      4: () => handleClick(key),
      5: () => handleClick(key),
      6: () => handleClick(key),
      7: () => handleClick(key),
      8: () => handleClick(key),
      9: () => handleClick(key),
      0: () => handleClick(key),
      ".": () => handleClick(key),
      x: () => handleOperant(key),
      "/": () => handleOperant(key),
      "+": () => handleOperant(key),
      "-": () => handleOperant(key),
      d: () => handleDelete(),
      c: () => handleReset(),
      Enter: () => handleEqual(),
      "=": () => handleEqual(),
    };
    operants[key]();
  }
  document.addEventListener("keydown", function (event) {
    actuator(event.key);
  });

  const { name, color, icon } = category;

  const [currentNumber, setCurrentNumber] = React.useState("0");
  const [operant, setOperant] = React.useState(null);
  const [prevNumber, setPrevNumber] = React.useState(null);
  const [result, setResult] = React.useState(false);

  function handleOperant(event) {
    const value = typeof event === "string" ? event : event.target.value;
    setOperant(value);

    if (!operant) {
      setPrevNumber(currentNumber);
      setCurrentNumber("");
    }

    if (prevNumber && operant && currentNumber) {
      let equal = handleEqual();
      setPrevNumber(equal);
      setCurrentNumber("");
      setOperant(value);
    }
  }
  function handleEqual() {
    let equal;

    if (prevNumber && currentNumber) {
      equal = operator({ operant, first: prevNumber, second: currentNumber });
    } else if (currentNumber === "") {
      equal = operator({ operant, first: prevNumber, second: prevNumber });
    } else if (currentNumber && !prevNumber && !result) {
      equal = currentNumber;
    } else if (result) {
      console.log(currentNumber);
      equal = currentNumber;
    }

    setResult(true);
    setPrevNumber(null);
    setCurrentNumber(equal);
    setOperant(null);

    return equal;
  }

  const operator = ({ operant, first, second }) => {
    const operants = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      x: (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    const result = operants[operant](+first, +second);
    return result.toString();
  };

  function handleClick(value) {
    if (value === "." && (currentNumber === "0" || result)) {
      setCurrentNumber("0.");
      setResult(false);
    } else if (result && value !== ".") {
      setCurrentNumber(value);
      setResult(false);
    } else if (!currentNumber) {
      setCurrentNumber(value === "." ? "0." : value);
    } else if (currentNumber === "0" && value === ".") {
      setCurrentNumber("0.");
    } else if (!currentNumber.includes(".") && value === "." && result) {
      setCurrentNumber("0.");
    } else if (!currentNumber.includes(".") && value !== ".") {
      setCurrentNumber(currentNumber === "0" ? value : currentNumber + value);
    } else if (currentNumber.includes(".") && value !== ".") {
      setCurrentNumber(currentNumber + value);
    } else if (currentNumber.includes(".") && value === "." && result) {
      setCurrentNumber(currentNumber + value);
      setResult(false);
    } else if (currentNumber === "0" && value !== "0" && value !== ".") {
      setCurrentNumber(value);
    } else if (currentNumber === "0." && /[1-9]/.test(value)) {
      setCurrentNumber(currentNumber + value);
    } else if (/^\d+$/.test(currentNumber) && value === ".") {
      setCurrentNumber(currentNumber + ".");
    }
  }

  function handleReset() {
    setCurrentNumber("0");
    setPrevNumber(null);
    setOperant(null);
    setResult(false);
  }

  function handleDelete() {
    if (currentNumber) {
      if (currentNumber.length === 1 && !prevNumber && !operant) {
        setCurrentNumber("0");
      } else if (currentNumber.length === 1 && prevNumber && operant) {
        setCurrentNumber(null);
      } else if (currentNumber.length > 1) {
        setCurrentNumber(currentNumber.slice(0, -1));
      }
    } else if (!currentNumber && prevNumber && operant) {
      setCurrentNumber(prevNumber);
      setPrevNumber(null);
      setOperant(null);
    }
  }

  function caller(event) {
    const value = event.target.value;
    actuator(value);
  }

  return (
    <Calculator>
      <Header color={color}>
        <img
          src={icon}
          css={css`
            ${HeaderStyle.iconStyle}
          `}
          alt="Icon"
        />
        <h1
          css={css`
            ${HeaderStyle.titleStyle}
          `}
        >
          {" "}
          Add expenses to
        </h1>
        <h1
          css={css`
            ${HeaderStyle.nameStyle}
          `}
        >
          {name}
        </h1>
      </Header>

      <Display>
        <p>
          ${prevNumber}
          {operant} {currentNumber}
        </p>
      </Display>
      <Keyboard>
        <div css={columnStyle}>
          <Button value="/" onClick={caller} type="operants">
            ÷
          </Button>
          <Button value="x" onClick={caller} type="operants">
            x
          </Button>
          <Button value="-" onClick={caller} type="operants">
            -
          </Button>
          <Button value="+" onClick={caller} type="operants">
            +
          </Button>
        </div>
        <div css={columnStyle}>
          <Button value={1} onClick={caller}>
            1
          </Button>
          <Button value={4} onClick={caller}>
            4
          </Button>
          <Button value={7} onClick={caller}>
            7
          </Button>
          <Button></Button>
        </div>

        <div css={columnStyle}>
          <Button value={2} onClick={caller}>
            2
          </Button>
          <Button value={5} onClick={caller}>
            5
          </Button>
          <Button value={8} onClick={caller}>
            8
          </Button>
          <Button value={0} onClick={caller}>
            0
          </Button>
        </div>
        <div css={columnStyle}>
          <Button value={3} onClick={caller}>
            3
          </Button>
          <Button value={6} onClick={caller}>
            6
          </Button>
          <Button value={9} onClick={caller}>
            9
          </Button>
          <Button value={"."} onClick={caller}>
            .
          </Button>
        </div>
        <div css={columnStyle}>
          <Button value="d" onClick={caller} type="delete"></Button>
          <Button value="c" onClick={caller}>
            c
          </Button>
          <Button
            value="="
            onClick={caller}
            color={color}
            type={!prevNumber ? "check" : "equal"}
          ></Button>
        </div>
      </Keyboard>
    </Calculator>
  );
}

export default FunctionCalculator;

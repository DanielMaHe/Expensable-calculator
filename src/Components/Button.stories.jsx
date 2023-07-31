// button.stories.jsx
import React from "react";
import Button from "./button";

export default {
  title: "Button",
  component: Button,
};

export const DefaultButton = () => <Button>Click!</Button>;
export const OperatorButton = (type) => <Button type="operators">+</Button>;
export const EqualButton = () => <Button type="equal">=</Button>;

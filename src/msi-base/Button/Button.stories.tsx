import React from "react";
import { Button } from "./Button";

export default {
  title: "ButtonComponent",
};

export const ButtonComponent = () => {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
    </>
  );
};
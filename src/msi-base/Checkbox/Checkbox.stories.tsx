import React from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox Component",
};

const props = {
  name: "JohnWick",
};

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "40vw", display: 'flex', flexDirection: 'column', justifyItems: 'flex-start' }}>{children}</div>
);
const renderComponent = () => (
  <ComponentWrapper>
    <Checkbox {...props} />
  </ComponentWrapper>
);

export const CheckboxComponent = () => {
  return (
    <div>
      
        <Checkbox name="checkbox" checked={true} label="John Wick 2"/>
      
    </div>
  );
};

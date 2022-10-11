import React from "react";
import { TextField } from "./TextField";

export default {
  title: "TextField Component",
};

const ComponentWrapper = ({children}: {children: React.ReactNode}) => <div style={{width: '90vw'}}>{children}</div>

export const TextFieldSimple = () => {
  return (
    <div>
      <ComponentWrapper>
        <h4>Component with property label empty (use name when label is not set)</h4>
        <code>{`<TextField name='Simple' />`}</code>
        <TextField name="Simple" />
      </ComponentWrapper>

      <ComponentWrapper>
        <h4>Component with properties name and label </h4>
        <code>{`<TextField name='ComponentName' label='your label goes here' />`}</code>
        <TextField name="h4" label="Your label goes here" />
      </ComponentWrapper>

      <ComponentWrapper>
        <h4>TextField with property error</h4>
        <code>{`<TextField name='Name' label='Username' error='Error message example' />`}</code>
        <TextField name="Error" label="Username" error={"Error message example"} />
      </ComponentWrapper>
    </div>
  );
};
export const TextFieldPassword = () => {
  return (
    <div>
      <ComponentWrapper>
        <h4>Component type password</h4>
        <code>{`<TextField name='password' label='Password' type={'password'} />`}</code>
        <TextField name="password" label="Password" type={'password'} />
      </ComponentWrapper>
    </div>
  );
};

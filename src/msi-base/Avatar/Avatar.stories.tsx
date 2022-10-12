import React from "react";
import { Avatar } from "./Avatar";

export default {
  title: "AvatarComponent",
};

const props = {
  name: "John Wick",
};

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "90vw" }}>{children}</div>
);
const renderComponent = () => (
  <ComponentWrapper>
    <Avatar {...props} />
  </ComponentWrapper>
);

export const AvatarComponent = () => {
  return (
    <div>
      <ComponentWrapper>
        <h4>
          Component with property label empty (use name when label is not set)
        </h4>
        <code>{`<Avatar name='John Wick' />`}</code>
        <Avatar name="John Wick" size={128}/>
      </ComponentWrapper>
      <ComponentWrapper>
        <h4>
          Component with property label empty (use name when label is not set)
        </h4>
        <code>{`<Avatar name='John Doe' img='https://avatars.dicebear.com/api/adventurer-neutral/John%20Wick%202.svg?size=128&scale=81' />`}</code>
        <Avatar name="John Wick" size={128} url='https://avatars.dicebear.com/api/adventurer-neutral/John%20Wick%202.svg?size=128&scale=81' />
      </ComponentWrapper>
      <ComponentWrapper>
        <h4>
          Component with property label empty (use name when label is not set)
        </h4>
        <code>{`<Avatar name='John Wick' img='https://john/wick/3/....' />`}</code>
        <Avatar name="John Wick" size={128} url='https://classic.exame.com/wp-content/uploads/2019/05/john-wick-3-release-date-announced_1eqt.jpg?quality=70&strip=info&w=1024' />
      </ComponentWrapper>
    </div>
  );
};

import "./Avatar.scss";

import { AvatarProps } from "./Avatar.types";

export const Avatar: React.FC<AvatarProps> = ({ name, url, size = 300, outline }) => {
  const split = name.split(" ");
  let initials: string = "";

  if (!url) {
    if (split.length > 1) {
      initials = split[0].charAt(0) + split[split.length - 1].charAt(0);
    } else {
      initials = split[0].charAt(0);
    }
  }

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minHeight: `${size}px`,
        minWidth: `${size}px`,
        outline: `${outline}`,
      }}
      className={'avatar'}
    >
      {!!url && url !== "" ? (
        <img src={url} data-testid='msi-avatar' />
      ) : (
        <span style={{ fontSize: size / 2 }} className={'text'}>
          {initials}
        </span>
      )}
    </div>
  );
}

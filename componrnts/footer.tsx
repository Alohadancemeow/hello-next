import React from "react";

interface Props {
  style?: React.CSSProperties;
}

const Footer = ({ style }: Props) => {
  return (
    <div style={style}>
      <span style={{ paddingLeft: 240 }}>This is a footer</span>
    </div>
  );
};

export default Footer;

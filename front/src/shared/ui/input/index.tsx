import React, { FC } from "react";
import styles from "./Input.module.scss";

interface Props {
  placeholder?: string;
  font_size?: number;
  height?: number;
  width?: number | "full";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}
const Input: FC<Props> = ({
  height = 60,
  font_size = 24,
  width = 400,
  placeholder,
  ...props
}) => {
  const sizes = {
    height: `${height}px`,
    width: width === "full" ? "100%" : `${width}px`,
    fontSize: `${font_size}px`,
  };

  return (
    <input
      {...props}
      placeholder={placeholder}
      style={sizes}
      type="text"
      className={styles.root}
    />
  );
};

export default Input;

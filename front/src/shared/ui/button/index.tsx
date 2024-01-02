"use client";
import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  onClick?: () => void;
  width?: number | "full";
  height?: number;
  color?: string;
  font_size?: number;
  type?: "primary" | "primary_outlined" | "default";
  children?: ReactNode;
}

const Button: FC<Props> = ({
  width = 400,
  height = 75,
  children,
  type = "primary",
  font_size = 24,
  ...props
}) => {
  const sizes = {
    width: width === "full" ? "100%" : `${width}px`,
    height: `${height}px`,
    fontSize: `${font_size}px`,
  };

  const color =
    type === "primary"
      ? styles.primary
      : type === "primary_outlined"
        ? styles.primary_outlined
        : styles.default;

  return (
    <button
      {...props}
      style={{ ...sizes }}
      className={[styles.button, color].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;

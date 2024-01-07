"use client";
import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  width?: number | "full";
  height?: number;
  color?: string;
  font_size?: number;
  variant?: "primary" | "primary_outlined" | "default";
  children?: ReactNode;
  [key: string]: any;
}

const Button: FC<Props> = React.forwardRef(
  (
    {
      width = 400,
      height = 75,
      children,
      variant = "primary",
      font_size = 24,
      type = "button",
      ...props
    },
    ref: React.LegacyRef<HTMLButtonElement> | undefined,
  ) => {
    const sizes = {
      width: width === "full" ? "100%" : `${width}px`,
      height: `${height}px`,
      fontSize: `${font_size}px`,
    };

    const color =
      variant === "primary"
        ? styles.primary
        : variant === "primary_outlined"
          ? styles.primary_outlined
          : styles.default;

    return (
      <button
        ref={ref}
        type={type}
        {...props}
        style={{ ...sizes }}
        className={[styles.button, color].join(" ")}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
export default Button;

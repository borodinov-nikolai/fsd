import React, { FC } from "react";
import styles from "./Input.module.scss";


interface Props {
  onChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void,
  type?: React.HTMLInputTypeAttribute
  placeholder?: string;
  font_size?: number;
  height?: number;
  width?: number | "full";
  defaultValue?: string;
  [key:string]:any
}
const Input: FC<Props> = React.forwardRef(({
  height = 60,
  font_size = 24,
  width = 400,
  placeholder,
  type ='text',
  ...props
}, ref:React.LegacyRef<HTMLInputElement>| undefined) => {
  const sizes = {
    height: `${height}px`,
    width: width === "full" ? "100%" : `${width}px`,
    fontSize: `${font_size}px`,
  };

  return (
    <input
    ref={ref}
    type={type}
    placeholder={placeholder}
    style={sizes}
    className={styles.root}
    {...props}    
    />
  );
})

Input.displayName = 'Input';
export default Input;

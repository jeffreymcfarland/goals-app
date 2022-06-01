import React from "react";
import classNames from "classnames";

const BUTTON_APPEARANCE = {
  primary: "text-white bg-slate-500 hover:bg-slate-600",
  subtle: "text-slate-500 bg-white hover:bg-slate-100",
};

const Button = ({
  appearance,
  children,
  className,
  element,
  type,
  ...rest
}) => {
  const Element = element;

  const buttonClasses = classNames(
    "px-4 py-2 rounded-md w-fit",
    `${BUTTON_APPEARANCE[appearance]}`,
    className
  );

  return (
    <Element className={buttonClasses} type={type} {...rest}>
      {children}
    </Element>
  );
};

Button.defaultProps = {
  element: "button",
  appearance: "primary",
};

export default Button;

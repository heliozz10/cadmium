import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[28px]",
};
const variants = {
  fill: {
    gray_900_01: "bg-gray-900_01 text-gray-100",
    gray_100: "bg-gray-100",
  },
};
const sizes = {
  sm: "h-[70px] px-[34px] text-[24px]",
  xs: "h-[58px] px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "gray_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_900_01", "gray_100"]),
};

export { Button };

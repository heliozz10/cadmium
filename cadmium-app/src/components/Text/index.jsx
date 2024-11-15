import React from "react";

const sizes = {
  textxs: "text-[14px] font-normal not-italic",
  texts: "text-[20px] font-normal",
  textmd: "text-[22px] font-normal",
  textlg: "text-[24px] font-normal not-italic md:text-[22px]",
  textxl: "text-[26px] font-normal not-italic md:text-[24px] sm:text-[22px]",
};

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-spacegrotesk ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

import React from "react";

const sizes = {
  texts: "text-[30px] font-medium md:text-[28px] sm:text-[26px]",
  textmd: "text-[40px] font-medium md:text-[38px] sm:text-[36px]",
  textlg: "text-[60px] font-medium md:text-[52px] sm:text-[46px]",
  text2xl: "text-[30px] font-medium md:text-[28px] sm:text-[26px]",
  text3xl: "text-[32px] font-medium md:text-[30px] sm:text-[28px]",
  text4xl: "text-[60px] font-medium md:text-[52px] sm:text-[46px]",
};

const Heading = ({ children, className = "", size = "text3xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-spacegrotesk ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

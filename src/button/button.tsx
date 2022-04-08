/*
 * Example button component.
 * This component renders button based on variant type
 */

import React, {useState, useEffect} from "react";
import "./button.scss";

enum Varient {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Default = "default"
}

type VarientTypes = "primary" | "secondary" | "success" | "default";

const AwesomeButton = (props: {
  variant?: VarientTypes;
  children: React.ReactNode;
}) => {
  const {variant, children} = props;
  const [bgColor, setBgColor] = useState(Varient.Default);

  useEffect(() => {
    if (variant) {
      if (variant === Varient.Primary) {
        setBgColor(Varient.Primary);
      } else if (variant === Varient.Secondary) {
        setBgColor(Varient.Secondary);
      } else if (variant === Varient.Success) {
        setBgColor(Varient.Success);
      } else {
        setBgColor(Varient.Default);
      }
    }
  }, [variant]);

  return <button className={`buttonComponent ${bgColor}`}>{children}</button>;
};

export default AwesomeButton;

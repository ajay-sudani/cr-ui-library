import React from "react";
import "./button.scss";
declare type VarientTypes = "primary" | "secondary" | "success" | "default";
declare const AwesomeButton: (props: {
    variant?: VarientTypes;
    children: React.ReactNode;
}) => JSX.Element;
export default AwesomeButton;

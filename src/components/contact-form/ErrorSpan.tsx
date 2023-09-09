import React from "react";
type Props = {
  text: string;
}
const ErrorSpan:React.FC<Props> = ({ text }) => {
  return (
    <span className="text-sm text-warning min-h-1 overflow-hidden">{text}</span>
  );
};

export default ErrorSpan;
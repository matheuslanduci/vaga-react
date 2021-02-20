import { InputHTMLAttributes, SVGProps } from "react";

import "./styles.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: SVGProps<SVGSVGElement>;
}

export default function Input({ className, icon, ...props }: Props) {
  return (
    <div className={`input-wrapper ${className}`}>
      {icon}
      <input className="input" {...props} />
    </div>
  );
}

import React from "react";
import"../../_dist/KsdCompTextarea.css";
interface TextareaDocProps
  extends React.AllHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
}

const KsdCompTextarea = React.forwardRef<HTMLTextAreaElement, TextareaDocProps>(
  (props, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={`textarea-input ${props.className ? props.className : ""}`}
      >
        {props.children}
      </textarea>
    );
  }
);
KsdCompTextarea.displayName = "KsdCompTextarea";
export default KsdCompTextarea;

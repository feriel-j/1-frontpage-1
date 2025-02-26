import { HTMLAttributes } from "react";
import "../../_dist/KsdCompDivider.css";

/**
 * Props for EsdCompDivider component.
 */
interface KsdCompDividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Determines the shape of the divider.
   * Can be "vertical" or "horizontal".
   */
  
  line: "vertical" | "horizontal";
}

/**
 * A component that renders a horizontal or vertical divider line.
 */
const KsdCompDivider = ({ line, ...props }: KsdCompDividerProps) => {
  return (
    <>
      {line === "vertical" ? (
        // Render a vertical divider
        <div
          {...props}
          className={`separation-vertical-line${
            props.className === undefined ? "" : ` ${props.className}`
          }`}
        ></div>
      ) : (
        // Render a horizontal divider
        <div
          {...props}
          className={`separation-horizontal-line${
            props.className === undefined ? "" : ` ${props.className}`
          }`}
        ></div>
      )}
    </>
  );
};

export default KsdCompDivider;

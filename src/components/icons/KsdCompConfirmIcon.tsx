import React, { SVGProps } from "react";
import "../../_dist/KsdCompConfirmIcon.css";
interface NewDocIconProps extends SVGProps<SVGSVGElement> {
  id?: string;
  //Custom all properties
}
const KsdCompConfirmIcon = ({ ...props }: NewDocIconProps) => {
  return (
    <svg
      {...props}
      className={
        props.className ? `icon-confirm ${props.className}` : "icon-confirm"
      }
      width="1em"
      height="1em"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.7001 8.34329H14.6467C14.4176 8.34329 14.1997 8.45335 14.065 8.64202L10.5341 13.5385L8.93489 11.3194C8.80013 11.1329 8.5845 11.0206 8.35316 11.0206H7.29974C7.15374 11.0206 7.06839 11.1868 7.15374 11.3059L9.95238 15.1871C10.0185 15.2794 10.1056 15.3546 10.2066 15.4065C10.3076 15.4583 10.4195 15.4854 10.533 15.4854C10.6465 15.4854 10.7584 15.4583 10.8594 15.4065C10.9603 15.3546 11.0475 15.2794 11.1136 15.1871L15.8439 8.62855C15.9315 8.5095 15.8461 8.34329 15.7001 8.34329Z"
        fill="currentColor"
      />
      <path
        d="M11.5 1.85278C5.94316 1.85278 1.4375 6.35845 1.4375 11.9153C1.4375 17.4721 5.94316 21.9778 11.5 21.9778C17.0568 21.9778 21.5625 17.4721 21.5625 11.9153C21.5625 6.35845 17.0568 1.85278 11.5 1.85278ZM11.5 20.2708C6.88652 20.2708 3.14453 16.5288 3.14453 11.9153C3.14453 7.30181 6.88652 3.55981 11.5 3.55981C16.1135 3.55981 19.8555 7.30181 19.8555 11.9153C19.8555 16.5288 16.1135 20.2708 11.5 20.2708Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KsdCompConfirmIcon;

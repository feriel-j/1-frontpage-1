import React, { SVGProps } from "react";
import "../../_dist/KsdCompLanguageIcon.css";
interface NewDocIconProps extends SVGProps<SVGSVGElement> {id?:string}

const KsdCompLanguageIcon = ({ ...props }: NewDocIconProps) => {
  
  return (
    <svg
      {...props}
      onClick={props.onClick}
      id={props.id}
      className={
        props.className ? `icon-language ${props.className}` : "icon-language"
      }
      width="1em"
      height="1em"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_8488_76481)">
        <path
          d="M10.1525 11.3032L8.2475 9.42073L8.27 
          9.39823C9.575 7.94323 10.505 6.27073 
          11.0525 4.50073L13.25 4.50073L13.25 
          3.00073L8 3.00073L8 1.50073L6.5 1.50073L6.5
           3.00073L1.25 3.00073L1.25 4.49323L9.6275
            4.49323C9.125 5.94073 8.33 7.31323 7.25
           8.51323C6.5525 7.74073 5.975 6.89323
            5.5175 6.00073L4.0175 6.00073C4.565 7.22323 
           5.315 8.37823 6.2525 9.42073L2.435 
           13.1857L3.5 14.2507L7.25 10.5007L9.5825 12.8332L10.1525 
           11.3032ZM14.375 7.50073L12.875 7.50073L9.5 
           16.5007L11 16.5007L11.84 14.2507L15.4025 14.2507L16.25
            16.5007L17.75 16.5007L14.375 7.50073ZM12.41 
            12.7507L13.625 9.50323L14.84 12.7507L12.41 12.7507Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_8488_76481">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default KsdCompLanguageIcon;

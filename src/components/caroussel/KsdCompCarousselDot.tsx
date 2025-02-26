import "../../_dist/KsdCompCarousselDot.css";

/* Props for the EsdCompCarousselDot component.*/
interface carousselDotProps {
  id?:string;
  isActive: boolean;
  onClick: () => void;
}

const KsdCompCarousselDot: React.FC<carousselDotProps> = ({
  ...props
}: carousselDotProps) => {
  
  return (
    <span {...props}
      className={`dot-carousel ${props.isActive ? "active-dot" : ""}`}
      onClick={props.onClick}></span>
  );
};
export default KsdCompCarousselDot;

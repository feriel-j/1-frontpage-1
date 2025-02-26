import "../../_dist/KsdCompCarousselSlide.css";

interface CarousselSlideProps {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const KsdCompCarousselSlide: React.FC<CarousselSlideProps> = ({
  ...props
}: CarousselSlideProps) => {
 
  return (
    <div
      className={`slide-carousel ${props.isActive ? "active-slide" : ""}`}
      onClick={props.onClick}>
      {props.children}
    </div>
  );
};
export default KsdCompCarousselSlide;

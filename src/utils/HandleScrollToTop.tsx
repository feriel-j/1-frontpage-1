import { useContext } from "react";
import { refContext } from "../domains/kwkFP/layouts/MainLayout";

export function useScrollToTop() {
  const myTopRef = useContext(refContext);

  const scrollToTop = () => {
    if (myTopRef && myTopRef.current) {
      myTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return scrollToTop;
}

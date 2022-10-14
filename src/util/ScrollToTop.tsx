import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface props {
  children: any;
}

const ScrollToTop: React.FC<props> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default ScrollToTop;

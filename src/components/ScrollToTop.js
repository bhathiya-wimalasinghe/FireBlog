import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*This component automatically scrolls the window to the top whenever a new route is navigated to.
 This ensures that new pages consistently open at the top of the page.*/

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

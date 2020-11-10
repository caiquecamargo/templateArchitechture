import AnimateHeader from "./modules/animateHeader"
import AnimateNavigation from "./modules/animateNavigation"

window.onload = () => {
  const animateHeader = new AnimateHeader();
  animateHeader.init();

  const animateNavigation = new AnimateNavigation();
  animateNavigation.init();
}
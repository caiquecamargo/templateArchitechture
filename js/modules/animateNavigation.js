export default class AnimateNavigation {
  constructor() {
    this.navigation = document.querySelector("[data-navigation]");
    this.main = document.querySelector("[data-main]");
    this.showNavigation = this.showNavigation.bind(this);
  }

  showNavigation() {
    const navigationTop = this.navigation.getClientRects()[0].top;
    const mainTop = this.main.getClientRects()[0].top;
    const opacityValue = ((navigationTop - mainTop) / navigationTop);
    this.navigation.style.opacity = opacityValue;
  }

  init() {
    this.navigation.style.opacity = 0;
    window.addEventListener("scroll", this.showNavigation);
  }
}
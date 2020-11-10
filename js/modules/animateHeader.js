export default class AnimateHeader {
  constructor() {
    this.header = document.querySelector("[data-header]");
    this.main = document.querySelector("[data-main]");
    this.changeOpacity = this.changeOpacity.bind(this);
  }

  changeOpacity() {
    const windowPos = window.scrollY;
    const opacityValue = 1 - (windowPos / 1000);
    this.header.style.opacity = opacityValue;
  }

  init() {
    this.header.classList.add("fixed");
    this.main.style.marginTop = this.header.offsetHeight + 50 + "px";
    window.addEventListener("scroll", this.changeOpacity);
  }
}
// @flow

export function scrollToSection(id: string) {
  document.getElementById(id).scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

function isElementPartiallyInViewport(el) {
  let rect = el.getBoundingClientRect();
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;

  let vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  let horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
}

function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  let windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.left >= 0 &&
    rect.top >= 0 &&
    rect.left + rect.width <= windowWidth &&
    rect.top + rect.height <= windowHeight
  );
}

export function isVisible(id) {
  let ele = document.getElementById(id);
  let inVpFull = isElementInViewport(ele);
  let inVpPartial = isElementPartiallyInViewport(ele);
  return inVpFull || inVpPartial;
}

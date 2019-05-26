'use strict';
const component = (text, tag='div') => {
  const element = document.createElement(tag);
  element.innerHTML = text;

  return element;
};

document.body.appendChild(component('Hello'));

module.exports = component;
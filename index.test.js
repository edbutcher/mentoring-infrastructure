'use strict';
const component = require('./index');

describe('Component function create DOM element with text', () => {
  it('return default dom element with text `test`', () => {
    const wrapper = component('test');
  
    expect(wrapper.textContent).toEqual('test');
  });
  
  it('return `div` element with text', () => {
    const wrapper = component('test');
  
    expect(wrapper.tagName).toEqual('DIV');
  });
  
  it('return `h1` element with text', () => {
    const wrapper = component('test', 'h1');
  
    expect(wrapper.tagName).toEqual('H1');
  });
});

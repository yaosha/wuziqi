import _ from 'lodash';
import svg from './svg.svg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'world'], ' ');
  element.classList.add('container');

  const myIcon = new Image();
  myIcon.src = svg;
  element.appendChild(myIcon);



  return element;

}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

document.body.appendChild(component());
if (module.hot) {
  module.hot.accept('*', function () {
    console.log('Accepting the updated module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  });
}
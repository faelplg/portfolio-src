// import _ from 'lodash';
// import printMe from './print'
// function component() {
//   element.innerHTML = _.join(['We', 'are', 'huge!'], ' ');
//   element.classList.add('hello');
//   printMe();
//   return element;
// }
// const __wrapper = document.querySelector('.wrapper');
// __wrapper.appendChild(component());
// console.log('From index.js', __wrapper);
import readme from './README.md';
import './style.css';
import profileImg from './theme/assets/profile_pic_thumb.jpg';
import coverImg from './theme/assets/cover_img_01.jpg';

const diamondButtons = document.querySelectorAll('button.new-diamond');
diamondButtons.forEach(button => {
  button.addEventListener("click", function(){
    switch (this.childNodes[1].childNodes[3].id) {
      case 'github-icon':
        window.open(`https://github.com/faelplg`,'_blank');
        break;
      case 'medium-icon':
        window.open(`https://medium.com/@faelplg`,'_blank');
        break;
      case 'codepen-icon':
        window.open(`https://codepen.io/faelplg/`,'_blank');
        break;
      case 'stackblitz-icon':
        window.open(`https://stackblitz.com/@faelplg`,'_blank');
        break;
      default:

    }
  }, false);
});

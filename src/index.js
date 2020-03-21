import _ from 'lodash';
import './style.css';
import Logo from './logo.svg';


function component() {
    var element = document.createElement('div');

    // lodash，现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们已经存在的 div 中。
    var mylogo = new Image();
    mylogo.src = Logo;

    element.appendChild(mylogo);

    return element;
}

document.body.appendChild(component());
function onReady() {
  const numb = document.getElementsByClassName('numb');
  const one = document.getElementById('1');
  const two = document.getElementById('2');
  const three = document.getElementById('3');
  const four = document.getElementById('4');
  const five = document.getElementById('5');
  const six = document.getElementById('6');
  const seven = document.getElementById('7');
  const eight = document.getElementById('8');
  const nine = document.getElementById('9');
  const zero = document.getElementById('0');
  const decimal = document.getElementById('dec');
  const add = document.getElementById('plus');
  const subtract = document.getElementById('minus');
  const multiply = document.getElementById('times');
  const divide = document.getElementById('divide');
  const expo = document.getElementById('expo');
  const root = document.getElementById('root');
  const equals = document.getElementById('equal');
  const results = document.getElementById('results');
  var num;
  var num2;
  var num3;
  var oper;
  results.textContent = '0';

  function setNumbers(n) {
    if(num === undefined && oper === undefined) {
      num = n;
    } else if(oper === undefined) {
      if(num.includes('.') && n === '.') {
        num = num;
      } else {
        num = num + n;
      }
    } else if(num2 === undefined) {
      num = parseFloat(num);
      num2 = n;
    } else if(num2.includes('.') && n === '.') {
      num2 = num2;
    } else {
      num2 = num2 + n;
    }
    if(oper === undefined) {
      results.textContent = num;
    } else {
      results.textContent = num2;
    }
  }

  function equate() {
    if(num2 !== undefined) {
      num2 = parseFloat(num2);
    }
    if(oper === '+') {
      if(num2 !== undefined) {
        results.textContent = num + num2;
        num3 = num2;
        num = num + num2;
        num2 = undefined;
      } else if (num3 !== undefined){
        results.textContent = num + num3;
        num = num + num3;
        num2 = undefined;
      } else {
        return;
      }
    } else if(oper === '-') {
      if(num2 !== undefined) {
        results.textContent = num - num2;
        num3 = num2;
        num = num - num2;
        num2 = undefined;
      } else if (num3 !== undefined){
        results.textContent = num - num3;
        num = num - num3;
        num2 = undefined;
      } else {
        return;
      }
    } else if(oper === '*') {
      if(num2 !== undefined) {
        results.textContent = num * num2;
        num3 = num2;
        num = num * num2;
        num2 = undefined;
      } else if (num3 !== undefined){
        results.textContent = num * num3;
        num = num * num3;
        num2 = undefined;
      } else {
        return;
      }
    } else if(oper === '/') {
      if(num2 !== undefined) {
        results.textContent = num / num2;
        num3 = num2;
        num = num / num2;
        num2 = undefined;
      } else if (num3 !== undefined){
        results.textContent = num / num3;
        num = num / num3;
        num2 = undefined;
      } else {
        return;
      }
    } else if(oper === '^') {
      if(num2 !== undefined) {
        results.textContent = Math.pow(num, num2);
        num3 = num2;
        num = Math.pow(num, num2);
        num2 = undefined;
      } else if (num3 !== undefined){
        results.textContent = Math.pow(num, num3);
        num = Math.pow(num, num3);
        num2 = undefined;
      } else {
        return;
      }
    }
  }

  one.addEventListener('click', event => {
    setNumbers('1');
  });

  two.addEventListener('click', event => {
    setNumbers('2');
  });

  three.addEventListener('click', event => {
    setNumbers('3');
  });

  four.addEventListener('click', event => {
    setNumbers('4');
  });

  five.addEventListener('click', event => {
    setNumbers('5');
  });

  six.addEventListener('click', event => {
    setNumbers('6');
  });

  seven.addEventListener('click', event => {
    setNumbers('7');
  });

  eight.addEventListener('click', event => {
    setNumbers('8');
  });

  nine.addEventListener('click', event => {
    setNumbers('9');
  });

  zero.addEventListener('click', event => {
    setNumbers('0');
  });

  dec.addEventListener('click', event => {
    setNumbers('.');
  });

  add.addEventListener('click', event => {
    oper = '+';
    if(typeof num2 === 'string') {
      equate();
      oper = '+';
    }
  });

  subtract.addEventListener('click', event => {
      oper = '-';
      if(typeof num2 === 'string') {
        equate();
        oper = '-';
      }
  });

  multiply.addEventListener('click', event => {
      oper = '*';
      if(typeof num2 === 'string') {
        equate();
        oper = '*';
      }
  });

  divide.addEventListener('click', event => {
      oper = '/';
      if(typeof num2 === 'string') {
        equate();
        oper = '/';
      }
  });

  expo.addEventListener('click', event => {
      oper = '^';
      if(typeof num2 === 'string') {
        equate();
        oper = '^';
      }
  });

  root.addEventListener('click', event => {
      num3 = undefined;
      equate();
      oper = undefined;
      results.textContent = Math.sqrt(num);
      num = Math.sqrt(num);
  });

  equals.addEventListener('click', event => {
    equate();
  });

  clear.addEventListener('click', event => {
    num = undefined;
    num2 = undefined;
    oper = undefined;
    results.textContent = '0';
  });
}

window.onload = function() {
  onReady();
};

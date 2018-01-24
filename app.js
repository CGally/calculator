function onReady() {
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

  for(var btnNum = 0; btnNum < 16; btnNum++) {
    (function(btnNum) {
      const number = document.getElementById(String(btnNum));
      number.addEventListener('click', event => {
        if(btnNum < 10) {
          setNumbers(String(btnNum));
        } else if(btnNum === 10){
          setNumbers('.');
        } else if(btnNum === 11) {
          oper = '+';
          if(typeof num2 === 'string') {
            equate();
            oper = '+';
          }
        } else if(btnNum === 12) {
          oper = '-';
          if(typeof num2 === 'string') {
            equate();
            oper = '-';
          }
        } else if(btnNum === 13) {
          oper = '*';
          if(typeof num2 === 'string') {
            equate();
            oper = '*';
          }
        } else if(btnNum === 14) {
          oper = '/';
          if(typeof num2 === 'string') {
            equate();
            oper = '/';
          }
        } else {
          oper = '^';
          if(typeof num2 === 'string') {
            equate();
            oper = '^';
          }
        }
      });
    })(btnNum);
  };

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

// function Sum(a,b) {
//     alert('Hello!');
//     return a+b;
// }

// var res = Sum(2,3);

// document.write(res);

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }

 var res = pow(2,3);

 document.write(res);

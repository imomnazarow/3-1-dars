// let matem = {
//   floor: (num) => {
//     if (num > 0) {
//       return num - (num % 1);
//     } else {
//       return num - (num % 1) - 1;
//     }
//   },

//   ceil: (num) => {
//     if (num > 0) {
//       return num - (num % 1) + 1;
//     } else {
//       return num - (num % 1);
//     }
//   },

//   round: (num) => {
//     if (num > 0 && num % 1 >= 0.5) {
//       return num - (num % 1) + 1;
//     } else if (num > 0 && num % 1 < 0.5) {
//       return num - (num % 1);
//     } else if (num < 0 && num % 1 <= -0.5) {
//       return num - (num % 1) - 1;
//     } else if (num < 0 && num % 1 > -0.5) {
//       return num - (num % 1) + 1;
//     }
//   },
// };

// // let pastga = matem.floor(12.9);
// // console.log(pastga);

// // let tepaga = matem.ceil(12.1);
// // console.log(tepaga);

// let standart = matem.round(-12.5);
// console.log(standart);
// console.log(Math.round(-12.5));

//
//
//
// =================================================================================
//
//                                   DOM
//
// ================================================================================
//
//
//

// let titleE1 = document.getElementsByTagName("h1");

// console.log(typeof titleE1.textContent);

// titleE1.textContent = "DOM";

// =======

const titleE2 = document.getElementById("title2");

window.plus = function () {
  //code
  titleE2.textContent = Number(titleE2.textContent) + 1;
};

window.minus = function () {
  //code
  if (titleE2.textContent > 0)
    titleE2.textContent = Number(titleE2.textContent) - 1;
};

window.reset = function () {
  //code
  titleE2.textContent = 0;
};

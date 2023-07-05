'use strict';

//Default data
// const bookings = [];

// const suplayCounter = function (
//   flyghtName,
//   passangers = 1,
//   price = 199 * passangers
// ) {
//   const booking = {
//     flyghtName,
//     passangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// suplayCounter('LK123', 2);
// suplayCounter('LK123', 8);
// suplayCounter('LK123', undefined, 896);

// console.log(bookings);

//How strings and objecks change while we are working with them

// const flightRace = 'lh340';
// const andy = {
//   name: 'andy bush',
//   passport: 43234235907,
// };

// const checkData = function (flight, passanger) {
//   flight = 'lh4234';
//   passanger.name = 'mr. ' + passanger.name;
//   // if (passanger.passport === 43234235907) {
//   //   alert('Check In');
//   // } else alert('Wrong Passport');
// };

// checkData(flightRace, andy);
// console.log(flightRace, andy);

// const random = function (pasPasp) {
//   pasPasp.passport = Math.trunc(Math.random() * 10000000);
// };

// random(andy);
// checkData(flightRace, andy);

//Hight order functions

// const oneName = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirst = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// upperFirst('onas like to learn and teach');

// const transformer = function (str, fn) {
//   console.log(`Original: ${str}`);
//   console.log(`Onename: ${fn(str)}`);
//   console.log(`upper: ${fn(str)}`);
//   console.log(`${fn.name}`);
// };

// transformer('Jonas like to learn and teach', upperFirst);
// transformer('Jonas like to learn and teach', oneName);

//Functions returning

// const greeting = function (gret) {
//   return function (name) {
//     console.log(`${gret} ${name}`);
//   };
// };

// const gret1 = greeting('Hello');
// gret1('Andyy');

// greeting('Hi')('Andy');

// const gretArr = great => name => console.log(`${great} ${name}`);

// gretArr('Whats up with')('Andy');

//Call and apply method

// const uzAir = {
//   airport: 'Uzhorod airport',
//   iCode: 'UZ',
//   bookings: [],
//   booking(flight, name) {
//     console.log(
//       `${name} booked a sit on ${this.airport} to flight ${this.iCode}${flight}`
//     );
//     this.bookings.push(`${name} and ${flight}`);
//   },
// };

// uzAir.booking(324, 'Andy Bush');
// uzAir.booking(543, 'Luna Brown');
// console.log(uzAir.bookings);

// const lvivAir = {
//   airport: 'Lviv air',
//   iCode: 'LV',
//   bookings: [],
// };

// const bookingFunc = uzAir.booking;

// bookingFunc.call(lvivAir, 765, 'Rodjer Federer');
// console.log(lvivAir.bookings);

// const kievAir = {
//   airport: 'Kiev Air',
//   iCode: 'KV',
//   bookings: [],
// };

// const dataN = [909, 'Rafa Nadal'];

// bookingFunc.call(kievAir, ...dataN);
// console.log(kievAir.bookings);

// //bind method

// const bookUZ = bookingFunc.bind(uzAir);
// const bookLV = bookingFunc.bind(lvivAir);
// const bookKV = bookingFunc.bind(kievAir);

// bookUZ(23, 'cristianooooo');
// bookKV(77, 'gereiro');
// bookLV(10, 'fernades');

// //with event listener

// uzAir.planes = 300;
// uzAir.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', uzAir.buyPlane.bind(uzAir));

// //bind in functions

// const texValue = function (tex, value) {
//   return value + value * tex;
// };

// console.log(texValue(0.1, 100));

// const onlyTex = texValue.bind(null, 0.2);
// console.log(onlyTex(200));
// console.log(onlyTex(300));

// const onlyTexFun = function (tax) {
//   return function (value) {
//     return value + value * tax;
//   };
// };

// const onlyTex2 = onlyTexFun(0.2);
// console.log(onlyTex2(200));
// console.log(onlyTex2(300));

// //chalenge 1

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n
//         (Write option number)`
//       )
//     );
//     if (typeof answer === 'number' && answer < poll.answers.length) {
//       poll.answers[answer] = poll.answers[answer] + 1;
//       // console.log(answer);
//     } else console.log('Wrong input');
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// [(5, 2, 3)]
// [1, 5, 3, 9, 6, 1]

//immidiatly coalt function
(function () {
  console.log(`never called again`);
  const secretData = 17;
})();
//its all for hiding data and if we need to call funk only onece

//modern way to hide data
{
  const secretData = 23;
  const superSecrete = 92;
}
// console.log(superSecrete);
// console.log(secretData);

//how closure work
const pasSecurity = function () {
  let pasCounter = 0;
  return function () {
    pasCounter++;
    console.log(pasCounter);
  };
};

const booking = pasSecurity();
booking(); //1
booking(); //2
booking(); //3
//its worck this way because closure give acses booking to pasSec, because clothers give acses to veriable of function in which they were born

//example 1

let h;

const f = function () {
  const a = 23;
  h = function () {
    console.log(a * 2);
  };
};
f();
h();

const y = function () {
  const b = 777;
  h = function () {
    console.log(b * 2);
  };
};
y();
h();
console.dir(h);

//example 2
const passBoard = function (number, wait) {
  const perGrup = number / 3;

  setTimeout(function () {
    console.log(`We are bording all ${number} passangers`);
    console.log(`There are three group each with ${perGrup} passangers`);
  }, wait * 1000);

  console.log(`All will be boarded in ${wait} secconds`);
};

const perGrup = 100;
passBoard(21, 3);

//chalenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

//its working because function is created in another function and have acses to the data of this function (was born here) and can use this data and its all worked because of closures

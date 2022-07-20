// const square = function (x) {
//   return x * x;
// };

// const sq = (x) => {
//   return x * x;
// };

// const sqr = (x) => x * x;

// console.log(square(3), sq(4), sqr(5));
const event = {
  name: "Running Man",
  guestList: [
    "Akshy",
    "Kang Gary",
    "Yu Jae Suk",
    "Kim Jung Kook",
    "Ha Dong Haan",
    "Lee Kwang Soo",
    "Sung Ji Hyo",
    "Jee Suk Jin",
    "Jeon So min",
    "Yang Se Chan",
  ],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};
event.printGuestList();

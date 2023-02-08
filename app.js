
// //set initial count
// let count = 0 ;

// //select value and buttons
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn"); 

// console.log(btns)

//////////////////////////////code//////////////////////////////////////

// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const borderLine = document.querySelector('.content');

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
      borderLine.style.border = '2px solid green';
    }
    if (count < 0) {
      value.style.color = "red";
      borderLine.style.border = '2px solid red';

    }
    if (count === 0) {
      value.style.color = "#222";
      borderLine.style.border = '1px solid black';

    }
    value.textContent = count;
  });
});

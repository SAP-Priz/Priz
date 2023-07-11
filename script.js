"use strict";

const transactionDetail = document.querySelectorAll(
  ".transaction-detail-modal"
);
const modalBtn = document.querySelector(".transaction-detail-modal-btnClose");
console.log(transactionDetail);
for (let i = 0; i < transactionDetail.length; i++) {
  transactionDetail[i].addEventListener("click", function () {
    // transactionDetail[i].classList.remove(".hidden");
    console.log(transactionDetail[i]);
  });
}
modalBtn.addEventListener("click", function () {
  console.log("clicked");
  alert("CLicked");
});

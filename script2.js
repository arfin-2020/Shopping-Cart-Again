// //Plus Button Handler of phone      ১ম ধাপ
// document.getElementById("phone-increase").addEventListener("click", function() {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneInputNumber = parseInt(phoneInput.value);
//     const phoneNewCount = phoneInputNumber + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// });

// //Minus Button Handler phone    ২য় ধাপ
// document.getElementById("phone-decrease").addEventListener("click", function() {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneInputNumber = parseInt(phoneInput.value);
//     const phoneNewCount = phoneInputNumber - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// });

// //Plus Button Handler of casing    ৩য় ধাপ

// document.getElementById("case-increase").addEventListener("click", function() {
//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     const caseNewCount = caseInputNumber + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// });

// //Minus Button Handler of casing   ৪র্থ ধাপ

// document.getElementById("case-decrease").addEventListener("click", function() {

//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     const caseNewCount = caseInputNumber - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;

// });


//Plus Button Handler of casing  ৫ম ধাপ

// document.getElementById("case-increase").addEventListener("click", function() {
//     // const caseInput = document.getElementById("case-count");
//     // const caseInputNumber = parseInt(caseInput.value);
//     // const caseNewCount = caseInputNumber + 1;
//     // caseInput.value = caseNewCount;
//     // const caseTotal = caseNewCount * 59;
//     // document.getElementById("case-total").innerText = caseTotal;
//     handleProductChange(true);
// });

// //Minus Button Handler of casing ৬ষ্ঠ ধাপ

// document.getElementById("case-decrease").addEventListener("click", function() {

//     // const caseInput = document.getElementById("case-count");
//     // const caseInputNumber = parseInt(caseInput.value);
//     // const caseNewCount = caseInputNumber - 1;
//     // caseInput.value = caseNewCount;
//     // const caseTotal = caseNewCount * 59;
//     // document.getElementById("case-total").innerText = caseTotal;
//     handleProductChange(false);
// });

// // Using function for reduce duplicacy case-count  ৭ম ধাপ

// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     // const caseNewCount = caseInputNumber - 1;
//     let caseNewCount = caseInputNumber;

//     if (isIncrease == true) {
//         caseNewCount = caseInputNumber + 1;
//     }
//     if (isIncrease == false && caseInputNumber > 0) {
//         caseNewCount = caseInputNumber - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// }


// //Plus Button Handler of phone   ৮ম ধাপ
// document.getElementById("phone-increase").addEventListener("click", function() {
//     // const phoneInput = document.getElementById("phone-count");
//     // const phoneInputNumber = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneInputNumber + 1;
//     // phoneInput.value = phoneNewCount;
//     // const phoneTotal = phoneNewCount * 1219;
//     // document.getElementById("phone-total").innerText = phoneTotal;
//     handlePhoneChange(true);

// });

// //Minus Button Handler phone ৯ম ধাপ
// document.getElementById("phone-decrease").addEventListener("click", function() {
//     // const phoneInput = document.getElementById("phone-count");
//     // const phoneInputNumber = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneInputNumber - 1;
//     // phoneInput.value = phoneNewCount;
//     // const phoneTotal = phoneNewCount * 1219;
//     // document.getElementById("phone-total").innerText = phoneTotal;
//     handlePhoneChange(false);

// });


// Using function for reduce duplicacy phnone-count         ১০ম  ধাপ

// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneInputNumber = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneInputNumber - 1;
//     console.log(isIncrease);
//     let phoneNewCount = phoneInputNumber;
//     if (isIncrease == true) {
//         phoneNewCount = phoneInputNumber + 1;
//     }
//     if (isIncrease == false && phoneInputNumber > 0) {
//         phoneNewCount = phoneInputNumber - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// }



// Using function for reduce duplicacy    11th steps

// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneInputNumber = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneInputNumber - 1;
//     console.log(isIncrease);
//     let phoneNewCount = phoneInputNumber;
//     if (isIncrease == true) {
//         phoneNewCount = phoneInputNumber + 1;
//     }
//     if (isIncrease == false && phoneInputNumber > 0) {
//         phoneNewCount = phoneInputNumber - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// }


// Using function for reduce duplicacy    12th steps

// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     // const caseNewCount = caseInputNumber - 1;
//     let caseNewCount = caseInputNumber;

//     if (isIncrease == true) {
//         caseNewCount = caseInputNumber + 1;
//     }
//     if (isIncrease == false && caseInputNumber > 0) {
//         caseNewCount = caseInputNumber - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// }




// Using function for reduce duplicacy    13th steps
// function handleProductChange(product, isIncrease) {
//     const phoneInput = document.getElementById(product + "-count");
//     const phoneInputNumber = parseInt(phoneInput.value);
//     // const caseNewCount = caseInputNumber - 1;
//     let phoneNewCount = phoneInputNumber;

//     if (isIncrease == true) {
//         phoneNewCount = phoneInputNumber + 1;
//     }
//     if (isIncrease == false && phoneInputNumber > 0) {
//         phoneNewCount = phoneInputNumber - 1;
//     }
//     phoneInput.value = phoneNewCount;

//     // const phoneTotal = phoneNewCount * 59;

//     let phoneTotal = 0; //// let phoneTotal = phoneNewCount;    o diya jabe no problem

//     if (product == 'phone') {
//         phoneTotal = phoneNewCount * 1219;
//     }
//     if (product == 'case') {
//         phoneTotal = phoneNewCount * 59;
//     }
//     document.getElementById(product + "-total").innerText = phoneTotal;
// }
// //Plus Button Handler of phone
// document.getElementById("phone-increase").addEventListener("click", function() {
//     // const phoneInput = document.getElementById("phone-count");
//     // const phoneInputNumber = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneInputNumber + 1;
//     // phoneInput.value = phoneNewCount;
//     // const phoneTotal = phoneNewCount * 1219;
//     // document.getElementById("phone-total").innerText = phoneTotal;
//     handlePhoneChange(true);

// });

// //Minus Button Handler phone
// document.getElementById("phone-decrease").addEventListener("click", function() {
//     // const phoneInput = document.getElementById("phone-count");
//     // const phoneInputNumber = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneInputNumber - 1;
//     // phoneInput.value = phoneNewCount;
//     // const phoneTotal = phoneNewCount * 1219;
//     // document.getElementById("phone-total").innerText = phoneTotal;
//     handlePhoneChange(false);

// });

function handleProductChange(product, isIncrease) {
    const phoneInput = document.getElementById(product + "-count");
    // const phoneInputNumber = parseInt(phoneInput.value);
    const phoneInputNumber = getInputValue(product);
    // const caseNewCount = caseInputNumber - 1;
    let phoneNewCount = phoneInputNumber;
    if (isIncrease == true) {
        phoneNewCount = phoneInputNumber + 1;
    }
    if (isIncrease == false && phoneInputNumber > 0) {
        phoneNewCount = phoneInputNumber - 1;
    }
    phoneInput.value = phoneNewCount;
    // const phoneTotal = phoneNewCount * 59;
    let phoneTotal = 0; //// let phoneTotal = phoneNewCount;    o diya jabe no problem
    if (product == 'phone') {
        phoneTotal = phoneNewCount * 1219;
    }
    if (product == 'case') {
        phoneTotal = phoneNewCount * 59;
    }
    document.getElementById(product + "-total").innerText = phoneTotal;
    calculateTotal();
}

function calculateTotal() {
    // const phoneInput = document.getElementById("phone-count");
    // const phoneInputNumber = parseInt(phoneInput.value);

    // const caseInput = document.getElementById("case-count");
    // const caseInputNumber = parseInt(caseInput.value);
    const phoneInputNumber = getInputValue("phone");
    const caseInputNumber = getInputValue("case");
    const totalPrice = phoneInputNumber * 1219 + caseInputNumber * 59;
    document.getElementById("total-price").innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = tax;
    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = grandTotal;

}


function getInputValue(product) {
    const productInput = document.getElementById(product + "-count");
    const productInputNumber = parseInt(productInput.value);
    return productInputNumber;
}

// Using function for reduce duplicacy

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

// //Plus Button Handler of casing

// document.getElementById("case-increase").addEventListener("click", function() {
//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     const caseNewCount = caseInputNumber + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// });

// //Minus Button Handler of casing

// document.getElementById("case-decrease").addEventListener("click", function() {

//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     const caseNewCount = caseInputNumber - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;

// });

//Plus Button Handler of casing

// document.getElementById("case-increase").addEventListener("click", function() {
//     // const caseInput = document.getElementById("case-count");
//     // const caseInputNumber = parseInt(caseInput.value);
//     // const caseNewCount = caseInputNumber + 1;
//     // caseInput.value = caseNewCount;
//     // const caseTotal = caseNewCount * 59;
//     // document.getElementById("case-total").innerText = caseTotal;
//     handleProductChange(true);
// });

// //Minus Button Handler of casing

// document.getElementById("case-decrease").addEventListener("click", function() {

//     // const caseInput = document.getElementById("case-count");
//     // const caseInputNumber = parseInt(caseInput.value);
//     // const caseNewCount = caseInputNumber - 1;
//     // caseInput.value = caseNewCount;
//     // const caseTotal = caseNewCount * 59;
//     // document.getElementById("case-total").innerText = caseTotal;
//     handleProductChange(false);
// });

// Using function for reduce duplicacy
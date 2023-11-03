const input = document.getElementById("input");
const button = document.getElementById("btn");
const bank_name = document.getElementById("bank_name");
const bank_adress = document.getElementById("bank_adress");
const bank_branch = document.getElementById("bank_branch");
const bank_IFSC = document.getElementById("bank_IFSC");
const error = document.getElementById("error");
input.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    ifscFunction();
  }
});
const ifscFunction = () => {
  let length = input.value.length;
  if (length === 11) {
    fetch(`https://ifsc.razorpay.com/${input.value}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        error.classList.add("hidden");
        bank_IFSC.innerHTML = `IFSC Code: ${res.IFSC}`;
        bank_name.innerHTML = `Bank Name: ${res.BANK}`;
        bank_branch.innerHTML = `Branch: ${res.BRANCH}`;
        bank_adress.innerHTML = `Branch Adress: ${res.ADDRESS}`;
        input.value = "";
      });
  }
  else {
      error.innerHTML = `Please Enter valid IFSC of 11 alphanumeric digit`;
      input.value = "";
  }
};
button.addEventListener("click", ifscFunction);

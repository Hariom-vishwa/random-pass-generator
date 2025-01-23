let passwordArea = document.querySelector(".password");
const length = 12;

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower = "abcdefghijklmnopqrstuvwxyz",
  nums = "0123456789",
  symbols = "~!@#$%^&*()_+=-[]{};':,./<>?";

  const wholeChars = upper + lower + nums + symbols;

  // For password Generation 
function generatePass() {
  let password = "";
  password += upper[Math.floor(Math.random() * upper.length)];
  password += lower[Math.floor(Math.random() * lower.length)];
  password += nums[Math.floor(Math.random() * nums.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while(length > password.length){
    password += wholeChars[Math.floor(Math.random() * wholeChars.length)]
  }
  passwordArea.innerHTML = password;
}

// For copying password

function copyPass() {
  navigator.clipboard
    .writeText(passwordArea.value)
    .then(() => alert("Password copied successfully!"))
    .catch(() => alert("Failed to copy password!"));
}
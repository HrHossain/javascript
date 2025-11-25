const input = document.getElementById("input");
const btn = document.getElementById("btn")
const range = document.getElementById("range")

range.addEventListener("input",(e)=>{
   let rangeCount = e.target.value
  if(rangeCount < 10){
    throw "range is not valid"
  }
  btn.disabled = true
  input.value = generatePassword(rangeCount)
  return;
})

btn.addEventListener("click",()=> input.value = generatePassword(length = 16))

function generatePassword(length = 16) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz' +
    '0123456789' +
    '!@#$%^&*()_+[]{}|;:,.<>?/';

  const totalChar = chars.length;
  let result = '';

  if (window.crypto && window.crypto.getRandomValues) {
    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);
    
    for (let i = 0; i < length; i++) {
      const randomValue = randomValues[i];
      result += chars.charAt(randomValue % totalChar);
      
    }
    
  } else {
    // fallback if crypto not supported
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * totalChar));
    }
    
  }

 
  return result; // better than assigning to an undefined 'input'
}



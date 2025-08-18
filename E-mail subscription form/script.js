const scriptURL = 'https://script.google.com/macros/s/AKfycbxyecWhzBRTfm6Q7yPm_Wordc_Y9WexDoc-8fxaKfDW0Bd6aPyVA6qEmRvypkG5g5M/exec';
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();

  msg.innerHTML = "Submitting... ⏳";  // instant feedback

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "✅ Thank You For Subscribing!";
      setTimeout(() => { msg.innerHTML = ""; }, 4000);
      form.reset();
    })
    .catch(error => {
      msg.innerHTML = "❌ Error! Try again.";
      console.error('Error!', error.message);
    });
});

form.addEventListener('keypress', e => {
  if (e.key === "Enter") {
    e.preventDefault();
    form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  }
});

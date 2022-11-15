
function rate(number) {
  var element = document.getElementById('rate-number')
  element.innerHTML = number
}

function send() {

  document.querySelector(".start").classList.toggle("hide")
  document.querySelector(".end").classList.toggle("hide")
}

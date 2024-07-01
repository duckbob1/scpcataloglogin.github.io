var passwd = "Th3 0v3rs33rs!"
function pass() {
    var pass = password.value
    if(pass == passwd) {
        window.alert("Correct")
        window.alert("You will now be sent to the SCP Catalog")
        window.open("https://sites.google.com/view/xghdzlighdzlifhslhsuhglighlfbz/rules")
    } else {
      window.alert("Incorect")
    }
    password.value = ""
}

enter.style.margin = "10px"

enter.addEventListener('click', function () {
  pass();
});

document.addEventListener('keydown', (event) => {
  if (event.key == "Enter") {
    pass();
  }
});
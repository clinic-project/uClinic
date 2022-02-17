$(".sign_up btn").click(function (input) {
  var mailFormat = /^\w+([\.-]?\w+)*@([\.-]?\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (input.value.match(mailFormat)) {
    return true;
  } else {
    alert("You have entered an invalid email");
    return false;
  }
});

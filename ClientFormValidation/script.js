function printError(Id, Msg) {
  document.getElementById(Id).innerText = Msg;
}

function validationForm() {
  var name = document.Form.name.value;
  var email = document.Form.email.value;
  var mobile = document.Form.mobile.value;
  var country = document.Form.country.selectedIndex;
  var gender = document.Form.gender.value;

  var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

  if (name == "") {
    printError("nameErr", "Please enter you name");
    var elem = document.getElementById("name");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
      nameErr = false;
      var elem = document.getElementById("name");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("nameErr", "");
      nameErr = false;
      var elem = document.getElementById("name");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (email == "") {
    printError("emailErr", "Please enter you email address");
    var elem = document.getElementById("email");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
      emailErr = false;
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("emailErr", "");
      emailErr = false;
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    }
  }  

  if (mobile == "") {
    printError("mobileErr", "Please enter you mobile number");
    var elem = document.getElementById("mobile");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid mobile number");
      mobileErr = false;
      var elem = document.getElementById("mobile");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
      var elem = document.getElementById("mobile");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }  

  if (country == 0) {
    printError("countryErr", "Please select your country");
    var elem = document.getElementById("country");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("countryErr", "");
    countryErr = false;
    var elem = document.getElementById("country");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }   
  
  if (gender == "") {
    printError("genderErr", "Please select your country");
    var elem = document.getElementById("gender");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    printError("genderErr", "");
    genderErr = false;
    var elem = document.getElementById("gender");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  // if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
  //   return false;
  // }
 
  var registerDto = {
    "username": name,
    "name": email,
    "lastName": mobile,
    // country: country,
    // gender: gender
    "password": mobile
  }
  
  console.log(JSON.stringify(registerDto));

  $(document).ready(() => {
    $.ajax({
      url: 'https://localhost:7284/api/Authorization/register',
      type: "post",      
      dataType: "json",
      contentType: "application/json",
      crossDomain: true,
      data: JSON.stringify(registerDto),
      success: (data) => {
          res = JSON.stringify(data);
          console.log(res);
          console.log(data);
        }
      })
  })

  return false;
}
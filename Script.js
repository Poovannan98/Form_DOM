document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "block";

 
 

  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var firstName = row.insertCell(0);
  var lastName = row.insertCell(1);
  var address = row.insertCell(2);
  var pincode = row.insertCell(3);
  var gender = row.insertCell(4);
  var food = row.insertCell(5);
  var state = row.insertCell(6);
  var country = row.insertCell(7);

  

  firstName.innerHTML = document.getElementById("first-name").value;
  lastName.innerHTML = document.getElementById("last-name").value;
  address.innerHTML = document.getElementById("address").value;
  pincode.innerHTML = document.getElementById("pincode").value;
  gender.innerHTML = document.getElementById("gender").value;
  food.innerHTML = document.getElementById("food").value;
  state.innerHTML = document.getElementById("state").value;
  country.innerHTML = document.getElementById("country").value;
  document.getElementById("first-name").value = " ";
  document.getElementById("last-name").value = " ";
  document.getElementById("address").value = " ";
  document.getElementById("pincode").value = " ";
  document.getElementById("gender").value = " ";
  document.getElementById("food").value = " ";
  document.getElementById("state").value = " ";
  document.getElementById("country").value = " ";


  return false;
};

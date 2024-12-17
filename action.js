function myFunction() {
    // let st = document.getElementsByClassName("status");
    const collection = document.getElementsByClassName("input");
    const collect1 = document.getElementById("status1");
    const name = document.getElementById("name").value;
    const pswd = document.getElementById("pswd").value;
    let show = document.getElementById("namelist");
    // name.innerHTML += "<li>"+document.getElementById("demo").value+"</li>";

    if (name == "Anup" || (name == "admin" && pswd == 1234)) {
      show.innerHTML =
        "<div class='success'>" + "Login Successfully" + "</div>";
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.border = "2px solid green";
      }
      collect1.style.border = "2px solid green";
    } else {
      show.innerHTML = "<div class='failed'>" + "Login Failed" + "</div>";
      for (let i = 0; i < collection.length; i++) {
        collection[i].style.border = "2px solid red";
      }
      collect1.style.border = "2px solid red";
    }
    
  }
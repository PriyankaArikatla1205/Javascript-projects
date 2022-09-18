


function submit() {
    var i1=document.getElementById("img1");
    var i2=document.getElementById("img2");
    var i3=document.getElementById("img3");
    var i4=document.getElementById("img4");
    var id1 = document.getElementById("fname");
    var id2 = document.getElementById("lname");
    var id3 = document.getElementById("email");
    var id4 = document.getElementById("password");
    var f1 = document.getElementById("f1");
    var f2 = document.getElementById("f2");
    var f3 = document.getElementById("f3");
    var f4 = document.getElementById("f4");
    if (id1.value == "") {
        id1.style.borderColor = "red";
        const para = document.createElement("h5");
  
        const node = document.createTextNode("First Name cannot be empty");
  
        para.appendChild(node);

        f1.appendChild(para);
        document.getElementById("form").style.height="550px";  
        i1.style.visibility=" visible";
        id1.placeholder = "";
    
       


    }
    if (id2.value == "") {
        id2.style.borderColor = "red";
        const para = document.createElement("h5");
        const node = document.createTextNode("Last Name cannot be empty");


        para.appendChild(node);

        f2.appendChild(para);
        id2.placeholder = "";
        i2.style.visibility=" visible";
    }
    if (id3.value == "") {
        id3.style.borderColor = "red";
    
      
        const para = document.createElement("h5");
        const node = document.createTextNode("Looks like this not a email");


        para.appendChild(node);

        f3.appendChild(para);
        var text=" example@gmail.com";
        i3.style.visibility=" visible";
        
        id3.placeholder = text;
        
        
    }
    if (id4.value == "") {
        id4.style.borderColor = "red";
        const para = document.createElement("h5");

       
        const node = document.createTextNode("Password cannot be empty");


        para.appendChild(node);

        f4.appendChild(para);
        id4.placeholder = "";
        i4.style.visibility=" visible";
    }
}
function input(element) {
    const parent = element.parentElement;
    const errorMessage = parent.querySelector(".error-message");
    const errorIcon = parent.querySelector(".error-icon");
  
      
    
  }
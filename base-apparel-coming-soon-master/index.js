const re =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    



function email()  {

 var x=document.getElementById("email");
 if(x.value==""){
     x.style.borderColor="red";
     document.getElementById("img").style.visibility="visible";
     document.getElementById("h5").style.visibility="visible";


 }
if (re.test(x.value)){
    x.style.borderColor="green";
    document.getElementById("img").style.visibility="hidden";
    document.getElementById("h5").style.visibility="hidden";
 }

 
  
}  
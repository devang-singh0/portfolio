let sendmail=(e)=>{e.preventDefault();var params={first_name:document.querySelectorAll('#form input')[0].value,last_name:document.querySelectorAll('#form input')[1].value,email:document.querySelectorAll('#form input')[2].value,message:document.querySelector('#form textarea').value}
emailjs.send("service_ymwytog","template_8f7i4am",params).then(function(res){alert("mail sent")})}
document.getElementById("form").addEventListener("submit",sendmail);let nav=document.querySelectorAll('header #nav ul li');let checkbox=document.querySelector('header input:nth-child(2)');nav[0].onclick=()=>{checkbox.checked=false;}
nav[1].onclick=()=>{checkbox.checked=false;}
nav[2].onclick=()=>{checkbox.checked=false;}
nav[3].onclick=()=>{checkbox.checked=false;}
nav[4].onclick=()=>{checkbox.checked=false;}
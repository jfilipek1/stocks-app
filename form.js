//Sprawdzenie wpisania nazwy druzyny
function ValidateName(name)
{
  var nameformat = /[^\w\s-]/;
  error=0
  if(name.value.match(nameformat))
  {
    document.getElementById("info1").innerHTML="Błędna nazwa drużyny"
    error=1
  }
  if(error==1)
  {
    document.getElementById("info1").style.display="inline";
    document.getElementById("info1").style.color="#FF0000";
    document.getElementsByName("nazwa_dru")[0].style.borderColor="red";
  }
}

function name_correct()  {
  document.getElementById("info1").style.display="none";
  document.getElementsByName("nazwa_dru")[0].style.borderColor="black";
}

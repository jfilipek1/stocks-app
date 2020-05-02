//dla urządzeń mobilnych, żeby navbar nie zajmował duzą część strony
      $(document).ready(function(){
  
  $("button").click(function(){

    if($("button").text() == "☰"){
      $("button").text("🞬");
    }else{
      $("button").text("☰");
    }
    
    $("li").toggle("slow");
  });  
});

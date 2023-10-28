function clicked{
   let error_message =;document.getElementById("error-message");
   let button = document.getElementById("button")

   let nom = document.getElementById("last-name").value;
   let prenom = document.getElementById("first-name").value
   let message = document.getElementById("message").value

   if( nom.trim( === ""    prenom.trim)    ==="" // message.trim (] ===""{
      error_message.style.display = " block ";
     return false; // empeche envoie du formulaire
   } else{
      return true ;
   }  )

     



}

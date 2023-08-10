const firebaseConfig = {
    apiKey: "AIzaSyDtnMehH_i0POx3YckaO80yeViTEInSRrU",
    authDomain: "bendy-chat-60f01.firebaseapp.com",
    databaseURL: "https://bendy-chat-60f01-default-rtdb.firebaseio.com",
    projectId: "bendy-chat-60f01",
    storageBucket: "bendy-chat-60f01.appspot.com",
    messagingSenderId: "684619184648",
    appId: "1:684619184648:web:adec5dbecc50dbefeb2fbd"
  };
  firebase.initializeApp(firebaseConfig);
   // crea las variables de almacenamiento local del nombre del usuario y la sala
   sal=localStorage.getItem("as");
   registra= localStorage.getItem("usua");
 
 
   document.getElementById("nomsal").innerHTML= "Bienvenido a la sala #" +sal + "🖤💛🖤💛🖤💛"; 
  
 
//creamos la función para enviar los mensajes
 
 function enviar(){
   
  //guarda el mensaje enviado en una variable
guarse=document.getElementById("pongase").value

  //se envía a la Firebase
 
 firebase.database().ref(sal).push(
   {
   usuario:registra, 
   msj:guarse, 
   like:0
   });
 
   document.getElementById("pongase").value="";
 }
 
 
 
 //lectura de base de datos
 
 function leer_datos()
 {
   firebase.database().ref("/"+sal).on('value', function(carpetas)
   {
     document.getElementById("mensal").innerHTML = ""; 
     carpetas.forEach(function(raiz)
     {
       keys  = raiz.key; 
       contenido = raiz.val(); 
       
       if(keys != "contenido") 
       {
 
        
         key_mensaje= keys;
         datos_mensaje= contenido; 

           // separa los datos en valores individuales
          usuario = datos_mensaje['usuario'];
          msj = datos_mensaje['msj']
          like = datos_mensaje['like']
 
 
          //creamos las labels donde se leeran
          linea_nombre = "<h3 id='linea_nombre'> "+ usuario +" </h3>";
          linea_msj = "<h3 id='mensaje_enviado'>" + msj + "</h3>";
 
          boton_like ="<button class='btn btn-primary' id="+ key_mensaje +" value= "+ like +" onclick='leer_like(this.id)'>";
          linea_likes = "<h4 <span> 👍 Like: "+ like +"</span> </h4> </button>";
 
         fila = linea_nombre + linea_msj +boton_like + linea_likes;    
         
         //escribe el id del sitio donde se leen los mensajes en la sala

         document.getElementById("mensal").innerHTML += fila;
 
       } 
     });  
   }); 
 }
 leer_datos();
 
 
 function leer_like(activador)
 {
   
     check_boton = activador;
     likes_totales = document.getElementById(check_boton).value;
   

     //crea el contador de likes que aumenta de 1 en 1
     contador_likes = Number(likes_totales)+1
   
     
     //se guardan los likes en la Firebase
     firebase.database().ref(sal).child(check_boton).update({
         like : contador_likes  
      });
 
 }
 
 function salir() 
 {
 localStorage.removeItem("as");
 localStorage.removeItem("usua");
     window.location = "index.html";
 }
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
  
  //toma el nombre del almacenamiento local y ponlo en una variable
 registra=localStorage.getItem("usua")
  
  //muestra en pantalla un saludo de bienvenida que reconozca el nombre del usuario
document.getElementById("hola").innerHTML="hola "+registra
  
  
  
  
  //CREAMOS LA OPCION DE AGREGAR UNA SALA
  
  function añadir()
  {

    //guarda el nombre de la sala en una variable
   sal=document.getElementById("añada").value
  
    //almacena los datos en la firebase
    
  
    firebase.database().ref("/").child(sal).update(
      {
      contenido : "informacion de la sala"
      });
  
      localStorage.setItem("as",sal);
      
       window.location = "index3.html";
  }
  
  
  //hacemos lectura de la FireBase
  
  function leer_firebase()
  {  
      firebase.database().ref("/").on('value', function(carpetas)
        { 
            document.getElementById("div1").innerHTML = "";
  
            //ejecuta la función una vez por cada elemento de la lista
            carpetas.forEach(function(raiz) 
             { 
                salas  = raiz.key;
                fila = "<div  id="+salas+" onclick='ir_a_sala(this.id)' >"+ "#" + salas +"</div>";
        
                document.getElementById("div1").innerHTML += fila + "<hr>"
            });
        });
  }
  

  leer_firebase();
  
    // funcion para ir a la sala
  function ir_a_sala(sal)
  {
    localStorage.setItem("as",sal);
    window.location = "index3.html";
  }
  

    // funcion para salir
  function salir() 
  {
  localStorage.removeItem("usua");
  localStorage.removeItem("as");
  window.location = "index.html";
  }
  
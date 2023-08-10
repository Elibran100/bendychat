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
  function iniciar(){
    registra=document.getElementById("usuario").value
    localStorage.setItem("usua",registra)
    window.location="index2.html"
  }
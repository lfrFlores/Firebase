(function(){

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC7DgXcgqYfw9qSJ5tfSDU53thIJ2ViGPc",
    authDomain: "lfr-sincronizar-objetos.firebaseapp.com",
    databaseURL: "https://lfr-sincronizar-objetos.firebaseio.com",
    projectId: "lfr-sincronizar-objetos",
    storageBucket: "lfr-sincronizar-objetos.appspot.com",
    messagingSenderId: "1087372356910"
  };
  firebase.initializeApp(config);

   //obtener elementos
   const preObject = document.getElementById('objeto');
   //crear referencias
   const dbRefObject = firebase.database().ref().child('objeto');

  //sincronizar cambios objeto
  //impresion en consola
  dbRefObject.on('value',snap => console.log(snap.val()));
  
  //empresion en body 
  dbRefObject.on('value',snap =>{
  preObject.innerText = JSON.stringify(snap.val(),null,3);
  });

} ());
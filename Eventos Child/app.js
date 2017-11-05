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
  const ulList = document.getElementById('lista');
  const tdFila = document.getElementById('fila');

   //crear referencias
  const dbRefObject = firebase.database().ref().child('objeto');
  const dbRefList = dbRefObject.child('habilidades');

  //sincronizar cambios objeto
  //impresion en consola
  //dbRefObject.on('value',snap => console.log(snap.val()));
  //sincronizar cambios lista
  //dbRefList.on('child_added',snap => console.log(snap.val()));
  
  //empresion en body 
  dbRefObject.on('value',snap =>{
  preObject.innerText = JSON.stringify(snap.val(),null,3);
  });

    dbRefList.on('child_added',snap =>{
    const li= document.createElement('li');
    li.innerText=snap.val();
    li.id=snap.key;
    ulList.appendChild(li);
    });

    dbRefList.on('child_added',snap =>{
    const td= document.createElement('td');
    td.innerText=snap.val();
    td.id=snap.key;
    tdFila.appendChild(td);
    });

  dbRefList.on('child_changed', snap => {
        const liChanged = document.getElementById(snap.key);
        liChanged.innerText = snap.val();
    });

    dbRefList.on('child_removed', snap => {
        const liToRemove = document.getElementById(snap.key);
        liToRemove.remove();
    });





} ());
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
   const txtEmail = document.getElementById('txtEmail');
   const txtPassword = document.getElementById('txtPassword');
   const btnLogin = document.getElementById('btnLogin');
   const btnSignUp = document.getElementById('btnSignUp');
   const btnLogout = document.getElementById('btnLogout');

//añadir evento login
btnLogin.addEventListener('click',e =>{
//obtener email y pass
const email = txtEmail.value;
const pass= txtPassword.value;
const auth = firebase.auth();
//sing in
const promise = auth.signInWithEmailAndPassword(email,pass);
promise.catch(e=>console.log(e.message));
});

//añadir evento sigup
btnSignUp.addEventListener('click',e =>{
//obtener email y pass
const email = txtEmail.value;
const pass= txtPassword.value;
const auth = firebase.auth();
//sing in
const promise = auth.createUserWithEmailAndPassword(email,pass);
promise.catch(e=>console.log(e.message));
});

btnLogout.addEventListener('click',e=>{
  firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser){
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  }else{
    console.log('No logueado');
    btnLogout.classList.add('hide');
  }
});

} ());

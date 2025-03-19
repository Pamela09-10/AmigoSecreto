// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 let amiguis = [];

 function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === ""){
      alert("Por favor, inserte un Nombre");
         return;
    }
    
    amiguis.push(nombreAmigo);

    actualizarLista();
    
    inputAmigo.value = "";
    inputAmigo.focus();
   }

 function actualizarLista() {
   let listaAmigo1 = document.getElementById("listaAmigos")
   listaAmigo1.innerHTML = "";

   amiguis.forEach(amigo => {
      let li = document.createElement("li");
      li.textContent = amigo;
      listaAmigo1.appendChild(li);
   });
   }

 function sorteoAmigo() {
   if (amiguis.length === 0) {
   alert("No hay amigos para poder sortear. Agregar nombres.");
   return
   }

   let indiceAleatorio = Math.floor(Math.random() * amiguis.length);

   let amigoSorteado = amiguis[indiceAleatorio];
   let resultado1 = document.getElementById("resultado");
   resultado1.innerHTML = `<li>${amigoSorteado}</li>`;  
   } 

document.addEventListener('DOMContentLoaded', () => {
   document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
   document.getElementById("btnSortear").addEventListener("click", sorteoAmigo);

   })
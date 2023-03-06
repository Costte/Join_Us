document.querySelector("#enviar").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573136283643";

  let cliente = document.querySelector("#asis").value;
  let comentario = document.querySelector("#comen").value;
  let resp = document.querySelector("#respuesta");



  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${7291842652}&text=
		*Join US*%0A
		*Personoas que asistiran*%0A
		${cliente}%0A
    *Comentario:*%0A
    ${comentario}%0A`;

  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu asistencia`;

  window.open(url);
});

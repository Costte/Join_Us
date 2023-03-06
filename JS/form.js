document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573136283643";

  let cliente = document.querySelector("#nme").value;
  let comentario = document.querySelector("#msg").value;
  let resp = document.querySelector("#respuesta");



  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${7291842652}&text=
		*WeCost*%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
    *Comentario:*%0A
    ${comentario}%0A`;

  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu comentario ${cliente}`;

  window.open(url);
});

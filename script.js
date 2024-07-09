const encriptarMensaje = () => {
  let mensaje = document.getElementById("mensajeDeEntrada").value;
  if (!validarEntrada(mensaje)) {
    alert(
      "El mensaje contiene caracteres inválidos. Por favor, use solo letras minúsculas y sin acentos."
    );
    return;
  }
  let mensajeEncriptado = mensaje
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  mostrarMensaje(mensajeEncriptado);
};

const desencriptarMensaje = () => {
  let mensaje = document.getElementById("mensajeDeEntrada").value;
  if (!validarEntrada(mensaje)) {
    alert(
      "El mensaje contiene caracteres inválidos. Por favor, use solo letras minúsculas y sin acentos."
    );
    return;
  }
  let mensajeDesencriptado = mensaje
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  mostrarMensaje(mensajeDesencriptado);
};

const validarEntrada = (texto) => {
  const regex = /^[a-z\s]*$/;
  return regex.test(texto);
};

const mostrarMensaje = (mensaje) => {
  document.getElementById("primer-panel").style.display = "none";
  const outputPanel = document.getElementById("output-panel");
  outputPanel.style.display = "block";
  document.getElementById("mensajeDeSalida").value = mensaje;
};

const copiarTexto = () => {
  const mensajeSalida = document.getElementById("mensajeDeSalida");
  mensajeSalida.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
};

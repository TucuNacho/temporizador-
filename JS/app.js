let h = 0,
  m = 0,
  s = 0;
let intervalo = null;
let tiempoRestante = 0;

const form = (e) => {
  e.preventDefault();
  const input = parseInt(document.getElementById("tiempoInput").value);
  if (!isNaN(input) && input > 0) {
    h = Math.floor(input / 3600);
    m = Math.floor((input % 3600) / 60);
    s = input % 60;
  }
  actualizarTempo();
  clearInterval(intervalo);
  intervalo = setInterval(iniciarTempo, 1000);
  formulario.reset();
};

const iniciarTempo = () => {
  if (h === 0 && m === 0 && s === 0) {
    clearInterval(intervalo);
    return;
  }
  if (s > 0) {
    s--;
  } else {
    if (m > 0) {
      m--;
      s = 59;
    } else if (h > 0) {
      h--;
      m = 59;
      s = 59;
    }
  }

  tiempoRestante = h * 3600 + m * 60 + s;
  actualizarTempo();
};

const agregarCero = (num) => {
  return num < 10 ? "0" + num : num;
};

const actualizarTempo = () => {
  reloj.textContent = `${agregarCero(h)}:${agregarCero(m)}:${agregarCero(s)}`;
};

const pausarTempo = () => {
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = null;
  }
};

const resetTempo = () => {
  clearInterval(intervalo);
  intervalo = null;
  tiempoRestante = 0;
  h = 0;
  m = 0;
  s = 0;
  actualizarTempo();
};

const formulario = document.getElementById("miForm");
const reloj = document.getElementById("temporizador");
const pause = document.getElementById("pausar");
const reset = document.getElementById("reiniciar");
const inputForm = document.getElementById("tiempoInput");

formulario.addEventListener("submit", form);
pause.addEventListener("click", pausarTempo);
reset.addEventListener("click", resetTempo);

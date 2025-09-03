//Para el posicionamientos
document.addEventListener("DOMContentLoaded", () => {
  const buttons  = document.querySelectorAll(".card-Service-button a");
  const portadas = document.querySelectorAll(".card-Service-portada");

  // Mostrar LOANS al cargar
  portadas.forEach(p => p.classList.remove("active"));
  buttons.forEach(b => b.classList.remove("active"));
  portadas[0].classList.add("active");
  buttons[0].classList.add("active");

  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // reset
      buttons.forEach(b => b.classList.remove("active"));
      portadas.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");

      const targetId = btn.getAttribute("href").slice(1);
      const targetEl = document.getElementById(targetId);

      // Soporta id en el artículo o en la portada
      const portada = targetEl?.classList.contains("card-Service-portada")
        ? targetEl
        : targetEl?.closest(".card-Service-portada");

      if (portada) {
        portada.classList.add("active");
        // opcional: mantener el hash sin hacer scroll
        history.replaceState(null, "", `#${targetId}`);
      } else {
        console.warn("No se encontró la sección para:", targetId);
      }
    });
  });
});

//==== Modal ====
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
 if (event.target !== modal && event.target !== openBtn && !modal.contains(event.target)) {
    modal.style.display = "none";
  }
} 

//Para evitar el scroll
openModal.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display ="block";
});
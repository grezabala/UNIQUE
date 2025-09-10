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

var modals = document.getElementById("reject-popup");
window.onclick = function(event) {
  if(event.target == modals) {
    modals.style.display = "none";
  }
}
//Para evitar el scroll
openModal.addEventListener("click", function(event) {
  event.preventDefault();
  modal.style.display ="block";
});

//Validacion del formulario Financing request
const btnEnviar = document.getElementById("btn-enviar");

//validar el emial
const emailValidado = your_email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailValidado('uni@que@gmail.com');
emailValidado('unique@gmail.com');

const validaction = (e) => {
  e.preventDefault();
  const YourName = document.getElementById('your_name');
  const YourEmail = document.getElementById('your_email');
  const PhoneNumber = document.getElementById('phone_number');
  const _Subject = document.getElementById("subject");

  if(yuor_name.value === "") {
    alert("Please, enter your username.");
    yuor_name.focus();
    return false;
  }

  if(your_email.value === "") {
    alert("Please, enter your email.");
    your_email.focus();
    return false;
  }

  if(!emailValidado(your_email.value)) {
    alert("Please enter a valid email address.");
    your_email.focus();
    return false;
  }

  if(phone_number.value === "") {
    alert("Please, enter phone number.");
    phone_number.focus();
    return false;
  }

if(subject.value === "") {
    alert("Please, enter the subject.");
    phone_number.focus();
    return false;
  }

  return true;

}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

//Envio de formulario a un correo
(function() {
  emialjs.init("Tu_Public_Key")
}) ();

const form_modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");

//Abrir modal desde el enlace o desde un botón
document.getElementById("openModal").addEventListener("click", function(e) {
  e.preventDefault();
  form_modal.style.display = "block"
});

//Cerrar el modal al dar clic en la X
closeModal.addEventListener("click", function() {
  form_modal.style.display = "none";
});

//Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", function (e) {
  if(e.target === form_modal) {
    form_modal.style.display = "none";
  }
});

//Enviar el formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = this;
  const formMessage = document.getElementById("form-messege");
  formMessage.style.display = "block";
  formMessage.style.color = "blue";
  formMessage.innerText = "⏳ Enviando...";

  emialjs.sendForm("Tu_Service_Id", "Tu_Template_Id", form)
  .then(function() {
    formMessage.style.color = "green";
    formMessage.innerText = "✅ Mensaje enviado correctamente!";
    form.reset();

    //Despues de 3  segundo el formulario se va a cerrar o se va a cerrar el modal
    setTimeout(() => {
      form_modal.style.display = "none"
      formMessage.style.display = "none";
    }, 3000);
  }, function(error) {
    formMessage.style.color = "red";
    formMessage.innerText = "❌ Error al enviar: " + JSON.stringify(error);

    //Ocultar el error en 5 segundo
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  });
});

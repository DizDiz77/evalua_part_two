// +++++++++++++++++++++ TOASTS ++++++++++++++

function mostrarToast() {
  
  let toast = document.getElementById("mitoast");
  
  toast.className = "mostrar";
  
  setTimeout(function () {
    toast.className = toast.className.replace("mostrar", "");
  }, 1000); // El toast se ocultará después de 5 segundos
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')


if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}




// +++++++++++++++++++++ POPOVER ++++++++++++++


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))







// +++++++++++++++++++++ ALERTA ++++++++++++++

function mostrarAlerta() {
  alert("Hola soy una Alerta");
}



// +++++++++++++++++++++ OFFCANVA, se encuentra en el index++++++++++++++



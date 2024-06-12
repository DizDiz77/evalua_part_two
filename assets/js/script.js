







// +++++++++++++++++++++ IMPUNTS ++++++++++++++

function realizarAccion() {
  const valorInput1 = document.getElementById("input1").value;
  const valorInput2 = document.getElementById("input2").value;

  

}



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

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}



// +++++++++++++++++++++ OFFCANVA, se encuentra en el index++++++++++++++








//++++++++++++++++++++++++++++++++++++  PARTE 2 DE LA EVALUACION INICIO ++++++++++++++++++++++++++++++

document.getElementById('cambioRelevante').addEventListener('click',function(){
  
  let datoInfo = document.getElementById('datInfo').value
  
  let inputInfo = document.getElementById('datInfo').setAttribute('data-img',inputImagen)
  
});

// Función Modal para manipular los eventos

// const miVentanaEmergente = document.getElementById('ventanaEmergente')

// agregar un observador sobre el modal

miVentanaEmergente.addEventListener('show.bs.modal', function(event){
  console.log('se está abriendo el modal');

  // reconocer el elemento que habilita el evento modal
  // let boton = event.relatedTarget // etiquetado relacionado

  let mensaje = boton.getAttribute('datTitulo')
  
  let contenido = boton.getAttribute('datDescrip')
  
  

  document.getElementById('cambioRelevante').innerText = mensaje

  if(datoImagen == ''){
      document.querySelector('.toast-body').innerHTML = contenido
  } else {
      document.querySelector('.toast-body').innerHTML = '<img class="img-fluid" src="' + datoImagen + '" alt="' + contenido + '">'
  }

  

})



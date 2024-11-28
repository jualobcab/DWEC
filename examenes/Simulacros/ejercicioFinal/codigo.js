"use strict";

///////////////////
// FUNCTIONS
///////////////////

const ocultarTodosLosFormularios = () => {
  document
    .querySelectorAll(".formulario")
    .forEach((formulario) => formulario.classList.add("oculto"));
};

const altaMedico = () => {
  //1. recuperamos los datos del médico
  let id = Number(document.querySelector("[name=txtIdMedico]").value);
  let nombre = document.querySelector("[name=txtNombre]").value;
  let telefono = Number(document.querySelector("[name=txtTelefono]").value);
  let email = document.querySelector("[name=txtEmail]").value;
  let colegiado = document.querySelector("[name=txtColegiado]").value;

  //2 creamos el obejto médico
  if(!email){
    email = null;
  }
  let oMedico = new Medico(id, nombre, telefono, email, colegiado);

  //3 pasamos el aviso si esta incluido, ademas de añadirlo al array de hospital
  if (hospital.altaMedico(oMedico)) {
    divListado.innerHTML = `Alta de médico OK`;
  } else {
    divListado.innerHTML = `Error: idMedico registrado previamente`;
  }
};

const altaCita = () => {

    //Recuperamos todos los datos de la cita
  let idCita = Number(document.querySelector("[name=txtIdMedicoCita]").value);
  let paciente = document.querySelector("[name=txtPaciente").value;
  let fecha = Date(document.querySelector("[name= txtFecha]").value);
  let hora = document.querySelector("[name=txtHora]").value;
  console.log(idCita);
  //Creamos un objeto cita
  let oCita = new Cita(idCita, paciente, fecha, hora);

  let check = hospital.altaCita(oCita);
  //Si el objeto cita puede introducirse en el array de citas de hospital
  // nos devuelve un mensaje, si no, otro. 
  if (check) {
    divListado.innerHTML = "Alta de cita OK";
  } else {
    divListado.innerHTML = "idMedico no registrado";
  }
};

//Estos dos métodos incorporan al listado la función del mismo nombre
// del objeto hospital
const listadoMedicos = () => {
  divListado.innerHTML = hospital.listadoMedicos();
};

const listadoCitas = () => {
  divListado.innerHTML = hospital.listadoCitas();
};

///////////////////
// MAIN
///////////////////

// 1. ocultamos todos los formularios
ocultarTodosLosFormularios();

//2. recogemos los botones que despliegan los formularios

document.querySelector("#btnFormAltaMedico").addEventListener("click", (e) => {
  ocultarTodosLosFormularios();
  document.querySelector("#divFrmAltaMedico").classList.remove("oculto");
});

document.getElementById("btnFormAltaCita").addEventListener("click", (e) => {
  ocultarTodosLosFormularios();
  document.getElementById("divFrmAltaCita").classList.remove("oculto");
});

//3. Creamos el objeto hospital

let hospital = new Hospital();

// 4. activamos los botones de alta medio y alta cita

document.querySelector("#btnAltaMedico").addEventListener("click", altaMedico);

document.querySelector("#btnAltaCita").addEventListener("click", altaCita);

//5. Recuperamos la division de listados

let divListado = document.querySelector("#listado");

//6. activamos los dos ultimos botones

document
  .getElementById("btnListadoMedicos")
  .addEventListener("click", listadoMedicos);
document
  .getElementById("btnListadoCitas")
  .addEventListener("click", listadoCitas);

"use strict";

///////////////////
// FUNCTIONS
///////////////////
const ocultarFormularios = () => {
    document.querySelectorAll(".formulario").forEach(
        (formulario) => formulario.classList.add("oculto")
    );
};

///////////////////////////////////////////////////////////
/////////////////     EVENT LISTENERS     /////////////////
///////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(event) {
    ocultarFormularios();

    if (document.getElementById('btnFormAltaMedico')){
        document.getElementById('btnFormAltaMedico').addEventListener("click", (event) => {
            ocultarFormularios();
            document.getElementById('divFrmAltaMedico').classList.remove("oculto");
        });
    }
    
    if (document.getElementById('btnFormAltaCita')){
        document.getElementById('btnFormAltaCita').addEventListener("click", (event) => {
            ocultarFormularios();
            document.getElementById('divFrmAltaCita').classList.remove("oculto");
        });
    }
    
    // Listados
    if (document.getElementById('btnListadoMedicos')){
        document.getElementById('btnListadoMedicos').addEventListener("click", (event) => {
            hospital = cargarHospitalDesdeLocalStorage();
            hospital.listadoMedicos();
        });
    }

    if (document.getElementById('btnListadoCitas')){
        document.getElementById('btnListadoCitas').addEventListener("click", (event) => {
            hospital = cargarHospitalDesdeLocalStorage();
            hospital.listadoCitas();
        });
    }
});
/////////////////////////////////////////////////////////////////
///////////////     USO DEL LOCAL STORAGE     ///////////////////
/////////////////////////////////////////////////////////////////
function guardarHospitalEnLocalStorage(hospital) {
    // Guardamos el objeto en localStorage
    localStorage.setItem("hospital", JSON.stringify(hospital));
}

function cargarHospitalDesdeLocalStorage() {
    // Obtenemos el objeto de localStorage
    const hospitalGuardado = localStorage.getItem("hospital");
    
    // Si existe el objeto en localStorage
    if (hospitalGuardado) {
        // Devolvemos el objeto Hospital
        let res = JSON.parse(hospitalGuardado);
        let hospitalAux = new Hospital();
        hospitalAux.medicos = res.medicos;
        hospitalAux.citas = res.citas;

        return hospitalAux;
    }
    
    // Si no existe en localStorage, devolvemos una nueva instancia vacía
    return new Hospital();
}

/////////////////////////////////////////////////////////////////
//////////////     VALIDACION FORMULARIOS     ///////////////////
/////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function(event) {
    if (document.getElementById('btnAltaMedico')){
        document.getElementById('btnAltaMedico').addEventListener("click", (event) => {
            event.preventDefault();
            let hasError = false;
            let hospitalAux = cargarHospitalDesdeLocalStorage();
        
            let idMedico = frmAltaMedico.txtIdMedico.value;
            let nombre = frmAltaMedico.txtNombre.value;
            let telefono = frmAltaMedico.txtTelefono.value;
            let email = frmAltaMedico.txtEmail.value;
            let colegiado = frmAltaMedico.txtColegiado.value;
        
            if (idMedico=="" || nombre=="" || telefono=="" || colegiado==""){
                alert("No has introducido todos los valores necesarios");
            }
            else {
                if (isNaN(idMedico)){
                    hasError = true;
                    alert("Id debe ser un número");
                }
                if (isNaN(telefono) || telefono.length!=9){
                    hasError = true;
                    alert("Telefono debe ser un número de 9 cifras");
                }
                if (!hasError){
                    let medicoAux = new Medico(idMedico,nombre,telefono,email,colegiado);
                    hospitalAux.altaMedico(medicoAux);
                    guardarHospitalEnLocalStorage(hospitalAux);
                    
                    // Vaciado de los campos
                    frmAltaMedico.txtIdMedico.value = "";
                    frmAltaMedico.txtNombre.value = "";
                    frmAltaMedico.txtTelefono.value = "";
                    frmAltaMedico.txtEmail.value = "";
                    frmAltaMedico.txtColegiado.value = "";
                }
            }
        });
    }
    
    if (document.getElementById('btnFormAltaCita')){
        
    }
});

document.getElementById('btnAltaCita').addEventListener("click", (event) => {
    event.preventDefault();
    let hasError = false;
    let hospitalAux = cargarHospitalDesdeLocalStorage();

    let idMedico = frmAltaCita.txtIdMedico.value;
    let paciente = frmAltaCita.txtPaciente.value;
    let fecha = frmAltaCita.txtFecha.value;
    let hora = frmAltaCita.txtHora.value;

    if (idMedico=="" || paciente=="" || fecha=="" || hora==""){
        alert("No has introducido todos los valores necesarios");
    }
    else {
        if (isNaN(idMedico)){
            hasError = true;
            alert("Id debe ser un número");
        }
        if (!hasError){
            let citaAux = new Cita(idMedico,paciente,fecha,hora);
            hospitalAux.altaCita(citaAux);
            guardarHospitalEnLocalStorage(hospitalAux);

            // Vaciado de los campos
            frmAltaCita.txtIdMedico.value = "";
            frmAltaCita.txtPaciente.value = "";
            frmAltaCita.txtFecha.value = "";
            frmAltaCita.txtHora.value = "";
        }
    }
});

///////////////////
// MAIN
///////////////////
let hospital = cargarHospitalDesdeLocalStorage();


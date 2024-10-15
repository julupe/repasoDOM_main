//1. Declarar variables

let extMed1 = 0;
let extMed2 =0;
let pacAtend =0;
let pacMed1 =0;
let pacMed2 =0;

//2. Creo la función para capturar el inventario

document.getElementById('actualizarExistencias').addEventListener('click', () =>{
    extMed1 = parseInt(document.getElementById('medicamento1').value);
    extMed2 = parseInt(document.getElementById('medicamento2').value);

    if (extMed1 > 0 && extMed1 > 0){
        document.getElementById('mostrarExistencias').textContent = `Existencias Medicamento 1: ${extMed1} unidades. \n Existencias Medicamento 2: ${extMed2} unidades. `;
        document.getElementById('mensaje').textContent = "";
    }else{
        document.getElementById('mensaje').textContent = '¡Atención!: los valores ingresados no pueden ser negativos ni igual a cero. '
    }
});

//3. Creo la función para tomar las presiones

document.getElementById('procesarPaciente').addEventListener('click', () =>{
    let pSist = parseFloat(document.getElementById('sistolica').value);
    let pDias = parseFloat(document.getElementById('diastolica').value);
    let cat = '';
    let medEntre = 0;
    let dosis = 0;
    let mensaje = ''; // cancatenar respuesta al usuario

    // Validamos el rango del usuario

    if(sistolica < 69 && diastolica < 48){
        cat = 'Hipotensión';
        medEntre = 2;
        dosis = 6;
    }else if(sistolica >= 69 && sistolica < 98 && diastolica >= 48 && diastolica <66){
        cat = 'Óptima'; // lo demás no va porque en la solicitud va 0
    }else if(sistolica >= 98 && sistolica < 143 && diastolica >= 66 && diastolica <92){
        cat = 'Común';
    }
    }else if(sistolica >= 143 && sistolica < 177 && diastolica >= 92 && diastolica <124){
        cat = 'Pre HTA';
        medEntre = 1;
        dosis = 6;
    }
})
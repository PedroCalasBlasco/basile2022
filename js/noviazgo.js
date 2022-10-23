// form-check-input
function resuelveTest() {
    
    const questions = [...document.querySelectorAll(".form-check-input")].filter(word => word.checked === true );
 
    let resultado = 0;
    questions.map(item => {
        resultado = resultado + parseInt(item.value)
    })

    let respuesta = "";

    if (resultado <= 2) {
        respuesta = "Tu relación no posee indicadores de violencia de gravedad. La comunicación y el respeto mutuo son primordiales para un vínculo de confianza y afecto.";
    } else if (resultado > 2 && resultado <= 15) {
        respuesta = "Tu noviazgo tiene indicadores de violencia. Poner límites a través de la palabra y el diálogo es indispensable. Si esto no funciona puede ser necesario terminar la relación. Se recomienda iniciar tratamiento psicológico para fortalecer la autoestima."
    } else {
        respuesta = "Tu integridad psíquica y física se encuentran en peligro. Es urgente pedir ayuda psicológica y legal para terminar el noviazgo y sostener dicha decisión en el tiempo."
    }

    const modalCuerpo = document.querySelector("#modalCuerpo");
    modalCuerpo.innerHTML = `<h5>${respuesta}</h5><hr><p>Te dejamos algunas recomendaciones:</p>
                            <ul>
                            <li class="mt-1">En caso de que sufras algún tipo de violencia podés comunicarte las 24 horas, los 365 días del año al 144 donde recibirás contención, información y asesoramiento.<br></li>
                            <li class="mt-1">Acercarte a la comisaría más cercana a un Centro Territorial de Denuncias, solicitando que tomen la denuncia y llevándote una copia de la misma.<br></li>
                            <li class="mt-1"
                            >MPA UFE Violencia de Género, Familiar y Sexual ubicado en 3 de Febrero 3168  -  fr1gefas@mpa.santafe.gov.ar / fr1@mpa.santafe.gov.ar Emergencias 911</li>
                            </ul>`;
    
    
    
    questions.map(item => {
        item.checked = false
    })
}
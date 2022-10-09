
function loadData() {
    spinner.removeAttribute('hidden');
    fetch('https://sergiobasile.com/basileservice/api/proyectos/estado/2')
    .then(response => response.json())
        .then(data => {
            spinner.setAttribute('hidden', '');
            const proyectosRow = document.querySelector("#proyectosRow");
            console.log(data);  
            proyectosRow.innerHTML = data.map(item => {
                return `<div class="col col-12 col-xl-8 mb-5 border-bottom">
                            <div class="row justify-content-center text-center">
                                <div class="col col-10 col-xl-3 p-3">
                                <img src="data:image/jpeg;base64, ${item.imagen}" width="100%" class="img-fluid"  alt="">
                                </div>
                                <div class="col col-10 col-xl-9 p-3">
                                    <span class="blueSpan">${item.nombre}"</span>
                                    <p class="mt-4 text-start text_light">${item.descripcion}</p>
                                </div>
                            </div>
                        </div>`
            })            
        });
}
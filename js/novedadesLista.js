spinner.removeAttribute('hidden');
fetch('https://sergiobasile.com/basileservice/api/noticias/header')
  .then(response => response.json())
    .then(data => {
         spinner.setAttribute('hidden', ''); 
        const noticiasContent = document.querySelector("#noticiasContent");
        noticiasContent.innerHTML = data.map(item => {

            let mes = item.fecha.substring(0,2);
            let dia = item.fecha.substring(3, 5);
            let anyo = item.fecha.substring(6, 10);

            return `<div class="col col-10 col-xl-3 mt-4 p-4">
                        <div class="card">
                            <img src="data:image/jpeg;base64, ${item.imagen}" alt="" class="img-fluid">
                            <div class="card-body text-start">
                                <span>${dia}/${mes}/${anyo}</span>
                                <p class="card-text text-start mt-3">${item.titulo}</p>
                                <a href="novedad.html?id=${item.id}" class="card-link">Leer Más</a>
                            </div>
                        </div>
                    </div>
                    `
        })
    });
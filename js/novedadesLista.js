fetch('https://sergiobasile.com/basileservice/api/noticias/header')
  .then(response => response.json())
    .then(data => {
        const noticiasContent = document.querySelector("#noticiasContent");
        noticiasContent.innerHTML = data.map(item => {
            return `<div class="col col-3 mt-4 p-4">
                        <div class="card">
                            <img src="data:image/jpeg;base64, ${item.imagen}" alt="">
                            <div class="card-body text-start">
                                <span>${item.fecha}</span>
                                <p class="card-text text-start mt-3">${item.titulo}<</p>
                                <a href="novedad.html?id=${item.id}" class="card-link">Leer Más</a>
                            </div>
                        </div>
                    </div>
                    `
        })
    });
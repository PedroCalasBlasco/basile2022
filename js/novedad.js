
let url = window.location.href;
let urlArrary = url.split("?")

console.log(url);
console.log(urlArrary[1].split("=")[1]);

spinner.removeAttribute('hidden');
fetch('https://sergiobasile.com/basileservice/api/noticias/'+urlArrary[1].split("=")[1])
  .then(response => response.json())
    .then(data => {
        spinner.setAttribute('hidden', '');  
  
        let mes = data.fecha.substring(0,2);
        let dia = data.fecha.substring(3, 5);
        let anyo = data.fecha.substring(6, 10);

        const novedadContent = document.querySelector("#novedadContent");
         novedadContent.innerHTML += `<img src="data:image/jpeg;base64, ${data.imagen}" class="img-fluid mt-5" alt="">
                                        <p class="mt-5">${dia}/${mes}/${anyo}</p>
                                        <h3 class="mt-5">${data.titulo}</h3>
                                        <p class="mt-5 text_light">${data.cuerpo}</p>
                                    `
    });



fetch('https://sergiobasile.com/basileservice/api/noticias/header')
  .then(response => response.json())
    .then(data => {
        const recentContent = document.querySelector("#recentContent");
        console.log(data);
        dataArrayGlobal = data;
        let primerasTresNoticias = [];
        for (let i = 0; i <= 2; i++) {
            primerasTresNoticias.push(data[i]);
        }  
        recentContent.innerHTML = ""
        let contenido = primerasTresNoticias.map(item => {
            recentContent.innerHTML +=`<div class="col col-5 mb-4">
                        <img src="data:image/jpeg;base64, ${item.imagen}" class="img-fluid" alt="">
                    </div>
                    <div class="col col-7  mb-4">
                        <p class="text_light">${item.titulo}</p>
                    </div>
                    `
        })
    
    });



                
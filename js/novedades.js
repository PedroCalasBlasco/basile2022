
// let dataArrayGlobal = getData();

// console.log(dataArrayGlobal);

window.onload(loadData())


function loadData() {
    spinner.removeAttribute('hidden');
    fetch('https://sergiobasile.com/basileservice/api/noticias/header')
    .then(response => response.json())
        .then(data => {
            spinner.setAttribute('hidden', '');
            const noticiasRow = document.querySelector("#noticiasRow");
            console.log(data);
            dataArrayGlobal = data;
            let primerasTresNoticias = [];
            for (let i = 0; i <= 2; i++) {
                primerasTresNoticias.push(data[i]);
            }  
            noticiasRow.innerHTML = primerasTresNoticias.map(item => {
                return `<div class="col col-10 col-xl-2">
                            <div class="card">
                                <img src="data:image/jpeg;base64, ${item.imagen}" alt="">
                                <div class="card-body text-start">
                                    <span>${item.fecha}</span>
                                        <p class="card-text text-start mt-3">${item.titulo}</p>
                                        <a href="components/novedad.html?id=${item.id}" class="card-link">Leer Más</a>
                                </div>
                            </div>
                        </div>`
            })

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
}
// async function getData() {
//     const res = await fetch('https://sergiobasile.com/basileservice/api/noticias/header');
//     const data = await res.json();
//     return data;
// }

// fetch('https://sergiobasile.com/basileservice/api/noticias')
//   .then(response => response.json())
//     .then(data => {
//         console.log(data);
    
//   });



// let jsondata = "";
// let apiUrl = "https://sergiobasile.com/basileservice/api/noticias/header"

// async function getJson(url) {
//     let response = await fetch(url);
//     let data = await response.json()
//     return data;
// }

// async function main() {
//     jsondata = await getJson(apiUrl)
//     console.log(jsondata);
// }

// main();

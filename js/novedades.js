
function loadData() {

// spinner.removeAttribute('hidden');
    
fetch('https://sergiobasile.com/basileservice/api/noticias/header')
    .then(response => response.json())
    .then(data => {
        // spinner.setAttribute('hidden', '');            
        // localStorage.setItem('data', data);


        //     let data = localStorage.getItem('data');
    
    const noticiasRow = document.querySelector("#noticiasRow");

    let primerasTresNoticias = [];

    for (let i = 0; i <= 2; i++) {
        primerasTresNoticias.push(data[i]);
    }  

    console.log(primerasTresNoticias);

    noticiasRow.innerHTML = primerasTresNoticias.map(item => {

        let mes = item.fecha.substring(0,2);
        let dia = item.fecha.substring(3, 5);
        let anyo = item.fecha.substring(6, 10);
                
        return `<div class="col col-10 col-xl-2">
                    <div class="card">
                        <img src="data:image/jpeg;base64, ${item.imagen}" alt="">
                        <div class="card-body text-start">
                            <span>${dia}/${mes}/${anyo}</span>
                            <p class="card-text text-start mt-3">${item.titulo}</p>
                            <a href="components/novedad.html?id=${item.id}" class="card-link">Leer Más</a>
                        </div>
                    </div>
                </div>`
    })
    });

// Obtener el arreglo de localStorage

// var array = localStorage.getItem('myArray');
// // Se parsea para poder ser usado en js con JSON.parse :)
// array = JSON.parse(array);




            // const noticiasContent = document.querySelector("#noticiasContent");
            //     noticiasContent.innerHTML = data.map(item => {
            //         return `<div class="col col-3 mt-4 p-4">
            //                     <div class="card">
            //                         <img src="data:image/jpeg;base64, ${item.imagen}" alt="">
            //                         <div class="card-body text-start">
            //                             <span>${item.fecha}</span>
            //                             <p class="card-text text-start mt-3">${item.titulo}<</p>
            //                             <a href="novedad.html?id=${item.id}" class="card-link">Leer Más</a>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 `
            //     })
            
    
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

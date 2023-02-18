
spinner.removeAttribute('hidden');

// NAVEGACION DE PAGINAS

let paginaActual = 1
let totalPaginas = 0;

fetch('https://sergiobasile.com/basileservice/api/noticias/count')
  .then(response => response.json())
    .then(data => {   
    

    if( data % 6 === 0){
        totalPaginas = Math.floor(data / 6)
    }else{
        totalPaginas = Math.floor( data / 6 + 1)
    }



    const listPagination = document.querySelector("#listPagination");

    let contador = 1

    for(let i = 1; i < totalPaginas; i++){
      
      if(i === totalPaginas){
        listPagination.innerHTML += `<li class="page-item active item-number" id="item${i}" style="cursor: pointer"><a class="page-link" onclick="goToPage(${i})">${i}</a></li>`
      }else{
        listPagination.innerHTML += `<li class="page-item item-number" id="item${i}" style="cursor: pointer"><a class="page-link" onclick="goToPage(${i})">${i}</a></li>`
      } 
      
       contador = contador + 1;
    }

    const item =  document.querySelector(`#item${paginaActual}`);
    item.className += " active"


    });


// PRIMERA LLAMADA A LAS PAGINAS    


fetch('https://sergiobasile.com/basileservice/api/noticias/page/1/6')
  .then(response => response.json())
    .then(data => {

        const noticiasContent = document.querySelector("#noticiasContent");
        noticiasContent.innerHTML += data.map(item => {

          spinner.setAttribute('hidden', false);
          

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


  
  // IR AL NUMERO DE PAGINA SELECCIONADA

  function goToPage(i){
    spinner.removeAttribute('hidden'); 
    paginaActual = i


    const itemNumber = document.querySelectorAll(".item-number");
    itemNumber.forEach((item) => {
      item.classList.remove("active");
    })

    noticiasContent.innerHTML = ""

    const item =  document.querySelector(`#item${i}`);

    item.className += " active"

    fetch(`https://sergiobasile.com/basileservice/api/noticias/page/${i}/6`)
  .then(response => response.json())
    .then(data => {

        spinner.setAttribute('hidden', false);
      
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
  }


  function previousPage(){

    spinner.removeAttribute('hidden'); 

    if(paginaActual !== 1){
      paginaActual = paginaActual - 1
    }else{
      paginaActual = paginaActual
    }

    const itemNumber = document.querySelectorAll(".item-number");
    itemNumber.forEach((item) => {
      item.classList.remove("active");
    })

    const item =  document.querySelector(`#item${paginaActual}`);
    item.className += " active"

    noticiasContent.innerHTML = ""

    fetch(`https://sergiobasile.com/basileservice/api/noticias/page/${paginaActual}/6`)
    .then(response => response.json())
      .then(data => {
          spinner.setAttribute('hidden', false);
       
        
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


    

  }


  function nextPage(){

    spinner.removeAttribute('hidden'); 

    if(paginaActual !== totalPaginas){
      paginaActual = paginaActual + 1
    }else{
      paginaActual = paginaActual
    }

    const itemNumber = document.querySelectorAll(".item-number");
    itemNumber.forEach((item) => {
      item.classList.remove("active");
    })

    const item =  document.querySelector(`#item${paginaActual}`);
    item.className += " active"

    noticiasContent.innerHTML = ""

    fetch(`https://sergiobasile.com/basileservice/api/noticias/page/${paginaActual}/6`)
    .then(response => response.json())
      .then(data => {

       

        spinner.setAttribute('hidden', false);
        
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
    

  }
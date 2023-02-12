
console.log(spinner)


spinner.removeAttribute('hidden');


console.log(spinner)
// NAVEGACION DE PAGINAS

let paginaActual = 1
let totalPaginas = 0;

fetch('https://sergiobasile.com/basileservice/api/noticias/count')
  .then(response => response.json())
    .then(data => {   
    

    if( data % 6 === 0){
        totalPaginas = Math.floor(data / 12)
    }else{
        totalPaginas = Math.floor( data / 12 + 1)
    }

   

    const listPagination = document.querySelector("#listPagination");

    let contador = 1

    for(let i = totalPaginas; i>= 1; i--){
      
      if(i === totalPaginas){
        listPagination.innerHTML += `<li class="page-item active item-number" id="item${contador}" style="cursor: pointer"><a class="page-link" onclick="goToPage(${contador})">${i}</a></li>`
      }else{
        listPagination.innerHTML += `<li class="page-item item-number" id="item${contador}" style="cursor: pointer"><a class="page-link" onclick="goToPage(${contador})">${i}</a></li>`
      } 
      
       contador = contador + 1;
    }


    });


// PRIMERA LLAMADA A LAS PAGINAS    

fetch('https://sergiobasile.com/basileservice/api/noticias/page/1/12')
  .then(response => response.json())
    .then(data => {

    

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


  
  // IR AL NUMERO DE PAGINA SELECCIONADA

  function goToPage(i){
    spinner.setAttribute('hidden', true); 
    paginaActual = i
    console.log("IIII", paginaActual)

    const itemNumber = document.querySelectorAll(".item-number");
    itemNumber.forEach((item) => {
      item.classList.remove("active");
    })

    noticiasContent.innerHTML = ""

    const item =  document.querySelector(`#item${i}`);

    console.log(item)
    item.className += " active"

    fetch(`https://sergiobasile.com/basileservice/api/noticias/page/${i}/12`)
  .then(response => response.json())
    .then(data => {

        console.log("MYDATA", data)
        //  spinner.setAttribute('hidden', ''); 
      
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

    fetch(`https://sergiobasile.com/basileservice/api/noticias/page/${paginaActual}/12`)
    .then(response => response.json())
      .then(data => {
          //  spinner.setAttribute('hidden', ''); 
          console.log(data)
        
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

    console.log(paginaActual)
    

  }


  function nextPage(){
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

    fetch(`https://sergiobasile.com/basileservice/api/noticias/page/${paginaActual}/12`)
    .then(response => response.json())
      .then(data => {

        console.log(data)

          //  spinner.setAttribute('hidden', ''); 
        
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
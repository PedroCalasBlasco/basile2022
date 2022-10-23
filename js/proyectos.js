var fieldEl = document.getElementById("filter-field");
var valueEl = document.getElementById("filter-value");
var table = "";

function filterData() {
	table.setFilter([
		[ {field:"nombre", type:"like", value: valueEl.value},{ field: "numexpediente", type: "like", value: valueEl.value }]  
	]);
}

			
function loadData() {
	spinner.removeAttribute('hidden');
	fetch(' https://sergiobasile.com/basileservice/api/proyectos/noimages')
		.then(response => response.json())
		.then(data => {
			spinner.setAttribute('hidden', '');
			console.log(data);

			data.map((item) => {
				let mes = item.fecha.substring(0, 2);
				let dia = item.fecha.substring(3, 5);
				let anyo = item.fecha.substring(6, 10);

				item.dateEq = `${dia}/${mes}/${anyo}`

			})

		
			table = new Tabulator("#example-table", {
				height: 505,
				width: 900, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed
				data: data, //assign data to table
				layout: "fitColumns", //fit columns to width of table (optional)
				columns: [ //Define Table Columns
					{ title: "Título", field: "nombre", width: 810, sorter:"string" },
					{ title: "Expediente", field: "numexpediente", width: 150, sorter:"string" },
					{ title: "Tipo", field: "tipo", width: 150, sorter:"string"  },
					{ title: "Fecha", field: "dateEq", width: 150 },
				],
			});

			//trigger an alert message when the row is clicked
			table.on("rowClick", function (e, row) {
				let a = document.createElement("a");
				a.target= '_blank';
				a.href= row.getData().enlace;
				a.click();
			
			});
		
		});


}
 //create Tabulator on DOM element with id "example-table"



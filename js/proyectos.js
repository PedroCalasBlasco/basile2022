

function loadData() {

	fetch(' https://sergiobasile.com/basileservice/api/proyectos')
		.then(response => response.json())
		.then(data => {
	
			console.log(data);
		
			var table = new Tabulator("#example-table", {
				height: 205,
				width: 900, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed
				data: data, //assign data to table
				layout: "fitColumns", //fit columns to width of table (optional)
				columns: [ //Define Table Columns
					{ title: "Título", field: "nombre", width: 810 },
					{ title: "Expediente", field: "numexpediente", width: 150 },
					{ title: "Tipo", field: "tipo", width: 150  },
					{ title: "Fecha", field: "fecha", sorter: "date", width: 150 },
				],
			});

			//trigger an alert message when the row is clicked
			table.on("rowClick", function (e, row) {
				let a = document.createElement("a");
				a.setAttribute.src = row.getData().enlace;
				console.log(a);
			});
		
		});


}
 //create Tabulator on DOM element with id "example-table"



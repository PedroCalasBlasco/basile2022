

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
		
		
			var table = new Tabulator("#example-table", {
				height: 205,
				width: 900, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed
				data: data, //assign data to table
				layout: "fitColumns", //fit columns to width of table (optional)
				columns: [ //Define Table Columns
					{ title: "Título", field: "nombre", width: 810 },
					{ title: "Expediente", field: "numexpediente", width: 150 },
					{ title: "Tipo", field: "tipo", width: 150  },
					{ title: "Fecha", field: "dateEq", sorter: "date", width: 150 },
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



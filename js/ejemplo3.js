<!doctype html>
<head>
	<meta charset="utf-8">
	<title>cuenta vocales</title>
</head>


<body>
	<h2=cuenta vocales>
var vocales = "león ricardo gatica medina";
var contadora = 0;
var contadore = 0;
var contadori = 0;
var contadoro = 0;
var contadoru = 0;
var contador = 0;

for (var i = 0; i < vocales.length; i++) {
	if (vocales[i] == "a") {
		contadora = contadora + 1;
	} else if (vocales[i] == "e") {
		contadore = contadore + 1;
	} else if (vocales[i] == "i") {
		contadori = contadori + 1;
	} else if ((vocales[i] == "o") || (vocales[i] == "ó")) {
		contadoro = contadoro + 1;
	} else if (vocales[i] == "u") {
		contadoru = contadoru + 1;
	} else {
		contador = contador + 1;
	}
};

console.log("total vocal a:" + contadora);
console.log("total vocal e:" + contadore);
console.log("total vocal i:" + contadori);
console.log("total vocal o:" + contadoro);
console.log("total vocal u:" + contadoru);
console.log("total no vocal:" + contador);

</body>

</html>
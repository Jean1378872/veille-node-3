const http = require("http");
let server = http.createServer(function(request, response) {

'use strict';
/* 
on définit un Object litéral qui contient l'ensemble des provinces 
*/
let oProvince = {  "QC" : "Québec",
                   "ON" : "Ontario",
                   "MA" : "Manitoba",
                   "SK" : "Saskashewan",
                   "CB" : "Colombie-Britannique",
                   "IPE" : "Île-du-Prince-Édouard",
                   "NE" : "Nouvelle-Écosse",
                   "TN" : "Terre-Neuve et Labrador",
                   "AL" : "Alberta",
                   "NB" : "Nouveau-Brunswick"
                }
/* 
permet d'extraire l'ensemble des propriétés valeurs de l'objet litéral */

const contenu_objet_json = (o) => {
   let trace = '';
   for (let p in o) { 
     trace += p + ': ' + o[p] + '\n' + '<br></br>'; 
   } 
   return trace;
   }

response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>')
 response.write('<!DOCTYPE "html">');
 response.write('<html>');
 response.write('<head>');
 response.write('<title>Node.js</title>');
 response.write('</head>');
 response.write('<body>');
 response.write('Bonjour tout le monde');
 response.write('<h1>Provinces</h1>');
 response.write('<p>'+(contenu_objet_json(oProvince))+'</p>');
  response.write('<h1>Provinces</h1>');
 response.write('<p>'+(contenu_objet_json(oProvince))+'</p>');
 response.write('</body>');
 response.write('</html>');

 response.end();

})
// le port 3000 est le port standard on peut alors lancer la page avec seulement : localhost
server.listen(3000)
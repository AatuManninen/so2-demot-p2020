const http = require("http"); // muuttuja  (http moduuli)
const url = require("url");   // muuttuja (url moduuli)

const portti = 3001; // portin numero muuttujana

const serveri = http.createServer((req, res) => { //serverin tekeminen 

    if (req.url != "/favicon.ico") { // jonkin sortin if lause

        let tiedot = url.parse(req.url, true).query; // muuttuja josta parsitaan jtn
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon";// query string muuttuja, joka on aina tuntematon
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });< // muutetaan sisältö html:lään
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); // ensimmäinen teksti
        res.write(`<h2>Heippa, ${nimi}!</h2>`);//toinen teksti
        res.end();//lopetus 

    }

});

serveri.listen(portti, () => { //serverin käynnistäminen 
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});

const express = require('express');
//body parser
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//public folderio turinio naudojimas
app.use(express.static('public'));

//iššifruoja iš body, iš html esančią info
app.use(bodyParser.urlencoded({ extended: true }));
 
console.log('Labas Terminalai');
const A = 52 * 124.4;
console.log(A);

app.get('/', (req, res) => {
    res.send('Hello World!');
});



//1 sukurti dviejų skaičių sumos skaičiuoklę

app.get('/suma/:pirmasSk/:antrasSk', (req, res) => {
    const pirmas = parseInt(req.params.pirmasSk);
    const antras = parseInt(req.params.antrasSk);
    const suma = pirmas + antras;

    res.send(`Labas, suma yra: ${suma}`);
});

app.get('/briedis', (req, res) => {

    const spalva = req.query.spalva;
    const kailis = req.query.kailis;

    res.send(`Labas ${spalva} ${kailis} Briedžiai`);
});

// 2 sukurti dviejų daugybos skirtumo skaičiuoklę su query

app.get('/daugyba', (req, res) => {

    const aSk = req.query.aSk;
    const bSk = req.query.bSk;
    const daugyba = aSk * bSk;

    res.send(`Daugybos suma lygi: ${daugyba}`);
});

//POST POST POST POST POST POST POST POST
app.post('/mano-forma', (req, res) => {
    // console.log('---->', req.body);
    const vardas = req.body.vardas;
    // redirect
    res.status(302).redirect('/gavau-duomenis?vardas=' + vardas);
  });
   
  app.get('/gavau-duomenis', (req, res) => {
    const vardas = req.query.vardas;
    res.send(`Ačiū, ${vardas}, gavau duomenis!`);
  });
 
// Padaryti formą su 2 input ir mygtuku. Paspaudus mygtuką turi būti atvaizduojamas suma.
app.post('/suma', (req, res) => {
    // console.log('---->', req.body);
    const demuo1 = parseInt(req.body.demuo1);
    const demuo2 = parseInt(req.body.demuo2);
    const suma = demuo1 + demuo2;
    // redirect
    res.status(302).redirect('/gauta-suma?suma=' + suma);
  });
app.get('/gauta-suma', (req, res) => {
    const suma = req.query.suma;
    res.send(`Jūsų gauta suma yra: ${suma}`);
  });

app.listen(port, () => {
    console.log(`Mano serveris veikia ant ${port} porto!`);
  });

var suspeitos = ["Charles B. Abbage", "Donald Duck Knuth", "Ada L. Ovelace", "Alan T. Uring", "Ivar J. Acobson", "Ras Mus Ler Dorf"];
var locais = ["Redmond", "Palo Alto", "San Francisco", "Tokio", "Restaurante no Fim do Universo", "São Paulo", "Cupertino", "Helsinki", "Maida Vale", "Toronto"];
var armas = ["Peixeira", "DynaTAC 8000X (o primeiro aparelho celular do mundo)", "Trezoitão", "Trebuchet", "Maça", "Gládio"];

var detalhesCrime = {"suspeito":suspeitos[numAleatorio(suspeitos.length)], "local":locais[numAleatorio(locais.length)], "arma":armas[numAleatorio(armas.length)]};

function resolver()
{
  var resposta = 0;
  var tentativaAtual = {"suspeito" : 0, "local" : 0, "arma" : 0};
    do {
      var suspeitoPergunta = suspeitos[tentativaAtual.suspeito];
      var localPergunta = locais[tentativaAtual.local];
      var armaPergunta = armas[tentativaAtual.arma];
      resposta = perguntarTestemunha(suspeitoPergunta, localPergunta, armaPergunta);
      if(resposta == 1)
      {
        tentativaAtual.suspeito++;
      }
      if(resposta == 2)
      {
        tentativaAtual.local++;
      }
      if(resposta == 3)
      {
        tentativaAtual.arma++;
      }
    } while (resposta != 0);
    return suspeitos[tentativaAtual.suspeito] +" em "+ locais[tentativaAtual.local] +" com "+ armas[tentativaAtual.arma];
}

function perguntarTestemunha(suspeitoPergunta, localPergunta, armaPergunta)
{
  var resposta = 0;
  var respostasPossiveis = [];

  if(suspeitoPergunta != detalhesCrime.suspeito)
  {
    respostasPossiveis.push(1);
  }
  if(localPergunta != detalhesCrime.local)
  {
    respostasPossiveis.push(2);
  }
  if(armaPergunta != detalhesCrime.arma)
  {
    respostasPossiveis.push(3);
  }

  if(respostasPossiveis.length>0)
  {
    resposta = respostasPossiveis[numAleatorio(respostasPossiveis.length)]
  }
  else
  {
    resposta = 0;
  }

  return resposta;
}


function numAleatorio(max)
{
  return Math.floor(Math.random()*max);
}


console.log("O crime foi cometido por: "+detalhesCrime.suspeito +" em "+ detalhesCrime.local +" com "+ detalhesCrime.arma);
console.log("Tive como resultado: "+resolver());

# DescubraOAssassino
Problema original por DojoPuzzles.com

O empresário Bill G. Ates foi assassinado e o corpo dele foi deixado na frente da delegacia de polícia. O detetive Lin Ust Orvalds foi escolhido para investigar este caso. Após uma série de investigações, ele organizou uma lista com prováveis assassinos, os locais do crime e quais armas poderiam ter sido utilizadas.

Suspeitos:

Charles B. Abbage
Donald Duck Knuth
Ada L. Ovelace
Alan T. Uring
Ivar J. Acobson
Ras Mus Ler Dorf
Locais:

Redmond
Palo Alto
San Francisco
Tokio
Restaurante no Fim do Universo
São Paulo
Cupertino
Helsinki
Maida Vale
Toronto
Armas:

Peixeira
DynaTAC 8000X (o primeiro aparelho celular do mundo)
Trezoitão
Trebuchet
Maça
Gládio
Uma testemunha foi encontrada, mas ela só consegue responder se Lin fornecer uma teoria. Para cada teoria ele "chuta" um assassino, um local e uma arma. A testemunha então responde com um número. Se a teoria estiver correta (assassino, local e arma corretos), ela responde 0. Se a teoria está errada, um valor 1,2 ou 3 é retornado. 1 indica que o assassiona está incorreto; 2 indica que o local está incorreto; 3 indica que a arma está incorreta. Se mais de uma suposição está incorreta, ela retorna um valor arbitrário entre as que estão incorretos (isso é totalmente aleatório).

Por exemplo, se o assassino for Donald Duck Knuth usando um trezoitão em Tokio:

Teoria: 1, 1, 1
Retorno: 1, ou 2, ou 3 (todos estão incorretos) 

Teoria: 3, 1, 3
Retorno: 1, ou 3 (somente o local está correto)

Teoria: 5, 3, 4
Retorno: 1 (somente o assassino está incorreto)

Teoria: 2, 3, 4
Retorno: 0 (todos corretos, você solucionou o caso)

Este programa resolve 

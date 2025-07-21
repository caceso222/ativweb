jogo()
function jogo() {


    alert("vamos jogar");
    const limite = prompt("escolha um numero de 0 a 10");

    const numsec = Math.floor(Math.random() * 100) + 1;
    let tent = 0;

    alert("voce tem que escolher um numero de 0 a 100 se acertar ganha");

    while (tent < limite) {
        let palpite = parseInt(prompt(`Tentativa ${tent + 1} de ${limite}. Digite um número entre 1 e 100:`));
        tent++;

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            alert("Digite um número válido entre 1 e 100.");
            continue;
        }
        else if (numsec == palpite) {
            alert("voce venceu");
            break;
        }
        else if (numsec > palpite) {
            alert("seu palpite é menor que o numero");
        }
        else {
            alert("seu palpite é maior que o numero");
        }

        if (tent > limite) {
            alert(` Você usou todas as tentativas. O número secreto era ${numsec}.\n perdedor`);
        }
    }
    let jogar_novamente = confirm("mais uma rodada?");
    if (jogar_novamente) {
        jogo();
    }
}   
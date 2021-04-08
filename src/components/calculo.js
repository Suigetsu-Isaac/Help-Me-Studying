export default function Calculo(Disciplina = "", nota1, nota2 = "", NAF = "") {
  let n1, n2, notaFinal, mediaFinal;

  if (parseInt(nota1) > 100) {
    n1 = 100;
  } else {
    n1 = parseInt(nota1);
  }

  if (parseInt(nota2) > 100) {
    n2 = 100;
  }
  if (parseInt(NAF) > 100) {
    notaFinal = 100;
  }

  if (nota2 == "") {
    n2 = 140 - n1;
  } else {
    n2 = parseInt(nota2);
  }

  if (n2 > 100) n2 = 100;
  const media = (n1 + n2) / 2;

  if (media < 70) {
    if (NAF == "") {
      notaFinal = 70;
    } else {
      notaFinal = parseInt(NAF);
    }

    mediaFinal = (6 * media + 4 * notaFinal) / 10;
  } else {
    notaFinal = media;
    mediaFinal = media;
  }

  const resposta = {
    Disciplina: Disciplina,
    N1: n1,
    N2: n2,
    MD: media,
    NAF: notaFinal,
    MDAF: mediaFinal,
  };

  return resposta;
}

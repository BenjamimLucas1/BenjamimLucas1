// let n = 0
// for(let i = 0; i < 11; i++ ){
//     console.log(i)
// }

// let n = 0
// for( let i = 0; i < 21; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
//     else{
//     }
// }

// let n = 5
// for(i = 5; i >= 0; i--){
//     if(i > 0){
//         console.log(i)
//     }
//     else{
//         console.log("Lançamento!")
//     }
// }

// let n = 7;
// for(let i = 1; i <= 10; i++){
//     console.log(n + " x " + i + " = " + (n * i));
// }

// let energia = 100;
// while(energia > 0){
//     console.log("Você ainda tem "+ energia +"% de energia pra gastar!");
//     energia = energia-10
// }
// console.log("A tua energia foi pro vácuo!");

// let senha = "";
// while(senha !== "123"){
//     senha = console.log("Digite a senha:");
// }
// console.log("Acesso liberado!");

// let opcao;
// do{
//     opcao = Number(prompt("Informe 1 para jogar, 2 para ver o ranking e 3 para sair"))
//     switch(opcao){
//         case 1 : alert("Procurando partida"); break;
//         case 2 : alert("Entrando no ranking mundial"); break;
//         case 3 : alert("Saindo"); break;
//         default : alert("Opção não encontrada"); break;
//     }
// }while(opcao !== 3);

// let playlist = [
//     "Música 1",
//     "Música 2",
//     "Música 3"
// ]
// for(let i = 0; i < playlist.length; i++){
//     console.log(playlist[i]);
// }

// let filmes = [
//     "Filme 1",
//     "Filme 2",
//     "Filme 3",
//     "Filme 4",
//     "Filme 5",
// ]
// for(let i = 0; i < filmes.length; i++){
//     console.log(filmes[i])
// }

// let notas = [
//     7,
//     8,
//     10,
//     5
// ]
// let soma = 0
// for(let i = 0; i < notas.length; i++){
//     soma = soma + notas[i]
// }
// alert(soma)

// let notas = [
//     8,
//     7
// ]
// let soma = 0;
// let media = 0;
// for(let i = 0; i < notas.length; i++){
//     soma = soma + notas[i]
// } /* O .length mostra a quantidade do conteúdo dentro da lista */
// media = soma/notas.length
// alert(media)

// let idades = [
//     15,
//     18,
//     22,
//     13,
//     30
// ]
// let maior_valor=0
// for (let i = 0; i < idades.length; i++) {
//     const idade = idades[i];
//     if(idade>maior_valor){
//         maior_valor=idade
//     }
// }
// alert(maior_valor)

// let preco = [
//     10.50,
//     25,
//     8.99,
//     12.75
// ]
// let menor_valor = 100000;
// for(let i = 0; i < preco.length; i++){
//     const valor = preco[i];
//     if(valor<menor_valor){
//         menor_valor = valor
//     }
// }
// alert(menor_valor)

let jogadores = [];
let pontos = [];
for(let i = 0; i < 3; i++){

    let nome = prompt("Digite o nome:");

    let pontuacao = Number(
        prompt("Digite a pontuação:")
    );

    jogadores.push(nome);
    pontos.push(pontuacao);
}for(let i = 0; i < jogadores.length; i++){

    console.log(
        jogadores[i] +
        " - " +
        pontos[i]
    );
}
// // ETAPA 1

// const Empresa1 = "ACF RIO".toUpperCase();
// let AnosDeMercado = 1;
// const EmailParaContato1 = true;
// let Valores = "Etica";
// const Missao = [
//   "Oferecer um serviço diferenciado focando nas necessidades dos nossos clientes,atendendo cada um de forma individualizada,analisando e comprrendendo suas necessidades, acreditamos que analisando cada um dde forma única conseguimos prestar um serviço de excelência",
// ];

// const Empresa2 = "ACF SP".toUpperCase();
// let AnosDeMercado2 = 2;
// const EmailParaContato2 = true;
// let Valores2 = "Responsabilidade";
// const Missao2 = [
//   "Oferecer um serviço diferenciado focando nas necessidades dos nossos clientes,atendendo cada um de forma individualizada,analisando e compreendendo suas necessidades, acreditamos que analisando cada um dde forma única conseguimos prestar um serviço de excelência",
// ];

// const Empresa3 = "ACF BH".toUpperCase();
// let AnosDeMercado3 = 3;
// const EmailParaContato3 = true;
// let Valores3 = "Empatia";
// const Missao3 = [
//   "Oferecer um serviço diferenciado focando nas necessidades dos nossos clientes,atendendo cada um de forma individualizada,analisando e compreendendo suas necessidades, acreditamos que analisando cada um dde forma única conseguimos prestar um serviço de excelência",
// ];

// const MediaDeitens = AnosDeMercado + AnosDeMercado2 + AnosDeMercado3;
// const MediaDeItens2 = MediaDeitens / 3;
// console.log(MediaDeItens2);

// const VerificaçãoDeEmail =
//   EmailParaContato1 && EmailParaContato2 && EmailParaContato3;
// console.log(VerificaçãoDeEmail);

// console.log(Empresa1, AnosDeMercado, EmailParaContato1, Valores, Missao);
// console.log(Empresa2, AnosDeMercado2, EmailParaContato2, Valores2, Missao2);
// console.log(Empresa3, AnosDeMercado3, EmailParaContato3, Valores3, Missao3);

// // ETAPA 3
// Objeto1 = {
//   empresa: "ACF RIO",
//   AnosDeMercado: 3,
//   Valores: "Etica",
//   EmailParaContato: true,
//   Visao: "Ser lider no mercado de rerutamento e selecao",
//   Missao: [
//     "Oferecer um serviço diferenciado focando nas necessidades dos nossos clientes,atendendo cada um de forma individualizada,analisando e comprrendendo suas necessidades, acreditamos que analisando cada um dde forma única conseguimos prestar um serviço de excelência",
//   ],
//   Relatorio: ""

// };


// Objeto2 = {
//   empresa: "ACF SP",
//   AnosDeMercado: 2,
//   Valores: "Responsabilidade",
//   EmailParaContato: true,
//   Visao: "Ser lider no mercado de rerutamento e selecao",
//   Missao: [
//     "Oferecer um serviço diferenciado focando nas necessidades dos nossos clientes,atendendo cada um de forma individualizada,analisando e comprrendendo suas necessidades, acreditamos que analisando cada um dde forma única conseguimos prestar um serviço de excelência",
//   ],
//   Relatorio: ""

// };

// Objeto3 = {
//   empresa: "ACF BH",
//   AnosDeMercado: 1,
//   Valores: "Empatia",
//   EmailParaContato: true,
//   Visao: "Ser lider no mercado de rerutamento e selecao",
//   Missao: [
//     "Oferecer um serviço diferenciado focando nas necessidades dos nossos clientes,atendendo cada um de forma individualizada,analisando e comprrendendo suas necessidades, acreditamos que analisando cada um dde forma única conseguimos prestar um serviço de excelência",
//   ],
//   Relatorio: ""

// };

// let verificarEmail =
//   Objeto1.EmailParaContato &&
//  Objeto2.EmailParaContato &&
//   Objeto3.EmailParaContato;
// console.log(verificarEmail);

// const ArrayVazio = [];

// // ETAPA 4
// Objeto1.EmailParaContato===true? ArrayVazio.push(Objeto1):alert("O item 1 não foi adicionado");
// Objeto2.EmailParaContato===true? ArrayVazio.push(Objeto2):alert("O item 1 não foi adicionado");
// Objeto3.EmailParaContato===true? ArrayVazio.push(Objeto3):alert("O item 1 não foi adicionado");
// console.log(ArrayVazio);

// //Etapa 5

// for (let i = 0; i < ArrayVazio.length; i++) {
//   ArrayVazio[i].Missao = ArrayVazio[i].Missao.join();
//   console.log(ArrayVazio[i].Missao);
// }

// for(let i in ArrayVazio){
//     ArrayVazio[i].Relatorio=(
//         `empresa: ${ArrayVazio[i].empresa}
//          Anos de Mercado ${ArrayVazio[i].AnosDeMercado} 
//          Valores ${ArrayVazio[i].Valores} 
//          Email para contato ${ArrayVazio[i].EmailParaContato}
//           Missao ${ArrayVazio[i].Missao}
//           Visao ${ArrayVazio[i].Visao}`
//     )

// }

// const RelatorioDeEmpresas=(objeto)=>{
//     return objeto.Relatorio
// }
// console.log(RelatorioDeEmpresas(Objeto1))
// console.log(RelatorioDeEmpresas(Objeto2))
// console.log(RelatorioDeEmpresas(Objeto3))




// // ETAPA 6

// // 1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
// //2. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

// const TotalEmpresas=(ArrayObjeto, string)=>{
//     let guardaObjetos=[]
//     for(let i of ArrayObjeto){
//         if(i.empresa===string){
//             guardaObjetos.push(i)
//         }

//     }
//     if(guardaObjetos.length===0){
//         return alert("Essa Empresa não foi encontrada")
//     }else{
//         return guardaObjetos
//     }

// }
// console.log(TotalEmpresas(ArrayVazio, "ACF RIO"))


// //semama 7

// //1. Crie uma página HTML, e nesta página, dê um título para sua lista de itens;
// //2. Crie um cabeçalho, uma seção principal, e um footer para a página;
// //3. Na seção principal. Crie duas divisões. Uma deve possuir um input e um botão. A outra, deve possuir sections para criar os itens da lista;
// //4. Crie uma section para cada item da lista;
// //5. Para cada um dos três itens criados deve possuir todas as informações do array de objetos. As informações devem estar elencadas como lista não ordenada. Esta tela não precisa interagir com o JavaScript, tendo seus dados escritos diretamente nos elementos.
// //6. Transforme o nome/título do item em um link para um artigo sobre este item (pode ser do google, de algum blog ou da Wikipédia)
// //💡 Recomendamos adicionar imagens a seus itens agora. Ao fazer isso, lembre-se de criar mais uma propriedade String nos seus objetos, para guardar o caminho do link até a imagem.


const arrayDom=[
  {
  empresa: "ACF RIO",
  AnosDeMercado: 3,
  Valores: "Ética",
  imagem:"imagem/acfrio.jpeg",
  Link:"https://www.gupy.io/blog/recrutamento-e-selecao",
  EmailParaContato: true,
  Visao: "Ser líder no mercado de Rerutamento e Seleção",
  
  Missao: [
"Oferecer um serviço diferenciado focando nas necessidades dos nossos clientes, atendendo cada um de forma individualizada, analisando e comprrendendo suas necessidades, acreditamos que analisando cada um dde forma única conseguimos prestar um serviço de excelência."
 ],
 Relatorio: ""
},

{
 empresa: "ACF SP",
 AnosDeMercado: 2,
 Valores: "Responsabilidade",
 imagem:"imagem/lu1.jpeg",
 Link:"https://www.gupy.io/blog/recrutamento-e-selecao",
 EmailParaContato: true,
 Visao: "Ser líder no mercado de Rerutamento e Seleção",
 
Missao: [
"Oferecer um serviço diferenciado focando nas necessidades dos nossos clientes, atendendo cada um de forma individualizada, analisando e comprrendendo suas necessidades, acreditamos que analisando cada um de forma única conseguimos prestar um serviço de excelência."
],
Relatorio: ""

},

{

  empresa: "ACF BH",
  AnosDeMercado: 1,
   Valores: "Empatia",
   imagem:"imagem/lu1 (2).jpeg",
   Link:"https://www.gupy.io/blog/recrutamento-e-selecao",
   EmailParaContato: true,
   Visao: "Ser líder no mercado de Rerutamento e Seleção",
   Missao: [
   "Oferecer um serviço diferenciado focando nas necessidades dos nossos clientes,atendendo cada um de forma individualizada,analisando e comprrendendo suas necessidades, acreditamos que analisando cada um dde forma única conseguimos prestar um serviço de excelência",
   ],
  Relatorio: ""

}



]



function EncontrarEmpresa() {
  const input = document.getElementById("search-txt")
  console.log(input.value)
  const EmpresaPesquisada = BuscarEmpresa(input)
  console.log(`${EmpresaPesquisada}` ? EmpresaPesquisada : alert('não encontrado'))
  dom(EmpresaPesquisada)
}
function BuscarEmpresa(input) {
  const BuscarEmpresa = arrayDom.filter((item) => { return item.empresa === input.value.toUpperCase() })
  console.log(`${BuscarEmpresa}` ? BuscarEmpresa : alert('não encontrado'))
  if (BuscarEmpresa.length >= 1) {
    return BuscarEmpresa
  } else {
    return arrayDom
  }
}





function dom(array){
  const empresa = document.getElementById("Empresa1")
  empresa.innerHTML=""
  for(let i=0; i<array.length; i++){
    empresa.innerHTML+=`
    <ul>
    <div class="fotos">
    

    <img src="${array[i].imagem}" alt="Empresa">
    <div/>
    <div>
    
    
    <a href='${array[i].link}' target="_blank" >${array[i].empresa}</a>
    
    <li><b>Empresa:"${array[i].empresa}"</b> </li>
    <li>Anos de Mercado:"${array[i].AnosDeMercado}</li>
    <li>Valores:"${array[i].Valores}  </li>
    <li> Missão:"${array[i].Missao}   </li>
    <li> <b>Visão:${array[i].Visao} </b> </li>
    <div/>
  </ul>
  

    `
  


  }


}
  
dom(arrayDom)

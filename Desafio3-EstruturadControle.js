const prompt =  require('prompt-sync')(); /*Utilizando a biblioteca prompt-sync para executar o resultado no terminal*/

let dev = '';
let linguagem = '';
    dev = prompt("Digite Front-End e Back-End: ");
       if(dev === 'Front-End'){
            linguagem = prompt("Você quer aprender React ou Vue? ");
       } else if(dev === 'Back-End'){
            linguagem = prompt("Você quer aprender C# ou Java? ");

       } else
            console.log("Mensagem não validada")
let Espe_FS = prompt("Digite 1 para seguir se epecializando na área ecolhida ou 2 para eguir desenvolvendo como Full-Stack. ");
       if(Espe_FS == 1){
            console.log(`Continue estudando ${linguagem} e se especializando como desenvolvedor ${dev}`);
       } else if(Espe_FS == 2)
            console.log(`Está na hora de aprender outras linguagens além de ${linguagem} para consolidar sua carreira Fullstack`);

let msg = '';
       msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite ok caso a resposta seja positiva.  ");
                while(msg === "ok"){ 
                    let tec = prompt("Informe a tecnologia: ");
                        console.log(`${tec} é realmente muito interessante`);
                        msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite ok caso a resposta seja positiva ");
                }

            
      
            
        
        
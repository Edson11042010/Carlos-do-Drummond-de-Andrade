const perguntas = [
    {
        texto: "Qual o ano do nascimento de Carlos Drummond de Andrade",
        opcoes: ["1987", "1988", "1989", "1990"],
        respostaCorreta: 0
    },
    {
        texto: "Sua poesia possui uma linguagem simples e, muitas vezes utiliza itonia, humor e refelxão para tratar de situações do dia a dia. Um de seus poemas mais famosos é:",
        opcoes: ["No Meio da Rua", "No Meio da Noite", "No Meio do Caminho", "No Meio dos Pobres"],
        respostaCorreta: 2
    },
    {
        texto: "Carlos Drummond trabalhou também como:",
        opcoes: ["Advogado e Funcionário Público", "Jornalista e Funcionário Público", "Professor e Funcionário Público", "Prefeito e Funcionário Público"],
        respostaCorreta: 1
    },
    {
        texto: "Suas obras abordam quais temas?",
        opcoes: ["O amor, lealdade, sociedade e politica", "A lealdade, as relações humanas, a sociedade e o amor", "A solidão, o amor, a politica e o preconceito", "O amor, a solidão, a vida contiana e as relações humanas"],
        respostaCorreta: 3
    },
    {
        texto: "'Foi um dos mais importantes poetas e escritores brasileiros, sendo um dos grandes representantes da segunda geração'. Qual geração o texto se refere?",
        opcoes: ["Modernismo brasileiro", "Romantismo brasileiro", "Poesia brasileira", "Ultrarromantismo brasileiro"],
        respostaCorreta: 1
    },
    {
        texto: "DESAFIO - Drummond começou a publicar seus textos ainda jovem e, ao longo de sua carreira, escreveu poemas, crônicas e contos. Suas obras abordam temas como o amor, a solidão, a vida cotidiana, a política, as relações humanas, a passagem do tempo e os conflitos do indivíduo com a sociedade. Sua poesia possui uma linguagem simples e, muitas vezes, utiliza ironia, humor e reflexão para tratar de situações do dia a dia. Um de seus poemas mais famosos é “No Meio do Caminho”, que ficou conhecido pelo verso repetitivo sobre uma pedra no caminho. Você acha que Carlos Drummond de Andrade continua sendo um dos maiores nomes da literatura brasileira?",
        opcoes: ["Verdadeiro", "Falso", "Não Sei"],
        respostaCorreta: 0
    },
]

const quiz = document.getElementById("quiz");

quiz.innerHTML = perguntas.map((pergunta, indice) => `
    <div class="questao">
        <h3>Pergunta ${indice + 1}: ${pergunta.texto}</h3>
        <form>
            ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                <input type="radio" name="pergunta${indice}" value="${opcaoIndex}" id="pergunta${indice}-opcao${opcaoIndex}">
                <label for="pergunta${indice}-opcao${opcaoIndex}">${opcao}</label><br>
            `).join('')}
        </form>
    </div>
`).join('') + `
    <button id="ver-pontuacao" type="button">Ver pontuação</button>
    <p id="resultado" aria-live="polite"></p>
`;

document.getElementById("ver-pontuacao").addEventListener("click", () => {
    let pontuacao = 0;

    perguntas.forEach((pergunta, indice) => {
        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );

        if (respostaSelecionada && Number(respostaSelecionada.value) === pergunta.respostaCorreta) {
            pontuacao++;
        }
    });

    document.getElementById("resultado").textContent =
        `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
});

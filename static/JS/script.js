
const questions = [
    {
        "question": "Qual é o principal objetivo da Filosofia da Educação?",
        "options": [
            "Criar regras rígidas para o ensino",
            "Refletir criticamente sobre os processos educativos",
            "Ensinar a decorar conteúdos escolares"
        ],
        "correct": 1,
        "feedback": "Correto! Refletir criticamente sobre os processos educativos."
    },
    {
        "question": "A Filosofia da Educação ajuda os professores a:",
        "options": [
            "Melhorarem apenas as técnicas de ensino",
            "Reproduzirem o currículo escolar",
            "Pensarem sobre os fins e os meios da educação"
        ],
        "correct": 2,
        "feedback": "Correto! Pensarem sobre os fins e os meios da educação."
    },
    {
        "question": "A Filosofia da Educação é importante por quê:",
        "options": [
            "Substitui a prática pedagógica",
            "Questiona o sentido do ato de educar",
            "Reforça métodos tradicionais sem mudanças"
        ],
        "correct": 1,
        "feedback": "Correto! Questiona o sentido do ato de educar."
    },
    {
        "question": "O pensamento filosófico ocidental nasce com a busca por:",
        "options": [
            "Explicações mitológicas",
            "Explicações religiosas",
            "Explicações racionais e filosóficas"
        ],
        "correct": 2,
        "feedback": "Correto! Explicações racionais e filosóficas."
    },
    {
        "question": "Na Grécia Antiga, os primeiros filósofos buscavam:",
        "options": [
            "Dogmas e crenças",
            "Explicações lógicas para a realidade",
            "Regras para a convivência social"
        ],
        "correct": 1,
        "feedback": "Correto! Explicações lógicas para a realidade."
    },
    {
        "question": "A transição do mito à filosofia foi marcada por:",
        "options": [
            "Aceitação de verdades sem questionamento",
            "Criação de doutrinas religiosas",
            "Negação das crenças e a busca pela verdade por meio da razão"
        ],
        "correct": 2,
        "feedback": "Correto! Negação das crenças e a busca pela verdade por meio da razão."
    },
    {
        "question": "O método socrático é conhecido por:",
        "options": [
            "Ensinar através de provas e castigos",
            "Fazer o aluno pensar por meio de perguntas",
            "Expor conteúdos prontos sem diálogo"
        ],
        "correct": 1,
        "feedback": "Correto! Fazer o aluno pensar por meio de perguntas."
    },
    {
        "question": "Platão acreditava que a verdadeira educação levava à:",
        "options": [
            "Obediência cega ao Estado",
            "Liberdade do pensamento e conhecimento das ideias",
            "Aceitação do mundo sensível como verdade absoluta"
        ],
        "correct": 1,
        "feedback": "Correto! Liberdade do pensamento e conhecimento das ideias."
    },
    {
        "question": "Para Sócrates, o conhecimento era algo que:",
        "options": [
            "Deve ser imposto pelo professor",
            "Era adquirido através da virtude, que por sua vez, era adquirido por meio da autorreflexão e constante busca pela verdade",
            "Só é adquirido por meio de livros"
        ],
        "correct": 1,
        "feedback": "Correto! Era adquirido através da virtude, que por sua vez, era adquirido por meio da autorreflexão e constante busca pela verdade."
    },
    {
        "question": "Aristóteles afirmava que o conhecimento vem de:",
        "options": [
            "Revelações divinas",
            "Experiências sensoriais e razão",
            "Tradições religiosas"
        ],
        "correct": 1,
        "feedback": "Correto! Experiências sensoriais e razão."
    },
    {
        "question": "Para Aristóteles, a educação deve desenvolver:",
        "options": [
            "Apenas habilidades técnicas",
            "A ética, o raciocínio e a prática",
            "O instinto e o senso comum"
        ],
        "correct": 1,
        "feedback": "Correto! A ética, o raciocínio e a prática."
    },
    {
        "question": "A base do conhecimento, segundo Aristóteles, está em:",
        "options": [
            "Imitar os deuses",
            "Questionar as leis",
            "Observar e compreender a realidade"
        ],
        "correct": 2,
        "feedback": "Correto! Observar e compreender a realidade."
    },
    {
        "question": "A ética na educação está diretamente ligada a:",
        "options": [
            "Obrigar o aluno a seguir regras",
            "Ensinar valores morais e desenvolver a consciência crítica",
            "Aplicar punições sempre que necessário"
        ],
        "correct": 1,
        "feedback": "Correto! Ensinar valores morais e desenvolver a consciência crítica."
    },
    {
        "question": "O professor ético é aquele que:",
        "options": [
            "Reproduz o conteúdo sem questionar",
            "Impõe suas ideias sem diálogo",
            "Forma cidadãos responsáveis e críticos"
        ],
        "correct": 2,
        "feedback": "Correto! Forma cidadãos responsáveis e críticos."
    },
    {
        "question": "A formação docente deve incluir:",
        "options": [
            "Apenas conhecimento técnico",
            "Práticas autoritárias",
            "Reflexões filosóficas sobre sua atuação"
        ],
        "correct": 2,
        "feedback": "Correto! Reflexões filosóficas sobre sua atuação."
    }
]

let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;

// Carrega a pergunta atual, atualiza a contagem e a barra de progresso
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const progressBar = document.querySelector('.progress-bar');
    const questionCountElement = document.getElementById('questionCount');
    const feedbackElement = document.getElementById('feedback');

    // Limpa o feedback da questão anterior
    feedbackElement.textContent = '';

    // Atualiza a contagem de questões
    questionCountElement.textContent = `Questão ${currentQuestion + 1} de ${totalQuestions}`;

    // Exibe a pergunta e limpa as opções anteriores
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = '';

    // Cria os botões de opção dinamicamente
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });

    // Atualiza a barra de progresso
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
}

// Verifica a resposta e exibe o feedback inline somente se estiver correta
function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correct;
    const options = document.querySelectorAll('.options button');
    const feedbackElement = document.getElementById('feedback');

    // Desabilita os botões para evitar múltiplos cliques
    options.forEach(button => button.disabled = true);

    // Atualiza a pontuação e colore os botões conforme a resposta
    if (selectedIndex === correctIndex) {
        score++;
        document.getElementById('score').textContent = score;
        options[selectedIndex].style.backgroundColor = '#2e8b57';
        // Exibe o feedback somente se a resposta estiver correta
        feedbackElement.textContent = questions[currentQuestion].feedback;
    } else {
        options[selectedIndex].style.backgroundColor = '#cd5c5c';
        options[correctIndex].style.backgroundColor = '#2e8b57';
        // Se a resposta estiver errada, não exibe o feedback explicativo
        feedbackElement.textContent = '';
    }

    // Aguarda 2 segundos e carrega a próxima pergunta
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < totalQuestions) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 2000);
}

// Finaliza o quiz, mostra as estatísticas
function endQuiz() {
    const progressBar = document.querySelector('.progress-bar');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');

    // Limpa o conteúdo residual
    optionsElement.innerHTML = '';
    feedbackElement.textContent = '';

    // Cálculo das estatísticas
    const incorrect = totalQuestions - score;
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    let finalMessage = `Você acertou ${score} de ${totalQuestions} questões!\nErros: ${incorrect}\nPorcentagem: ${percentage}%`;

    // Define o HTML para a mensagem final com destaque se acertos ≥80%
    let finalMessageHTML = '';
    if (percentage >= 80) {
        finalMessageHTML = `<div class="final-message">${finalMessage}\nParabéns, agora você se tornou um filósofo.</div>`;
    } else {
        finalMessageHTML = `<p style="text-align: center; white-space: pre-line;">${finalMessage}</p>`;
    }

    // Atualiza os elementos com a mensagem final e finaliza o quiz
    document.getElementById('question').textContent = "Quiz Concluído!";
    document.getElementById('questionCount').textContent = "";
    optionsElement.innerHTML = finalMessageHTML;
    progressBar.style.width = '100%';
    document.getElementById('restart').style.display = 'block';

    // Exibe a animação
    document.getElementById('philosopherAnimation').style.display = 'block';
    document.getElementById('finalImage').style.display = 'block';
}

// Reinicia o quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('score').textContent = '0';
    document.getElementById('restart').style.display = 'none';
    document.querySelector('.progress-bar').style.width = '0%';
    // Oculta img e animação
    document.getElementById('philosopherAnimation').style.display = 'none';
    document.getElementById('finalImage').style.display = 'none';
    loadQuestion();
}

// Inicia o quiz ao carregar a página
window.onload = loadQuestion;

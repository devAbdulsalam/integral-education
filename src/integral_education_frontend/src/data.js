export let facts = [
    "Corruption slows economic development.",
    "It undermines democratic institutions.",
    "Bribery distorts electoral processes.",
    "Corruption increases business start-up costs.",
    "There is no universally accepted definition of corruption."
];


export const questionsData = [
    {
        numb: 1,
        question: "What is corruption?",
        answer: "C. A complex social, political, and economic phenomenon.",
        options: [
            "A. A simple economic issue.",
            "B. A legal process.",
            "C. A complex social, political, and economic phenomenon.",
            "D. A type of business activity."
        ]
    },
    {
        numb: 2,
        question: "Which of the following is a consequence of corruption?",
        answer: "B. Undermining democratic institutions.",
        options: [
            "A. Boosting economic growth.",
            "B. Undermining democratic institutions.",
            "C. Promoting transparency.",
            "D. Creating efficient legal systems."
        ]
    },
    {
        numb: 3,
        question: "How does corruption affect economic development?",
        answer: "A. It slows down economic growth.",
        options: [
            "A. It slows down economic growth.",
            "B. It boosts foreign direct investment.",
            "C. It creates more job opportunities.",
            "D. It enhances public trust."
        ]
    },
    {
        numb: 4,
        question: "What is one of the key elements in a corrupt act?",
        answer: "D. Abuse of power.",
        options: [
            "A. Legal enforcement.",
            "B. Fair competition.",
            "C. Transparency.",
            "D. Abuse of power."
        ]
    },
    {
        numb: 5,
        question: "Corruption discourages which of the following?",
        answer: "C. Foreign direct investment.",
        options: [
            "A. Public service.",
            "B. Domestic trade.",
            "C. Foreign direct investment.",
            "D. Legal reform."
        ]
    },
    {
        numb: 6,
        question: "How does corruption influence small businesses?",
        answer: "B. It increases startup costs.",
        options: [
            "A. It promotes entrepreneurship.",
            "B. It increases startup costs.",
            "C. It helps small businesses compete.",
            "D. It lowers tax burdens."
        ]
    },
    {
        numb: 7,
        question: "Which of the following is NOT an element of corruption?",
        answer: "A. Transparency.",
        options: [
            "A. Transparency.",
            "B. Authority.",
            "C. Abuse.",
            "D. Benefit."
        ]
    },
    {
        numb: 8,
        question: "How does corruption impact electoral processes?",
        answer: "D. It distorts them.",
        options: [
            "A. It improves participation.",
            "B. It ensures fairness.",
            "C. It increases voter turnout.",
            "D. It distorts them."
        ]
    },
    {
        numb: 9,
        question: "What does corruption often lead to in governments?",
        answer: "C. Instability.",
        options: [
            "A. Growth in trust.",
            "B. Strengthened institutions.",
            "C. Instability.",
            "D. Fair legal systems."
        ]
    },
    {
        numb: 10,
        question: "Which of the following sectors is typically affected by corruption?",
        answer: "A. Public services.",
        options: [
            "A. Public services.",
            "B. Non-profits.",
            "C. Agriculture.",
            "D. Space exploration."
        ]
    },
    {
        numb: 11,
        question: "What happens when someone in authority abuses their power?",
        answer: "B. They engage in corruption.",
        options: [
            "A. They improve democracy.",
            "B. They engage in corruption.",
            "C. They increase transparency.",
            "D. They foster innovation."
        ]
    },
    {
        numb: 12,
        question: "Why is it difficult to create a unified definition of corruption?",
        answer: "C. It varies in interpretation across contexts.",
        options: [
            "A. It has no negative effects.",
            "B. It is only a local issue.",
            "C. It varies in interpretation across contexts.",
            "D. It is legally defined."
        ]
    },
    {
        numb: 13,
        question: "What does corruption undermine in a democracy?",
        answer: "D. Democratic institutions.",
        options: [
            "A. Business growth.",
            "B. Innovation.",
            "C. Tax policies.",
            "D. Democratic institutions."
        ]
    },
    {
        numb: 14,
        question: "In what way does corruption create bureaucratic quagmires?",
        answer: "A. By requiring bribes for progress.",
        options: [
            "A. By requiring bribes for progress.",
            "B. By eliminating unnecessary processes.",
            "C. By speeding up processes.",
            "D. By creating transparency."
        ]
    },
    {
        numb: 15,
        question: "Which of the following can be an outcome of unchecked corruption?",
        answer: "B. Governmental instability.",
        options: [
            "A. Legal reform.",
            "B. Governmental instability.",
            "C. Economic equality.",
            "D. Increased voter trust."
        ]
    },
    {
        numb: 16,
        question: "Corruption often creates which kind of environment in the business world?",
        answer: "C. An unfair playing field.",
        options: [
            "A. A competitive market.",
            "B. An open market.",
            "C. An unfair playing field.",
            "D. A supportive environment."
        ]
    },
    {
        numb: 17,
        question: "How does corruption impact the rule of law?",
        answer: "A. It perverts the rule of law.",
        options: [
            "A. It perverts the rule of law.",
            "B. It strengthens legal frameworks.",
            "C. It enhances fairness.",
            "D. It increases trust in courts."
        ]
    },
    {
        numb: 18,
        question: "Which of the following is a common result of corruption in elections?",
        answer: "B. Electoral processes are distorted.",
        options: [
            "A. Increased voter turnout.",
            "B. Electoral processes are distorted.",
            "C. Transparent voting systems.",
            "D. Strengthened public trust."
        ]
    },
    {
        numb: 19,
        question: "Why does corruption discourage foreign direct investment?",
        answer: "D. It creates instability and uncertainty.",
        options: [
            "A. It fosters innovation.",
            "B. It attracts more investors.",
            "C. It increases trust in the economy.",
            "D. It creates instability and uncertainty."
        ]
    },
    {
        numb: 20,
        question: "What role does authority play in corruption?",
        answer: "C. It grants the power to commit corrupt acts.",
        options: [
            "A. It ensures transparency.",
            "B. It promotes fairness.",
            "C. It grants the power to commit corrupt acts.",
            "D. It creates new laws."
        ]
    },
    {
        numb: 21,
        question: "What can small businesses struggle with in a corrupt system?",
        answer: "B. Overcoming startup costs.",
        options: [
            "A. Hiring employees.",
            "B. Overcoming startup costs.",
            "C. Legal protection.",
            "D. Gaining customer trust."
        ]
    }
];

function getRandomQuestion(num) {
    let shuffled = questionsData.sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, num); // Return the first `num` elements
}

export let questions = getRandomQuestion(5);
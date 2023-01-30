const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const imgBtn = document.querySelector('.imgBtn')
const opnCookie = document.querySelector('.opnCookie')
let phrase = ''


imgBtn.addEventListener('click', phrasesGenerator)
opnCookie.addEventListener('click', toggleScreen)

let phrases = [
    "A vida trará coisas boas se tiveres paciência.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Siga os bons e aprenda com eles.",
    " bom-senso vai mais longe do que muito conhecimento.",
    "Aquele que se importa com o sentimento dos outros, não é um tolo.",
    "É mais fácil conseguir o perdão do que a permissão.",
    "Os defeitos são mais fortes quando o amor é fraco.",
    "Amizade e Amor são coisas que podem virar uma só num piscar de olhos.",
    "Surpreender e ser surpreendido é o segredo do amor.",
]

function phrasesGenerator(e){
    toggleScreen()

    let randomNumber = Math.round(Math.random() * phrases.length)
    phrase = phrases[randomNumber]
    document.querySelector(".screen2 p").innerText = `${phrase}`
    return(phrase)
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

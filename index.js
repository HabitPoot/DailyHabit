let data = [
    {
        "day": 1,
        "esv": [
            "1| In the beginning, God created the heavens and the earth.",
            "2| The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters",
            "3| And God said, \"Let there be light,\" and there was light.",
            "4| And God saw that the light was good. And God separated the light from the darkness.",
            "5| God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day."
        ],
        "krv": [
            "1| 태초에 하나님이 천지를 창조하시니라",
            "2| 땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 신은 수면에 운행 하시니라",
            "3| 하나님이 가라사대 빛이 있으라 하시매 빛이 있었고",
            "4| 그 빛이 하나님의 보시기에 좋았더라 하나님이 빛과 어두움을 나누사",
            "5| 빛을 낮이라 칭하시고 어두움을 밤이라 칭하시니라 저녁이 되며 아침이 되니 이는 첫째 날이니라"
        ],
        "date": "2023-06-27"
    }
]
let root = document.getElementById("root")
let body = document.getElementById("body")
let dark = document.getElementById("dark")
let light = document.getElementById("light")
let esv = document.getElementById("esv")
let krv = document.getElementById("krv")
let both = document.getElementById("both")
let textTags = document.getElementsByClassName("text-tags")
let current = data[data.length - 1];

function retrieveSettings() {
    let lang = localStorage.getItem('language')
    lang ? setLanguage(lang) : setLanguage('krv')
    let prog = localStorage.getItem('progress')
    if (prog) {
        current = data[parseInt(prog)]
    } else {
        current = data[data.length - 1]
    }
}

// function updateDay(day) {
//     localStorage.setItem('progress', day.toString())
// }

function colorMode(color) {
    localStorage.setItem('mode', color)
    switch (color) {
        case 'dark':
            root.classList.add('bg-dark')
            root.classList.remove('bg-light')
            body.classList.add('bg-dark')
            body.classList.remove('bg-light')
            for (let tag of textTags) {
                tag.classList.add('dark')
                tag.classList.remove('light')
            }
            break
        default:
            root.classList.add('bg-light')
            root.classList.remove('bg-dark')
            body.classList.add('bg-light')
            body.classList.remove('bg-dark')
            for (let tag of textTags) {
                tag.classList.add('light')
                tag.classList.remove('dark')
            }
    }
}

function setLanguage(lang) {
    localStorage.setItem('language', lang)
    root.innerHTML = ""
    switch (lang) {
        case 'both':
            for(let i = 0; i < current.krv.length; i++) {
                root.innerHTML += `<p class="text-tags">${current.krv[i]}</p>`
                root.innerHTML += `<p class="text-tags">${current.esv[i]}</p>`
            }
            break
        default:
            for(let verse of current[lang]) {
                root.innerHTML += `<p class="text-tags">${verse}</p>`
            }
    }
    localStorage.getItem('mode') === 'dark' ? colorMode('dark') : colorMode('light')
}

light.addEventListener("click", function () {
    colorMode('light')
})
dark.addEventListener("click", function () {
    colorMode('dark')
})

esv.addEventListener("click", function(){
    setLanguage('esv')
})
krv.addEventListener("click", function(){
    setLanguage('krv')
})
both.addEventListener("click", function(){
    setLanguage('both')
})

retrieveSettings()
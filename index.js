import data from "./data.json" assert {type:'json'}
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
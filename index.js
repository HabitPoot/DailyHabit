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
        "date": "2023-06-27T00:00:00"
    },
    {
        "day":2,
        "esv":[
            "6| And God said, \"Let there be an expanse in the midst of the waters, and let it separate the waters from the waters.\"",
            "7| And God made the expanse and separated the waters that were under the expanse from the waters that were above the expanse. And it was so.",
            "8| And God called the expanse Heaven. And there was evening and there was morning, the second day.",
            "9| And God said, \"Let the waters under the heavens be gathered together into one place, and let the dry land appear.\" And it was so.",
            "10| God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good."
        ],
        "krv":[
            "6| 하나님이 가라사대 물 가운데 궁창이 있어 물과 물로 나뉘게 하리라 하시고",
            "7| 하나님이 궁창을 만드사 궁창 아래의 물과 궁창 위의 물로 나뉘게 하시매 그대로 되니라",
            "8| 하나님이 궁창을 하늘이라 칭하시니라 저녁이 되며 아침이 되니 이는 둘째 날이니라",
            "9| 하나님이 가라사대 천하의 물이 한곳으로 모이고 뭍이 드러나라 하시매 그대로 되니라",
            "10| 하나님이 뭍을 땅이라 칭하시고 모인 물을 바다라 칭하시니라 하나님의 보시기에 좋았더라"
        ],
        "date":"2023-06-28T00:00:00"
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
let tracker = document.getElementById("tracker")
let left = document.getElementById("left")
let right = document.getElementById("right")
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
    updateDay('none')
}

function updateDay(direction) {
    let pos = data.findIndex(d=>d===current)
    switch(direction){
        case 'left':
            if(pos > 0) pos--
            break
        case 'right':
            if(pos < data.length - 1) pos++
            break
    }
    current = data[pos]
    localStorage.setItem('progress', pos.toString())
    tracker.innerHTML = `Day ${pos + 1} of ${data.length} | ${new Date(current.date).toLocaleDateString()}`
    let lang = localStorage.getItem('language')
    setLanguage(lang)
}

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
left.addEventListener("click", function(){
    updateDay('left')
})
right.addEventListener("click", function(){
    updateDay('right')
})

retrieveSettings()
mine = [
    "1| The Lord said to Moses, \"Yet one plague more I will bring upon Pharaoh and upon Egypt. Afterward he will let you go from here. When he lets you go, he will drive you away completely.",
    "2| Speak now in the hearing of the people, that they ask, every man of his neighbor and every woman of her neighbor, for silver and gold jewelry.\"",
    "3| And the Lord gave the people favor in the sight of the Egyptians. Moreover, the man Moses was very great in the land of Egypt, in the sight of Pharaoh's servants and in the sight of the people.",
    "4| So Moses said, \"Thus says the Lord: 'About midnight I will go out in the midst of Egypt,",
    "5| and every firstborn in the land of Egypt shall die, from the firstborn of Pharaoh who sits on his throne, even to the firstborn of the slave girl who is behind the handmill, and all the firstborn of the cattle.",
    "6| There shall be a great cry throughout all the land of Egypt, such as there has never been, nor ever will be again.",
    "7| But not a dog shall growl against any of the people of Israel, either man or beast, that you may know that the Lord makes a distinction between Egypt and Israel.'",
    "8| And all these your servants shall come down to me and bow down to me, saying, 'Get out, you and all the people who follow you.' And after that I will go out.\" And he went out from Pharaoh in hot anger.",
    "9| Then the Lord said to Moses, \"Pharaoh will not listen to you, that my wonders may be multiplied in the land of Egypt.\"",
    "10| Moses and Aaron did all these wonders before Pharaoh, and the Lord hardened Pharaoh's heart, and he did not let the people of Israel go out of his land.",
]
let encoded = ` “ ” `
theirs = `1The Lord said to Moses, “Yet one plague more I will bring upon Pharaoh and upon Egypt. Afterward he will let you go from here. When he lets you go, he will drive you away completely. 2Speak now in the hearing of the people, that they ask, every man of his neighbor and every woman of her neighbor, for silver and gold jewelry.” 3And the Lord gave the people favor in the sight of the Egyptians. Moreover, the man Moses was very great in the land of Egypt, in the sight of Pharaoh’s servants and in the sight of the people.
4So Moses said, “Thus says the Lord: ‘About midnight I will go out in the midst of Egypt, 5and every firstborn in the land of Egypt shall die, from the firstborn of Pharaoh who sits on his throne, even to the firstborn of the slave girl who is behind the handmill, and all the firstborn of the cattle. 6There shall be a great cry throughout all the land of Egypt, such as there has never been, nor ever will be again. 7But not a dog shall growl against any of the people of Israel, either man or beast, that you may know that the Lord makes a distinction between Egypt and Israel.’ 8And all these your servants shall come down to me and bow down to me, saying, ‘Get out, you and all the people who follow you.’ And after that I will go out.” And he went out from Pharaoh in hot anger. 9Then the Lord said to Moses, “Pharaoh will not listen to you, that my wonders may be multiplied in the land of Egypt.”
10Moses and Aaron did all these wonders before Pharaoh, and the Lord hardened Pharaoh’s heart, and he did not let the people of Israel go out of his land.`
theirs = theirs.split("\n").join(" ")
theirs = theirs.split("“").join('"')
theirs = theirs.split("”").join('"')
theirs = theirs.split("‘").join("'")
theirs = theirs.split("’").join("'")
theirs = theirs.split("—").join("-")

console.log(mine.map(v => v.split("| ").join("")).join(" ") === theirs)

let sample = ""
let real = ""
let counter = 0
let foundDouble = false
let lastVerse = ""
let lastSeen = -1

for (let i = 0; i < theirs.length; i++) {
    let currentNum = parseInt(theirs[i])
    let lastNum = parseInt(theirs[i-1])
    if(!isNaN(currentNum)){
        if (!isNaN(lastNum)) {
            lastVerse += currentNum
        } else {
            lastVerse = ""
            lastVerse += currentNum
        }
    }
    if (mine.map(v => v.split("| ").join("")).join(" ")[i] == theirs[i]) {
        sample += theirs[i]
        real += theirs[i]

    } else {
        console.log("Verse", lastVerse)
        console.log(mine.map(v => v.split("| ").join("")).join(" ")[i], "|",theirs[i])
        break;
    }

}
console.log(sample)
mine = [
    "1| The Lord spoke to Moses, saying,",
    "2| \"Speak to the people of Israel, saying, If a woman conceives and bears a male child, then she shall be unclean seven days. As at the time of her menstruation, she shall be unclean.",
    "3| And on the eighth day the flesh of his foreskin shall be circumcised.",
    "4| Then she shall continue for thirty-three days in the blood of her purifying. She shall not touch anything holy, nor come into the sanctuary, until the days of her purifying are completed.",
    "5| But if she bears a female child, then she shall be unclean two weeks, as in her menstruation. And she shall continue in the blood of her purifying for sixty-six days.",
    "6| \"And when the days of her purifying are completed, whether for a son or for a daughter, she shall bring to the priest at the entrance of the tent of meeting a lamb a year old for a burnt offering, and a pigeon or a turtledove for a sin offering,",
    "7| and he shall offer it before the Lord and make atonement for her. Then she shall be clean from the flow of her blood. This is the law for her who bears a child, either male or female.",
    "8| And if she cannot afford a lamb, then she shall take two turtledoves or two pigeons, one for a burnt offering and the other for a sin offering. And the priest shall make atonement for her, and she shall be clean.\"",
]
let encoded = ` “ ” `
theirs = `1The Lord spoke to Moses, saying, 2“Speak to the people of Israel, saying, If a woman conceives and bears a male child, then she shall be unclean seven days. As at the time of her menstruation, she shall be unclean. 3And on the eighth day the flesh of his foreskin shall be circumcised. 4Then she shall continue for thirty-three days in the blood of her purifying. She shall not touch anything holy, nor come into the sanctuary, until the days of her purifying are completed. 5But if she bears a female child, then she shall be unclean two weeks, as in her menstruation. And she shall continue in the blood of her purifying for sixty-six days.
6“And when the days of her purifying are completed, whether for a son or for a daughter, she shall bring to the priest at the entrance of the tent of meeting a lamb a year old for a burnt offering, and a pigeon or a turtledove for a sin offering, 7and he shall offer it before the Lord and make atonement for her. Then she shall be clean from the flow of her blood. This is the law for her who bears a child, either male or female. 8And if she cannot afford a lamb, then she shall take two turtledoves or two pigeons, one for a burnt offering and the other for a sin offering. And the priest shall make atonement for her, and she shall be clean.”`
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
    let lastNum = parseInt(theirs[i - 1])
    if (!isNaN(currentNum)) {
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
        console.log(mine.map(v => v.split("| ").join("")).join(" ")[i], "|", theirs[i])
        break;
    }

}
console.log(sample)
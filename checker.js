mine = [
    "1| The Lord called Moses and spoke to him from the tent of meeting, saying,",
    "2| \"Speak to the people of Israel and say to them, When any one of you brings an offering to the Lord, you shall bring your offering of livestock from the herd or from the flock.",
    "3| \"If his offering is a burnt offering from the herd, he shall offer a male without blemish. He shall bring it to the entrance of the tent of meeting, that he may be accepted before the Lord.",
    "4| He shall lay his hand on the head of the burnt offering, and it shall be accepted for him to make atonement for him.",
    "5| Then he shall kill the bull before the Lord, and Aaron's sons the priests shall bring the blood and throw the blood against the sides of the altar that is at the entrance of the tent of meeting.",
    "6| Then he shall flay the burnt offering and cut it into pieces,",
    "7| and the sons of Aaron the priest shall put fire on the altar and arrange wood on the fire.",
    "8| And Aaron's sons the priests shall arrange the pieces, the head, and the fat, on the wood that is on the fire on the altar;",
    "9| but its entrails and its legs he shall wash with water. And the priest shall burn all of it on the altar, as a burnt offering, a food offering with a pleasing aroma to the Lord.",
    "10| \"If his gift for a burnt offering is from the flock, from the sheep or goats, he shall bring a male without blemish,",
    "11| and he shall kill it on the north side of the altar before the Lord, and Aaron's sons the priests shall throw its blood against the sides of the altar.",
    "12| And he shall cut it into pieces, with its head and its fat, and the priest shall arrange them on the wood that is on the fire on the altar,",
    "13| but the entrails and the legs he shall wash with water. And the priest shall offer all of it and burn it on the altar; it is a burnt offering, a food offering with a pleasing aroma to the Lord.",
    "14| \"If his offering to the Lord is a burnt offering of birds, then he shall bring his offering of turtledoves or pigeons.",
    "15| And the priest shall bring it to the altar and wring off its head and burn it on the altar. Its blood shall be drained out on the side of the altar.",
    "16| He shall remove its crop with its contents and cast it beside the altar on the east side, in the place for ashes.",
    "17| He shall tear it open by its wings, but shall not sever it completely. And the priest shall burn it on the altar, on the wood that is on the fire. It is a burnt offering, a food offering with a pleasing aroma to the Lord.",
]
let encoded = ` “ ” `
theirs = `1The Lord called Moses and spoke to him from the tent of meeting, saying, 2“Speak to the people of Israel and say to them, When any one of you brings an offering to the Lord, you shall bring your offering of livestock from the herd or from the flock.
3“If his offering is a burnt offering from the herd, he shall offer a male without blemish. He shall bring it to the entrance of the tent of meeting, that he may be accepted before the Lord. 4He shall lay his hand on the head of the burnt offering, and it shall be accepted for him to make atonement for him. 5Then he shall kill the bull before the Lord, and Aaron’s sons the priests shall bring the blood and throw the blood against the sides of the altar that is at the entrance of the tent of meeting. 6Then he shall flay the burnt offering and cut it into pieces, 7and the sons of Aaron the priest shall put fire on the altar and arrange wood on the fire. 8And Aaron’s sons the priests shall arrange the pieces, the head, and the fat, on the wood that is on the fire on the altar; 9but its entrails and its legs he shall wash with water. And the priest shall burn all of it on the altar, as a burnt offering, a food offering with a pleasing aroma to the Lord.
10“If his gift for a burnt offering is from the flock, from the sheep or goats, he shall bring a male without blemish, 11and he shall kill it on the north side of the altar before the Lord, and Aaron’s sons the priests shall throw its blood against the sides of the altar. 12And he shall cut it into pieces, with its head and its fat, and the priest shall arrange them on the wood that is on the fire on the altar, 13but the entrails and the legs he shall wash with water. And the priest shall offer all of it and burn it on the altar; it is a burnt offering, a food offering with a pleasing aroma to the Lord.
14“If his offering to the Lord is a burnt offering of birds, then he shall bring his offering of turtledoves or pigeons. 15And the priest shall bring it to the altar and wring off its head and burn it on the altar. Its blood shall be drained out on the side of the altar. 16He shall remove its crop with its contents and cast it beside the altar on the east side, in the place for ashes. 17He shall tear it open by its wings, but shall not sever it completely. And the priest shall burn it on the altar, on the wood that is on the fire. It is a burnt offering, a food offering with a pleasing aroma to the Lord.`
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
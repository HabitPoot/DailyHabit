mine = [
    "1| \"If his offering is a sacrifice of peace offering, if he offers an animal from the herd, male or female, he shall offer it without blemish before the Lord.",
    "2| And he shall lay his hand on the head of his offering and kill it at the entrance of the tent of meeting, and Aaron's sons the priests shall throw the blood against the sides of the altar.",
    "3| And from the sacrifice of the peace offering, as a food offering to the Lord, he shall offer the fat covering the entrails and all the fat that is on the entrails,",
    "4| and the two kidneys with the fat that is on them at the loins, and the long lobe of the liver that he shall remove with the kidneys.",
    "5| Then Aaron's sons shall burn it on the altar on top of the burnt offering, which is on the wood on the fire; it is a food offering with a pleasing aroma to the Lord.",
    "6| \"If his offering for a sacrifice of peace offering to the Lord is an animal from the flock, male or female, he shall offer it without blemish.",
    "7| If he offers a lamb for his offering, then he shall offer it before the Lord,",
    "8| lay his hand on the head of his offering, and kill it in front of the tent of meeting; and Aaron's sons shall throw its blood against the sides of the altar.",
    "9| Then from the sacrifice of the peace offering he shall offer as a food offering to the Lord its fat; he shall remove the whole fat tail, cut off close to the backbone, and the fat that covers the entrails and all the fat that is on the entrails",
    "10| and the two kidneys with the fat that is on them at the loins and the long lobe of the liver that he shall remove with the kidneys.",
    "11| And the priest shall burn it on the altar as a food offering to the Lord.",
    "12| \"If his offering is a goat, then he shall offer it before the Lord",
    "13| and lay his hand on its head and kill it in front of the tent of meeting, and the sons of Aaron shall throw its blood against the sides of the altar.",
    "14| Then he shall offer from it, as his offering for a food offering to the Lord, the fat covering the entrails and all the fat that is on the entrails",
    "15| and the two kidneys with the fat that is on them at the loins and the long lobe of the liver that he shall remove with the kidneys.",
    "16| And the priest shall burn them on the altar as a food offering with a pleasing aroma. All fat is the Lord's.",
    "17| It shall be a statute forever throughout your generations, in all your dwelling places, that you eat neither fat nor blood.\"",
]
let encoded = ` “ ” `
theirs = `1“If his offering is a sacrifice of peace offering, if he offers an animal from the herd, male or female, he shall offer it without blemish before the Lord. 2And he shall lay his hand on the head of his offering and kill it at the entrance of the tent of meeting, and Aaron’s sons the priests shall throw the blood against the sides of the altar. 3And from the sacrifice of the peace offering, as a food offering to the Lord, he shall offer the fat covering the entrails and all the fat that is on the entrails, 4and the two kidneys with the fat that is on them at the loins, and the long lobe of the liver that he shall remove with the kidneys. 5Then Aaron’s sons shall burn it on the altar on top of the burnt offering, which is on the wood on the fire; it is a food offering with a pleasing aroma to the Lord.
6“If his offering for a sacrifice of peace offering to the Lord is an animal from the flock, male or female, he shall offer it without blemish. 7If he offers a lamb for his offering, then he shall offer it before the Lord, 8lay his hand on the head of his offering, and kill it in front of the tent of meeting; and Aaron’s sons shall throw its blood against the sides of the altar. 9Then from the sacrifice of the peace offering he shall offer as a food offering to the Lord its fat; he shall remove the whole fat tail, cut off close to the backbone, and the fat that covers the entrails and all the fat that is on the entrails 10and the two kidneys with the fat that is on them at the loins and the long lobe of the liver that he shall remove with the kidneys. 11And the priest shall burn it on the altar as a food offering to the Lord.
12“If his offering is a goat, then he shall offer it before the Lord 13and lay his hand on its head and kill it in front of the tent of meeting, and the sons of Aaron shall throw its blood against the sides of the altar. 14Then he shall offer from it, as his offering for a food offering to the Lord, the fat covering the entrails and all the fat that is on the entrails 15and the two kidneys with the fat that is on them at the loins and the long lobe of the liver that he shall remove with the kidneys. 16And the priest shall burn them on the altar as a food offering with a pleasing aroma. All fat is the Lord’s. 17It shall be a statute forever throughout your generations, in all your dwelling places, that you eat neither fat nor blood.”`
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
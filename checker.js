mine = [
    "1| \"You shall make the altar of acacia wood, five cubits long and five cubits broad. The altar shall be square, and its height shall be three cubits.",
    "2| And you shall make horns for it on its four corners; its horns shall be of one piece with it, and you shall overlay it with bronze.",
    "3| You shall make pots for it to receive its ashes, and shovels and basins and forks and fire pans. You shall make all its utensils of bronze.",
    "4| You shall also make for it a grating, a network of bronze, and on the net you shall make four bronze rings at its four corners.",
    "5| And you shall set it under the ledge of the altar so that the net extends halfway down the altar.",
    "6| And you shall make poles for the altar, poles of acacia wood, and overlay them with bronze.",
    "7| And the poles shall be put through the rings, so that the poles are on the two sides of the altar when it is carried.",
    "8| You shall make it hollow, with boards. As it has been shown you on the mountain, so shall it be made.",
    "9| \"You shall make the court of the tabernacle. On the south side the court shall have hangings of fine twined linen a hundred cubits long for one side.",
    "10| Its twenty pillars and their twenty bases shall be of bronze, but the hooks of the pillars and their fillets shall be of silver.",
    "11| And likewise for its length on the north side there shall be hangings a hundred cubits long, its pillars twenty and their bases twenty, of bronze, but the hooks of the pillars and their fillets shall be of silver.",
    "12| And for the breadth of the court on the west side there shall be hangings for fifty cubits, with ten pillars and ten bases.",
    "13| The breadth of the court on the front to the east shall be fifty cubits.",
    "14| The hangings for the one side of the gate shall be fifteen cubits, with their three pillars and three bases.",
    "15| On the other side the hangings shall be fifteen cubits, with their three pillars and three bases.",
    "16| For the gate of the court there shall be a screen twenty cubits long, of blue and purple and scarlet yarns and fine twined linen, embroidered with needlework. It shall have four pillars and with them four bases.",
    "17| All the pillars around the court shall be filleted with silver. Their hooks shall be of silver, and their bases of bronze.",
    "18| The length of the court shall be a hundred cubits, the breadth fifty, and the height five cubits, with hangings of fine twined linen and bases of bronze.",
    "19| All the utensils of the tabernacle for every use, and all its pegs and all the pegs of the court, shall be of bronze.",
    "20| \"You shall command the people of Israel that they bring to you pure beaten olive oil for the light, that a lamp may regularly be set up to burn.",
    "21| In the tent of meeting, outside the veil that is before the testimony, Aaron and his sons shall tend it from evening to morning before the Lord. It shall be a statute forever to be observed throughout their generations by the people of Israel.",
]
let encoded = ` “ ” `
theirs = `1“You shall make the altar of acacia wood, five cubits long and five cubits broad. The altar shall be square, and its height shall be three cubits. 2And you shall make horns for it on its four corners; its horns shall be of one piece with it, and you shall overlay it with bronze. 3You shall make pots for it to receive its ashes, and shovels and basins and forks and fire pans. You shall make all its utensils of bronze. 4You shall also make for it a grating, a network of bronze, and on the net you shall make four bronze rings at its four corners. 5And you shall set it under the ledge of the altar so that the net extends halfway down the altar. 6And you shall make poles for the altar, poles of acacia wood, and overlay them with bronze. 7And the poles shall be put through the rings, so that the poles are on the two sides of the altar when it is carried. 8You shall make it hollow, with boards. As it has been shown you on the mountain, so shall it be made.
9“You shall make the court of the tabernacle. On the south side the court shall have hangings of fine twined linen a hundred cubits long for one side. 10Its twenty pillars and their twenty bases shall be of bronze, but the hooks of the pillars and their fillets shall be of silver. 11And likewise for its length on the north side there shall be hangings a hundred cubits long, its pillars twenty and their bases twenty, of bronze, but the hooks of the pillars and their fillets shall be of silver. 12And for the breadth of the court on the west side there shall be hangings for fifty cubits, with ten pillars and ten bases. 13The breadth of the court on the front to the east shall be fifty cubits. 14The hangings for the one side of the gate shall be fifteen cubits, with their three pillars and three bases. 15On the other side the hangings shall be fifteen cubits, with their three pillars and three bases. 16For the gate of the court there shall be a screen twenty cubits long, of blue and purple and scarlet yarns and fine twined linen, embroidered with needlework. It shall have four pillars and with them four bases. 17All the pillars around the court shall be filleted with silver. Their hooks shall be of silver, and their bases of bronze. 18The length of the court shall be a hundred cubits, the breadth fifty, and the height five cubits, with hangings of fine twined linen and bases of bronze. 19All the utensils of the tabernacle for every use, and all its pegs and all the pegs of the court, shall be of bronze.
20“You shall command the people of Israel that they bring to you pure beaten olive oil for the light, that a lamp may regularly be set up to burn. 21In the tent of meeting, outside the veil that is before the testimony, Aaron and his sons shall tend it from evening to morning before the Lord. It shall be a statute forever to be observed throughout their generations by the people of Israel.`
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
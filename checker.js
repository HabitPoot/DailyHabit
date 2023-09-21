mine = [
    "1| The Lord said to Moses,",
    "2| \"See, I have called by name Bezalel the son of Uri, son of Hur, of the tribe of Judah,",
    "3| and I have filled him with the Spirit of God, with ability and intelligence, with knowledge and all craftsmanship,",
    "4| to devise artistic designs, to work in gold, silver, and bronze,",
    "5| in cutting stones for setting, and in carving wood, to work in every craft.",
    "6| And behold, I have appointed with him Oholiab, the son of Ahisamach, of the tribe of Dan. And I have given to all able men ability, that they may make all that I have commanded you:",
    "7| the tent of meeting, and the ark of the testimony, and the mercy seat that is on it, and all the furnishings of the tent,",
    "8| the table and its utensils, and the pure lampstand with all its utensils, and the altar of incense,",
    "9| and the altar of burnt offering with all its utensils, and the basin and its stand,",
    "10| and the finely worked garments, the holy garments for Aaron the priest and the garments of his sons, for their service as priests,",
    "11| and the anointing oil and the fragrant incense for the Holy Place. According to all that I have commanded you, they shall do.\"",
    "12| And the Lord said to Moses,",
    "13| \"You are to speak to the people of Israel and say, 'Above all you shall keep my Sabbaths, for this is a sign between me and you throughout your generations, that you may know that I, the Lord, sanctify you.",
    "14| You shall keep the Sabbath, because it is holy for you. Everyone who profanes it shall be put to death. Whoever does any work on it, that soul shall be cut off from among his people.",
    "15| Six days shall work be done, but the seventh day is a Sabbath of solemn rest, holy to the Lord. Whoever does any work on the Sabbath day shall be put to death.",
    "16| Therefore the people of Israel shall keep the Sabbath, observing the Sabbath throughout their generations, as a covenant forever.",
    "17| It is a sign forever between me and the people of Israel that in six days the Lord made heaven and earth, and on the seventh day he rested and was refreshed.'\"",
    "18| And he gave to Moses, when he had finished speaking with him on Mount Sinai, the two tablets of the testimony, tablets of stone, written with the finger of God.",
]
let encoded = ` “ ” `
theirs = `1The Lord said to Moses, 2“See, I have called by name Bezalel the son of Uri, son of Hur, of the tribe of Judah, 3and I have filled him with the Spirit of God, with ability and intelligence, with knowledge and all craftsmanship, 4to devise artistic designs, to work in gold, silver, and bronze, 5in cutting stones for setting, and in carving wood, to work in every craft. 6And behold, I have appointed with him Oholiab, the son of Ahisamach, of the tribe of Dan. And I have given to all able men ability, that they may make all that I have commanded you: 7the tent of meeting, and the ark of the testimony, and the mercy seat that is on it, and all the furnishings of the tent, 8the table and its utensils, and the pure lampstand with all its utensils, and the altar of incense, 9and the altar of burnt offering with all its utensils, and the basin and its stand, 10and the finely worked garments, the holy garments for Aaron the priest and the garments of his sons, for their service as priests, 11and the anointing oil and the fragrant incense for the Holy Place. According to all that I have commanded you, they shall do.”
12And the Lord said to Moses, 13“You are to speak to the people of Israel and say, ‘Above all you shall keep my Sabbaths, for this is a sign between me and you throughout your generations, that you may know that I, the Lord, sanctify you. 14You shall keep the Sabbath, because it is holy for you. Everyone who profanes it shall be put to death. Whoever does any work on it, that soul shall be cut off from among his people. 15Six days shall work be done, but the seventh day is a Sabbath of solemn rest, holy to the Lord. Whoever does any work on the Sabbath day shall be put to death. 16Therefore the people of Israel shall keep the Sabbath, observing the Sabbath throughout their generations, as a covenant forever. 17It is a sign forever between me and the people of Israel that in six days the Lord made heaven and earth, and on the seventh day he rested and was refreshed.’”
18And he gave to Moses, when he had finished speaking with him on Mount Sinai, the two tablets of the testimony, tablets of stone, written with the finger of God.`
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
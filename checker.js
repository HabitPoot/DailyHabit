mine = [
    "1| Now Sarai, Abram's wife, had borne him no children. She had a female Egyptian servant whose name was Hagar.",
    "2| And Sarai said to Abram, \"Behold now, the Lord has prevented me from bearing children. Go in to my servant; it may be that I shall obtain children by her.\" And Abram listened to the voice of Sarai.",
    "3| So, after Abram had lived ten years in the land of Canaan, Sarai, Abram's wife, took Hagar the Egyptian, her servant, and gave her to Abram her husband as a wife.",
    "4| And he went in to Hagar, and she conceived. And when she saw that she had conceived, she looked with contempt on her mistress.",
    "5| And Sarai said to Abram, \"May the wrong done to me be on you! I gave my servant to your embrace, and when she saw that she had conceived, she looked on me with contempt. May the Lord judge between you and me!\"",
    "6| But Abram said to Sarai, \"Behold, your servant is in your power; do to her as you please.\" Then Sarai dealt harshly with her, and she fled from her.",
    "7| The angel of the Lord found her by a spring of water in the wilderness, the spring on the way to Shur.",
    "8| And he said, \"Hagar, servant of Sarai, where have you come from and where are you going?\" She said, \"I am fleeing from my mistress Sarai.\"",
    "9| The angel of the Lord said to her, \"Return to your mistress and submit to her.\"",
    "10| The angel of the Lord also said to her, \"I will surely multiply your offspring so that they cannot be numbered for multitude.\"",
    "11| And the angel of the Lord said to her, \"Behold, you are pregnant and shall bear a son. You shall call his name Ishmael, because the Lord has listened to your affliction.",
    "12| He shall be a wild donkey of a man, his hand against everyone and everyone's hand against him, and he shall dwell over against all his kinsmen.\"",
    "13| So she called the name of the Lord who spoke t o her, \"You are a God of seeing,\" for she said, \"Truly here I have seen him who looks after me.\"",
    "14| Therefore the well was called Beer-lahai-roi; it lies between Kadesh and Bered.",
    "15| And Hagar bore Abram a son, and Abram called the name of his son, whom Hagar bore, Ishmael.",
    "16| Abram was eighty-six years old when Hagar bore Ishmael to Abram.",
]
let encoded = ` “ ” `
theirs = `1Now Sarai, Abram’s wife, had borne him no children. She had a female Egyptian servant whose name was Hagar. 2And Sarai said to Abram, “Behold now, the Lord has prevented me from bearing children. Go in to my servant; it may be that I shall obtain children by her.” And Abram listened to the voice of Sarai. 3So, after Abram had lived ten years in the land of Canaan, Sarai, Abram’s wife, took Hagar the Egyptian, her servant, and gave her to Abram her husband as a wife. 4And he went in to Hagar, and she conceived. And when she saw that she had conceived, she looked with contempt on her mistress. 5And Sarai said to Abram, “May the wrong done to me be on you! I gave my servant to your embrace, and when she saw that she had conceived, she looked on me with contempt. May the Lord judge between you and me!” 6But Abram said to Sarai, “Behold, your servant is in your power; do to her as you please.” Then Sarai dealt harshly with her, and she fled from her.
7The angel of the Lord found her by a spring of water in the wilderness, the spring on the way to Shur. 8And he said, “Hagar, servant of Sarai, where have you come from and where are you going?” She said, “I am fleeing from my mistress Sarai.” 9The angel of the Lord said to her, “Return to your mistress and submit to her.” 10The angel of the Lord also said to her, “I will surely multiply your offspring so that they cannot be numbered for multitude.” 11And the angel of the Lord said to her,
“Behold, you are pregnant
and shall bear a son.
You shall call his name Ishmael,
because the Lord has listened to your affliction.
12He shall be a wild donkey of a man,
his hand against everyone
and everyone’s hand against him,
and he shall dwell over against all his kinsmen.”
13So she called the name of the Lord who spoke to her, “You are a God of seeing,” for she said, “Truly here I have seen him who looks after me.” 14Therefore the well was called Beer-lahai-roi; it lies between Kadesh and Bered.
15And Hagar bore Abram a son, and Abram called the name of his son, whom Hagar bore, Ishmael. 16Abram was eighty-six years old when Hagar bore Ishmael to Abram.`
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
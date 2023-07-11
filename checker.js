mine = [
    "1| And God blessed Noah and his sons and said to them, \"Be fruitful and multiply and fill the earth.",
    "2| The fear of you and the dread of you shall be upon every beast of the earth and upon every bird of the heavens, upon everything that creeps on the ground and all the fish of the sea. Into your hand they are delivered.",
    "3| Every moving thing that lives shall be food for you. And as I gave you the green plants, I give you everything.",
    "4| But you shall not eat flesh with its life, that is, its blood.",
    "5| And for your lifeblood I will require a reckoning: from every beast I will require it and from man. From his fellow man I will require a reckoning for the life of man.",
    "6|  \"Whoever sheds the blood of man, by man shall his blood be shed, for God made man in his own image.",
    "7| And you, be fruitful and multiply, increase greatly on the earth and multiply in it.\"",
    "8| Then God said to Noah and to his sons with him,",
    "9| \"Behold, I establish my covenant with you and your offspring after you,",
    "10| and with every living creature that is with you, the birds, the livestock, and every beast of the earth with you, as many as came out of the ark; it is for every beast of the earth.",
    "11| I establish my covenant with you, that never again shall all flesh be cut off by the waters of the flood, and never again shall there be a flood to destroy the earth.\"",
    "12| And God said, \"This is the sign of the covenant that I make between me and you and every living creature that is with you, for all future generations:",
    "13| I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth.",
    "14| When I bring clouds over the earth and the bow is seen in the clouds,",
    "15| I will remember my covenant that is between me and you and every living creature of all flesh. And the waters shall never again become a flood to destroy all flesh.",
    "16| When the bow is in the clouds, I will see it and remember the everlasting covenant between God and every living creature of all flesh that is on the earth.\"",
    "17| God said to Noah, \"This is the sign of the covenant that I have established between me and all flesh that is on the earth.\"",
    "18| The sons of Noah who went forth from the ark were Shem, Ham, and Japheth. (Ham was the father of Canaan.)",
    "19| These three were the sons of Noah, and from these the people of the whole earth were dispersed.",
    "20| Noah began to be a man of the soil, and he planted a vineyard.",
    "21| He drank of the wine and became drunk and lay uncovered in his tent.",
    "22| And Ham, the father of Canaan, saw the nakedness of his father and told his two brothers outside.",
    "23| Then Shem and Japheth took a garment, laid it on both their shoulders, and walked backward and covered the nakedness of their father. Their faces were turned backward, and they did not see their father's nakedness.",
    "24| When Noah awoke from his wine and knew what his youngest son had done to him,",
    "25| he said, \"Cursed be Canaan; a servant of servants shall he be to his brothers.\"",
    "26| He also said, \"Blessed be the Lord, the God of Shem; and let Canaan be his servant.",
    "27| May God enlarge Japheth, and let him dwell in the tents of Shem, and let Canaan be his servant.\"",
    "28| After the flood Noah lived 350 years.",
    "29| All the days of Noah were 950 years, and he died."
]
let encoded = ` “ ” `
theirs = `1And God blessed Noah and his sons and said to them, “Be fruitful and multiply and fill the earth. 2The fear of you and the dread of you shall be upon every beast of the earth and upon every bird of the heavens, upon everything that creeps on the ground and all the fish of the sea. Into your hand they are delivered. 3Every moving thing that lives shall be food for you. And as I gave you the green plants, I give you everything. 4But you shall not eat flesh with its life, that is, its blood. 5And for your lifeblood I will require a reckoning: from every beast I will require it and from man. From his fellow man I will require a reckoning for the life of man.
6 “Whoever sheds the blood of man,
by man shall his blood be shed,
for God made man in his own image.
7And you, be fruitful and multiply, increase greatly on the earth and multiply in it.”
8Then God said to Noah and to his sons with him, 9“Behold, I establish my covenant with you and your offspring after you, 10and with every living creature that is with you, the birds, the livestock, and every beast of the earth with you, as many as came out of the ark; it is for every beast of the earth. 11I establish my covenant with you, that never again shall all flesh be cut off by the waters of the flood, and never again shall there be a flood to destroy the earth.” 12And God said, “This is the sign of the covenant that I make between me and you and every living creature that is with you, for all future generations: 13I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth. 14When I bring clouds over the earth and the bow is seen in the clouds, 15I will remember my covenant that is between me and you and every living creature of all flesh. And the waters shall never again become a flood to destroy all flesh. 16When the bow is in the clouds, I will see it and remember the everlasting covenant between God and every living creature of all flesh that is on the earth.” 17God said to Noah, “This is the sign of the covenant that I have established between me and all flesh that is on the earth.”
18The sons of Noah who went forth from the ark were Shem, Ham, and Japheth. (Ham was the father of Canaan.) 19These three were the sons of Noah, and from these the people of the whole earth were dispersed.
20Noah began to be a man of the soil, and he planted a vineyard. 21He drank of the wine and became drunk and lay uncovered in his tent. 22And Ham, the father of Canaan, saw the nakedness of his father and told his two brothers outside. 23Then Shem and Japheth took a garment, laid it on both their shoulders, and walked backward and covered the nakedness of their father. Their faces were turned backward, and they did not see their father’s nakedness. 24When Noah awoke from his wine and knew what his youngest son had done to him, 25he said,
“Cursed be Canaan;
a servant of servants shall he be to his brothers.”
26He also said,
“Blessed be the Lord, the God of Shem;
and let Canaan be his servant.
27May God enlarge Japheth,
and let him dwell in the tents of Shem,
and let Canaan be his servant.”
28After the flood Noah lived 350 years. 29All the days of Noah were 950 years, and he died.`
theirs = theirs.split("\n").join(" ")
theirs = theirs.split("“").join('"')
theirs = theirs.split("”").join('"')
theirs = theirs.split("’").join("'")
theirs = theirs.split("—").join("-")
console.log(mine.map(v => v.split("| ").join("")).join(" ") === theirs)

let sample = ""
let real = ""
let counter = 0
for (let i = 0; i < theirs.length; i++) {

    if (mine.map(v => v.split("| ").join("")).join(" ")[i] == theirs[i]) {
        sample += theirs[i]
        real += theirs[i]

    } else {
        console.log(mine.map(v => v.split("| ").join("")).join(" ")[i])
        break;
    }
}
console.log(sample)
console.log(real)
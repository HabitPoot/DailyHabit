mine = [
    "1| Then Isaac called Jacob and blessed him and directed him, \"You must not take a wife from the Canaanite women.",
    "2| Arise, go to Paddan-aram to the house of Bethuel your mother's father, and take as your wife from there one of the daughters of Laban your mother's brother.",
    "3| God Almighty bless you and make you fruitful and multiply you, that you may become a company of peoples.",
    "4| May he give the blessing of Abraham to you and to your offspring with you, that you may take possession of the land of your sojournings that God gave to Abraham!\"",
    "5| Thus Isaac sent Jacob away. And he went to Paddan-aram, to Laban, the son of Bethuel the Aramean, the brother of Rebekah, Jacob's and Esau's mother.",
    "6| Now Esau saw that Isaac had blessed Jacob and sent him away to Paddan-aram to take a wife from there, and that as he blessed him he directed him, \"You must not take a wife from the Canaanite women,\"",
    "7| and that Jacob had obeyed his father and his mother and gone to Paddan-aram.",
    "8| So when Esau saw that the Canaanite women did not please Isaac his father,",
    "9| Esau went to Ishmael and took as his wife, besides the wives he had, Mahalath the daughter of Ishmael, Abraham's son, the sister of Nebaioth.",
    "10| Jacob left Beersheba and went toward Haran.",
    "11| And he came to a certain place and stayed there that night, because the sun had set. Taking one of the stones of the place, he put it under his head and lay down in that place to sleep.",
    "12| And he dreamed, and behold, there was a ladder set up on the earth, and the top of it reached to heaven. And behold, the angels of God were ascending and descending on it!",
    "13| And behold, the Lord stood above it and said, \"I am the Lord, the God of Abraham your father and the God of Isaac. The land on which you lie I will give to you and to your offspring.",
    "14| Your offspring shall be like the dust of the earth, and you shall spread abroad to the west and to the east and to the north and to the south, and in you and your offspring shall all the families of the earth be blessed.",
    "15| Behold, I am with you and will keep you wherever you go, and will bring you back to this land. For I will not leave you until I have done what I have promised you.\"",
    "16| Then Jacob awoke from his sleep and said, \"Surely the Lord is in this place, and I did not know it.\"",
    "17| And he was afraid and said, \"How awesome is this place! This is none other than the house of God, and this is the gate of heaven.\"",
    "18| So early in the morning Jacob took the stone that he had put under his head and set it up for a pillar and poured oil on the top of it.",
    "19| He called the name of that place Bethel, but the name of the city was Luz at the first.",
    "20| Then Jacob made a vow, saying, \"If God will be with me and will keep me in this way that I go, and will give me bread to eat and clothing to wear,",
    "21| so that I come again to my father's house in peace, then the Lord shall be my God,",
    "22| and this stone, which I have set up for a pillar, shall be God's house. And of all that you give me I will give a full tenth to you.\"",
]
let encoded = ` “ ” `
theirs = `1Then Isaac called Jacob and blessed him and directed him, “You must not take a wife from the Canaanite women. 2Arise, go to Paddan-aram to the house of Bethuel your mother’s father, and take as your wife from there one of the daughters of Laban your mother’s brother. 3God Almighty bless you and make you fruitful and multiply you, that you may become a company of peoples. 4May he give the blessing of Abraham to you and to your offspring with you, that you may take possession of the land of your sojournings that God gave to Abraham!” 5Thus Isaac sent Jacob away. And he went to Paddan-aram, to Laban, the son of Bethuel the Aramean, the brother of Rebekah, Jacob’s and Esau’s mother.
6Now Esau saw that Isaac had blessed Jacob and sent him away to Paddan-aram to take a wife from there, and that as he blessed him he directed him, “You must not take a wife from the Canaanite women,” 7and that Jacob had obeyed his father and his mother and gone to Paddan-aram. 8So when Esau saw that the Canaanite women did not please Isaac his father, 9Esau went to Ishmael and took as his wife, besides the wives he had, Mahalath the daughter of Ishmael, Abraham’s son, the sister of Nebaioth.
10Jacob left Beersheba and went toward Haran. 11And he came to a certain place and stayed there that night, because the sun had set. Taking one of the stones of the place, he put it under his head and lay down in that place to sleep. 12And he dreamed, and behold, there was a ladder set up on the earth, and the top of it reached to heaven. And behold, the angels of God were ascending and descending on it! 13And behold, the Lord stood above it and said, “I am the Lord, the God of Abraham your father and the God of Isaac. The land on which you lie I will give to you and to your offspring. 14Your offspring shall be like the dust of the earth, and you shall spread abroad to the west and to the east and to the north and to the south, and in you and your offspring shall all the families of the earth be blessed. 15Behold, I am with you and will keep you wherever you go, and will bring you back to this land. For I will not leave you until I have done what I have promised you.” 16Then Jacob awoke from his sleep and said, “Surely the Lord is in this place, and I did not know it.” 17And he was afraid and said, “How awesome is this place! This is none other than the house of God, and this is the gate of heaven.”
18So early in the morning Jacob took the stone that he had put under his head and set it up for a pillar and poured oil on the top of it. 19He called the name of that place Bethel, but the name of the city was Luz at the first. 20Then Jacob made a vow, saying, “If God will be with me and will keep me in this way that I go, and will give me bread to eat and clothing to wear, 21so that I come again to my father’s house in peace, then the Lord shall be my God, 22and this stone, which I have set up for a pillar, shall be God’s house. And of all that you give me I will give a full tenth to you.”`
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
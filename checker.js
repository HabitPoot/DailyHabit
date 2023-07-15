mine = [
    "1| So Abram went up from Egypt, he and his wife and all that he had, and Lot with him, into the Negeb.",
    "2| Now Abram was very rich in livestock, in silver, and in gold.",
    "3| And he journeyed on from the Negeb as far as Bethel to the place where his tent had been at the beginning, between Bethel and Ai,",
    "4| to the place where he had made an altar at the first. And there Abram called upon the name of the Lord.",
    "5| And Lot, who went with Abram, also had flocks and herds and tents,",
    "6| so that the land could not support both of them dwelling together; for their possessions were so great that they could not dwell together,",
    "7| and there was strife between the herdsmen of Abram's livestock and the herdsmen of Lot's livestock. At that time the Canaanites and the Perizzites were dwelling in the land.",
    "8| Then Abram said to Lot, \"Let there be no strife between you and me, and between your herdsmen and my herdsmen, for we are kinsmen.",
    "9| Is not the whole land before you? Separate yourself from me. If you take the left hand, then I will go to the right, or if you take the right hand, then I will go to the left.\"",
    "10| And Lot lifted up his eyes and saw that the Jordan Valley was well watered everywhere like the garden of the Lord, like the land of Egypt, in the direction of Zoar. (This was before the Lord destroyed Sodom and Gomorrah.)",
    "11| So Lot chose for himself all the Jordan Valley, and Lot journeyed east. Thus they separated from each other.",
    "12| Abram settled in the land of Canaan, while Lot settled among the cities of the valley and moved his tent as far as Sodom.",
    "13| Now the men of Sodom were wicked, great sinners against the Lord.",
    "14| The Lord said to Abram, after Lot had separated from him, \"Lift up your eyes and look from the place where you are, northward and southward and eastward and westward,",
    "15| for all the land that you see I will give to you and to your offspring forever.",
    "16| I will make your offspring as the dust of the earth, so that if one can count the dust of the earth, your offspring also can be counted.",
    "17| Arise, walk through the length and the breadth of the land, for I will give it to you.\"",
    "18| So Abram moved his tent and came and settled by the oaks of Mamre, which are at Hebron, and there he built an altar to the Lord."
]
let encoded = ` “ ” `
theirs = `1So Abram went up from Egypt, he and his wife and all that he had, and Lot with him, into the Negeb.
2Now Abram was very rich in livestock, in silver, and in gold. 3And he journeyed on from the Negeb as far as Bethel to the place where his tent had been at the beginning, between Bethel and Ai, 4to the place where he had made an altar at the first. And there Abram called upon the name of the Lord. 5And Lot, who went with Abram, also had flocks and herds and tents, 6so that the land could not support both of them dwelling together; for their possessions were so great that they could not dwell together, 7and there was strife between the herdsmen of Abram’s livestock and the herdsmen of Lot’s livestock. At that time the Canaanites and the Perizzites were dwelling in the land.
8Then Abram said to Lot, “Let there be no strife between you and me, and between your herdsmen and my herdsmen, for we are kinsmen. 9Is not the whole land before you? Separate yourself from me. If you take the left hand, then I will go to the right, or if you take the right hand, then I will go to the left.” 10And Lot lifted up his eyes and saw that the Jordan Valley was well watered everywhere like the garden of the Lord, like the land of Egypt, in the direction of Zoar. (This was before the Lord destroyed Sodom and Gomorrah.) 11So Lot chose for himself all the Jordan Valley, and Lot journeyed east. Thus they separated from each other. 12Abram settled in the land of Canaan, while Lot settled among the cities of the valley and moved his tent as far as Sodom. 13Now the men of Sodom were wicked, great sinners against the Lord.
14The Lord said to Abram, after Lot had separated from him, “Lift up your eyes and look from the place where you are, northward and southward and eastward and westward, 15for all the land that you see I will give to you and to your offspring forever. 16I will make your offspring as the dust of the earth, so that if one can count the dust of the earth, your offspring also can be counted. 17Arise, walk through the length and the breadth of the land, for I will give it to you.” 18So Abram moved his tent and came and settled by the oaks of Mamre, which are at Hebron, and there he built an altar to the Lord.`
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
let lastVerse = 0
let foundDouble = false
for (let i = 0; i < theirs.length; i++) {
    if (i != theirs.length - 1) {
        if (parseInt(theirs[i]) && !foundDouble){
            if (parseInt(theirs[i+1])){
                lastVerse = parseInt(theirs[i] + theirs[i+1])
                foundDouble = true
            } else {
                lastVerse = parseInt(theirs[i])
                foundDouble = false
            }
        } else if (parseInt(theirs[i]) && foundDouble) {
            foundDouble = false
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
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
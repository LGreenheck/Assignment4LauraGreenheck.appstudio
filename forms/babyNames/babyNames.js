
let BabyNames = ["Laura", "Rian", "Allie", "Katelyn", "Olivia", "Mary", "Lauren", "Claire", "Elizabeth", "Isabel", "Mackenzie", "Ben", "Henry", "Jack", "Thomas", "Colin", "Rachael", "Catherine", "Michael", "Sarah"]
let favBabynames = []

babyNames.onshow = function() {
    for (i = 0; i < BabyNames.length; i++)
        slctName.addItem(BabyNames[i])
}

btnSubmit.onclick = function() {
    favBabynames.push(slctName.text)
    console.log(favBabynames)
    ChangeForm(favBabynames)

}
favBabynames.onshow = function() {
   drpBaby.clear()
   console.log(favBabynames)
   for (i = 0; i < 5; i++)
       drpBaby.addItem(favBabynames[0][i])

   imgTrue.hidden = true
}

drpBaby.onclick = function(s) {
   if (typeof(s) == "object") {
       return
   } else {
       lblBaby.value = `Your favorite baby name was ${s}.`
       imgTrue.hidden = false
   }

}
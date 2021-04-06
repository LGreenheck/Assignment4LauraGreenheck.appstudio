let query = ""
let req = {}
let results = []
let pw = "VanderWielen1808"
let netID = "LMG66722"
let states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

customerState.onshow = function() {
    drpStates.clear()
    for (i = 0; i < states.length; i++)
        drpStates.addItem(states[i])
}

drpStates.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } else {
        drpStates.value = s
    }

    query = "SELECT state FROM customer WHERE 'state' = '" + s + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            lblCNames.textContent = "There is no customer with this state in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][0] + "\n"
            lblCNames.textContent = message
        }
    } else
        lblCNames.textConntent = "Error: " + req.status
}
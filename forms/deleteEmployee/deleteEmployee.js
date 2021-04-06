nameChosen =""
deleteEmployee.onshow=function(){
    query = "SELECT state FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            lblNames.textContent = "There aren't any states in the database."
        else {
            drpNames.clear()
            for (i = 0; i < results.length; i++)
                drpNames.addItem(results[i])
}
} else 
    lblNames.textContent = "Error" + req.status
    }
    


drpNames.onclick=function(s){
  if (typeof(s) == "object")
    return
else {
    drpNames.value = s
    nameChosen = drpNames.value
}
}



btnDelete.onclick=function(){
  query = "DELETE FROM customer WHERE name = '" + nameChosen + "'"      
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    
    if (req.status == 200) {
        if (req.responseText == 500)    
            lblNames.textContent = `You have successfully deleted the employee named ${nameChosen}`
        else
            lblNames.textContent = `There was a problem deleting ${nameChosen} from the database.`
    } else
        lblNames.textContent = `Error: ${req.status}`  
}

btnRefresh.onclick=function(){
  location.reload()
}

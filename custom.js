

$(document).ready(function() {
		$("#submitbutton").click(function() {
				$("#budget").val()  
		})
		$(".cat1button").click(function() {
    		var purchase = Number(prompt("Insert purchase amount ($)"))
    		var spent = Number($(this).siblings(".spent").html())
    		var budget = Number($(this).siblings(".budget").html())
    		var percentage = left(purchase, spent, budget)
    		console.log("spent " + spent)
    		console.log("purchase" + purchase)
    		console.log("budget" + budget)
    		console.log(percentage)
    		$(this).siblings(".percentage").html(percentage)
    		$(this).siblings(".spent").html(spent + purchase)
    		

        })

//         function left(purchase, spent, budget) {
// 	return ((budget - (spent + purchase))/ budget ) * 100
// }
    })


function left(purchase, spent, budget) {

	var totalSpent = spent + purchase
	var totalLeft = budget - totalSpent
	var percentageLeft = (totalLeft / budget) * 100
	percentageLeft = String(percentageLeft) + "%"
	return percentageLeft
}
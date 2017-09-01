

$(document).ready(function() {

	var widthPercentage = 0.6		

	$(".percentage").css("width", (widthPercentage * 100) + "%")
	$(".category p").css("border-color", "green")


	console.log(widthPercentage)

	$("#submitbutton").click(function() {
		$("#budget").val()  
	})

	$(".cat1button").click(function() {
		
		var purchase = Number(prompt("Insert purchase amount ($)"))
		var spent = Number($(this).siblings(".spent").html())
		var budget = Number($(this).siblings(".budget").html())
		var percentage = left(purchase, spent, budget)

		var progressPercentage = ((percentage / 100) * widthPercentage * 100)
		var remainingPercentage = (widthPercentage * 100 - progressPercentage)

		console.log (progressPercentage)
		console.log (remainingPercentage)


		$(this).siblings(".percentage").html(percentage + "%")
		$(this).siblings(".percentage").css("width", progressPercentage + "%")

		$(this).siblings(".remainingPercentage").html((remainingPercentage / widthPercentage) + "%")
		$(this).siblings(".remainingPercentage").css("width", remainingPercentage + "%")
		$(this).siblings(".remainingPercentage").css("visibility", "visible")

		console.log (remainingPercentage)


		$(this).siblings(".spent").html(spent + purchase)

    })

	// $(".percentage").css("width", (percentageLeft * widthPercentage * 100) + "%")
	$(".percentage").css("background-color", "green")

//         function left(purchase, spent, budget) {
// 	return ((budget - (spent + purchase))/ budget ) * 100
// }
})


function left(purchase, spent, budget) {

	var totalSpent = spent + purchase
	var totalLeft = budget - totalSpent
	var percentageLeft = (totalLeft / budget) * 100
	// percentageLeft = String(percentageLeft) + "%"
	return percentageLeft
}
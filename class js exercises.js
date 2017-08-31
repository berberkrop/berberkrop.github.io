
function getcoffee(cb) {
	console.log ("here is your coffee, sir")
	cb()
}

var getBiscuits = function () {
	console.log ("Here are your biscuits, sir")
}

var getCake = function() {
	console.log ("cake, booya!")
}

getcoffee(getBiscuits)
getcoffee(getCake)

$(document).ready(
	getBiscuits
)


"Program own butler, encapsulating function to present himself and then do about five different tasks"


function butlergo(cb) {
	console.log ("Hello, my name is Charles")
	cb()
}

var walkDog = function () {
	console.log ("I will now walk the dog")
}

var clean = function () {
	console.log ("I will clean the apartment")
}

var sheets = function () {
	console.log	 ("I will change the sheets")
}

butlergo(clean)
butlergo(sheets)
butlergo(walkDog)
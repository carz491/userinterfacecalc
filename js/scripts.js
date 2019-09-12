// alert("pokwpeofkwp");
// var add = function(number1, number2) {
// 	return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
// 	return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
// 	return number1 * number2;
// };
//
// var divide = function(number1, number2) {
// 	return number1 / number2;
// };

// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter a second number:"));

// alert(
// 	"Add Total: " + add(number1, number2) +
// 	" | Subtract Total: " + subtract(number1, number2) +
// 	" | Subtract Total: " + multiply(number1, number2) +
// 	" | Subtract Total: " + divide(number1, number2));
//
// 	$(document).ready(function() {
// 	  var number1 = parseInt(prompt("Enter a number:"));
// 	  var number2 = parseInt(prompt("Enter another number:"));
//
// 	  alert(add(number1, number2));
// 	});


//Epicodus Solution

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
	$( "#addition" ).click(function() {
		$("form#add").submit(function(event) {
			event.preventDefault();
			var number1 = parseInt($("#add1").val());
			var number2 = parseInt($("#add2").val());
			var result = add(number1, number2);
			$("#output").text(result);
		});
	});
	$( "#subtract" ).click(function() {
		$("form#add").submit(function(event) {
			event.preventDefault();
			var number1 = parseInt($("#add1").val());
			var number2 = parseInt($("#add2").val());
			var result = subtract(number1, number2);
			$("#output").text(result);
		});
	});
	$( "#multiply" ).click(function() {
		$("form#add").submit(function(event) {
			event.preventDefault();
			var number1 = parseInt($("#add1").val());
			var number2 = parseInt($("#add2").val());
			var result = multiply(number1, number2);
			$("#output").text(result);
		});
	});
	$( "#divide" ).click(function() {
		$("form#add").submit(function(event) {
			event.preventDefault();
			var number1 = parseInt($("#add1").val());
			var number2 = parseInt($("#add2").val());
			var result = divide(number1, number2);
			$("#output").text(result);
		});
	});
	});



// $(document).ready(function() {
//   $("form#add").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#add1").val());
//     var number2 = parseInt($("#add2").val());
// 		var result = add(number1, number2);
// 		$("#output").text(result);
//   });
// });


var allQs = [{
	question: "#1",
	choices: ["A", "B", "C", "D"],
	correctAns: 1,
	},

	{
	question: "#2",
	choices: ["A", "B", "C", "D"],
	correctAns: 0,
	},

	{
	question: "#3",
	choices: ["A", "B", "C", "D"],
	correctAns: 0,
	},

	{
	question: "#4",
	choices: ["A", "B", "C", "D"],
	correctAns: 0,
	},

	{
	question: "#5",
	choices: ["A", "B", "C", "D"],
	correctAns: 0,
	},

	{
	question: "#6",
	choices: ["A", "B", "C", "D"],
	correctAns: 0,
	},

	{
	question: "#7",
	choices: ["A", "B", "C", "D"],
	correctAns: 0,
	},

	{
	question: "#8",
	choices: ["A", "B", "C", "D"],
	correctAns: 0,
	},

];

var currentQ = 0;
var correctAns = 0;

function setupGame(){
	$('#questions').html(currentQ + 1 + ". " + allQs[currentQ].question);
	var options = allQs[currentQ].choices;
	var formHtml = '';
	for(var i=0; i < options.length; i++){
		formHtml += '<div><input type="radio" name="option" value="' + i + '"id="option' + i + '"><label for="option' + i +'">' + allQs[currentQ].choices[i] + '</label></div><br/>';
	}
	$('#ansform').html(formHtml);
	$('#option0').prop('checked', true);
};

function checkAns(){
	if ($("input[name=option]:checked").val() == allQs[currentQ].correctAns) {
		correctAns++;
	};
};

$(document).ready(function() {

  $(".container").hide();
  $('#start').click(function() {
    $(".container").fadeIn();
    $(this).hide();
  });
 });
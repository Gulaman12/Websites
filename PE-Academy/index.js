// By Angelo Terminez(ater906) 8782051

var i = 0;// used in makecounter()
var answers = new Array(); //used in retrieve(), feedback(), submitFeedback()
function selection1(){
    var x = document.getElementById("ageSelect").value;
    if(x == "13-14"){
       document.getElementById("topics").innerHTML = '<form><b>TOPIC: </b><select id = "topicsSelect" onchange="javascript:selection2()"><option value="" disabled selected>Select a Topic</option><option value="Aerobic vs Anaerobic Excerise">Aerobic vs Anaerobic Excerise</option><option value="13-14">adkfjnaskdjfh asdf sa</option><option value="15-16">afshgjdfg asdf </option><option value="17-18">asdfh dfh j </option></select></form';
    }
}
function selection2(){
	var x = document.getElementById("topicsSelect").value;
	if (x = "Aerobic vs Anaerobic Excerise"){
		document.getElementById("letsgo").innerHTML = '<button type = "button" style= " background: #8DA8B2;border-radius: 4px;text-align: center;color: #404C4C; font-size: 15px;" onclick="location.href=\'index2.html\'">Let\'s Go!</button>';
	}
}
function solveIt(){
	document.getElementById("problemCenter").innerHTML = '<table style="width: 65%;margin-left:auto; margin-right:auto; table-layout: fixed;"> <tr><td><h2>PROBLEM CENTER //</h2> <div><h3 style="display: inline;">AGE 13 - 14 // </h3><h5 style="display: inline;"> AEROBIC VS. ANAEROBIC EXCERISE</h5> </div><hr style="width: 90%;border-top: 2px solid #404C4C;margin-top: 12px; margin-bottom: 5px"><a href="index2.html"><p style= "font-size: 11px; color:#404C4C; text-align: left; padding-left:85px;">> BACK TO PROBLEM TYPES</p></a></td></tr><tr><td><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 1px"><h3 style= "padding-bottom: 10px">SOLUTION TO A PROBLEM</h3><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 5px"></td></tr><tr><td>  <p style="text-align: left; padding-left: 85px; font-size: 11px"> <i>Select a problem to solve: </i></p> <p>For each problem below you will be given a case. Read the problem with a context and contruct a solution to the problem with well a thoughtout explanation. You may use resources <u>here</u>. For extra assistance you may ask a teacher but they will not give out solutions. Once you have answered your question and you are satisfied with your level of work. Click Submit and await peer feedback from your group members</p></td></tr><tr><td><div id = "solProblem"><button onclick="answerIt()">Create a Preparation plan for a half marathon</button><br> <button>Lorem ipsum dolor sit amet, maiorum</button><br> <button>Poterat autem inpune; Recte, inquit</button><br> <button>Facillimum id quidem est, inquam</button><br> <button>Maximus dolor, inquit, brevis est. Paria sunt</button><br> <button>Zenonis est, inquam, hoc Stoici</button><br> <button>Duo Reges: constructio interrete. Si quae forte-possumus</button><br> <button>Ea possunt paria non esse. Tanta vis admonitionis</button><br> <button>Quibus ego vehementer assentior</button><br> <button>Certe non potest. Itaque fecimus</button><p></p> </div></td></tr></table>'
}
function answerIt(){
	document.getElementById("problemCenter").innerHTML = '<table style="width: 65%;margin-left:auto; margin-right:auto; table-layout: fixed;"> <tr><td><h2>PROBLEM CENTER //</h2> <div><h3 style="display: inline;">AGE 13 - 14 // </h3><h5 style="display: inline;"> AEROBIC VS. ANAEROBIC EXCERISE</h5> </div><hr style="width: 90%;border-top: 2px solid #404C4C;margin-top: 12px; margin-bottom: 5px"><a href="javascript:solveIt()"><p style= "font-size: 11px; color:#404C4C; text-align: left; padding-left:85px;">> BACK TO PROBLEM\'S TO SOLVE</p></a></td></tr><tr><td><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 1px"><h3 style= "padding-bottom: 10px">Create a Preparation plan for a half marathon</h3><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 5px"></td></tr><tr><td>  <p style="text-align: left; padding-left: 85px; font-size: 11px"> <i>Your Answer: </i></p> <textarea id= "yourAnswer" rows="6" cols="50" style= "width:90%"></textarea><br> <button type="button" style= " background: #8DA8B2;border-radius: 4px;text-align: center;color: #404C4C; font-size: 15px;" onclick="submit()">Submit</button></td></tr><tr><td> <div id="return"></div>  </td></tr></table>'
	//comment out line below to clear local storage, you might want to not press submit while the below line is uncommented
	//localStorage.clear();
}
function submit(){
	var x = document.getElementById("yourAnswer").value;
	var c = makeCounter();
	
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem(c, x);
		document.getElementById("return").innerHTML = '<br><p>Your submission was a success. Well Done!</p><br><button type = "button" style= "background: #8DA8B2;border-radius: 4px;text-align: center;color: #404C4C; font-size: 15px;" onclick="retrieve()">View all members answers on this question</button>';
	}
		 else {
		 	document.getElementById("return").innerHTML = "Sorry your submission failed because there is currently no Web Storage support... Please try again in a few minutes";
	}	
}
function makeCounter(){ //used to make unique name for the button
    i++;
    return i;
}

function retrieve(){
	var problemCenterLayout = '<table style="width: 65%;margin-left:auto; margin-right:auto; table-layout: fixed;"> <tr><td colspan="3"><h2>PROBLEM CENTER //</h2> <div><h3 style="display: inline;">AGE 13 - 14 // </h3><h5 style="display: inline;"> AEROBIC VS. ANAEROBIC EXCERISE</h5> </div><hr style="width: 90%;border-top: 2px solid #404C4C;margin-top: 12px; margin-bottom: 5px"><a href="javascript:solveIt()"><p style= "font-size: 11px; color:#404C4C; text-align: left; padding-left:85px;">> BACK TO PROBLEM\'S TO SOLVE</p></a></td></tr><tr><td colspan="3"><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 1px"><h3 style= "padding-bottom: 10px">Create a Preparation plan for a half marathon</h3><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 5px"></td></tr><tr><td colspan="3">  <p style="text-align: left; padding-left: 85px; font-size: 11px"> <i>All members answers: </i></p></td></tr>';
	
	for ( var i = 0, len = localStorage.length; i < len; ++i ) {
		var problemAnswers = "<tr style = \" \"><td colspan=\"2\" style = \" padding:5px; \"><p style= \"padding-left: 85px; text-align: left;\"> <b>Member #"+(i+1)+"\'s answer:</b></p> <p style= \"padding-left: 85px; text-align: left;\">"+ localStorage.getItem(localStorage.key(i)) + "</p><div id=\"insert\"> <p></p></div></td><td style = \" padding:5px; \"> <button id = \"buttonChange\" style= \" display:inline; background: #8DA8B2;border-radius: 4px;text-align: center;color: #E3F7FF; font-size: 8px;\" onclick=\"feedback(this.name)\" name = \"button"+i+"\">Give feedback</button></td></tr><tr><td colspan=\"3\"> <hr style=\"width: 80%;border-top: 1px solid #404C4C;\"></td></tr>";

  		problemCenterLayout += problemAnswers;
  		answers.push(problemAnswers);
		}
	problemCenterLayout += '</table>';
	document.getElementById("problemCenter").innerHTML = problemCenterLayout;	
}

function feedback(buttonElement){
	var x = buttonElement;
	var arrayLength = answers.length;
		for (var i = 0; i < arrayLength; i++) {
			var y = (answers[i]).indexOf("button"+i);
			y = (answers[i]).substring(y,y+7);
			if (x == y){
				answers[i]= "<tr><td colspan=\"2\" style = \" padding:5px; \"><p style= \"padding-left: 85px; text-align: left;\"> <b>Member #"+(i+1)+"\'s answer:</b></p> <p style= \"padding-left: 85px; text-align: left;\">"+ localStorage.getItem(localStorage.key(i)) + "</p><div id=\"insert\"> <textarea id= \"yourFeedback\" rows=\"3\" cols=\"30\" style= \"width:70%\" name = \"textarea"+i+"\"></textarea></div></td><td style = \" padding:5px; \"> <button id = \"buttonChange\" style= \" display:inline; background: #8DA8B2;border-radius: 4px;text-align: center;color: #E3F7FF; font-size: 8px;\" onclick=\"submitFeedback(this.name)\" name = \"button"+i+"\">Submit feedback</button></td></tr><tr><td colspan=\"3\"> <hr style=\"width: 80%;border-top: 1px solid #404C4C;\"></td></tr>";
			}
			}
	var problemCenterLayout = '<table style="width: 65%;margin-left:auto; margin-right:auto; table-layout: fixed;"> <tr><td colspan="3"><h2>PROBLEM CENTER //</h2> <div><h3 style="display: inline;">AGE 13 - 14 // </h3><h5 style="display: inline;"> AEROBIC VS. ANAEROBIC EXCERISE</h5> </div><hr style="width: 90%;border-top: 2px solid #404C4C;margin-top: 12px; margin-bottom: 5px"><a href="javascript:solveIt()"><p style= "font-size: 11px; color:#404C4C; text-align: left; padding-left:85px;">> BACK TO PROBLEM\'S TO SOLVE</p></a></td></tr><tr><td colspan="3"><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 1px"><h3 style= "padding-bottom: 10px">Create a Preparation plan for a half marathon</h3><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 5px"></td></tr><tr><td colspan="3">  <p style="text-align: left; padding-left: 85px; font-size: 11px"> <i>All members answers: </i></p></td></tr>';
	for (var i = 0; i < arrayLength; i++) {
		problemCenterLayout += answers[i];
	}
	problemCenterLayout += '</table>';
	document.getElementById("problemCenter").innerHTML = problemCenterLayout;

}

function submitFeedback(buttonElement){
	var x = buttonElement.substring(6, 7);
	var text = "textarea"+x;
	var feedValue = document.getElementsByName(text)[0].value;
	var arrayLength = answers.length;
	for (var i = 0; i < arrayLength; i++) {
			var y = (answers[i]).indexOf("textarea"+i);
			y = (answers[i]).substring(y,y+9);
			if (text == y){
				answers[i]= "<tr><td colspan=\"2\" style = \" padding:5px; \"><p style= \"padding-left: 85px; text-align: left;\"> <b>Member #"+(i+1)+"\'s answer:</b></p> <p style= \"padding-left: 85px; text-align: left;\">"+ localStorage.getItem(localStorage.key(i)) + "</p><div id=\"insert\"> <p style= \"padding-left: 85px; text-align: left; font-size:12px\"> <b>Peer feedback: </b> </p><p style= \"padding-left: 85px; text-align: left; font-size: 12px\">"+ feedValue+ "</p></div></td><td style = \" padding:5px; \"> <button id = \"buttonChange\" style= \" display:inline; background: #8DA8B2;border-radius: 4px;text-align: center;color: #E3F7FF; font-size: 8px;\" onclick=\"location.href=\'index2.html\'\" name = \"button"+i+"\">Back To Problem Center</button></td></tr><tr><td colspan=\"3\"> <hr style=\"width: 80%;border-top: 1px solid #404C4C;\"></td></tr>";
			}
		}
	var problemCenterLayout = '<table style="width: 65%;margin-left:auto; margin-right:auto; table-layout: fixed;"> <tr><td colspan="3"><h2>PROBLEM CENTER //</h2> <div><h3 style="display: inline;">AGE 13 - 14 // </h3><h5 style="display: inline;"> AEROBIC VS. ANAEROBIC EXCERISE</h5> </div><hr style="width: 90%;border-top: 2px solid #404C4C;margin-top: 12px; margin-bottom: 5px"><a href="javascript:solveIt()"><p style= "font-size: 11px; color:#404C4C; text-align: left; padding-left:85px;">> BACK TO PROBLEM\'S TO SOLVE</p></a></td></tr><tr><td colspan="3"><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 1px"><h3 style= "padding-bottom: 10px">Create a Preparation plan for a half marathon</h3><hr style="width: 90%;border-top: 1px solid #404C4C;margin-top: 1px; margin-bottom: 5px"></td></tr><tr><td colspan="3">  <p style="text-align: left; padding-left: 85px; font-size: 11px"> <i>All members answers: </i></p></td></tr>';
	for (var i = 0; i < arrayLength; i++) {
		problemCenterLayout += answers[i];
	}
	problemCenterLayout += '</table>';
	document.getElementById("problemCenter").innerHTML = problemCenterLayout;	
}
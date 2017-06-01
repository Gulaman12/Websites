//Angelo Terminez (ater906) 8782051
function myDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.menuDropBtn')) {

    var dropdowns = document.getElementsByClassName("dropdownMenu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function home(){
    var str ="<h1>Computer Science @ UoA</h1> <hr></hr> <p style='color:white;'> Welcome to New Zealand's leading computer science department. We pride ourselves on the excellence of our staff and our students.</p>";
    document.getElementById("menu").innerHTML = str;
}

function courses(){
    var uri = "http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/courses";
    var xhr = new XMLHttpRequest();
    xhr.open("GET",uri,true);
    xhr.onload = function(){
        var response = JSON.parse(xhr.responseText);
        showCourses(response.courses.coursePaperSection);
    }
    xhr.send(null);
}

function showCourses(courses){
    var table = "<h1>Courses</h1><hr></hr>";
    for (var i = 0; i <courses.length; ++i){
        var course = courses[i];
        name = course.subject.courseA;
        title = course.title;
        points = course.subject.points;
        description = course.description;
        prerequisite = course.prerequisite;
        if (description == ""){
            description = " - ";
        }
        if (prerequisite == undefined){
            prerequisite = " - ";
        }
        if (title == ""){
            title = " - ";
        }
        table += "<table><tr><td>"+name+ "</td>" + "<td>"+title+ "</td>"+ "<td style= 'text-align: right;'>"+points+ "</td></tr><tr><td colspan= '3'>"+description+ "</td></tr><tr><td colspan= '3'>"+prerequisite+ "</td></tr></table>\n";
        table += "<hr style = 'width:50%;border-width: 1px; border-style: solid; color:white;'></hr>";
    }
    document.getElementById("menu").innerHTML = table;
}
function people(){
    var uri = "http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/people";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.onload = function(){
        var response = JSON.parse(xhr.responseText);
        showPeople(response.list);
    }
     xhr.send(null);
}
function showPeople(peoples){
    var table = "<h1>People</h1><hr></hr>";;
	for (var i = 0; i <peoples.length; ++i){
		var people = peoples[i];
		var image = "<img style = 'border-radius: 10%;' src='https://unidirectory.auckland.ac.nz/people/imageraw/"+people.profileUrl[1]+"/"+people.imageId+"/small' alt='ID Picture'>";
		var address ="<address> <a href=mailto:"+people.emailAddresses+" style= 'text-decoration:none;' title ="+people.emailAddresses+" >✉️</a> </address>";
		var phone = "<a href='tel:+64 9 3737999,ext="+people.extn+"'style= 'text-decoration:none;'>📞</a>";
		var vcard = "<a href='https://unidirectory.auckland.ac.nz/people/vcard/"+people.profileUrl[1]+"' style= 'text-decoration:none;'>&#x1f464;</a>";
		if (people.imageId == undefined){
			image = "<img style = 'border-radius: 10%;' src='noIdimage.jpg' alt='ID Picture' height='115' width='115'>"
		}
        if (people.extn == undefined){
            phone = "";}
		table += "<table><tr><th rowspan='2'>"+image+"</th><th>"+ people.firstname+" "+people.lastname+"</th><th rowspan='2'>" +vcard+address+phone+" </th></tr><tr><td>"+people.jobtitles+ "</td></tr></table>";
		table += "<hr style = 'width:50%;border-width: 1px; border-style: solid; color:white;'></hr>";
	}
	document.getElementById("menu").innerHTML = table;
}
function news(){
	var uri ="http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/news";
	var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onload = function(){
        var response = JSON.parse(xhr.responseText);
        showTheNews(response);
    }
     xhr.send(null);
}
function showTheNews(articles){
	var table = "<h1>News</h1><hr></hr>";;
	for (var i = 0; i <articles.length; ++i){
		var article = articles[i];
		var weblink = "<a href='"+article.linkField+"' style= 'text-decoration:none;color:white;'>"+article.titleField+"</a>";
		table +="<table><tr><td>"+weblink+"</td><td style= 'text-align: right;'>"+article.pubDateField+"</td></tr><tr><td colspan='2'>"+article.descriptionField+"</td></tr></table>";
		table += "<hr style = 'width:50%;border-width: 1px; border-style: solid; color:white;'></hr>";
	}
	document.getElementById("menu").innerHTML = table;
}
function notices(){
	var uri ="http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/notices";
	var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onload = function(){
        var response = JSON.parse(xhr.responseText);
        showTheNotices(response);
    }
     xhr.send(null);
}
function showTheNotices(notes){
	var table = "<h1>Notices</h1><hr></hr>";;
	for (var i = 0; i <notes.length; ++i){
		var note = notes[i];
		var weblink = "<a href='"+note.linkField+"' style= 'text-decoration:none;color:white;'>"+note.titleField+"</a>";
		table +="<table><tr><td>"+weblink+"</td><td style= 'text-align: right;'>"+note.pubDateField+"</td></tr><tr><td colspan='2'>"+note.descriptionField+"</td></tr></table>";
		table += "<hr style = 'width:50%;border-width: 1px; border-style: solid; color:white;'></hr>";
	}
	document.getElementById("menu").innerHTML = table;
}
function guestbook(){
	var layout ="<h1>Guest Book</h1><hr></hr> <p style = 'color:white;'>Please sign our guest book. Your comments are greatly appreciated</p><div><table style= 'background-color: #323232; padding: 15px; border-radius:25px; width:100%;' align='center'> <tr><td colspan='3'><textarea id='text' rows='6' cols='50' style= 'width:100%'></textarea></td></tr><tr><td style= 'text-align: center;'> Your Name:</td><td style= 'text-align: center;'> <input id='name' type='text' placeholder='Enter your name here'></td><td style= 'text-align: center;'><button type='button' onclick='showguestbook()'>➠</button></td></tr></table></div>";
	layout += "<hr style = 'width:50%;border-width: 1px; border-style: solid; color:white;'></hr><h2 style = 'color:white'>Recent Entries</h2><p id='comment'></p>" ;
	document.getElementById("menu").innerHTML =layout;
	getguestbook();

}
function getguestbook(){
    //var uri = "http://localhost:8188/UniProxService.svc/htmlcomments"
	var uri ="http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/htmlcomments";
	var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onload = function(){
    	document.getElementById("comment").innerHTML = xhr.responseText
    }
    xhr.send(null);
    
}
function showguestbook(){
	var yourname = document.getElementById("name").value;
	var yourcomment = document.getElementById("text").value;
    //var uri = "http://localhost:8188/UniProxService.svc/comment?name="+yourname;
    var uri = "http://redsox.tcs.auckland.ac.nz/ups/UniProxService.svc/comment?name="+yourname;
    var xhr = new XMLHttpRequest();
    xhr.open("POST",uri,true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
        	var response = JSON.parse(xhr.responseText);
            getguestbook();
        }  
    }
    xhr.send(JSON.stringify(yourcomment));
}
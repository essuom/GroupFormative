$(function(){
	let key = 'eHGyRZz5u7oHD5b22xC3XebSc71QLh2C';
	let projectHTML = $('#templatePhotos').text();
	let projectTemplate = Template7(projectHTML).compile();
	let urlProjects = 'https://api.behance.net/v2/users/pervinozcan/projects?client_id='+key;

	var details = 
	{
		name: "Rui Zhou",
		title: "Student",
		born: "Aug 8 , 1985",
		email: "zr1985judy@gmail.com",
		about: "hahaha",
		htmlCSS : ".10",
		webDesign : ".10",
		java : ".10",
		php : ".10",
	}


	let bioHTML = $('#templateBio').text();
	let bioTemplate = Template7(bioHTML).compile();

	var bioOutput = bioTemplate(details);


	$('.troy-intro').append(bioOutput);

	let aboutHTML = $('#templateAbout').text();
	let aboutTemplate = Template7(aboutHTML).compile();

	var aboutOutput = aboutTemplate(details);


	$('.about-me').empty();
	$('.about-me').append(aboutOutput);




})
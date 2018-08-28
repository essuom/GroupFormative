$(function(){
	let key = 'eHGyRZz5u7oHD5b22xC3XebSc71QLh2C';
	let projectHTML = $('#templatePhotos').text();
	let projectTemplate = Template7(projectHTML).compile();
	let urlProjects = 'https://api.behance.net/v2/users/pervinozcan/projects?client_id='+key;

	var details = 
	{
		name: "Catriona Chan",
		title: "Creative",
		born: "Kind of old",
		email: "essuommerro@gmail.com",
		about: "WHAT",
		htmlCSS : .50,
		webDesign : ".10",
		java : ".10",
		php : ".10",
	}


	let bioHTML = $('#templateBio').text();
	let bioTemplate = Template7(bioHTML).compile();

	var bioOutput = bioTemplate(details);


	$('.cat-intro').append(bioOutput);

	$('.cat-intro').on('click', function(){


		// About Text
		let aboutHTML = $('#templateAbout').text();
		let aboutTemplate = Template7(aboutHTML).compile();

		var aboutOutput = aboutTemplate(details);


		$('.about-me').empty();
		$('.about-me').append(aboutOutput);

		// Pie Stats
		let pieHTML = $('#templateStats').text();
		let pieTemplate = Template7(pieHTML).compile();

		var pieOutput = pieTemplate(details);

		$('.pie-stats').append(pieOutput);




	});


})




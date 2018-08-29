$(function(){

	let key = 'OD4RellvdYJQmQup6ki22mLUOsJIGVT4';
	let projectHTML = $('#templatePhotos').text();
	let projectTemplate = Template7(projectHTML).compile();

		let urlUser = 'https://api.behance.net/v2/users/bezantee?client_id='+key+'';

	let urlProjects = 'https://api.behance.net/v2/users/bezantee/projects?client_id='+key;

	var details = 
	{
		name: "Rajiv",
		title: "Front End Developer",
		born: "1993",
		email: "rnarandas@gmail.com",
		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, voluptatem, porro. Beatae.",
		htmlCSS : .60,
		webDesign : ".20",
		java : ".20",
		php : ".20",
	}

	if ($('.rajiv-intro').length > 0){
		$.ajax({
			url:urlUser,
			dataType:'jsonp',
			success:function(res){
				var user = res.user;
				let bioHTML = $('#templateBio').text();
				let bioTemplate = Template7(bioHTML).compile();
				var bioOutput = bioTemplate(user);
				$('.rajiv-intro').append(bioOutput);
			}
		})
	}
	

	// let bioHTML = $('#templateBio').text();
	// let bioTemplate = Template7(bioHTML).compile();

	// var bioOutput = bioTemplate(details);
	// $('.rajiv-intro').append(bioOutput);


	$('.rajiv-intro').on('click', function(){


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




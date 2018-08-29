$(function(){

	var key = 'ykgc3THEeDv6eBUp71hoEz8AplMLEedG';
	// var key = 'WgfZ8Qf6EftAn1yqwMEYnJC37p9nJG0J';

	let urlUser = 'https://api.behance.net/v2/users/vladimirsartdesign?client_id='+key+'';
	let urlProjects = 'https://api.behance.net/v2/users/vladimirsartdesign/projects?client_id='+key;

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


	// using the behance api to change profile
	if ($('.cat-intro').length > 0){
		$.ajax({
			url:urlUser,
			dataType:'jsonp',
			success:function(res){
				var user = res.user;
				console.log(user);
				let bioHTML = $('#templateBio').text();
				let bioTemplate = Template7(bioHTML).compile();
				var bioOutput = bioTemplate(user);
				$('.cat-intro').append(bioOutput);
			}
		})
	}

	// making the list limited
	// console.log(res.projects.slice(0,12));


	// let bioHTML = $('#templateBio').text();
	// let bioTemplate = Template7(bioHTML).compile();

	// var bioOutput = bioTemplate(details);
	// $('.cat-intro').append(bioOutput);


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




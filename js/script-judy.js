$(function(){
	let key = 'K9v5M2jI6thynjC3Ljl9ucKdHhfghDnZ';
	let projectHTML = $('#templatePhotos').text();
	let projectTemplate = Template7(projectHTML).compile();

	let urlUser = 'https://api.behance.net/v2/users/zr1985judy65b2?client_id='+key+'';
	let urlProjects = 'https://api.behance.net/v2/users/zr1985judy65b2/projects?client_id='+key;

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


	if ($('.judy-intro').length > 0){
		$.ajax({
			url:urlUser,
			dataType:'jsonp',
			success:function(res){
				var user = res.user;
				// console.log(user);
				let bioHTML = $('#templateBio').text();
				let bioTemplate = Template7(bioHTML).compile();
				var bioOutput = bioTemplate(user);
				$('.judy-intro').append(bioOutput);
			}
		})
	}



	// let bioHTML = $('#templateBio').text();
	// let bioTemplate = Template7(bioHTML).compile();

	// var bioOutput = bioTemplate(details);
	// $('.judy-intro').append(bioOutput);


	$('.judy-intro').on('click', function(){


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

		// using behance api to change portfolio labels
		if ($('.portfolio-details').length > 0){
			$.ajax({
				url:urlUser,
				dataType:'jsonp',
				success:function(res){
					var user = res.user;
					// console.log(res.user.fields[0]);
					let portDetailsHTML = $('#templatePortfolioDetails').text();
					let portDetailsTemplate = Template7(portDetailsHTML).compile();
					var portDetailsOutput = portDetailsTemplate(user);

					$('.portfolio-details').empty();
					$('.portfolio-details').append(portDetailsOutput);
				}
			});
		}

		// using behance api to change portfolio items
		if ($('.portfolio-box').length > 0){
			$.ajax({
				url:urlProjects,
				dataType:'jsonp',
				success:function(res){
					var projectImages = res.projects;


					_(projectImages.slice(0,12)).each(function(project){
						// console.log(project)
						let portImagesHTML = $('#templatePortfolioImages').text();
						let portImagesTemplate = Template7(portImagesHTML).compile();
						var portImagesOutput = portImagesTemplate(project);

						$('.portfolio-box').empty();
						$('.portfolio-box').append(portImagesOutput);
					});
				}
			});
		}



	});




})
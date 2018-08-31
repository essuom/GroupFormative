var $container;
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
				// console.log(user);
				let bioHTML = $('#templateBio').text();
				let bioTemplate = Template7(bioHTML).compile();
				var bioOutput = bioTemplate(user);
				$('.cat-intro').append(bioOutput);
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


				// _(projectImages.slice(0,12)).each(function(project){
				// 	console.log(project)
				// 	let portImagesHTML = $('#templatePortfolioImages').text();
				// 	let portImagesTemplate = Template7(portImagesHTML).compile();
				// 	var portImagesOutput = portImagesTemplate(project);

				// 	// $('.portfolio-box').empty();
				// 	$('.portfolio-box').append(portImagesOutput);
				// });

				
				// --
				if(isExists('.portfolioContainer')){
						console.log("initial load")
						$container = $('.portfolioContainer');
						console.log($container)
						$container.isotope({
							filter: '*',
							animationOptions: {
								duration: 750,
								easing: 'linear',
								queue: false
							}
						});
					 
						$('.portfolioFilter a').click(function(){
							$('.portfolioFilter .current').removeClass('current');
							$(this).addClass('current');
					 
							var selector = $(this).attr('data-filter');
							$container.isotope({
								filter: selector,
								animationOptions: {
									duration: 750,
									easing: 'linear',
									queue: false
								}
							 });
							 return false;
						}); 
					}

				//--
			}
		});
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

					// $('.portfolio-box').empty();

					$container.isotope( 'remove',$('.portfolio-box>.p-item') );
					_(projectImages.slice(0,12)).each(function(project){
						let portImagesHTML = $('#templatePortfolioImages').text();
						let portImagesTemplate = Template7(portImagesHTML).compile();
						var portImagesOutput = portImagesTemplate(project);

						
						var newItem = $(portImagesOutput).appendTo('.portfolio-box');

						$container.isotope( 'insert', newItem);
					});

				
				}
			});
		}

	});


})
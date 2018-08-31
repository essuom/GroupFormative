var $container;
$(function(){
	let key = 'eHGyRZz5u7oHD5b22xC3XebSc71QLh2C';
	// let projectHTML = $('#templatePhotos').text();
	// let projectTemplate = Template7(projectHTML).compile();

	let urlUser = 'https://api.behance.net/v2/users/pervinozcan?client_id='+key+'';
	let urlProjects = 'https://api.behance.net/v2/users/pervinozcan/projects?client_id='+key;

	var details = 
	{
		name: "Troy Hunter",
		title: "Student",
		born: "May 8 , 1995",
		email: "Troy.z.hunter@gmail.com",
		about: "hi hi",
		htmlCSS : ".10",
		webDesign : ".10",
		java : ".10",
		php : ".10",
	}

	var percentBarHTMLCSS = {
		name: "HTML5 & CSS3",
		percent: '.90'
	}
	var percentBarWeb = {
		name: "Web Design",
		percent: '.87'
	}
	var percentBarJava = {
		name: "Java",
		percent: '.75'
	}
	var percentBarPhp = {
		name: "PHP",
		percent: '.50'
	}


	// using the behance api to change profile
	if ($('.troy-intro').length > 0){
		$.ajax({
			url:urlUser,
			dataType:'jsonp',
			success:function(res){
				var user = res.user;
				// console.log(user);
				let bioHTML = $('#templateBio').text();
				let bioTemplate = Template7(bioHTML).compile();
				var bioOutput = bioTemplate(user);
				$('.troy-intro').append(bioOutput);
			}
		});
	}


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
					console.log(project)
					let portImagesHTML = $('#templatePortfolioImages').text();
					let portImagesTemplate = Template7(portImagesHTML).compile();
					var portImagesOutput = portImagesTemplate(project);

					// $('.portfolio-box').empty();
					$('.portfolio-box').append(portImagesOutput);
				});

				
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

	// About Text
	let aboutHTML = $('#templateAbout').text();
	let aboutTemplate = Template7(aboutHTML).compile();

	var aboutOutput = aboutTemplate(details);


	$('.about-me').empty();
	$('.about-me').append(aboutOutput);

	let percentHTML = $('#templatePercent').text();
	let percentTemplate = Template7(percentHTML).compile();

	var percentOutput = percentTemplate(percentBarHTMLCSS);
	var percentWebOutput = percentTemplate(percentBarWeb);
	var percentJavaOutput = percentTemplate(percentBarJava);
	var percentPhpOutput = percentTemplate(percentBarPhp);

	$('#percentbarHTML').append(percentOutput);
	$('#percentbarWebDesign').append(percentWebOutput);
	$('#percentbarJava').append(percentJavaOutput);
	$('#percentbarPhp').append(percentPhpOutput);

	$('.troy-intro').on('click', function(){


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





	// LINE PROGRESS BAR
	enableLineProgress();
	
	// RADIAL PROGRESS BAR
	enableRadialProgress();

	function enableRadialProgress(){
	
		$(".radial-progress").each(function(){
			var $this = $(this),
				progPercent = $this.data('prog-percent');
				
			var bar = new ProgressBar.Circle(this, {
				color: '#aaa',
				strokeWidth: 3,
				trailWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				text: {
					
				},
				from: { color: '#aaa', width: 1 },
				to: { color: '#FEAE01', width: 3 },
				// Set default step function for all animate calls
				step: function(state, circle) {
					circle.path.setAttribute('stroke', state.color);
					circle.path.setAttribute('stroke-width', state.width);

					var value = Math.round(circle.value() * 100);
					if (value === 0) {
						circle.setText('');
					} else {
						circle.setText(value);
					}

				}
			});
			
			$(this).waypoint(function(){
			   bar.animate(progPercent);  
			},{offset: "90%"})
			
		});
	}

	function enableLineProgress(){
		
		$(".line-progress").each(function(){
			var $this = $(this),
				progPercent = $this.data('prog-percent');
				
			var bar = new ProgressBar.Line(this, {
				strokeWidth: 1,
				easing: 'easeInOut',
				duration: 1400,
				color: '#FEAE01',
				trailColor: '#eee',
				trailWidth: 1,
				svgStyle: {width: '100%', height: '100%'},
				text: {
					style: {
						
					},
				},
				from: {color: '#FFEA82'},
				to: {color: '#ED6A5A'},
				step: (state, bar) => {
					bar.setText(Math.round(bar.value() * 100) + ' %');
				}
			});
			
			$(this).waypoint(function(){
			   bar.animate(progPercent);  
			},{offset: "90%"})
			
		});
	}


	$('.cat-intro').on('click',function(){

		percentBarHTMLCSS = {
			name: "HTML5 & CSS3",
			percent: '.80'
		}
		percentBarWeb = {
			name: "Web Design",
			percent: '.77'
		}
		percentBarJava = {
			name: "Java",
			percent: '.45'
		}
		percentBarPhp = {
			name: "PHP",
			percent: '.80'
		}
		
		$('.radial-progress').css('display','none');

		var percentOutput = percentTemplate(percentBarHTMLCSS);
		var percentWebOutput = percentTemplate(percentBarWeb);
		var percentJavaOutput = percentTemplate(percentBarJava);
		var percentPhpOutput = percentTemplate(percentBarPhp);

		$('#percentbarHTML').append(percentOutput);
		$('#percentbarWebDesign').append(percentWebOutput);
		$('#percentbarJava').append(percentJavaOutput);
		$('#percentbarPhp').append(percentPhpOutput);

		console.log('hi');
		enableLineProgress();
	
		// RADIAL PROGRESS BAR
		enableRadialProgress();





	})

})
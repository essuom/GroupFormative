$(function(){
	let key = 'eHGyRZz5u7oHD5b22xC3XebSc71QLh2C';
	let projectHTML = $('#templatePhotos').text();
	let projectTemplate = Template7(projectHTML).compile();
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


	let bioHTML = $('#templateBio').text();
	let bioTemplate = Template7(bioHTML).compile();

	var bioOutput = bioTemplate(details);


	$('.troy-intro').append(bioOutput);

	let aboutHTML = $('#templateAbout').text();
	let aboutTemplate = Template7(aboutHTML).compile();

	var aboutOutput = aboutTemplate(details);


	$('.about-me').empty();
	$('.about-me').append(aboutOutput);

	let percentHTML = $('#templatePercent').text();
	let percentTemplate = Template7(percentHTML).compile();

	var percentOutput = percentTemplate(details);


	$('#percentbar').empty();
	$('#percentbar').append(percentOutput);


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

})
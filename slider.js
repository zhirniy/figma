	var $slick = $('.slick_carousel'); 
	var img1_contain = $('#img1_contain');
	var img2_contain = $('#img2_contain');
	var img3_contain = $('#img3_contain');
	var img4_contain = $('#img4_contain');
	var img5_contain = $('#img5_contain');
	var img6_contain = $('#img6_contain');
	var img7_contain = $('#img7_contain');
	var img8_contain = $('#img8_contain');
	//user screen  width
	var width = window.innerWidth || document.body.clientWidth;
	//when content onload
	$(document).ready(function(){
		//choice slick by width
		slick_screen_width(width);
	});
	//when user change his  screen  width
	window.onresize = function(event) { 
		width = window.innerWidth || document.body.clientWidth;
		//delete slick
		$slick.slick('unslick'); 
		//select slick by width
		slick_screen_width(width)
	}
	//function select slick by width
	function slick_screen_width(width){
		if(width <= 767) { 
			img1_contain.remove();
			img2_contain.remove();
			img3_contain.remove();
			img4_contain.remove();
			img5_contain.remove();
			img6_contain.remove();
			img7_contain.remove();
			img8_contain.remove();
			$slick.append(img1_contain);
			$slick.append(img2_contain);
			$slick.append(img3_contain);
			$slick.append(img4_contain);
			$slick.append(img5_contain);
			$slick.append(img6_contain);
			$slick.append(img7_contain);
			$slick.append(img8_contain);
	 	$slick.slick({ 
		 		dots: true, 
		 		arrows: true, 
		 		infinite: true, 
		 		speed: 300, 
		 		rows: 1,
		 		slidesToShow: 1, 
		 		slidesToScroll: 1, 
	 		});
		}else if(width < 1280){
			img1_contain.remove();
			img2_contain.remove();
			img3_contain.remove();
			img4_contain.remove();
			img5_contain.remove();
			img6_contain.remove();
			img7_contain.remove();
			img8_contain.remove();
			$slick.append(img1_contain);
			$slick.append(img5_contain);
			$slick.append(img3_contain);
			$slick.append(img2_contain);
			
			
			$slick.append(img4_contain);
			$slick.append(img6_contain);
			$slick.append(img7_contain);
			$slick.append(img8_contain);
		 	$slick.slick({ 
		 		dots: true, 
		 		arrows: true, 
		 		infinite: true, 
		 		speed: 300, 
		 		rows: 2,
		 		slidesToShow: 2, 
		 		slidesToScroll: 2, 
		 	});
		}else{
			img1_contain.remove();
			img2_contain.remove();
			img3_contain.remove();
			img4_contain.remove();
			img5_contain.remove();
			img6_contain.remove();
			img7_contain.remove();
			img8_contain.remove();
			$slick.append(img1_contain);
			$slick.append(img2_contain);
			$slick.append(img3_contain);
			$slick.append(img4_contain);
			$slick.append(img5_contain);
			$slick.append(img6_contain);
			$slick.append(img7_contain);
			$slick.append(img8_contain);

			$slick.slick({ 
		 		dots: true, 
		 		speed: 300, 
		 		rows: 2,
		 		slidesToShow: 3, 
		 		slidesToScroll: 3, 
		 	});
		}
	}
var path = window.location.pathname;
 path = path.replace(/\/$/, "");
 path = decodeURIComponent(path);

$(function(){
	var w = $(window).width();
	if(w < 410){
		$('.sub_main_txt').find('img').css({
			width:'300px'
		});
	}

	if(w < 360){
		// 메인페이지 panel br태그 제거
		if(path.indexOf('index.html') > -1){

			/*
			var str1 = $('.panel_li.first .han').html();
			var str2 = $('.panel_li.second .han').html();
			var str3 = $('.panel_li.thirth .han').html();
			var str4 = $('.panel_li.fourth .han').html();
			var res1 = str1.replace(/<br>/gi," ");
			var res2 = str2.replace(/<br>/gi," ");
			var res3 = str3.replace(/<br>/gi," ");
			var res4 = str4.replace(/<br>/gi," ");
			
			$('.panel_li.first .han').html(res1);
			$('.panel_li.second .han').html(res2);
			$('.panel_li.thirth .han').html(res3);
			$('.panel_li.fourth .han').html(res4);
			*/
		}
	}

	if(w <= 360){
		$('.graph_wrap .graph').css('width','200px');
		$('.graph_wrap').css('padding-left','28px');
		$('.result_graph_a .graph_wrap').css('background-position','73px 0');
		$('.result_graph_s .graph_wrap').css('background-position','71px 0');
	}

	setSurveyNavigation();



	 function setSurveyNavigation() {

	 	surveyArray = ['academy','smbc','panel_link','international'];

		 for(var i=0; i<surveyArray.length; i++){
			if(path.indexOf(surveyArray[i]) > -1){
				$('.survey_btn_wrap li a').removeClass('on');
				$('.survey_btn_wrap li').eq(i).find('a').addClass('on');
			}
		}
	 }
})

$(document).ready(function(){

	// 내비게이션
	$('.btn_gnb').click(function(){
		$('.bg').fadeIn();
	   $('#nav').stop().animate({
	      right:'0'
	   });
	});
	$('.btn_gnb_close').click(function(){
		$('.bg').fadeOut();
		$('#nav').stop().animate({
			right:'-280px'
	    });
	});

	// 회원가입/로그인 버튼
	$('.btn_util_join, .btn_login_join').click(function(){
		login_pop_init();
	    $('.join_popup').show();
	});

	$('.btn_util_login').click(function(){
		login_pop_init();
	    $('.login_popup').show();
	});

	$('.btn_login_findemail').click(function(){
		login_pop_init();
	    $('.find_email_popup').show();
	});

	$('.btn_login_findpw').click(function(){
		login_pop_init();
	    $('.find_password_popup').show();
	});

	$('.login_box_popup .close').click(function(){
		$('.bg').fadeOut();
		$(this).parent().hide();
	});

	/**** 상단 내용 닫기 및 추가 ****/
	$("#wrap #header_top .btn").click(function() {
		alert("OK");
	});

	function login_pop_init(){
		$('#nav').stop().animate({
			right:'-280px'
	    });
	    $('.login_box_popup').hide();
	}
	// 마이스테이션 페이지 샘플칸 슬라이드토글
	 $('.mystation_li .mystation_title').click(function(){
	 	if($('.mystation_content_wrap').is(':visible')==true){
	 		$('.mystation_content_wrap').stop().slideUp();
	 		$('.mystation_li .arrow').css({
	 			background : 'url(../images/sub/mystation_arrow_down.png)'
	 		})
	 	}else{
	 		$('.mystation_content_wrap').stop().slideDown();
	 		$('.mystation_li .arrow').css({
	 			background : 'url(../images/sub/mystation_arrow_up.png)'
	 		})
	 	}
	 })

	 $('.mystation_content .close').click(function(){
	 	$(this).parent().hide();
	 })

	// 견적 팝업 달력
	 $( "#start_date, #last_date" ).datepicker({
      showOn: "button",
      buttonImage: "../images/sub/popup/btn_calander.png",
      buttonImageOnly: true,
      buttonText: "Select date",
       changeMonth: true,
        changeYear: true,
        yearRange: "-20:+0",
        showMonthAfterYear: true, 
        monthNames: ["1","2","3","4","5","6","7","8","9","10","11","12"],
        monthNamesShort: ["1","2","3","4","5","6","7","8","9","10","11","12"],          
        dateFormat:"yy-mm-dd"                      
    });

	$('.btn_estimate_view_popup1, .btn_estimate_view_popup2').click(function(){
		$('.bg').fadeIn();
		$('.estimate_popup').fadeIn();
	})
	$('.estimate_popup .close').click(function(){
		$('.bg').fadeOut();
		$('.estimate_popup').fadeOut();
	})

	// 결과보기 팝업
	 $('.result_excel, .result_graph').click(function(e){
	 	e.preventDefault();
	 	$('.result_popup').fadeIn();
	 	$('.bg').fadeIn('fast');
	 })

	 $('.estimate_popup .close, .result_popup .close').click(function(e){
	 	e.preventDefault();
	 	$(this).parent().fadeOut();
	 	$('.bg').fadeOut('fast');
	 })
});	

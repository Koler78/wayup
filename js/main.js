//------------JAVA SCRIPT

// var btn = document.getElementById('headBtn');
// btn.onclick = function (a) {
// 	// alert('button pressed');
// 	a.preventDefault();  //отмена перехода по якорю в кнопке или ссылке 

// 	//меняем с помощью переменной 
// 	var text = document.querySelector('p.intro');
// 	text.classList.add('red');
// 	var img = document.querySelector('.desktop');
// 	img.style.border = '1px solid #fff';

// 	//меняем без переменной 
// 	document.querySelector('.skill-text').style.marginTop = '200px';
// }


//---------------------JQUERY--------------


//анимация заголовка секции learn 

$(window).scroll(function () {
	$('#learn .section-title').each(function () {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("fadeInLeft");
		}

	});
});

//анимация навыков в секции learn

$(window).scroll(function () {
	$('.skills').each(function () {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("fadeInRight");
		}

	});
});

//анимация заголовка в форме заявке
$(window).scroll(function () {
	$('#ticket .section-title').each(function () {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("fadeInDown");
		}

	});
});

//анимация формы заявки

$(window).scroll(function () {
	$('.form').each(function () {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("fadeInUp");
		}

	});
});



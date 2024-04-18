document.addEventListener('DOMContentLoaded', function() {
    var option = document.querySelectorAll('.option');
    var text = document.querySelector('.textblock');
    var hero = document.querySelector('.picture');
    var rect = document.querySelectorAll('.rect');
    var image = document.getElementById('heroimg');
    var final_text = document.querySelector('.packtext');
    var toys = document.querySelectorAll('.toy');
    var phone = document.querySelector('.phone')
    var delay = 50;
    var scnd_offset = 1000; 
    var lenght = option.length;
    
    option.forEach(function(select) {
       setTimeout(function() { 
            select.addEventListener('click', function() {
                
                option.forEach(function(eachopt, i){

                    setTimeout(function() {
                        eachopt.classList.add('disappear');
                    }, delay * (lenght - i));
                });

                toys.forEach(function(eachopt, i){

                    setTimeout(function() {
                        eachopt.classList.add('disappear');
                    }, delay * (lenght - i)+200);
                });

                setTimeout(function() {
                    text.classList.add('disappear');
                }, delay * (lenght + 1));

                var style_img = select.getAttribute('data-image');
                image.src = style_img;

                setTimeout(function() {
                    final_text.classList.add('second-appear');
                }, delay * (lenght + 1) + scnd_offset);

                setTimeout(function() {
                    hero.classList.add('second-appear');
                }, delay * (lenght + 1) + scnd_offset);
                
                rect.forEach(function(rects, k){

                    setTimeout(function() {
                        rects.classList.add('second-appear');
                    }, delay * (lenght - k) + scnd_offset + 200);
                });

                setTimeout(function() {
                    phone.classList.add('second-appear');
                }, delay * (lenght + 1)+1400);
               
                console.log(lenght);
            });
        }, 1700);
    })
});
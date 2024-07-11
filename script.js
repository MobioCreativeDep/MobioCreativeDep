document.addEventListener('DOMContentLoaded', function() {
    var option1 = document.querySelectorAll('.onestsc');
    var option2 = document.querySelectorAll('.twostsc');
    var anim1 = document.querySelectorAll('.angrp1');
    var anim2 = document.querySelectorAll('.angrp2');
    var anim3 = document.querySelectorAll('.angrp3');
    var kitchen = document.querySelector('.kitchens');
    var imgone = document.querySelector('.kitchen-over');
    var imgtwo = document.querySelector('.table-over');
    var ktLine = document.querySelector('.kitchen-line');
    var tbLine = document.querySelector('.table-line');
    var divone = document.querySelector('.first_ch');
    var divtwo = document.querySelector('.second_ch');
    var pack = document.querySelector('.packshot');
    var ctaBtn = document.querySelector('.cta-btn');
    const delay = 300;

    function addAppearaddClasss(elements, rmOffset, addClass, rmClass) {

        elements.forEach(function(element, i) {

            setTimeout(function() {
                element.classList.add(addClass);
            }, delay * i);

            setTimeout(function() {
                element.classList.remove(rmClass);
                element.classList.add('fullop');                
            }, rmOffset + (delay + 1) * i);

        });
    }


    function addPress(element) {

        element.classList.add('press');

                setTimeout(function() {
                    element.classList.remove('press');
                }, 1000);

    }

    window.BGY_MRAID && window.BGY_MRAID.gameReady();

    addAppearaddClasss(anim1, 1000, 'appear', 'appear');


    console.log(option1);
           
    option1.forEach(function(select) {

        setTimeout(function() { 

            select.addEventListener('click', function() {

                console.log(select);
                
                select.classList.add('press');
                ktLine.remove();
                tbLine.classList.remove('noop');
                tbLine.classList.add('blinking');

                setTimeout(function() {
                    select.classList.remove('press');
                }, 1000);

                option1.forEach(function(other, i) {

                    if (other !== select) {

                        other.classList.remove('fullop');    
                        other.classList.add('deselect');

                    }

                });

                setTimeout(function() {
                    select.classList.remove('press');
                }, 1000);

                anim1.forEach(function(element, i) {

                    setTimeout(function() {
                        element.classList.add('disappear');
                    },1000 + delay * i);
        
                });

                setTimeout(function() {
                    divone.remove();
                },3000 );

                setTimeout(function() {

                    divtwo.classList.remove('noop');
                    addAppearaddClasss(anim2, 2000, 'appear', 'appear');
                    
                }, 2000);

                var style_img = select.getAttribute('data-image');
                imgone.src = style_img;

                console.log(style_img);

            });
        }, 1000);
    })

    option2.forEach(function(select) {

        setTimeout(function() { 

            select.addEventListener('click', function() {

                console.log(select);
                
                addPress(select);
                tbLine.remove();

                option2.forEach(function(other, i) {

                    if (other !== select ) {

                        other.classList.remove('fullop');    
                        other.classList.add('deselect');

                    }

                });

                anim2.forEach(function(element, i) {

                    setTimeout(function() {
                        element.classList.add('disappear');
                    },1000 + delay * i);
        
                });

                imgtwo.classList.add('appear');

                setTimeout(function() {
                    divtwo.remove();
                },3000 );
                
                ctaBtn.style.zIndex = '99';

                ctaBtn.addEventListener('click', function (e) {
                      window.BGY_MRAID && window.BGY_MRAID.open();
                });

                window.BGY_MRAID && window.BGY_MRAID.gameEnd();

                console.log(anim3);

                setTimeout(function() {

                    pack.classList.remove('noop');

                    kitchen.classList.add('kitdisp')
                    
                    anim3.forEach(function(element, i) {

                        setTimeout(function() {
                            element.classList.add('packappear');
                        }, delay / 6 * (5 - i));
                        
                    });
                    
                }, 2000);

                var style_img = select.getAttribute('data-image');
                imgtwo.src = style_img;

                console.log(style_img);

                    
            });
        },200);
    })
}); 
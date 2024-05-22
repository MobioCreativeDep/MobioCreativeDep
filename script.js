document.addEventListener('DOMContentLoaded', function() {
    var option = document.querySelectorAll('.option');
    var text = document.querySelector('.textblock');
    var hero = document.querySelector('.picture');
    var rect = document.querySelectorAll('.rect');
    var image = document.getElementById('heroimg');
    var final_text = document.querySelector('.packtext');
    var toys = document.querySelectorAll('.toy');
    var phone = document.querySelector('.phone')
    var mainrm = document.getElementById("toRemove");
    var delay = 50;
    var scnd_offset = 1000; 
    var lenght = option.length;

    function addDisappearClass(elements, offset) {
        elements.forEach(function(element, i) {
            setTimeout(function() {
                element.classList.add('disappear');
            }, delay * (length - i) + offset);
        });
    }
    
    option.forEach(function(select) {

        setTimeout(function() { 
            select.addEventListener('click', function() {

                select.classList.add('pressAnim');
                
                addDisappearClass(option, 0);

                option.forEach(function(other) {

                    // Проверяем, не является ли текущий элемент выбранным
                    if (other !== select) {
                        
                        var child = other.querySelectorAll('.style, .digit');
                        // Присваиваем класс всем элементам, кроме выбранного
                        other.classList.add('deselect');

                        child.forEach(function(whiteChild) {
                            whiteChild.classList.add('white-txt')
                        });
                    }
                });
                
                addDisappearClass(toys, 200);

                setTimeout(function() {
                    text.classList.add('disappear');
                }, delay * (lenght + 1));

                var style_img = select.getAttribute('data-image');
                image.src = style_img;

                setTimeout(function () {
                      mainrm.remove();
                  }, delay * (lenght + 1) + scnd_offset);

                setTimeout(function() {
                    final_text.classList.add('second-appear');
                }, delay * (lenght + 1) + scnd_offset);

                setTimeout(function() {
                    hero.classList.add('second-appear');
                }, delay * (lenght + 1) + scnd_offset);
                
                rect.forEach(function(rects, k){

                    setTimeout(function() {
                        rects.classList.add('second-appear');
                    }, delay * (lenght - k) + scnd_offset + 100);
                });

                setTimeout(function() {
                    phone.classList.add('second-appear');
                }, delay * (lenght + 1)+1400);
               
                console.log(lenght);
            });
        }, 1000);
    })
});
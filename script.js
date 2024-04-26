document.addEventListener('DOMContentLoaded', function() {
    var option = document.querySelectorAll('.button-ch');
    var frstsc = document.querySelectorAll('.onestsc');
    var scndsc = document.querySelectorAll('.twostsc');
    var imgone = document.querySelector('.kitchen-over');
    const delay = 100;

    function addAppearClass(elements, offset, clas) {

        elements.forEach(function(element, i) {

            setTimeout(function() {
                element.classList.add(clas);
            }, delay * i + offset);

            setTimeout(function() {
                element.classList.remove(clas);
                element.classList.add('fullop');                
            }, 1000 + (delay + 1) * i + offset);

        });
    }

    addAppearClass(frstsc, 0, 'appear');
           
    option.forEach(function(select) {

       setTimeout(function() { 
            select.addEventListener('click', function() {
                
                select.classList.add('press');

                setTimeout(function() {
                    select.classList.remove('press');
                }, 1000);

                option.forEach(function(other) {

                    if (other !== select) {

                        other.classList.remove('fullop');    
                        other.classList.add('deselect');

                    }

                });

                var style_img = select.getAttribute('data-image');
                imgone.src = style_img;

                console.log(style_img);
            });
        }, 1000);
    })
}); 
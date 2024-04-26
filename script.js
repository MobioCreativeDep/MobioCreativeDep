document.addEventListener('DOMContentLoaded', function() {
    var option = document.querySelectorAll('.button-ch');
    var frstsc = document.querySelectorAll('.onestsc');
    var scndsc = document.querySelectorAll('.twostsc');
    const delay = 100;

    function addAppearClass(elements, offset, clas) {

        elements.forEach(function(element, i) {

            setTimeout(function() {
                element.classList.add(clas);
            }, delay * i + offset);

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

            });
        }, 1000);
    })
}); 
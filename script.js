document.addEventListener('DOMContentLoaded', function() {
    var option = document.querySelectorAll('.button-ch');
    var ch_text = document.querySelectorAll('.ch-text');


    function addMultipleClass(elements, offset, class) {
        elements.forEach(function(element, i) {
            setTimeout(function() {
                element.classList.add(class);
            }, delay * (length - i) + offset);
        });
    }

     var apgroup = option[0,1,2] + ch_text[0];

    addMultipeClass(option, 0, 'appear');
    

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
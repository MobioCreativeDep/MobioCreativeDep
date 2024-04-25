document.addEventListener('DOMContentLoaded', function() {
    var option = document.querySelectorAll('.button-ch');
    var const = document.getElementsByClassName('press').animation-duration;
    
    option.forEach(function(select) {
       setTimeout(function() { 
            select.addEventListener('click', function() {
                
                select.classList.add('press');

            });
        }, 0);
    })
});
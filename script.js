document.addEventListener('DOMContentLoaded', function() {
    var option = document.querySelectorAll('.button-ch');
    
    option.forEach(function(select) {
       setTimeout(function() { 
            select.addEventListener('click', function() {
                
                select.classList.add('press');

            });
        }, 1700);
    })
});
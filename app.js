document.addEventListener('DOMContentLoaded', function() {
    var result = document.querySelector(".result");
    var touches = document.querySelectorAll(".touch");

    touches.forEach(function(touch) {
        touch.addEventListener("click", function(event) {
            var touchValue = event.target.textContent;

            if (touchValue === '=') {
                try {
                    result.value = eval(result.value);
                } catch (e) {
                    result.value = 'Error';
                }
            } else if (touchValue === 'C') {
                result.value = '';
            } else {
                result.value += touchValue;
            }
        });
    });
    result.addEventListener('input', function(event){
        event.target.value = event.target.value.replace(/[^\d\n.+*/-]/g, '');
        console.log(event.target.value);
    });
});
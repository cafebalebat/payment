document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("qrismodal");
    const btn = document.getElementById("paymentButton");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function(){
        modal.style.display = "block";
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal){
            modal.style.display ="none";
        }
    };
});    
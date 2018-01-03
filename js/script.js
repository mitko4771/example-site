/////////////smooth scroll////////////////

$(document).ready(function () {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

////////////////validate password////////////////////

$(function () {
    $("#btnSubmit").click(function () {
        var password = $("#password").val();
        var confirmPassword = $("#confirm_password").val();
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    });
});



///////////////////////////////validate e-mail//////////////////////////////

function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
}

//////////////////////////open new window /////////////////////

(function () {
    let btn = document.getElementById('btn-new-window');
    btn.addEventListener('click', function () {
        window.open(
            'form.html',
            '_blank' // <- This is what makes it open in a new window.
        );
    });
})();

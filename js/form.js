$(function() {

    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/killyourshit@gmail.com",
            method: "POST",
            data: { 
                clientName: $('#client-name').val(),
                clientEmail: $('#client-email').val(),
                clientMessage: $('#client-message').val()},
            dataType: "json"
        }).done(function() {
            form.reset();
            $('#message-box').html('<h2>Thank you!<h2>');
        }).fail(function() {
            $('#message-box').html('Sorry, error occurred!');
        });
    });

});
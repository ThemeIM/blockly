;jQuery(function($){
    "user strict"
    $(document).on('click', '.res-nav-tab  button, .res-nav-tab-two button', function(e){
        e.preventDefault();
        $('.ajax-preloader').fadeIn();
        var data = {
            'action': 'blockly_product_filter',
            'nonce': blockly_product_filter.nonce,     // We pass php values differently!
            'cat' : $(this).data('cat')
        };
        jQuery.post(blockly_product_filter.ajaxurl, data, function(response) {
            console.log(response);
             $('.ajax-content-load').html(response);
             $('.ajax-preloader').fadeOut();;
        });
    });
});




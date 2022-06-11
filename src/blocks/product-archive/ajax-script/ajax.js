;jQuery(function($){
    "user strict"
    
    $(document).on('click', '.blockly-ajax-pagination > ul > li > a', function(e){
        e.preventDefault();
        $('.ajax-preloader').fadeIn();
    
        var data = {
            'action': 'blockly_product_listing',
            'nonce': blockly_product.nonce,     // We pass php values differently!
            'paged' : $(this).data('page'),
            'cat' : $('.selected-cat').data('scat'),
            'orderby': $('.blockly_current_order').val()
        };
        jQuery.post(blockly_product.ajaxurl, data, function(response) {
            $('.ajax-content-load').html(response);
            $('.ajax-preloader').fadeOut();;
        });
    });
	// We can also pass the url value separately from ajaxurl for front end AJAX implementations
	//  catagory change 

$(document).on('click', '.res-nav-tab-three button', function(e){
    e.preventDefault();
    $('.selected-cat').data('scat', $(this).data('cat'));
    $('.ajax-preloader').fadeIn();
        var data = {
            'action': 'blockly_product_listing',
            'nonce': blockly_product.nonce,     // We pass php values differently!
            'paged' : 1,
            'cat' : $(this).data('cat'),
            'orderby': $('.blockly_current_order').val()
        };
        jQuery.post(blockly_product.ajaxurl, data, function(response) {
             $('.ajax-content-load').html(response);
             $('.ajax-preloader').fadeOut();
        });
});
// on change update data

$(document).on('change', '.blockly_current_order' ,function(){
    console.log($(this).val());
    $('.ajax-preloader').fadeIn();
    
    var data = {
        'action': 'blockly_product_listing',
        'nonce': blockly_product.nonce,     // We pass php values differently!
        'paged' : $(this).data('page'),
        'cat' : $('.selected-cat').data('scat'),
        'orderby': $(this).val()
    };
    jQuery.post(blockly_product.ajaxurl, data, function(response) {
        $('.ajax-content-load').html(response);
        $('.ajax-preloader').fadeOut();;
    });
});
});




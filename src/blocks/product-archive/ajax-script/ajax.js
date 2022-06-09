;jQuery(function($){
    "user strict"
    
    $(document).on('click', '.blockly-ajax-pagination > ul > li > a', function(e){
        e.preventDefault();
        var data = {
            'action': 'blockly_product_listing',
            'nonce': blockly_product.nonce,     // We pass php values differently!
            'paged' : $(this).data('page'),
        };
        jQuery.post(blockly_product.ajaxurl, data, function(response) {
            $('.ajax-content-load').html(response);
        });
    });
	// We can also pass the url value separately from ajaxurl for front end AJAX implementations
	
});
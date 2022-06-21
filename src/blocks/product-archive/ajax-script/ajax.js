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
//  advance filter
$(document).on('click', '.product-filter-btn a', function(e){
   e.preventDefault();
   console.log($('.product-filter-widget-area'));
    $('.product-filter-widget-area').slideToggle();
});
// ajax call 
$(document).on('click', '.advance-apply', function(e){
    e.preventDefault();
    let form = $('.blockly-advance-filter');
    let formData = form.serializeArray();

    $('.ajax-preloader').fadeIn();
    
    var data = {
        'action': 'blockly_product_listing',
        'nonce': blockly_product.nonce,     // We pass php values differently!
        'filter' : formData,
        'advance' : 'advance filter'
    };

    jQuery.post(blockly_product.ajaxurl, data, function(response) {
        $('.ajax-content-load').html(response);
        $('.ajax-preloader').fadeOut();;
    });

});

//  drop down control 

$(document).on('click', '.custom-select-box li.selected', function(e){
    // if (e.target !== this)
    // return;
 $(this).parent('ul').toggleClass('open');
 $(this).siblings().show();
});

$(document).on('click', '.custom-select-box li:not(.selected)', function(){
 $(this).show();
 $(this).addClass('selected');
 $(this).siblings().hide();
 $(this).siblings().removeClass('selected');
});

});




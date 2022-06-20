;jQuery(function($){
    "user strict"

    let getCurrentCat = $('.get-cat-value').val();
    let getCurrentCatFlist = $('.res-nav-tab-three button.active').data('cat');
    let CurrentCatId = getCurrentCat ? getCurrentCat : getCurrentCatFlist;

        $('.ajax-preloader').fadeIn();
        var data = {
            'action': 'blockly_product_filter_cat',
            'nonce': blockly_product_cat_filter.nonce,     // We pass php values differently!
            'cat' : CurrentCatId
        };
        jQuery.post(blockly_product_cat_filter.ajaxurl, data, function(response) {
             $('.ajax-content-loader').html(response);
             $('.ajax-preloader').fadeOut();;
        });
    //  on Click ajax loading 
    $(document).on('click', '.res-nav-tab-three button', function(e){
        e.preventDefault();
       $(this).addClass('active');
       $(this).siblings().removeClass('active');
        var data = {
            'action': 'blockly_product_filter_cat',
            'nonce': blockly_product_cat_filter.nonce,     // We pass php values differently!
            'cat' : $(this).data('cat')
        };

        jQuery.post(blockly_product_cat_filter.ajaxurl, data, function(response) {
            console.log($('.ajax-content-loader'));
             $('.ajax-content-loader').html(response);
             $('.ajax-preloader').fadeOut();;
        });
    });

    //  on Change ajax call 

    $(document).on('change', '.get-cat-value', function(e){
       $('.res-nav-tab-three button').removeClass('active');
       $('.ajax-preloader').fadeIn();
        var data = {
            'action': 'blockly_product_filter_cat',
            'nonce': blockly_product_cat_filter.nonce,     // We pass php values differently!
            'cat' : $(this).val()
        };
        jQuery.post(blockly_product_cat_filter.ajaxurl, data, function(response) {
             $('.ajax-content-loader').html(response);
             $('.ajax-preloader').fadeOut();;
        });
    });

    
});




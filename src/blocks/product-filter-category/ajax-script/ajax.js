;jQuery(function($){
    "user strict"

    let getCurrentCat = $('.get-cat-value').val();
    let getCurrentCatFlist = $('.res-nav-tab-three button.active').data('cat');
    let CurrentCatId = getCurrentCat ? getCurrentCat : getCurrentCatFlist;
    console.log(CurrentCatId);

        $('.ajax-preloader').fadeIn();
        var data = {
            'action': 'blockly_product_filter_cat',
            'nonce': blockly_product_cat_filter.nonce,     // We pass php values differently!
            'cat' : CurrentCatId
        };
        jQuery.post(blockly_product_cat_filter.ajaxurl, data, function(response) {
            console.log($('.ajax-content-loader'));
             $('.ajax-content-loader').html(response);
             $('.ajax-preloader').fadeOut();;
        });
});




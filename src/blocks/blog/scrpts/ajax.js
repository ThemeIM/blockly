;
jQuery(function($){
    "use strict"
    let dataOffset = 1;
     $(document).on('click', '.blog-tab nav .nav-tabs button', function(){
         $(this).addClass('active').siblings().removeClass('active');
         $('.loader-post-wrapper').show();
         let cat_id = $(this).data('cat');
         $('.ajax-post-loading').data('cat', cat_id);
         let posts_per_page = $(this).data('data-post');
         let order = $(this).data('order');
         let orderBy = $(this).data('orderby');
         dataOffset = 1;
        var data = {
            'action': 'get_posts_default',
            'cat' :cat_id,
            'posts_per_page': posts_per_page,
            'order': order,
            'orderBy': orderBy,
            'nonce': ajax_object.nonce,   
            'paged': 1
        };
        // We can also pass the url value separately from ajaxurl for front end AJAX implementations
        jQuery.post(ajax_object.ajax_url, data, function(response) {
            $('.tab-content-ajax').html(response);
            $('.loader-post-wrapper').hide();
            if(response.length  > 9){
                $('.ajax-post-loading').show();
            }
        });
     })
  //  ajax loading   
  $(document).on('click', '.ajax-post-loading', function(){
         $(this).addClass('active').siblings().removeClass('active');
         $('.loader-post-wrapper').show();
        let cat_id = $(this).data('cat');
        let posts_per_page = $(this).data('data-post');
        let order = $(this).data('order');
        let orderBy = $(this).data('orderby');
       
        dataOffset++;
        var data = {
            'action': 'get_posts_default',
            'cat' :cat_id,
            'posts_per_page': posts_per_page,
            'order': order,
            'orderBy': orderBy,
            'paged': dataOffset,
            'nonce': ajax_object.nonce,   
        };
    // We can also pass the url value separately from ajaxurl for front end AJAX implementations
        jQuery.post(ajax_object.ajax_url, data, function(response) {
            $('.tab-content-ajax').append(response);
            $('.loader-post-wrapper').hide();
            if(response.length  < 9){
                $('.ajax-post-loading').hide();
            }
        });
  });
});
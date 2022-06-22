/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

//Global styles.
import './blocks/global-styles/index.js';
import './utils/extensions/typography';

//All block components include
import './blocks/section';
import './blocks/product-content';
import './blocks/vertical-list';
import './blocks/social-list';
import './blocks/subscription-forms';
import './blocks/blog';
import './blocks/search';
// template parts
import './blocks/site-header';
// single post 
import './blocks/single-post-meta';
import './blocks/single-post-share';

// default qeury 
import './blocks/themeim-loop-query';

import './blocks/recent-post'
import './blocks/blog-category'
//import './blocks/blog-tag'
import './blocks/overview-section'
import './blocks/feature'
import './blocks/price-plan'
import './blocks/tip'
import './blocks/table-section'
import './blocks/plan-list'
import './blocks/feature-list'
//  WooCommerce 
import './blocks/product-archive';
import './blocks/client-feedback'
import './blocks/blog-lastest-news'
import './blocks/header-section'
import './blocks/featured-products-slider'
import './blocks/trending-products-slider'
import './blocks/product-filter-section'
import './blocks/product-filter-category'
import './blocks/table-of-contents'
import './blocks/table-of-content-meta'
import './blocks/terms-and-conditions'

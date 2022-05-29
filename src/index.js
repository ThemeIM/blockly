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
import './blocks/testimonial';
import './blocks/author-profile-box';
import './blocks/alert';
import './blocks/faq';
import './blocks/button';
import './blocks/highlight';
import './blocks/quote'; 
import './blocks/section';
import './blocks/vertical-list';
import './blocks/social-list';
import './blocks/subscription-forms';
import './blocks/blog';

//pricing table
import './blocks/pricing-table';
import './blocks/pricing-table-inner';
import './blocks/pricing-table-inner/components/title';
import './blocks/pricing-table-inner/components/subtitle';
import './blocks/pricing-table-inner/components/subtitle2';
// import './blocks/pricing-table-inner/components/image';
import './blocks/pricing-table-inner/components/price';
import './blocks/pricing-table-inner/components/features';
import './blocks/pricing-table-inner/components/button';
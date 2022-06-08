import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { background_image } = attributes;
    const mystyle = {
		backgroundImage: `url(${background_image})`,
	  };
	return (
		<div
        
			{ ...useBlockProps.save({className: 'blockly-full'}) } style={mystyle} >
                <div className='product-content-inner'>
			        <InnerBlocks.Content />
               </div>
		</div>
	);
}
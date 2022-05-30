import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { list } =  attributes;

	return (
		<>
		<div class="footer-widget">
			<ul class="footer-social">
				{list && list.map((listData, key) => {
					return (
						<li key={key}><a href={listData.link}><i class={listData.icon}></i></a></li>
					)
				})}
			</ul>
        </div>
		</>
	);
}
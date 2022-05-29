import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { list, sectionTitle } =  attributes;

	return (
		<>
		<div class="footer-widget">
			{sectionTitle && <h4 class="title">{sectionTitle}</h4>}
			<ul class="footer-list">
					{list && list.map((listData, key) => {
						return (
							<li key={key}><a href={listData.link}>{listData.title && listData.title}</a></li>
						)
					})}
				</ul>
        </div>
		</>
	);
}
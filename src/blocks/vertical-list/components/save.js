import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { list, sectionTitle } =  attributes;

	return (
		<>
		<div className="footer-widget">
			{sectionTitle && <h4 className="title">{sectionTitle}</h4>}
			<ul className="footer-list">
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
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { list } =  attributes;

	return (
		<>
		<div className="footer-widget">
			<ul className="footer-social">
				{list && list.map((listData, key) => {
					return (
						<li key={key}><a href={listData.link}><i className={listData.icon}></i></a></li>
					)
				})}
			</ul>
        </div>
		</>
	);
}
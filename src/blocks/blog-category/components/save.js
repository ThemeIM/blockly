import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { numberOfPosts, order, orderBy, categories } = attributes;

	return (
		<div className="widget-box blog-widget-box mb-30">
			<h4 className="widget-title">Categories</h4>
			<div className="category-widget-box">
				<ul className="category-list">
					{
						categories.map((category, index) => (
							<li><a href="#0"><i className="fas fa-chevron-right" key={index}></i> {category.name} <span>4</span></a></li>
						))
					}
				</ul>
			</div>
		</div>
	);
}

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { numberOfPosts, order, orderBy, categories } = attributes;

	console.log({ numberOfPosts, order, orderBy, categories });

	return (
		<div className="widget-box blog-widget-box mb-30">
			<h4 className="widget-title">Recent Posts</h4>
			<div className="popular-widget-box">
				<div className="single-popular-item d-flex flex-wrap align-items-center">
					<div className="popular-item-thumb">
						<img src="assets/images/blog/small-blog-1.png" alt="blog" />
					</div>
					<div className="popular-item-content">
						<span className="blog-date">Aug 23,2021</span>
						<h4 className="title"><a href="blog-details.html">Producing ideas is the main
							way to grow the</a></h4>
					</div>
				</div>
				<div className="single-popular-item d-flex flex-wrap align-items-center">
					<div className="popular-item-thumb">
						<img src="assets/images/blog/small-blog-2.png" alt="blog" />
					</div>
					<div className="popular-item-content">
						<span className="blog-date">Aug 23,2021</span>
						<h5 className="title"><a href="blog-details.html">Producing ideas is the main
							way to grow the</a></h5>
					</div>
				</div>
				<div className="single-popular-item d-flex flex-wrap align-items-center">
					<div className="popular-item-thumb">
						<img src="assets/images/blog/small-blog-3.png" alt="blog" />
					</div>
					<div className="popular-item-content">
						<span className="blog-date">Aug 23,2021</span>
						<h5 className="title"><a href="blog-details.html">Producing ideas is the main
							way to grow the</a></h5>
					</div>
				</div>
				<div className="single-popular-item d-flex flex-wrap align-items-center">
					<div className="popular-item-thumb">
						<img src="assets/images/blog/small-blog-4.png" alt="blog" />
					</div>
					<div className="popular-item-content">
						<span className="blog-date">Aug 23,2021</span>
						<h5 className="title"><a href="blog-details.html">Producing ideas is the main
							way to grow the</a></h5>
					</div>
				</div>
			</div>
		</div>
	);
}

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { numberOfPosts, order, orderBy, categories } = attributes;

	console.log({ numberOfPosts, order, orderBy, categories });

	return (
		<div class="widget-box blog-widget-box mb-30">
			<h4 class="widget-title">Recent Posts</h4>
			<div class="popular-widget-box">
				<div class="single-popular-item d-flex flex-wrap align-items-center">
					<div class="popular-item-thumb">
						<img src="assets/images/blog/small-blog-1.png" alt="blog" />
					</div>
					<div class="popular-item-content">
						<span class="blog-date">Aug 23,2021</span>
						<h4 class="title"><a href="blog-details.html">Producing ideas is the main
							way to grow the</a></h4>
					</div>
				</div>
				<div class="single-popular-item d-flex flex-wrap align-items-center">
					<div class="popular-item-thumb">
						<img src="assets/images/blog/small-blog-2.png" alt="blog" />
					</div>
					<div class="popular-item-content">
						<span class="blog-date">Aug 23,2021</span>
						<h5 class="title"><a href="blog-details.html">Producing ideas is the main
							way to grow the</a></h5>
					</div>
				</div>
				<div class="single-popular-item d-flex flex-wrap align-items-center">
					<div class="popular-item-thumb">
						<img src="assets/images/blog/small-blog-3.png" alt="blog" />
					</div>
					<div class="popular-item-content">
						<span class="blog-date">Aug 23,2021</span>
						<h5 class="title"><a href="blog-details.html">Producing ideas is the main
							way to grow the</a></h5>
					</div>
				</div>
				<div class="single-popular-item d-flex flex-wrap align-items-center">
					<div class="popular-item-thumb">
						<img src="assets/images/blog/small-blog-4.png" alt="blog" />
					</div>
					<div class="popular-item-content">
						<span class="blog-date">Aug 23,2021</span>
						<h5 class="title"><a href="blog-details.html">Producing ideas is the main
							way to grow the</a></h5>
					</div>
				</div>
			</div>
		</div>
	);
}

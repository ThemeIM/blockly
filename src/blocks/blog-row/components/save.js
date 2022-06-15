import { __ } from '@wordpress/i18n';
import { formatDate } from '../../../utils/Helpers/DateTimeHelper';

export default function Save( { attributes } ) {
	const { posts } =  attributes;

	const getFeaturedImage = post => {
		const post_data = post._embedded &&
							post._embedded['wp:featuredmedia'] &&
							post._embedded['wp:featuredmedia'].length > 0 &&
							post._embedded['wp:featuredmedia'][0];

		return {
			source: post_data['source_url'],
			alt: post_data['alt_text']
		}
	}

	return (
		<section class="blog-section ptb-120">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-7 col-lg-8 text-center">
						<div class="section-header">
							<h2 class="section-title">Theme IM Latest News</h2>
							<p>We teach martial arts because we love it — not because we want to make money on you. Unlike.</p>
						</div>
					</div>
				</div>
				{
					typeof posts.map === 'function' && posts.map((post, i) => (
						<div class="row justify-content-center mb-30-none">
							<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
								<div class="blog-item">
									<div class="blog-thumb">
										<img
											src={getFeaturedImage()['source']}
											alt={getFeaturedImage()['alt']}
										/>
									</div>
									<div class="blog-content">
										<div class="blog-post-meta">
											<span class="date"> { formatDate() }</span>
										</div>
										<h4 class="title">
											<a href={ post.link }>
												{
													post.title.rendered
													? <RawHTML>{ post.title.rendered }</RawHTML>
													: __('(No title)', 'latest-posts')
												}
											</a>
										</h4>
									</div>
								</div>
							</div>
						</div>
					))
				}
				<div class="all-btn text-center mt-50">
					<a href="blog.html" class="custom-btn">{ __('More Blogs') } <i class="las la-angle-right"></i></a>
				</div>
			</div>
		</section>
	);
}

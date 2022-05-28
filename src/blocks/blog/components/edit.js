import {
	InspectorControls,
	MediaPlaceholder,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, QueryControls } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { RawHTML } from '@wordpress/element';
import { format, dateI18n, __experimentalGetSettings } from '@wordpress/date';

export default function Edit( { attributes, setAttributes } ) {
	const posts = useSelect(
		(select) => {
			return select('core').getEntityRecords('postType', 'post', {
				_embed: true,
			});
		},
		[]
	);
	
	return (
		<>
		<InspectorControls>
			<PanelBody title='Add New Social Item'>
				
			</PanelBody>
		</InspectorControls>
		<div className='Editor'>
		<section class="blog-section ptb-120">
    <div class="">
        <div class="blog-tab">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link show active" id="guide-tab" data-toggle="tab" data-target="#guide" type="button" role="tab" aria-controls="guide" aria-selected="false">Guide</button>
                    <button class="nav-link show" id="tutorial-tab" data-toggle="tab" data-target="#tutorial" type="button" role="tab" aria-controls="tutorial " aria-selected="false">Tutorial</button>
                    <button class="nav-link show" id="marketing-tab" data-toggle="tab" data-target="#marketing" type="button" role="tab" aria-controls="marketing " aria-selected="true">Marketing Tips</button>
                    <button class="nav-link show" id="code-tab" data-toggle="tab" data-target="#code" type="button" role="tab" aria-controls="code" aria-selected="false">Code Snippet</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade active show" id="guide" role="tabpanel" aria-labelledby="guide-tab">
                    <div class="row justify-content-center mb-60-none">
                        {posts && posts.map((post) => {
							const featuredImage =
							post._embedded &&
							post._embedded['wp:featuredmedia'] &&
							post._embedded['wp:featuredmedia'].length > 0 &&
							post._embedded['wp:featuredmedia'][0];
							return (
								<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-60">
                            <div class="blog-item">
								{featuredImage && console.log(featuredImage.source_url)}
							{ featuredImage && (
								 <div class="blog-thumb">
									<img
										src={
											featuredImage.source_url
										}
										alt={featuredImage.alt_text}
									/>
									</div>
								)}
                                <div class="blog-content">
                                    <div class="blog-post-meta">
                                        <span class="date"> 24th March, 2021</span>
                                    </div>
                               
										<h4 className='title'>
									<a href={post.link}>
										{post.title.rendered ? (
											<RawHTML>
												{post.title.rendered}
											</RawHTML>
										) : (
											__('(No title)', 'latest-posts')
										)}
									</a>
								</h4>
                                </div>
                            </div>
                            </div>
							);

						})}
                    </div>
                </div>
            </div>
        </div>
        <div class="all-btn two text-center mt-100">
            <a href="blog.html" class="btn--base active">Load More</a>
        </div>
    </div>
</section>
		</div>
		</>
	);
}
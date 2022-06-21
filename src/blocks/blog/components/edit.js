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
	const { numberOfPosts, order, orderBy, categories } = attributes;

	const catIDs =
	categories && categories.length > 0
		? categories.map((cat) => cat.id)
		: [];
		const posts = useSelect(
			(select) => {
				return select('core').getEntityRecords('postType', 'post', {
					per_page: numberOfPosts,
					_embed: true,
					order,
					orderby: orderBy,
					categories: catIDs,
				});
			},
			[numberOfPosts, order, orderBy, categories]
		);

		const allCats = useSelect((select) => {
			return select('core').getEntityRecords('taxonomy', 'category', {
				per_page: -1,
			});
		}, []);

		const catSuggestions = {};
		if (allCats) {
			for (let i = 0; i < allCats.length; i++) {
				const cat = allCats[i];
				catSuggestions[cat.name] = cat;
			}
		}

		const onDisplayFeaturedImageChange = (value) => {
			setAttributes({ displayFeaturedImage: value });
		};
		const onNumberOfItemsChange = (value) => {
			setAttributes({ numberOfPosts: value });
		};

		const onCategoryChange = (values) => {
			const hasNoSuggestions = values.some(
				(value) => typeof value === 'string' && !catSuggestions[value]
			);
			if (hasNoSuggestions) return;

			const updatedCats = values.map((token) => {
				return typeof token === 'string' ? catSuggestions[token] : token;
			});

			setAttributes({ categories: updatedCats });
		};

	return (
		<>
		<InspectorControls>
			<PanelBody title='Post Query'>
			<QueryControls
						numberOfItems={numberOfPosts}
						onNumberOfItemsChange={onNumberOfItemsChange}
						maxItems={10}
						minItems={1}
						orderBy={orderBy}
						onOrderByChange={(value) =>
							setAttributes({ orderBy: value })
						}
						order={order}
						onOrderChange={(value) =>
							setAttributes({ order: value })
						}
						categorySuggestions={catSuggestions}
						selectedCategories={categories}
						onCategoryChange={onCategoryChange}
					/>

			</PanelBody>
		</InspectorControls>
		<div className='Editor'>
		<section className="blog-section ptb-120">
       <div className="blog-wrapper">
        <div className="blog-tab">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link show active">All</button>
					{categories && categories.map( (cat) => {
						return (
							<>
							   <button className="nav-link show" key={cat.id}>{cat.value ? cat.value : cat.name}</button>
							   {console.log(cat.name)}
							</>
						);
					} )}
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade active show" id="guide" role="tabpanel" aria-labelledby="guide-tab">
                    <div className="row justify-content-center mb-60-none">
                        {posts && posts.map((post) => {
							const featuredImage =
							post._embedded &&
							post._embedded['wp:featuredmedia'] &&
							post._embedded['wp:featuredmedia'].length > 0 &&
							post._embedded['wp:featuredmedia'][0];
							return (
								<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-60">
                            <div className="blog-item">
								{featuredImage && console.log(featuredImage.source_url)}
							{ featuredImage && (
								 <div className="blog-thumb">
									<img
										src={
											featuredImage.source_url
										}
										alt={featuredImage.alt_text}
									/>
									</div>
								)}
                                <div className="blog-content">
                                    <div className="blog-post-meta">
                                        <span className="date"> 24th March, 2021</span>
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
        <div className="all-btn two text-center mt-100">
            <a href="blog.html" className="btn--base active">Load More</a>
        </div>
    </div>
</section>
		</div>
		</>
	);
}
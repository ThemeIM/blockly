import {
	InspectorControls,
	MediaPlaceholder,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, QueryControls } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { RawHTML, useState } from '@wordpress/element';
import { format, dateI18n, __experimentalGetSettings } from '@wordpress/date';

export default function Edit({ attributes, setAttributes }) {
	const { numberOfPosts, order, orderBy, categories } = attributes;

	const catIDs = typeof categories.map === 'function' && [...categories.map((cat) => cat.id)] || []
	// const posts = useSelect(
	// 	select => select('core').getEntityRecords('postType', 'post', {
	// 		per_page: numberOfPosts,
	// 		_embed: true,
	// 		order,
	// 		orderby: orderBy,
	// 		categories: catIDs,
	// 	}),
	// 	[numberOfPosts, order, orderBy, categories]
	// );

	const allCategories = useSelect((select) => {
		return select('core').getEntityRecords('taxonomy', 'category', {
			per_page: -1,
		});
	}, []);

	const catSuggestions = {};
	if (allCategories) {
		for (let i = 0; i < allCategories.length; i++) {
			const cat = allCategories[i];
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
			{/* sidebar */}
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
		</>
	);
}


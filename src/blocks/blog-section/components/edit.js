import {
	InspectorControls,
	MediaPlaceholder,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import { PanelBody, Button, Card, CardBody, TextControl, QueryControls } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { RawHTML } from '@wordpress/element';
import { format, dateI18n, __experimentalGetSettings } from '@wordpress/date';

export default function Edit( { attributes, setAttributes } ) {
	const { title, subtitle, posts } = attributes

	const fetched_posts = useSelect(
		select => {
			return select('core').getEntityRecords('postType', 'post', {
				per_page: 3,
				_embed: true,
			});
		}, []
	);

	console.log(fetched_posts);

	if (Array.isArray(fetched_posts) && fetched_posts.length) {
		setAttributes({ posts: fetched_posts })
	}

	return (
		<Card>
			<CardBody>
				<h4>Blog section</h4>

				<TextControl
                    label={__("Section title", "blockly")}
					placeholder={ 'Section title' }
                    type="text"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                />
				<TextControl
                    label={__("Section subtitle", "blockly")}
					placeholder={ 'Section subtitle' }
                    type="text"
                    value={subtitle}
                    onChange={(value) => setAttributes({ subtitle: value })}
                />
				<div style={{ display: 'flex', flexDirection: 'row' }}>
					{
						typeof posts.ap === 'function' && posts.map((post, i) => (
							<Card key={i}>
								<CardBody>
									<img
										src={ getFeaturedImage(post)['source'] }
										alt={ getFeaturedImage(post)['alt'] }
									/>
									{
										post.title.rendered
										? <RawHTML>{ post.title.rendered }</RawHTML>
										: __('(No title)', 'latest-posts')
									}
								</CardBody>
							</Card>
						))
					}
				</div>
			</CardBody>
		</Card>
	);
}

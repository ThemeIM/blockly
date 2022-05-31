import {
	InspectorControls,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { __experimentalGetSettings } from '@wordpress/date';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export default function Edit({ attributes, setAttributes }) {
	const { selectedTags } = attributes;

	const animatedComponents = makeAnimated();

	const allTags = useSelect((select) => {
		return select('core').getEntityRecords('taxonomy', 'post_tag', {
			per_page: -1,
		});
	}, []);

	const getCategoryOption = categories => categories && categories.map((tag) => {
		return { value: tag.id, label: tag.name, link: tag.link }
	})

	const setSelectedTags = selected_tags => setAttributes({selectedTags: selected_tags})

	return (
		<>
			{/* sidebar */}
			<InspectorControls>
				<PanelBody title='Post Query'>
					<Select
						isMulti
						name="tags"
						isClearable={true}
						isSearchable={true}
						isLoading={!allTags || allTags.length == 0}
						isDisabled={!allTags || allTags.length == 0}
						options={getCategoryOption(allTags)}
						components={animatedComponents}
						onChange={setSelectedTags}
						defaultValue={selectedTags}
					/>
				</PanelBody>
			</InspectorControls>

			{/* main */}
			<div class="widget-box blog-widget-box">
                <h4 class="widget-title">Tags</h4>
				<div class="tag-widget-box">
					<ul class="tag-list">
						{
							typeof selectedTags.map === 'function' && selectedTags.map((tag, i) => (
								<li><a href={tag.link ?? ''}>{ tag.label }</a></li>
							))
						}
					</ul>
				</div>
			</div>
		</>
	);
}

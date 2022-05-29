import {
	InspectorControls,
	MediaPlaceholder,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element'

export default function Edit( { attributes, setAttributes } ) {
	const [selectLink, setSelectLink] = useState();
	const { list } =  attributes;
	const onClickAddNewData = ( newData ) => {
		setAttributes({list: [...list, {link:'', titlt: '', icon:''}]});
	}

	const onChangeLinkValue = ( type, value ) => {
          const getList = [...list];
		  getList[selectLink][type] = value;
		  setAttributes({list: getList});
	}

	const removeItem = ( key ) => {
		const geArr = [...list];
		geArr.splice(key, 1);
		setAttributes({list: geArr});
	}

	return (
		<>
		<InspectorControls>
			<PanelBody title='Add New Social Item'>
				<div className='Add Item'>
					<div className='item-group'>
					<ul style={{padding: '0'}}>
						{list && list.map((listData, key) => {
							return (
								<li key={key} >
									<Button onClick={() => setSelectLink(key) }>
										<div>
										  <div>
												<TextControl 
												value={listData.title}
												onChange={ (title) => {onChangeLinkValue('title', title )} }
												placeholder = {__('Title', 'blockly')}
												/>
										  </div>
										<div>
										<TextControl 
										value={listData.link}
										onChange={ (link) => {onChangeLinkValue('link', link )} }
										placeholder = {__('Url', 'blockly')}
										/>
										</div>
										 <div style={{marginBottom: '100px'}}>
										 <TextControl 
										value={listData.icon}
										onChange={ (icon) => {onChangeLinkValue('icon', icon )} }
										placeholder = {__('Icon', 'blockly')}
										/>
										 </div>
										
										</div>
									</Button>
									<Button title='Remove' onClick={ () => removeItem(key) } className="btn btn-danger text-white">Remove</Button>
								</li>
								
							)
						})}
				   <li><Button onClick={ onClickAddNewData } className="btn btn--primary text-white">Add New</Button></li>
					</ul>
					</div>
				</div>
			</PanelBody>
		</InspectorControls>
		<div className='Editor'>
			<div class="footer-widget">				
				<ul class="footer-social">
					{list && list.map((listData, key) => {
						return (
							<li key={key}><a href={listData.link}><i class={listData.icon}></i></a></li>
						)
					})}
				</ul>
			</div>
		</div>
		</>
	);
}
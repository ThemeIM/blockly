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
	const { list, sectionTitle } =  attributes;
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
	
	const titleUpdate = (newTitle) => {
		setAttributes({sectionTitle : newTitle})
	}

	return (
		<>
		<InspectorControls>
			<PanelBody title='Add New Item'>
				<div className='Add Item'>
					<div className='item-group'>
						<div>
							<h3 className="title">{__('List Title', 'blockly')}</h3>
							<TextControl 
								value={sectionTitle}
								onChange={ titleUpdate }
								placeholder = {__('Title', 'blockly')}
							/>
						</div>
						<hr/>
						<h3 className="title">{__('Add New Item', 'List Title')}</h3>
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
			<div className="footer-widget">
				{sectionTitle && <h4 className="title">{sectionTitle}</h4>}
				
				<ul className="footer-list">
					{list && list.map((listData, key) => {
						return (
							<li key={key}><a href="">{listData.title && listData.title}</a></li>
						)
					})}
				</ul>
			</div>
		</div>
		</>
	);
}
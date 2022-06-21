import {
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { actionUrl, members, customers, downloades } =  attributes;
	const changeActionUrl= (newUrl) => {
        setAttributes({actionUrl:newUrl});
	}
	const changeMembersNumber= (newNumber) => {
        setAttributes({members:newNumber});
	}
	const changeCustomersNumber= (newNumber) => {
        setAttributes({customers:newNumber});
	}
	const changeDownloadesNumber= (newNumber) => {
        setAttributes({downloades:newNumber});
	}
	return (
		<>
		<InspectorControls>
		    <PanelBody title={__('Forms', 'blockly')}>
			     <div>
					<h3 className="title">{__('Action URL', 'blockly')}</h3>
					<TextControl 
						value={actionUrl}
						onChange={ changeActionUrl }
						placeholder = {__('Action Url', 'blockly')}
					/>
				</div>
            </PanelBody>
			<PanelBody title={__('Counter Number', 'blockly')}>
			   <div>
					<h3 className="title">{__('Members Number', 'blockly')}</h3>
					<TextControl 
						value={members}
						onChange={ changeMembersNumber }
						placeholder = {__('Members Number', 'blockly')}
					/>
				</div>
				<div>
					<h3 className="title">{__('Customers', 'blockly')}</h3>
					<TextControl 
						value={customers}
						onChange={ changeCustomersNumber }
						placeholder = {__('Customers Number', 'blockly')}
					/>
				</div>
				<div>
					<h3 className="title">{__('Downloades', 'blockly')}</h3>
					<TextControl 
						value={downloades}
						onChange={ changeDownloadesNumber }
						placeholder = {__('Downloades Number', 'blockly')}
					/>
				</div>
			</PanelBody>
		</InspectorControls>
		<div className="footer-top-area">
                <div className="row justify-content-center align-items-center mb-30-none">
                    <div className="col-xl-8 col-lg-6 mb-30">
                        <div className="footer-subscribe-area">
                            <form className="subscribe-form" action='#'>
                                <input type="email" className="form--control" placeholder="Enter Your mail" autocomplete="off" />
                                <button type="submit" className="btn--base">Subscribe Now <i className="fas fa-paper-plane ml-2"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 mb-30">
                        <div className="footer-statistics-area">
                            <div className="row justify-content-center mb-20-none">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xxs-4 mb-20">
                                    <div className="statistics-item">
                                        <h4 className="title">{members}+</h4>
                                        <p>Members</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xxs-4 mb-20">
                                    <div className="statistics-item">
                                        <h4 className="title">{customers}+</h4>
                                        <p>Customers</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xxs-4 mb-20">
                                    <div className="statistics-item">
                                        <h4 className="title">{downloades}+</h4>
                                        <p>Downloads</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
}
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { actionUrl, members, customers, downloades } =  attributes;

	return (
		<>
		<div className="footer-top-area">
                <div className="row justify-content-center align-items-center mb-30-none">
                    <div className="col-xl-8 col-lg-6 mb-30">
                        <div className="footer-subscribe-area">
                            <form action={actionUrl} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate subscribe-form" target="_blank" novalidate>
                                <input type="email" value="" name="EMAIL" className="required email form--control" id="mce-EMAIL" placeholder="Enter Your mail" />
                                <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                                <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ea24f339ef09d5b7ccc0c90c0_0d44e71bdf" tabindex="-1" value=""/></div>
	                            </div>    
                                <button type="submit" className="btn--base button" name="subscribe">Subscribe Now <i className="fas fa-paper-plane ml-2"></i></button>
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
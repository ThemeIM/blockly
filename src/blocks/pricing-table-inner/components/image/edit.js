// wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import {withColors,MediaUpload } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { Button, Dashicon } from '@wordpress/components';
//internal dependencies
import Inspector from './inspector';
import icons from './../../../../utils/components/icons';
import Avatar from './avatar';
//external dependencies
import classnames from 'classnames';

export default  class Edit extends Component {
    
	render() {

		const { 
			attributes: { pricingImgURL,pricingImgID,pricingImgAlt,paddingTop,paddingRight,paddingBottom,paddingLeft },
			setAttributes
		} = this.props;
		const ALLOWED_MEDIA_TYPES = [ 'image' ];
		const editClassName = classnames('');

		const editStyles = {
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
		};

		return [
			<Fragment key={ 'bly-pricing-table-inner-component-image-' + this.props.clientId }>

			  	<Inspector { ...this.props } />
			  	<Avatar { ...this.props }> 
					<figure className="bly-profile-image-square">
						<MediaUpload
							buttonProps={ {
								className: 'change-image',
							} }
							onSelect={ ( img ) =>
								setAttributes( {
									pricingImgID: img.id,
									pricingImgURL: img.url,
									pricingImgAlt: img.alt,
								} )
							}
							allowed={ ALLOWED_MEDIA_TYPES }
							type="image"
							value={ pricingImgID }
							render={ ( { open } ) => (
								<Fragment>
									<Button onClick={ open }>
										{ ! pricingImgID ? (
											icons.upload
										) : (
											<img
												className={ classnames(
													'bly-profile-avatar',
													'bly-change-image',
													'wp-image-' + pricingImgID
												) }
												src={ pricingImgURL }
												alt={ pricingImgAlt }
											/>
										) }
									</Button>
									{ pricingImgID && (
										<Button
											className="bly-remove-image"
											onClick={ () => {
												setAttributes( {
													pricingImgID: null,
													pricingImgURL: null,
													pricingImgAlt: null,
												} );
											} }
										>
											<Dashicon icon={ 'dismiss' } />
										</Button>
									) }
								</Fragment>
							) }
						>
							
						</MediaUpload>
					</figure>
				</Avatar>

			</Fragment>
		];
	}
}


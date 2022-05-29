//wordpress dependencies
import { __ }     from '@wordpress/i18n';
import { Component,Fragment } from '@wordpress/element';
import { BlockControls,AlignmentToolbar,RichText,MediaUpload } from '@wordpress/block-editor';
import { Button, Dashicon } from '@wordpress/components';
//internal dependencies
import Inspector  from './inspector';
import SocialIcons from './social';
import ProfileBox from './profile';
import Avatar     from './avatar';
import icons from './../../../utils/components/icons';
//external dependencie
import classnames from 'classnames';

const ALLOWED_MEDIA_TYPES = [ 'image' ];
export default class Edit extends Component {

    render(){
        const {
			attributes: {
				profileName,
				profileTitle,
				profileContent,
				profileAlignment,
				profileImgURL,
				profileImgID,
				profileImgAlt,
				profileTextColor,
				style_type,
			},
			setAttributes,
		} = this.props;

        return [

            <BlockControls key="controls">
				<AlignmentToolbar
					value={ profileAlignment }
					onChange={ ( value ) => setAttributes( { profileAlignment: value } ) }
				/>
			</BlockControls>,
	
			<Inspector key={ 'bly-author-profile-inspector-' + this.props.clientId } { ...{ setAttributes, ...this.props } } />,

            <ProfileBox key={ 'bly-author-profile-' + this.props.clientId } { ...this.props }>
				<Avatar { ...this.props }> 
					<figure className="bly-profile-image-square">
						<MediaUpload
							buttonProps={ {
								className: 'change-image',
							} }
							onSelect={ ( img ) =>
								setAttributes( {
									profileImgID: img.id,
									profileImgURL: img.url,
									profileImgAlt: img.alt,
								} )
							}
							allowed={ ALLOWED_MEDIA_TYPES }
							type="image"
							value={ profileImgID }
							render={ ( { open } ) => (
								<Fragment>
									<Button onClick={ open }>
										{ ! profileImgID ? (
											icons.upload
										) : (
											<img
												className={ classnames(
													'bly-profile-avatar',
													'bly-change-image',
													'wp-image-' + profileImgID
												) }
												src={ profileImgURL }
												alt={ profileImgAlt }
											/>
										) }
									</Button>
									{ profileImgID && (
										<Button
											className="bly-remove-image"
											onClick={ () => {
												setAttributes( {
													profileImgID: null,
													profileImgURL: null,
													profileImgAlt: null,
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

                <div className= { classnames( style_type == 'style_one' && 'bly-profile-column',
					'bly-profile-content-wrap'
				 	)} >

					<RichText
						tagName="h2"
						placeholder={ __( 'Add name', 'blockly' ) }
						keepPlaceholderOnFocus
						value={ profileName }
						className="bly-profile-name"
						style={ {color: profileTextColor} }
						onChange={ ( value ) =>setAttributes( { profileName: value } ) }
					/>

					<RichText
						tagName="p"
						placeholder={ __( 'Add title', 'blockly' ) }
						keepPlaceholderOnFocus
						value={ profileTitle }
						className="bly-profile-title"
						style={ {color: profileTextColor} }
						onChange={ ( value ) =>setAttributes( { profileTitle: value } )}
					/>

					<RichText
						tagName="div"
						className="bly-profile-text"
						multiline="p"
						placeholder={ __(
							'Add profile text...',
							'blockly'
						) }
						keepPlaceholderOnFocus
						value={ profileContent }
						allowedFormats={ [
							'core/bold',
							'core/italic',
							'core/strikethrough',
							'core/link',
						] }
						onChange={ ( value ) =>setAttributes( { profileContent: value } )}
					/>

       				<SocialIcons {...this.props} />
				</div>
            </ProfileBox>
        ]
    }
}
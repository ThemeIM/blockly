//wordpress dependencies
import { RichText } from '@wordpress/block-editor';
import { Component } from '@wordpress/element';
//internal dependencies
import classnames from 'classnames';
import ProfileBox from './profile';
import SocialIcons from './social';
import Avatar from './avatar';

//save component
export default class Save extends Component {

    render(){

        const {
			profileName,
			profileTitle,
			profileContent,
			profileImgURL,
			profileImgAlt,
			profileImgID,
			profileTextColor,
			style_type,
		} = this.props.attributes;

        return(
            <ProfileBox { ...this.props }>

                { profileImgURL && (
					<Avatar { ...this.props }>
						<figure className="bly-profile-image-square">
							<img
								className={ classnames(
									'bly-profile-avatar',
									'wp-image-' + profileImgID
								) }
								src={ profileImgURL }
								alt={ profileImgAlt }
							/>
						</figure>
					</Avatar>
				) }

                <div className={ classnames(
					 style_type == 'style_one' && 'bly-profile-column',
					'bly-profile-content-wrap'
					) }>

					{ profileName && (
						<RichText.Content
							tagName="h2"
							className="bly-profile-name"
							style={ {
								color: profileTextColor,
							} }
							value={ profileName }
						/>
					) }

					{ profileTitle && (
						<RichText.Content
							tagName="p"
							className="bly-profile-title"
							style={ {
								color: profileTextColor,
							} }
							value={ profileTitle }
						/>
					) }

					{ profileContent && (
						<RichText.Content
							tagName="div"
							className="bly-profile-text"
							value={ profileContent }
						/>
					) }

					<SocialIcons { ...this.props } />
                    
				</div>

            </ProfileBox>
        )
    }
}
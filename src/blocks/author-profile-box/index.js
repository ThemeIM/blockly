/**
 * BLOCK: Author Profile Box
 */

//WordPress dependencies
import  { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
//Internal dependencies
import Edit from './components/edit';
import Save from './components/save';
import './styles/style.scss';
import './styles/editor.scss';

//blockAttributes initailize
const blockAttributes = {
    style_type: {
        type: 'string',
        default: 'style_one'
    },
    profileName: {
        type: 'array',
        source: 'children',
        selector: '.bly-profile-name',
    },
    profileTitle: {
        type: 'array',
        source: 'children',
        selector: '.bly-profile-title',
    },
    profileContent: {
        type: 'array',
        selector: '.bly-profile-text',
        source: 'children',
    },
    profileAlignment: {
        type: 'string',
    },
    profileImgURL: {
        type: 'string',
        source: 'attribute',
        attribute: 'src',
        selector: 'img',
    },
    profileImgAlt: {
        type: 'string',
        source: 'attribute',
        selector: 'figure img',
        attribute: 'alt',
        default: '',
    },
    profileImgID: {
        type: 'number',
    },
    profileBackgroundColor: {
        type: 'string',
        default: '#f2f2f2',
    },
    profileTextColor: {
        type: 'string',
        default: '#32373c',
    },
    profileLinkColor: {
        type: 'string',
        default: '#999',
    },
    profileFontSize: {
        type: 'number',
        default: 18,
    },
    profileAvatarShape: {
        type: 'string',
        default: 'round',
    },
    borderRadius: {
        type: 'number',
        default: 0,
    },
    padding: {
        type: 'number',
        default: 2,
    },
    twitter: {
        type: 'url',
        default:'#'
    },
    facebook: {
        type: 'url',
        default:'#'
    },
    instagram: {
        type: 'url',
    },
    pinterest: {
        type: 'url',
    },
    
};
 
//register the block author-profile-box
registerBlockType( 'blockly/author-profile-box', {
    title: __( 'Author Profile Box', 'blockly' ),
    description: __( 'Add a profile box with bio info and social media links.', 'blockly' ),
    icon: {
        src: 'admin-users',
        background: '#cce5ff',
        foreground: '#004085'
    },
    category: 'blockly',
    keywords: [
        __( 'author', 'blockly' ), 
        __( 'profile', 'blockly' ),
        __( 'blockly', 'blockly' ),
    ],

    example: {
        attributes: {
            profileContent: __( 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'blockly' ),
            profileName: __('Russell Hawlader','blockly'),
            profileTitle: __('ARNTECH Founder & CEO','blockly')
        },
    },

    //setup the block attributes 
    attributes: blockAttributes,

    bly_settings_data: {
        bly_author_profile_profileFontSize: {
            title: __( 'Font Size', 'blockly' ),
        },
        bly_author_profile_profileAvatarShape: {
            title: __( 'Avatar Shape', 'blockly' ),
        },
        bly_author_profile_profileBackgroundColor: {
            title: __( 'Background Color', 'blockly' ),
        },
        bly_author_profile_profileTextColor: {
            title: __( 'Text Color', 'blockly' ),
        },
        bly_author_profile_profileLinkColor: {
            title: __( 'Social Link Color', 'blockly' ),
        },
        bly_author_profile_socialLinks: {
            title: __( 'Social Links', 'blockly' ),
        },
    },

    edit: ( props ) => {
        return <Edit { ...props } />;
    },

    save: ( props ) => {
        return <Save { ...props } />;
    },

} );
 
/**
 * BLOCK: Author Profile Box
 */

//WordPress dependencies
import  { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
//Internal dependencies
import Edit from './components/edit';
import './styles/style.scss';
import './styles/editor.scss';

//register the block author-profile-box
registerBlockType( 'blockly/blog-author', {
    title: __( 'Blog author', 'blockly' ),
    description: __( 'Blog author blog under blog page', 'blockly' ),
    icon: {
        src: 'dashicons-admin-users',
        background: '#cce5ff',
        foreground: '#004085'
    },
    category: 'blockly',
    keywords: [
        __( 'blog', 'blockly' ), 
        __( 'author', 'blockly' ), 
        __( 'blockly', 'blockly' ),
    ],
    example: {
        attributes: {
            // 
        },
    },
    attributes: {
        // 
    },
    edit: Edit,
    save: () => null
} );

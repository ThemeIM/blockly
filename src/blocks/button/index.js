/**
 * BLOCK: Button
 */

//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, AlignmentToolbar, BlockControls, URLInput } from '@wordpress/block-editor';
import { Button, Dashicon, Icon } from '@wordpress/components';
//internal dependencie
import Inspector from './components/inspector';
import CustomButton from './components/button';
import './styles/style.scss';
import './styles/editor.scss';
//external dependencie
import classnames from 'classnames';

class EditButtonBlock extends Component {

	render() {
		const {
			attributes: {
				buttonText,
				buttonUrl,
				buttonAlignment,
				buttonBackgroundColor,
				buttonTextColor,
				buttonSize,
				buttonShape,
			},
			isSelected,
			setAttributes,
		} = this.props;

		return [
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ buttonAlignment }
					onChange={ ( value ) => {
						setAttributes( { buttonAlignment: value } );
					} }
				/>
			</BlockControls>,

			<Inspector key={ 'bly-button-inspector-' + this.props.clientId } { ...this.props } />,

			<CustomButton key={ 'bly-button-custombutton-' + this.props.clientId } { ...this.props }>
				<RichText
					tagName="span"
					placeholder={ __( 'Button text...', 'blockly' ) }
					keepPlaceholderOnFocus
					value={ buttonText }
					allowedFormats={ [] }
					className={ classnames(
						'bly-button',
						buttonShape,
						buttonSize
					) }
					style={ {
						color: buttonTextColor ? buttonTextColor : '#ffffff',
						backgroundColor: buttonBackgroundColor
							? buttonBackgroundColor
							: '#3373dc',
					} }
					onChange={ ( value ) =>
						setAttributes( { buttonText: value } )
					}
				/>
			</CustomButton>,

			isSelected && (
				<form
					key="form-link"
					className={ `blocks-button__inline-link bly-button-${ buttonAlignment }` }
					onSubmit={ ( event ) => event.preventDefault() }
					style={ {
						textAlign: buttonAlignment,
					} }
				>
					<Dashicon icon={ 'admin-links' } />
					
					<URLInput
						className="button-url"
						value={ buttonUrl }
						onChange={ ( value ) =>
							setAttributes( { buttonUrl: value } )
						}
					/>
					<Button label={ __( 'Apply', 'blockly' ) } type="submit">
						<Icon icon="editor-break" />
					</Button>
				</form>
			),
		];
	}
}

// Register the block
registerBlockType( 'blockly/button', {
	title: __( 'Button', 'blockly' ),
	description: __( 'Add a customizable button.', 'blockly' ),
	icon: {
		src: 'admin-links',
		background: '#cce5ff',
		foreground: '#004085',
	},
	category: 'blockly',
	keywords: [
		__( 'button', 'blockly' ),
		__( 'link', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	example: {
		attributes: {
			buttonText: __( 'Button text', 'blockly' ),
		},
	},
	attributes: {
		buttonText: {
			type: 'string',
		},
		buttonUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		buttonAlignment: {
			type: 'string',
		},
		buttonBackgroundColor: {
			type: 'string',
		},
		buttonTextColor: {
			type: 'string',
		},
		buttonSize: {
			type: 'string',
			default: 'bly-button-size-medium',
		},
		buttonShape: {
			type: 'string',
			default: 'bly-button-shape-rounded',
		},
		buttonTarget: {
			type: 'boolean',
			default: false,
		},
	},

	bly_settings_data: {
		bly_button_buttonOptions: {
			title: __( 'Button Options', 'blockly' ),
		},
	},

	edit: EditButtonBlock,

	save: ( props )=> {
		
		const {
			buttonText,
			buttonUrl,
			buttonBackgroundColor,
			buttonTextColor,
			buttonSize,
			buttonShape,
			buttonTarget,
		} = props.attributes;

		return (
			<CustomButton { ...props } >
				{ buttonText && (
					<a
						href={ buttonUrl }
						target={ buttonTarget ? '_blank' : null }
						rel={ buttonTarget ? 'noopener noreferrer' : null }
						className={ classnames(
							'bly-button',
							buttonShape,
							buttonSize
						) }
						style={ {
							color: buttonTextColor
								? buttonTextColor
								: '#ffffff',
							backgroundColor: buttonBackgroundColor
								? buttonBackgroundColor
								: '#3373dc',
						} }
					>
						<RichText.Content value={ buttonText } />
					</a>
				) }
			</CustomButton>
		);
	},
} );

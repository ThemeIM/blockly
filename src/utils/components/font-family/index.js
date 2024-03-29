/**
 * Internal dependencies
 */
import googleFonts from './fonts';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { withInstanceId } from '@wordpress/compose';
import { BaseControl } from '@wordpress/components';

function FontFamilyPicker( { label, value, help, instanceId, onChange, className, ...props } ) {

	const id = `inspector-blockly-font-family-${ instanceId }`;

	const systemFonts = [
		{ value: '', label: __( 'Default', 'blyolck' ) },
		{ value: 'Arial', label: 'Arial' },
		{ value: 'Helvetica', label: 'Helvetica' },
		{ value: 'Times New Roman', label: 'Times New Roman' },
		{ value: 'Georgia', label: 'Georgia' },
	];

	let fonts = [];

	// Add Google Fonts
	Object.keys( googleFonts ).forEach( ( k ) => {
		fonts.push(
			{ value: k, label: k }
		);
	} );

	systemFonts.reverse().forEach( ( font ) => {
		fonts.unshift( font );
	} );

	/**
	 * Filter the available list of Google fonts
	 *
	 * @type {Array}
	 */
	fonts = wp.hooks.applyFilters( 'blockly.google_fonts', fonts );

	const onChangeValue = ( event ) => {

		const meta = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' );

		let ba = '';
		const googleFontsAttr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';
		const link = document.createElement( 'link' );
		const isSystemFont = systemFonts.filter( function( font ) {
			return font.label === event.target.value;
		} ).length > 0;

		link.rel = 'stylesheet';

		if ( typeof meta !== 'undefined' && typeof meta._blockly_fonts_attr !== 'undefined' ) {
			ba = meta._blockly_fonts_attr;
		}

		if ( ba.length > 0 ) {
			
			//Load fonts on the header
			if ( ! ba.includes( event.target.value ) && ! isSystemFont ) {
				link.href = 'https://fonts.googleapis.com/css?family=' + event.target.value.replace( / /g, '+' ) + googleFontsAttr;
				document.head.appendChild( link );
			}
			ba = ba.replace( ',' + event.target.value, '' );
			ba = ba + ',' + event.target.value;

		} else {
			link.href = 'https://fonts.googleapis.com/css?family=' + event.target.value.replace( / /g, '+' ) + googleFontsAttr;
			document.head.appendChild( link );
			ba = event.target.value;
		}

		//Save values to metadata
		wp.data.dispatch( 'core/editor' ).editPost(	{
			meta: {
				_blockly_fonts_attr: ba,
			},
		} 
		);

		onChange( event.target.value );
	};

	return (
		<BaseControl label={ label } id={ id } help={ help } className={ className }>

			{ /* Disable reason: onChange needed to pass user selection onto logic.
				Tested with Keyboard events and working as expected */ }
			{ /* eslint-disable-next-line jsx-a11y/no-onchange */ }

			<select
				id={ id }
				className="components-select-control__input components-select-control__input--blockly-fontfamily"
				onChange={ onChangeValue }
				aria-describedby={ !! help ? `${ id }__help` : undefined }
				value={ value }
				{ ...props }
			>
				{ fonts.map( ( option, index ) =>
					<option
						key={ `${ option.label }-${ option.value }-${ index }` }
						value={ option.value }
					>
						{ option.label }
					</option>
				) }
			</select>

		</BaseControl>
	);
}

export default withInstanceId( FontFamilyPicker );

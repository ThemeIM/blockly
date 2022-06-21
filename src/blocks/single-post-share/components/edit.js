import { __ } from '@wordpress/i18n';
import { format, dateI18n, __experimentalGetSettings } from '@wordpress/date';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<>
		<div class="footer-widget">
			<ul class="footer-social">
				<li><a href="#0"><i class="fab fa-facebook-f"></i></a></li>
				<li><a href="#0"><i class="fab fa-twitter"></i></a></li>
				<li><a href="#0"><i class="fab fa-google-plus-g"></i></a></li>
				<li><a href="#0"><i class="fab fa-instagram"></i></a></li>
			</ul>
        </div>
		</>
	 
	);
}
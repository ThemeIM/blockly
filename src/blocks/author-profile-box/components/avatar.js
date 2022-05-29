//wordpress dependencie
import { Component } from '@wordpress/element';
//external dependencie
import classnames from 'classnames';

export default class Avatar extends Component {
    render(){
        const {style_type} = this.props.attributes;
        return(
            <div className= {classnames(
                style_type == 'style_one' && 'bly-profile-column',
                'bly-profile-avatar-wrap'
                )}>
				<div className="bly-profile-image-wrap">
					{ this.props.children }
				</div>
			</div>
        )
    }
}
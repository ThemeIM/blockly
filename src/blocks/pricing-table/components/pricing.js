/**
 * Pricing Block Wrapper
 */
import { Component } from '@wordpress/element';
import classnames from 'classnames';

export default class Pricing extends Component {

    render(){
        
        const {
            attributes: { columns, align },
            setAttribues
        } = this.props;

        const className = classnames( [ this.props.className, 'bly-pricing-columns-' + columns ],{[ 'align' + align ]: align});

        return(
            <div className={ className ? className : undefined }>
                { this.props.children }
            </div>
        )

    }
}
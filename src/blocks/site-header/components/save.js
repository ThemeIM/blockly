import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes, setAttributes }) {
    const {
        pages,
        products,
        freeItems,
        pricePlan,
        hire,
        login,
        logo,
        productDropdownIcon,
        cartIcon
    } = attributes;

    return (
        <header className="header-section">
            <div className="header">
                <div className="header-bottom-area">
                    <div className="container custom-container">
                        <div className="header-menu-content">
                            <nav className="navbar navbar-expand-xl p-0">
                                <a
                                    className="site-logo site-title"
                                    href="index.html"
                                >
                                    <img
                                        src={ logo }
                                        alt="site-logo"
                                    />
                                </a>
                                <button
                                    className="navbar-toggler ml-auto"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggle-bar"></span>
                                </button>
                                <div
                                    className="toggle-menu collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav main-menu">
                                        <li className="menu_has_children">
                                            <a href="#0">
                                                <div className="toggle-menu">
                                                    Browse{" "}
                                                    <i className="fas fa-chevron-down"></i>
                                                </div>
                                            </a>
                                            <ul className="sub-menu">
                                                { typeof pages.map === 'function' && pages.map((page, index) => (
													<li key={index}>
														<a href={page.link}>
															<i className="las la-hand-holding-heart"></i>{" "}
															{page.title}
														</a>
													</li>
												)) }
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav main-menu ml-auto">
                                        <li>
                                            <a href={freeItems}>
                                                Free items
                                            </a>
                                        </li>
                                        <li>
                                            <a href={pricePlan}>Pricing</a>
                                        </li>
                                    </ul>
                                    <div className="header-right">
                                        <div className="toggle-menu product-nav">
                                            <span className="icon">
                                                <img
                                                    src={ productDropdownIcon }
                                                    alt="icon"
                                                />
                                            </span>
                                            <span className="product-nav-menu">
                                                {" "}
                                                <a href="#">
                                                    Our Products
                                                </a>{" "}
                                            </span>
                                            <div className="product-navigation">
                                                <ul className="product-nav-list">
													{
														typeof products.map === 'function' && products.map((product, index) => (
															<li key={index}>
																<a href={product.link}>
																	<span>{product.title}</span>{" "}
																</a>
															</li>
														))
													}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="header-cart-area">
                                            <div className="header-cart-action">
                                                <span className="icon">
                                                    <i className={ cartIcon }></i>
                                                </span>
                                                <span className="cart-badge">
                                                    2
                                                </span>
                                            </div>
                                            <div className="cart-widget-dropdown">
                                                <div className="cart-widget">
                                                    <div className="cart-widget-item">
                                                        <div className="cart-widget-item-left">
                                                            <div className="cart-widget-thumb">
                                                                <img
                                                                    src={`${ blocklyBlockData['blockly_url'] }assets/images/cart/cart-1.png`}
                                                                    alt="cart"
                                                                />
                                                            </div>
                                                            <div className="cart-widget-content">
                                                                <h6 className="title">
                                                                    Dialer –
                                                                    WordPress
                                                                    Theme
                                                                </h6>
                                                                <span className="sub-title">
                                                                    1 Item
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="cart-widget-item-right">
                                                            <div className="cart-cross-btn">
                                                                <span>
                                                                    <i className="las la-times"></i>
                                                                </span>
                                                            </div>
                                                            <div className="cart-widget-price">
                                                                <span>$59</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-widget">
                                                    <div className="cart-widget-item">
                                                        <div className="cart-widget-item-left">
                                                            <div className="cart-widget-thumb">
                                                                <img
                                                                    src={`${ blocklyBlockData['blockly_url'] }assets/images/cart/cart-2.png`}
                                                                    alt="cart"
                                                                />
                                                            </div>
                                                            <div className="cart-widget-content">
                                                                <h6 className="title">
                                                                    WordPress
                                                                    theme design
                                                                    to HTML5
                                                                </h6>
                                                                <span className="sub-title">
                                                                    1 Item
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="cart-widget-item-right">
                                                            <div className="cart-cross-btn">
                                                                <span>
                                                                    <i className="las la-times"></i>
                                                                </span>
                                                            </div>
                                                            <div className="cart-widget-price">
                                                                <span>$49</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-widget">
                                                    <div className="cart-widget-item">
                                                        <div className="cart-widget-item-left">
                                                            <div className="cart-widget-thumb">
                                                                <img
                                                                    src={`${ blocklyBlockData['blockly_url'] }assets/images/cart/cart-3.png`}
                                                                    alt="cart"
                                                                />
                                                            </div>
                                                            <div className="cart-widget-content">
                                                                <h6 className="title">
                                                                    SERP &amp;
                                                                    Crowd
                                                                    Competitor
                                                                    Analysis
                                                                </h6>
                                                                <span className="sub-title">
                                                                    1 Item
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="cart-widget-item-right">
                                                            <div className="cart-cross-btn">
                                                                <span>
                                                                    <i className="las la-times"></i>
                                                                </span>
                                                            </div>
                                                            <div className="cart-widget-price">
                                                                <span>$29</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="header-action-area">
                                            <div className="header-action">
                                                <a
                                                    href={hire}
                                                    className="btn--base"
                                                >
                                                    Hire Us{" "}
                                                    <i className="fas fa-paper-plane ml-2"></i>
                                                </a>
                                                <a
                                                    href={login}
                                                    className="btn--base active"
                                                >
                                                    Login{" "}
                                                    <i className="icon-Group-788 ml-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

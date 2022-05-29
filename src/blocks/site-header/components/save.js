import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes, setAttributes }) {
    const { pages, products, freeItems, pricePlan, hire, login } = attributes;

    return (
        <header class="header-section">
            <div class="header">
                <div class="header-bottom-area">
                    <div class="container custom-container">
                        <div class="header-menu-content">
                            <nav class="navbar navbar-expand-xl p-0">
                                <a
                                    class="site-logo site-title"
                                    href="index.html"
                                >
                                    <img
                                        src="assets/images/logo/logo.png"
                                        alt="site-logo"
                                    />
                                </a>
                                <button
                                    class="navbar-toggler ml-auto"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="toggle-bar"></span>
                                </button>
                                <div
                                    class="toggle-menu collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul class="navbar-nav main-menu">
                                        <li class="menu_has_children">
                                            <a href="#0">
                                                <div class="toggle-menu">
                                                    Browse{" "}
                                                    <i class="fas fa-chevron-down"></i>
                                                </div>
                                            </a>
                                            <ul class="sub-menu">
                                                { typeof pages.map === 'function' && pages.map((page, index) => (
													<li key={index}>
														<a href={page.link}>
															<i class="las la-hand-holding-heart"></i>{" "}
															{page.title}
														</a>
													</li>
												)) }
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    class="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul class="navbar-nav main-menu ml-auto">
                                        <li>
                                            <a href={freeItems}>
                                                Free items
                                            </a>
                                        </li>
                                        <li>
                                            <a href={pricePlan}>Pricing</a>
                                        </li>
                                    </ul>
                                    <div class="header-right">
                                        <div class="toggle-menu product-nav">
                                            <span class="icon">
                                                <img
                                                    src="assets/images/icon/icon-9.png"
                                                    alt="icon"
                                                />
                                            </span>
                                            <span class="product-nav-menu">
                                                {" "}
                                                <a href="#">
                                                    Our Products
                                                </a>{" "}
                                            </span>
                                            <div class="product-navigation">
                                                <ul class="product-nav-list">
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
                                        <div class="header-cart-area">
                                            <div class="header-cart-action">
                                                <span class="icon">
                                                    <i class="las la-shopping-cart"></i>
                                                </span>
                                                <span class="cart-badge">
                                                    2
                                                </span>
                                            </div>
                                            <div class="cart-widget-dropdown">
                                                <div class="cart-widget">
                                                    <div class="cart-widget-item">
                                                        <div class="cart-widget-item-left">
                                                            <div class="cart-widget-thumb">
                                                                <img
                                                                    src="assets/images/cart/cart-1.png"
                                                                    alt="cart"
                                                                />
                                                            </div>
                                                            <div class="cart-widget-content">
                                                                <h6 class="title">
                                                                    Dialer –
                                                                    WordPress
                                                                    Theme
                                                                </h6>
                                                                <span class="sub-title">
                                                                    1 Item
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="cart-widget-item-right">
                                                            <div class="cart-cross-btn">
                                                                <span>
                                                                    <i class="las la-times"></i>
                                                                </span>
                                                            </div>
                                                            <div class="cart-widget-price">
                                                                <span>$59</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cart-widget">
                                                    <div class="cart-widget-item">
                                                        <div class="cart-widget-item-left">
                                                            <div class="cart-widget-thumb">
                                                                <img
                                                                    src="assets/images/cart/cart-2.png"
                                                                    alt="cart"
                                                                />
                                                            </div>
                                                            <div class="cart-widget-content">
                                                                <h6 class="title">
                                                                    WordPress
                                                                    theme design
                                                                    to HTML5
                                                                </h6>
                                                                <span class="sub-title">
                                                                    1 Item
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="cart-widget-item-right">
                                                            <div class="cart-cross-btn">
                                                                <span>
                                                                    <i class="las la-times"></i>
                                                                </span>
                                                            </div>
                                                            <div class="cart-widget-price">
                                                                <span>$49</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cart-widget">
                                                    <div class="cart-widget-item">
                                                        <div class="cart-widget-item-left">
                                                            <div class="cart-widget-thumb">
                                                                <img
                                                                    src="assets/images/cart/cart-3.png"
                                                                    alt="cart"
                                                                />
                                                            </div>
                                                            <div class="cart-widget-content">
                                                                <h6 class="title">
                                                                    SERP &amp;
                                                                    Crowd
                                                                    Competitor
                                                                    Analysis
                                                                </h6>
                                                                <span class="sub-title">
                                                                    1 Item
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="cart-widget-item-right">
                                                            <div class="cart-cross-btn">
                                                                <span>
                                                                    <i class="las la-times"></i>
                                                                </span>
                                                            </div>
                                                            <div class="cart-widget-price">
                                                                <span>$29</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="header-action-area">
                                            <div class="header-action">
                                                <a
                                                    href={hire}
                                                    class="btn--base"
                                                >
                                                    Hire Us{" "}
                                                    <i class="fas fa-paper-plane ml-2"></i>
                                                </a>
                                                <a
                                                    href={login}
                                                    class="btn--base active"
                                                >
                                                    Login{" "}
                                                    <i class="icon-Group-788 ml-2"></i>
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

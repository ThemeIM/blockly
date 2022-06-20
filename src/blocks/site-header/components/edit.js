import {
    InspectorControls,
    MediaPlaceholder,
    __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { PanelBody, Button, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ImageInput from "./imageInput";
import SettingsInput from '../../../utils/form/SettingsInput'
import SettingsListIconInput from "./SettingsListIconInput";
import SettingsListInput from "./SettingsListInput";
import '../styles/editor.scss'


export default function Edit({ attributes, setAttributes }) {
    const {
        pages,
        pages_type_2,
        pages_type_3,
        products,
        freeItems,
        pricePlan,
        hire,
        login,
        logo,
        productDropdownIcon,
        cartIcon
    } = attributes;

    console.log({
        pages,
        pages_type_2,
        pages_type_3,
    });

    /** page functions */
    const addPage = () => {
        setAttributes({ pages: [...pages, { link: "", title: "", icon: "" }] })
    }

    const removePage = (index) => {
        let new_pages = [ ...pages ]
        new_pages.splice(index, 1)
        setAttributes({ pages: new_pages })
    }

    const onChangePageItem = ({ index, title, icon, link }) => {
        let all_pages = [ ...pages ]

        if (title) {
            all_pages[index]['title'] = title
        }

        if (icon) {
            all_pages[index]['icon'] = icon
        }

        if (link) {
            all_pages[index]['link'] = link
        }

        setAttributes({ pages: all_pages })
    }

    /** page_2 functions */
    const addPage_2 = () => {
        setAttributes({ pages_type_2: [...pages_type_2, { link: "", title: "", icon: "" }] })
    }

    const removePage_2 = (index) => {
        let new_pages_type_2 = [ ...pages_type_2 ]
        new_pages_type_2.splice(index, 1)
        setAttributes({ pages_type_2: new_pages_type_2 })
    }

    const onChangePageItem_2 = ({ index, title, icon, link }) => {
        let all_pages_type_2 = [ ...pages_type_2 ]

        if (title) {
            all_pages_type_2[index]['title'] = title
        }

        if (icon) {
            all_pages_type_2[index]['icon'] = icon
        }

        if (link) {
            all_pages_type_2[index]['link'] = link
        }

        setAttributes({ pages_type_2: all_pages_type_2 })
    }

    /** page_3 functions */
    const addPage_3 = () => {
        setAttributes({ pages_type_3: [...pages_type_3, { link: "", title: "", icon: "" }] })
    }

    const removePage_3 = (index) => {
        let new_pages_type_3 = [ ...pages_type_3 ]
        new_pages_type_3.splice(index, 1)
        setAttributes({ pages_type_3: new_pages_type_3 })
    }

    const onChangePageItem_3 = ({ index, title, icon, link }) => {
        let all_pages_type_3 = [ ...pages_type_3 ]

        if (title) {
            all_pages_type_3[index]['title'] = title
        }

        if (icon) {
            all_pages_type_3[index]['icon'] = icon
        }

        if (link) {
            all_pages_type_3[index]['link'] = link
        }

        setAttributes({ pages_type_3: all_pages_type_3 })
    }

    /** product functions */
    const addProduct = (newData) => {
        setAttributes({ products: [...products, { link: "", title: "" }] })
    }

    const removeProduct = (index) => {
        setAttributes({ products: [ ...products.filter((val, key) => key !== index) ] })
    }

    const onChangeProductItem = ({ index, title, link }) => {
        let all_products = [ ...products ]
        all_products[index]['title'] = title
        all_products[index]['link'] = link

        setAttributes({ products: [ ...all_products ] })
    }

    const setAttributeValue = (attributeName, value) => {
        setAttributes({ [attributeName] : value })
    }

    return (
        <div className="card" style={{ maxWidth: '100%' }}>
            <div className="card-body">
                <div className="row p-3">
                    <div className="col-md-6">
                        <SettingsInput label="Free Items link" value={freeItems} setAttributeValue={setAttributeValue} attributeName={'freeItems'} />
                        <SettingsInput label="Pricing link" value={pricePlan} setAttributeValue={setAttributeValue} attributeName={'pricePlan'} />
                        <SettingsInput label="Cart icon class" value={cartIcon} setAttributeValue={setAttributeValue} attributeName={'cartIcon'} />
                    </div>
                    <div className="col-md-6">
                        <SettingsInput label="Hire us link" value={hire} setAttributeValue={setAttributeValue} attributeName={'hire'} />
                        <SettingsInput label="Login link" value={login} setAttributeValue={setAttributeValue} attributeName={'login'} />
                    </div>

                    <ImageInput
                        title={'Site Logo Image'}
                        name={'logo'}
                        value={logo}
                        setterFunction={setAttributes}
                    />
                    <ImageInput
                        title={'Product Dropdown Image'}
                        name={'productDropdownIcon'}
                        value={productDropdownIcon}
                        setterFunction={setAttributes}
                    />

                    {/* Page - 1 */}
                    <div className="col-md-12">
                        <h5>Pages</h5>
                        {
                            typeof pages.map === 'function' && pages.map((page, index) => (
                                <SettingsListIconInput key={index}
                                    onChangePageItem={onChangePageItem}
                                    removePage={removePage}
                                    page={page}
                                    index={index}
                                />
                            )) 
                        }
                        <div className="text-center mt-3">
                            <button className="btn btn-style-1 px-5" onClick={() => addPage()}>Add Page</button>
                        </div>
                    </div>
                    {/* Page - 2 */}
                    <div className="col-md-12">
                        <h5>Pages - 2</h5>
                        {
                            typeof pages_type_2.map === 'function' && pages_type_2.map((page_2, index_2) => (
                                <SettingsListIconInput key={index_2}
                                    onChangePageItem={onChangePageItem_2}
                                    removePage={removePage_2}
                                    page={page_2}
                                    index={index_2}
                                />
                            ))
                        }
                        <div className="text-center mt-3">
                            <button className="btn btn-style-1 px-5" onClick={() => addPage_2()}>Add Page</button>
                        </div>
                    </div>
                    {/* Page - 3 */}
                    <div className="col-md-12">
                        <h5>Pages - 3</h5>
                        {
                            typeof pages_type_3.map === 'function' && pages_type_3.map((page_3, index_3) => (
                                <SettingsListIconInput key={index_3}
                                    onChangePageItem={onChangePageItem_3}
                                    removePage={removePage_3}
                                    page={page_3}
                                    index={index_3}
                                />
                            )) 
                        }
                        <div className="text-center mt-3">
                            <button className="btn btn-style-1 px-5" onClick={() => addPage_3()}>Add Page</button>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <h5>Products</h5>
                        {
                            typeof products.map === 'function' && products.map((product, index) => (
                                <SettingsListInput key={index}
                                    index={index}
                                    onChangeProductItem={onChangeProductItem}
                                    removeProduct={removeProduct}
                                    product={product}
                                />
                            )) 
                        }
                        <div className="text-center mt-3">
                            <button className="btn btn-style-1 px-5" onClick={() => addProduct()}>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

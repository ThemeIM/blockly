export default function SettingsListInput({ onChangeProductItem, removeProduct, product, index }) {
    return (
        <div className="card" style={{ maxWidth: '100%' }}>
            <span class="remove_page" onClick={() => removeProduct(index)}>x</span>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group setting-input-group">
                            <label htmlFor={ `product_${index}_title` }>Title</label>
                            <input type="text" id={`product_${index}_title`} className="form-control" value={ product.title } onChange={e => onChangeProductItem({ index, title: e.target.value })} />
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group setting-input-group">
                        <label htmlFor={ `product_${index}_link` }>Link</label>
                        <input type="text" id={`product_${index}_link`} className="form-control" value={ product.link } onChange={e => onChangeProductItem({ index, link: e.target.value })} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

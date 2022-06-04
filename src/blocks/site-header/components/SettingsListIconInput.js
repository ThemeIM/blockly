export default function SettingsListIconInput({ onChangePageItem, removePage, page, index }) {
    return (
        <div className="card" style={{ maxWidth: '100%' }}>
            <span className="remove_page" onClick={() => removePage(index)}>x</span>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group setting-input-group">
                            <label htmlFor={ `page_${index}_icon` }>Icon</label>
                            <input type="text" id={`page_${index}_icon`} className="form-control" value={ page.icon } onChange={e => onChangePageItem({ index, icon: e.target.value })} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group setting-input-group">
                            <label htmlFor={ `page_${index}_title` }>Title</label>
                            <input type="text" id={`page_${index}_title`} className="form-control" value={ page.title } onChange={e => onChangePageItem({ index, title: e.target.value })} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group setting-input-group">
                            <label htmlFor={ `page_${index}_link` }>Link</label>
                            <input type="text" id={`page_${index}_link`} className="form-control" value={ page.link } onChange={e => onChangePageItem({ index, link: e.target.value })} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

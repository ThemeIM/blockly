import { MediaPlaceholder } from "@wordpress/block-editor";

export default function ImageInput({ title, name, value, setterFunction }) {
    const setAttributeValue = (attributeName, value) => {
        setterFunction({ [attributeName] : value })
    }

    return (
        <div className="col-md-6 mt-4">
            {value && (
                <div className="img-fluid">
                    <img src={value} alt="" />
                </div>
            )}
            <MediaPlaceholder
                onSelect={(image) => setAttributeValue(name, image.url)}
                onSelectURL={(url) => setAttributeValue(name, url)}
                allowedTypes={["image"]}
                multiple={false}
                labels={{ title }}
            />
        </div>
    );
}

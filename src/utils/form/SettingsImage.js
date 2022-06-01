import { MediaPlaceholder } from "@wordpress/block-editor";

export default function SettingsImage({ image_url, title, state_key, valueSetter }) {
    return (
        <>
            {
                image_url && 
                <div className="img-fluid">
                    <img src={image_url} alt="" />
                </div>
            }
            <MediaPlaceholder
                onSelect={(image) => valueSetter(state_key, image.url)}
                onSelectURL={(url) => valueSetter(state_key, url)}
                allowedTypes={["image"]}
                multiple={false}
                labels={{ title }}
            />
        </>
    )
}

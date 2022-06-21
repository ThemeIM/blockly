import { __ } from "@wordpress/i18n";
import { useState } from "react";
import {
    MediaPlaceholder,
    RichText,
    MediaUploadCheck,
    MediaUpload,
} from "@wordpress/block-editor";

import {
    Card,
    CardBody,
    TextControl,
    Button,
    Dashicon,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
    const { title, subtitle, video_thumbnail, video_url, items } = attributes;
    const [state, setState] = useState(0);

    const addItem = () => {
        setAttributes({
            items: [
                ...items,
                {
                    user_name: "",
                    user_info: "",
                    user_image: "",
                    review: "",
                },
            ],
        });
        setState(state + 1);
    };

    const updateItem = (index, type, data) => {
        let all_items = [...items];
        all_items[index][type] = data;
        setState(state + 1);
        return setAttributes({ items: all_items });
    };

    const removeItem = (index) => {
        let all_items = [...items];
        all_items.splice(index, 1);
        setAttributes({ items: all_items });
        setState(state + 1);
    };

    const removeItemBackground = (index) => {
        let all_items = [...items];
        all_items[index]["user_image"] = "";
        setAttributes({ items: all_items });
        setState(state + 1);
    };

    return (
        <Card>
            <CardBody>
                <RichText
                    tagName="h4"
                    placeholder={__("Add title", "blockly")}
                    className="section-title"
                    keepPlaceholderOnFocus
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                />
                <RichText
                    tagName="p"
                    placeholder={__("Add subtitle", "blockly")}
                    className="section-title"
                    keepPlaceholderOnFocus
                    value={subtitle}
                    onChange={(value) => setAttributes({ subtitle: value })}
                />
                <TextControl
                    label={__("Video URL", "blockly")}
                    type="text"
                    value={video_url}
                    onChange={(value) => setAttributes({ video_url: value })}
                />
                <MediaUpload
                    allowedTypes={["image"]}
                    onSelect={(media) =>
                        setAttributes({ video_thumbnail: media.sizes.full.url })
                    }
                    render={({ open }) => (
                        <Button
                            className={
                                video_thumbnail
                                    ? "editor-post-featured-image__preview"
                                    : "editor-post-featured-image__toggle"
                            }
                            onClick={open}
                        >
                            {video_thumbnail ? (
                                <div>
                                    <img src={video_thumbnail} />
                                </div>
                            ) : (
                                "Select Image"
                            )}
                        </Button>
                    )}
                />

                <h5>Client Feedbacks</h5>
                {typeof items.map === "function" &&
                    items.map((item, i) => (
                        <div
                            style={{
                                border: "1px solid grey",
                                padding: "25px 25px",
                                margin: "25px 0",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "end",
                                }}
                            >
                                <Button onClick={() => removeItem(i)}>
                                    <Dashicon icon="dismiss" />
                                </Button>
                            </div>

                            <TextControl
                                label={__("User name", "blockly")}
                                type="text"
                                value={item.user_name}
                                onChange={(value) =>
                                    updateItem(i, "user_name", value)
                                }
                            />
                            <TextControl
                                label={__("User info", "blockly")}
                                placeholder={__(
                                    "Ex.- CEO - Awesome Tech",
                                    "blockly"
                                )}
                                type="text"
                                value={item.user_info}
                                onChange={(value) =>
                                    updateItem(i, "user_info", value)
                                }
                            />

                            {item.user_image && (
                                <Button
                                    isLink
                                    isDestructive
                                    onClick={() => removeItemBackground(i)}
                                >
                                    Remove
                                </Button>
                            )}
                            <MediaUpload
                                allowedTypes={["image"]}
                                onSelect={(media) =>
                                    updateItem(
                                        i,
                                        "user_image",
                                        media.sizes.full.url
                                    )
                                }
                                render={({ open }) => (
                                    <Button
                                        className={
                                            item.user_image
                                                ? "editor-post-featured-image__preview"
                                                : "editor-post-featured-image__toggle"
                                        }
                                        onClick={open}
                                    >
                                        {item.user_image ? (
                                            <div>
                                                <img src={item.user_image} />
                                            </div>
                                        ) : (
                                            "Select Image"
                                        )}
                                    </Button>
                                )}
                            />

                            <TextControl
                                label={__("Review", "blockly")}
                                type="text"
                                value={item.review}
                                onChange={(value) =>
                                    updateItem(i, "review", value)
                                }
                            />
                        </div>
                    ))}
                <Button variant="secondary" onClick={() => addItem()}>
                    Add Item
                </Button>
            </CardBody>
        </Card>
    );
}

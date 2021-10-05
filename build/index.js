/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/alert/index.js":
/*!***********************************!*\
  !*** ./src/blocks/alert/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/alert/styles/style.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/alert/styles/editor.scss");


/**
 * BLOCK: Pricing Table
 */
// wordpress dependencies



 //import css 


 // Available alert types for a dropdown setting.

const all_types = [{
  value: 'primary',
  label: 'Primary'
}, {
  value: 'secondary',
  label: 'Secondary'
}, {
  value: 'success',
  label: 'Success'
}, {
  value: 'warning',
  label: 'Warning'
}, {
  value: 'danger',
  label: 'Danger'
}, {
  value: 'info',
  label: 'Info'
}, {
  value: 'light',
  label: 'Light'
}, {
  value: 'dark',
  label: 'Dark'
}]; //register the block alert-box

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("blockly/alert-box", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alert Box', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A simple block for alert boxes', 'blockly'),
  category: 'blockly',
  icon: {
    src: 'bell',
    background: '#cce5ff',
    foreground: '#004085'
  },
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('notice', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('message', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('blockly', 'blockly')],
  example: {
    attributes: {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'blockly')
    }
  },
  attributes: {
    alert_type: {
      type: 'string',
      default: 'primary'
    },
    content: {
      type: 'string',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea sequat, vel illum dolore eu feugiat nulla facili', 'blockly')
    },
    dismiss: {
      type: 'Boolean',
      default: true
    },
    backgroundColor: {
      type: 'string',
      default: '#cce5ff'
    },
    textColor: {
      type: 'string',
      default: '#004085'
    }
  },
  edit: props => {
    const hideAlert = () => hideAlert();

    const {
      attributes: {
        alert_type,
        content,
        dismiss,
        backgroundColor,
        textColor
      },
      setAttributes
    } = props;
    const styles = {
      backgroundColor,
      color: textColor,
      borderColor: backgroundColor
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Please select the type of alert you want to display.",
      options: all_types,
      value: alert_type,
      onChange: alert_type => {
        setAttributes({
          alert_type
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
      heading: "Please select if the notice should be dismissible.",
      label: "Dismissible notice?",
      help: "Show an 'x' and allow users to close this alert.",
      checked: dismiss,
      onChange: dismiss => {
        setAttributes({
          dismiss
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings'),
      colorSettings: [{
        value: backgroundColor,
        onChange: backgroundColor => setAttributes({
          backgroundColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }, {
        value: textColor,
        onChange: textColor => setAttributes({
          textColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "blockly-alert blockly-alert-" + alert_type,
      role: "alert",
      style: styles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "p",
      className: "content",
      value: content,
      onChange: content => setAttributes({
        content
      }),
      placeholder: "Add text...",
      format: "string"
    }), dismiss === true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "close-admin",
      "aria-hidden": "true"
    }, "\xD7") : null)];
  },
  save: props => {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/author-profile-box/components/avatar.js":
/*!************************************************************!*\
  !*** ./src/blocks/author-profile-box/components/avatar.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Avatar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

//wordpress dependencie
 //external dependencie


class Avatar extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      style_type
    } = this.props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(style_type == 'style_one' && 'bly-profile-column', 'bly-profile-avatar-wrap')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bly-profile-image-wrap"
    }, this.props.children));
  }

}

/***/ }),

/***/ "./src/blocks/author-profile-box/components/edit.js":
/*!**********************************************************!*\
  !*** ./src/blocks/author-profile-box/components/edit.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/author-profile-box/components/inspector.js");
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social */ "./src/blocks/author-profile-box/components/social.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile */ "./src/blocks/author-profile-box/components/profile.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./avatar */ "./src/blocks/author-profile-box/components/avatar.js");
/* harmony import */ var _utils_components_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../utils/components/icons */ "./src/utils/components/icons/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);


//wordpress dependencies



 //internal dependencies





 //external dependencie


const ALLOWED_MEDIA_TYPES = ['image'];
class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      attributes: {
        profileName,
        profileTitle,
        profileContent,
        profileAlignment,
        profileImgURL,
        profileImgID,
        profileImgAlt,
        profileTextColor,
        style_type
      },
      setAttributes
    } = this.props;
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
      key: "controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
      value: profileAlignment,
      onChange: value => setAttributes({
        profileAlignment: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-author-profile-inspector-' + this.props.clientId,
      setAttributes
    }, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_profile__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-author-profile-' + this.props.clientId
    }, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_avatar__WEBPACK_IMPORTED_MODULE_8__.default, this.props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", {
      className: "bly-profile-image-square"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      buttonProps: {
        className: 'change-image'
      },
      onSelect: img => setAttributes({
        profileImgID: img.id,
        profileImgURL: img.url,
        profileImgAlt: img.alt
      }),
      allowed: ALLOWED_MEDIA_TYPES,
      type: "image",
      value: profileImgID,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open
      }, !profileImgID ? _utils_components_icons__WEBPACK_IMPORTED_MODULE_9__.default.upload : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('bly-profile-avatar', 'bly-change-image', 'wp-image-' + profileImgID),
        src: profileImgURL,
        alt: profileImgAlt
      })), profileImgID && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "bly-remove-image",
        onClick: () => {
          setAttributes({
            profileImgID: null,
            profileImgURL: null,
            profileImgAlt: null
          });
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
        icon: 'dismiss'
      })))
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(style_type == 'style_one' && 'bly-profile-column', 'bly-profile-content-wrap')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "h2",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add name', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: profileName,
      className: "bly-profile-name",
      style: {
        color: profileTextColor
      },
      onChange: value => setAttributes({
        profileName: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add title', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: profileTitle,
      className: "bly-profile-title",
      style: {
        color: profileTextColor
      },
      onChange: value => setAttributes({
        profileTitle: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "div",
      className: "bly-profile-text",
      multiline: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add profile text...', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: profileContent,
      allowedFormats: ['core/bold', 'core/italic', 'core/strikethrough', 'core/link'],
      onChange: value => setAttributes({
        profileContent: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_social__WEBPACK_IMPORTED_MODULE_6__.default, this.props)))];
  }

}

/***/ }),

/***/ "./src/blocks/author-profile-box/components/inspector.js":
/*!***************************************************************!*\
  !*** ./src/blocks/author-profile-box/components/inspector.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Inspector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

//wordpress dependencies



 //Inspector component

class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        profileFontSize,
        profileBackgroundColor,
        profileTextColor,
        profileLinkColor,
        twitter,
        facebook,
        instagram,
        pinterest,
        google,
        youtube,
        github,
        linkedin,
        wordpress,
        email,
        website,
        profileAvatarShape,
        style_type,
        padding,
        borderRadius
      },
      setAttributes
    } = this.props;
    const profileAvatarShapeOptions = [{
      value: 'square',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Square', 'blockly')
    }, {
      value: 'round',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Round', 'blockly')
    }];
    const style_types = [{
      value: 'style_one',
      label: 'Style One'
    }, {
      value: 'style_two',
      label: 'Style Two'
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Please select the style component.",
      options: style_types,
      value: style_type,
      onChange: style_type => {
        setAttributes({
          style_type
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'blockly'),
      value: profileFontSize,
      onChange: value => setAttributes({
        profileFontSize: value
      }),
      min: 14,
      max: 24,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Avatar Shape', 'blockly'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Choose between a round or square avatar shape.', 'blockly'),
      options: profileAvatarShapeOptions,
      value: profileAvatarShape,
      onChange: value => setAttributes({
        profileAvatarShape: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'blockly'),
      value: padding,
      onChange: value => setAttributes({
        padding: value
      }),
      min: 0,
      max: 10,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'blockly'),
      value: borderRadius,
      onChange: value => setAttributes({
        borderRadius: value
      }),
      min: 0,
      max: 20,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings'),
      colorSettings: [{
        value: profileBackgroundColor,
        onChange: profileBackgroundColor => setAttributes({
          profileBackgroundColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }, {
        value: profileTextColor,
        onChange: profileTextColor => setAttributes({
          profileTextColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
      }, {
        value: profileLinkColor,
        onChange: profileLinkColor => setAttributes({
          profileLinkColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Social Link Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Social Links', 'blockly'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add links to your social media site and they will appear in the bottom of the profile box.', 'blockly')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Facebook URL', 'blockly'),
      type: "url",
      value: facebook,
      onChange: value => setAttributes({
        facebook: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Instagram URL', 'blockly'),
      type: "url",
      value: instagram,
      onChange: value => setAttributes({
        instagram: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Twitter URL', 'blockly'),
      type: "url",
      value: twitter,
      onChange: value => setAttributes({
        twitter: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pinterest URL', 'blockly'),
      type: "url",
      value: pinterest,
      onChange: value => setAttributes({
        pinterest: value
      })
    })));
  }

}

/***/ }),

/***/ "./src/blocks/author-profile-box/components/profile.js":
/*!*************************************************************!*\
  !*** ./src/blocks/author-profile-box/components/profile.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProfileBox; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

//wordpress dependencie
 //external dependencie

 //profile box wrapper component

class ProfileBox extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      profileAlignment,
      profileImgURL,
      profileFontSize,
      profileBackgroundColor,
      profileTextColor,
      profileAvatarShape,
      style_type,
      padding,
      borderRadius
    } = this.props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: profileBackgroundColor,
        color: profileTextColor,
        padding: padding ? padding + '%' : null,
        borderRadius: borderRadius ? borderRadius : null
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(this.props.className, profileAlignment, profileAvatarShape, style_type, {
        'bly-has-avatar': profileImgURL
      }, 'bly-font-size-' + profileFontSize, 'bly-block-profile', style_type == 'style_one' && 'bly-profile-column')
    }, this.props.children);
  }

}

/***/ }),

/***/ "./src/blocks/author-profile-box/components/save.js":
/*!**********************************************************!*\
  !*** ./src/blocks/author-profile-box/components/save.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile */ "./src/blocks/author-profile-box/components/profile.js");
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social */ "./src/blocks/author-profile-box/components/social.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatar */ "./src/blocks/author-profile-box/components/avatar.js");

//wordpress dependencies

 //internal dependencies




 //save component

class Save extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      profileName,
      profileTitle,
      profileContent,
      profileImgURL,
      profileImgAlt,
      profileImgID,
      profileTextColor,
      style_type
    } = this.props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_profile__WEBPACK_IMPORTED_MODULE_3__.default, this.props, profileImgURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_avatar__WEBPACK_IMPORTED_MODULE_5__.default, this.props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: "bly-profile-image-square"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('bly-profile-avatar', 'wp-image-' + profileImgID),
      src: profileImgURL,
      alt: profileImgAlt
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(style_type == 'style_one' && 'bly-profile-column', 'bly-profile-content-wrap')
    }, profileName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "h2",
      className: "bly-profile-name",
      style: {
        color: profileTextColor
      },
      value: profileName
    }), profileTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "p",
      className: "bly-profile-title",
      style: {
        color: profileTextColor
      },
      value: profileTitle
    }), profileContent && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      tagName: "div",
      className: "bly-profile-text",
      value: profileContent
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_social__WEBPACK_IMPORTED_MODULE_4__.default, this.props)));
  }

}

/***/ }),

/***/ "./src/blocks/author-profile-box/components/social.js":
/*!************************************************************!*\
  !*** ./src/blocks/author-profile-box/components/social.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../utils/components/icons */ "./src/utils/components/icons/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





class SocialIcons extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      profileLinkColor
    } = this.props.attributes;
    const svgStyle = {
      fill: profileLinkColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "bly-social-links"
    }, this.props.attributes.facebook && !!this.props.attributes.facebook.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: this.props.attributes.facebook,
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Facebook', 'blockly'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "facebook"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "7.357",
      height: "13.736",
      viewBox: "0 0 7.357 13.736"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: svgStyle,
      id: "facebook-icon",
      d: "M242.375,1260.89l.381-2.486h-2.385v-1.613a1.243,1.243,0,0,1,1.4-1.343h1.084v-2.117a13.212,13.212,0,0,0-1.925-.168,3.035,3.035,0,0,0-3.248,3.346v1.9H235.5v2.486h2.184v6.009h2.687v-6.009Z",
      transform: "translate(-235.5 -1253.163)"
    }))))), this.props.attributes.instagram && !!this.props.attributes.instagram.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: this.props.attributes.instagram,
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Instagram', 'blockly'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "instagram"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "13.736",
      height: "13.736",
      viewBox: "0 0 13.736 13.736"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "instagram-icon",
      transform: "translate(-265.645 -1253.006)"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Group_103",
      "data-name": "Group 103"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: svgStyle,
      id: "Path_67",
      "data-name": "Path 67",
      d: "M276.149,1255.458a.805.805,0,1,0,.806.806A.806.806,0,0,0,276.149,1255.458Z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: svgStyle,
      id: "Path_68",
      "data-name": "Path 68",
      d: "M272.569,1256.491a3.383,3.383,0,1,0,3.383,3.383A3.387,3.387,0,0,0,272.569,1256.491Zm0,5.55a2.167,2.167,0,1,1,2.167-2.167A2.169,2.169,0,0,1,272.569,1262.041Z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: svgStyle,
      id: "Path_69",
      "data-name": "Path 69",
      d: "M275.255,1266.742h-5.484a4.131,4.131,0,0,1-4.126-4.126v-5.484a4.131,4.131,0,0,1,4.126-4.126h5.484a4.131,4.131,0,0,1,4.126,4.126v5.484A4.131,4.131,0,0,1,275.255,1266.742Zm-5.484-12.444a2.837,2.837,0,0,0-2.834,2.834v5.484a2.837,2.837,0,0,0,2.834,2.833h5.484a2.837,2.837,0,0,0,2.834-2.833v-5.484a2.837,2.837,0,0,0-2.834-2.834Z"
    }))))))), this.props.attributes.twitter && !!this.props.attributes.twitter.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: this.props.attributes.twitter,
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Twitter', 'blockly'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "twitter"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16.689",
      height: "13.736",
      viewBox: "0 0 16.689 13.736"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: svgStyle,
      id: "twitter-icon",
      d: "M314.123,1254.883a6.878,6.878,0,0,1-1.688.481c.272-.046.67-.537.83-.736a3.091,3.091,0,0,0,.56-1.021c.015-.029.026-.066,0-.088a.1.1,0,0,0-.09.008,8.57,8.57,0,0,1-2,.765.134.134,0,0,1-.138-.036,1.563,1.563,0,0,0-.175-.179,3.555,3.555,0,0,0-.969-.594,3.39,3.39,0,0,0-1.487-.24,3.553,3.553,0,0,0-1.41.4,3.638,3.638,0,0,0-1.138.929,3.512,3.512,0,0,0-.68,1.361,3.7,3.7,0,0,0-.036,1.437c.011.08,0,.091-.069.08a10.685,10.685,0,0,1-6.875-3.5c-.081-.092-.124-.092-.19.007a3.484,3.484,0,0,0,.594,4.119c.135.128.274.255.423.372a3.515,3.515,0,0,1-1.327-.372c-.08-.051-.121-.022-.128.07a2.122,2.122,0,0,0,.022.393,3.526,3.526,0,0,0,2.173,2.811,2.065,2.065,0,0,0,.441.135,3.93,3.93,0,0,1-1.3.04c-.1-.018-.131.03-.1.121a3.658,3.658,0,0,0,2.734,2.289c.124.022.248.022.372.051-.007.011-.015.011-.022.022a4.327,4.327,0,0,1-1.867.989,6.672,6.672,0,0,1-2.836.363c-.152-.022-.184-.02-.226,0s-.005.063.044.1c.193.128.39.241.591.35a9.317,9.317,0,0,0,1.895.759,10.1,10.1,0,0,0,9.8-2.292,10.285,10.285,0,0,0,2.713-7.5c0-.108.127-.168.2-.225a6.6,6.6,0,0,0,1.334-1.387.421.421,0,0,0,.089-.266v-.014C314.192,1254.839,314.191,1254.852,314.123,1254.883Z",
      transform: "translate(-297.503 -1253.236)"
    }))))), this.props.attributes.pinterest && !!this.props.attributes.pinterest.length && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: this.props.attributes.pinterest,
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pinterest', 'blockly'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "pinterest"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "10.637",
      height: "13.737",
      viewBox: "0 0 10.637 13.737"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: svgStyle,
      id: "pinterest-icon",
      d: "M338.311,1262.039c-.012.039-.022.073-.031.106a11.542,11.542,0,0,1-1.079,3.334,10.2,10.2,0,0,1-.834,1.245c-.035.045-.067.1-.137.089s-.082-.085-.09-.146a10.627,10.627,0,0,1-.109-1.809c.026-.79.124-1.061,1.143-5.344a.3.3,0,0,0-.024-.178,3.011,3.011,0,0,1-.079-2c.461-1.46,2.117-1.572,2.406-.367.179.745-.293,1.721-.655,3.163-.3,1.189,1.1,2.035,2.3,1.167,1.1-.8,1.532-2.72,1.451-4.081-.161-2.712-3.135-3.3-5.022-2.425-2.163,1-2.655,3.682-1.678,4.907.124.156.219.251.178.409-.063.246-.118.493-.186.737a.26.26,0,0,1-.386.173,2.205,2.205,0,0,1-.9-.677,4.278,4.278,0,0,1,.03-4.778,5.742,5.742,0,0,1,5.538-2.443,4.692,4.692,0,0,1,4.314,3.875,6.45,6.45,0,0,1-1.184,4.532c-1.406,1.743-3.684,1.859-4.735.789C338.455,1262.233,338.39,1262.137,338.311,1262.039Z",
      transform: "translate(-333.863 -1253.079)",
      "fill-rule": "evenodd"
    }))))));
  }

}

/***/ }),

/***/ "./src/blocks/author-profile-box/index.js":
/*!************************************************!*\
  !*** ./src/blocks/author-profile-box/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit */ "./src/blocks/author-profile-box/components/edit.js");
/* harmony import */ var _components_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save */ "./src/blocks/author-profile-box/components/save.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/author-profile-box/styles/style.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/author-profile-box/styles/editor.scss");


/**
 * BLOCK: Author Profile Box
 */
//WordPress dependencies

 //Internal dependencies




 //blockAttributes initailize

const blockAttributes = {
  style_type: {
    type: 'string',
    default: 'style_one'
  },
  profileName: {
    type: 'array',
    source: 'children',
    selector: '.bly-profile-name'
  },
  profileTitle: {
    type: 'array',
    source: 'children',
    selector: '.bly-profile-title'
  },
  profileContent: {
    type: 'array',
    selector: '.bly-profile-text',
    source: 'children'
  },
  profileAlignment: {
    type: 'string'
  },
  profileImgURL: {
    type: 'string',
    source: 'attribute',
    attribute: 'src',
    selector: 'img'
  },
  profileImgAlt: {
    type: 'string',
    source: 'attribute',
    selector: 'figure img',
    attribute: 'alt',
    default: ''
  },
  profileImgID: {
    type: 'number'
  },
  profileBackgroundColor: {
    type: 'string',
    default: '#f2f2f2'
  },
  profileTextColor: {
    type: 'string',
    default: '#32373c'
  },
  profileLinkColor: {
    type: 'string',
    default: '#999'
  },
  profileFontSize: {
    type: 'number',
    default: 18
  },
  profileAvatarShape: {
    type: 'string',
    default: 'round'
  },
  borderRadius: {
    type: 'number',
    default: 0
  },
  padding: {
    type: 'number',
    default: 2
  },
  twitter: {
    type: 'url',
    default: '#'
  },
  facebook: {
    type: 'url',
    default: '#'
  },
  instagram: {
    type: 'url'
  },
  pinterest: {
    type: 'url'
  }
}; //register the block author-profile-box

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/author-profile-box', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Author Profile Box', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a profile box with bio info and social media links.', 'blockly'),
  icon: {
    src: 'admin-users',
    background: '#cce5ff',
    foreground: '#004085'
  },
  category: 'blockly',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('author', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('profile', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('blockly', 'blockly')],
  example: {
    attributes: {
      profileContent: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'blockly'),
      profileName: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Russell Hawlader', 'blockly'),
      profileTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ARNTECH Founder & CEO', 'blockly')
    }
  },
  //setup the block attributes 
  attributes: blockAttributes,
  bly_settings_data: {
    bly_author_profile_profileFontSize: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'blockly')
    },
    bly_author_profile_profileAvatarShape: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Avatar Shape', 'blockly')
    },
    bly_author_profile_profileBackgroundColor: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'blockly')
    },
    bly_author_profile_profileTextColor: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'blockly')
    },
    bly_author_profile_profileLinkColor: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Social Link Color', 'blockly')
    },
    bly_author_profile_socialLinks: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Social Links', 'blockly')
    }
  },
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_edit__WEBPACK_IMPORTED_MODULE_3__.default, props);
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_save__WEBPACK_IMPORTED_MODULE_4__.default, props);
  }
});

/***/ }),

/***/ "./src/blocks/button/components/button.js":
/*!************************************************!*\
  !*** ./src/blocks/button/components/button.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ customButton; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Button Wrapper
 */
const {
  Component
} = wp.element;

class customButton extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        textAlign: this.props.attributes.buttonAlignment
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(this.props.className, 'bly-block-button')
    }, this.props.children);
  }

}

/***/ }),

/***/ "./src/blocks/button/components/inspector.js":
/*!***************************************************!*\
  !*** ./src/blocks/button/components/inspector.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Inspector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_inspector_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/inspector/button */ "./src/utils/inspector/button.js");

//wordpress dependencies



 // Import Inspector settings


class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        buttonBackgroundColor,
        buttonTextColor,
        buttonSize,
        buttonShape,
        buttonTarget
      },
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_inspector_button__WEBPACK_IMPORTED_MODULE_4__.default // Open in new window
    , {
      buttonTarget: buttonTarget,
      onChangeButtonTarget: value => setAttributes({
        buttonTarget: !buttonTarget
      }) // Button Size
      ,
      buttonSize: buttonSize,
      onChangeButtonSize: buttonSize => setAttributes({
        buttonSize
      }) // Button Shape
      ,
      buttonShape: buttonShape,
      onChangeButtonShape: buttonShape => setAttributes({
        buttonShape
      }) // Button color
      ,
      buttonBackgroundColor: buttonBackgroundColor,
      onChangeButtonColor: buttonBackgroundColor => setAttributes({
        buttonBackgroundColor
      }) // Button text color
      ,
      buttonTextColor: buttonTextColor,
      onChangeButtonTextColor: buttonTextColor => setAttributes({
        buttonTextColor
      })
    })));
  }

}

/***/ }),

/***/ "./src/blocks/button/index.js":
/*!************************************!*\
  !*** ./src/blocks/button/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inspector */ "./src/blocks/button/components/inspector.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/button */ "./src/blocks/button/components/button.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/button/styles/style.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/button/styles/editor.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);



/**
 * BLOCK: Button
 */
//wordpress dependencies




 //internal dependencie




 //external dependencie



class EditButtonBlock extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      attributes: {
        buttonText,
        buttonUrl,
        buttonAlignment,
        buttonBackgroundColor,
        buttonTextColor,
        buttonSize,
        buttonShape
      },
      isSelected,
      setAttributes
    } = this.props;
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, {
      key: "controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.AlignmentToolbar, {
      value: buttonAlignment,
      onChange: value => {
        setAttributes({
          buttonAlignment: value
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_inspector__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-button-inspector-' + this.props.clientId
    }, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_button__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-button-custombutton-' + this.props.clientId
    }, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "span",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button text...', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: buttonText,
      allowedFormats: [],
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('bly-button', buttonShape, buttonSize),
      style: {
        color: buttonTextColor ? buttonTextColor : '#ffffff',
        backgroundColor: buttonBackgroundColor ? buttonBackgroundColor : '#3373dc'
      },
      onChange: value => setAttributes({
        buttonText: value
      })
    })), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", {
      key: "form-link",
      className: `blocks-button__inline-link bly-button-${buttonAlignment}`,
      onSubmit: event => event.preventDefault(),
      style: {
        textAlign: buttonAlignment
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dashicon, {
      icon: 'admin-links'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.URLInput, {
      className: "button-url",
      value: buttonUrl,
      onChange: value => setAttributes({
        buttonUrl: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Apply', 'blockly'),
      type: "submit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
      icon: "editor-break"
    })))];
  }

} // Register the block


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('blockly/button', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add a customizable button.', 'blockly'),
  icon: {
    src: 'admin-links',
    background: '#cce5ff',
    foreground: '#004085'
  },
  category: 'blockly',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('button', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('link', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('blockly', 'blockly')],
  example: {
    attributes: {
      buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button text', 'blockly')
    }
  },
  attributes: {
    buttonText: {
      type: 'string'
    },
    buttonUrl: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'href'
    },
    buttonAlignment: {
      type: 'string'
    },
    buttonBackgroundColor: {
      type: 'string'
    },
    buttonTextColor: {
      type: 'string'
    },
    buttonSize: {
      type: 'string',
      default: 'bly-button-size-medium'
    },
    buttonShape: {
      type: 'string',
      default: 'bly-button-shape-rounded'
    },
    buttonTarget: {
      type: 'boolean',
      default: false
    }
  },
  bly_settings_data: {
    bly_button_buttonOptions: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Options', 'blockly')
    }
  },
  edit: EditButtonBlock,
  save: props => {
    const {
      buttonText,
      buttonUrl,
      buttonBackgroundColor,
      buttonTextColor,
      buttonSize,
      buttonShape,
      buttonTarget
    } = props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_button__WEBPACK_IMPORTED_MODULE_7__.default, props, buttonText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
      href: buttonUrl,
      target: buttonTarget ? '_blank' : null,
      rel: buttonTarget ? 'noopener noreferrer' : null,
      className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('bly-button', buttonShape, buttonSize),
      style: {
        color: buttonTextColor ? buttonTextColor : '#ffffff',
        backgroundColor: buttonBackgroundColor ? buttonBackgroundColor : '#3373dc'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      value: buttonText
    })));
  }
});

/***/ }),

/***/ "./src/blocks/global-styles/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/global-styles/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/global-styles/styles/style.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/global-styles/styles/editor.scss");
/**
 * Import global styles.
 */

 //  import './styles/variables.scss'

/***/ }),

/***/ "./src/blocks/highlight/components/edit.js":
/*!*************************************************!*\
  !*** ./src/blocks/highlight/components/edit.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/blocks/highlight/components/inspector.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");










class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    var _computeFontSize;

    const {
      attributes: {
        content,
        align
      },
      backgroundColor,
      className,
      mergeBlocks,
      onReplace,
      setAttributes,
      textColor,
      fontSize
    } = this.props;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()('bly-highlight-content', backgroundColor && {
      'has-background': backgroundColor.color,
      [backgroundColor.class]: backgroundColor.class
    }, textColor && {
      'has-text-color': textColor.color,
      [textColor.class]: textColor.class
    }, (fontSize === null || fontSize === void 0 ? void 0 : fontSize.class) && {
      [fontSize === null || fontSize === void 0 ? void 0 : fontSize.class]: fontSize === null || fontSize === void 0 ? void 0 : fontSize.class
    });
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockControls, {
      key: "controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.AlignmentToolbar, {
      value: align,
      onChange: nextAlign => setAttributes({
        align: nextAlign
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-highlight-inspector-' + this.props.clientId,
      setAttributes
    }, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
      className: className,
      style: {
        textAlign: align
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.RichText, {
      tagName: "mark",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Add highlighted text…', 'blockly'),
      value: content,
      onChange: value => setAttributes({
        content: value
      }),
      className: classes,
      style: {
        backgroundColor: backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor.color,
        color: textColor === null || textColor === void 0 ? void 0 : textColor.color,
        fontSize: (_computeFontSize = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_7__.computeFontSize)(fontSize)) !== null && _computeFontSize !== void 0 ? _computeFontSize : undefined
      },
      keepPlaceholderOnFocus: true
    }))];
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.withColors)('backgroundColor', {
  textColor: 'color'
}), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.withFontSizes)('fontSize')])(Edit));

/***/ }),

/***/ "./src/blocks/highlight/components/inspector.js":
/*!******************************************************!*\
  !*** ./src/blocks/highlight/components/inspector.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/components/fontsize-picker */ "./src/utils/components/fontsize-picker/index.js");


/**
 * WordPress dependencies
 */







class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      backgroundColor,
      textColor,
      setBackgroundColor,
      setTextColor,
      fallbackBackgroundColor,
      fallbackTextColor
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Highlight settings', 'blockly'),
      className: "bly-highlight-font-size"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_5__.BLYblockFontSizePicker, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color settings', 'blockly'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background color', 'blockly')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text color', 'blockly')
      }]
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color,
      fallbackBackgroundColor,
      fallbackTextColor
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)('backgroundColor', {
  textColor: 'color'
}), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withFontSizes)('fontSize')])(Inspector));

/***/ }),

/***/ "./src/blocks/highlight/components/save.js":
/*!*************************************************!*\
  !*** ./src/blocks/highlight/components/save.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);





class Save extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      backgroundColor,
      content,
      customBackgroundColor,
      customFontSize,
      customTextColor,
      fontSize,
      align,
      textColor,
      fontFamily
    } = this.props.attributes;
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getFontSizeClass)(fontSize);
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('bly-highlight-content', {
      'has-text-color': textColor || customTextColor,
      [textClass]: textClass,
      'has-background': backgroundColor || customBackgroundColor,
      [backgroundClass]: backgroundClass,
      [fontSizeClass]: fontSizeClass
    });
    const styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      fontSize: fontSizeClass ? undefined : customFontSize
    };
    return _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.isEmpty(content) ? null : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      style: {
        textAlign: align,
        fontFamily
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "mark",
      className: classes,
      style: styles,
      value: content
    }));
  }

}

/***/ }),

/***/ "./src/blocks/highlight/index.js":
/*!***************************************!*\
  !*** ./src/blocks/highlight/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit */ "./src/blocks/highlight/components/edit.js");
/* harmony import */ var _components_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save */ "./src/blocks/highlight/components/save.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/highlight/styles/editor.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/highlight/styles/style.scss");


/**
 * BLOCK: Highlight
 */
//wordpress dependencies

 // internal dependencies




 // Register the block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/highlight', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Highlight', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Draw attention and emphasize important narrative.', 'blockly'),
  icon: {
    src: 'edit',
    background: '#cce5ff',
    foreground: '#004085'
  },
  category: 'blockly',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('text', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('paragraph', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('blockly', 'blockly')],
  example: {
    attributes: {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a highlight effect to paragraph text in order to grab attention and emphasize important narrative.', 'blockly')
    }
  },
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "mark"
    },
    align: {
      type: "string"
    },
    backgroundColor: {
      type: "string"
    },
    customBackgroundColor: {
      type: "string",
      default: '#e4d1d1'
    },
    textColor: {
      type: "string"
    },
    customTextColor: {
      type: "string"
    },
    fontSize: {
      type: "string"
    },
    customFontSize: {
      type: "number"
    }
  },
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_edit__WEBPACK_IMPORTED_MODULE_3__.default, props);
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_save__WEBPACK_IMPORTED_MODULE_4__.default, props);
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/button/edit.js":
/*!******************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/button/edit.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/blocks/pricing-table-inner/components/button/inspector.js");
/* harmony import */ var _button_components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../button/components/button */ "./src/blocks/button/components/button.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);

// wordpress dependencies





 //internal dependencies


 //external dependencie



class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        subtitle,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        buttonText,
        buttonUrl,
        buttonAlignment,
        buttonBackgroundColor,
        buttonTextColor,
        buttonSize,
        buttonShape,
        buttonTarget
      },
      isSelected,
      className,
      setAttributes,
      backgroundColor
    } = this.props;
    const editClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()({
      'bly-pricing-table-button': true
    });
    const editStyles = {
      backgroundColor: backgroundColor.color,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 'bly-pricing-table-inner-component-button-' + this.props.clientId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_6__.default, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: editClassName ? editClassName : undefined,
      style: editStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_button_components_button__WEBPACK_IMPORTED_MODULE_7__.default, this.props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "span",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button text...', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: buttonText,
      allowedFormats: [],
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('bly-button', buttonShape, buttonSize),
      style: {
        color: buttonTextColor,
        backgroundColor: buttonBackgroundColor
      },
      onChange: value => setAttributes({
        buttonText: value
      })
    })), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      key: "form-link",
      className: `blocks-button__inline-link ab-button-${buttonAlignment}`,
      onSubmit: event => event.preventDefault(),
      style: {
        textAlign: buttonAlignment
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Dashicon, {
      icon: 'admin-links'
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.URLInput, {
      className: "button-url",
      value: buttonUrl,
      onChange: value => setAttributes({
        buttonUrl: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apply', 'blockly'),
      type: "submit"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Icon, {
      icon: "editor-break"
    })))))];
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withFontSizes)('fontSize'), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withColors)('backgroundColor', {
  textColor: 'color'
})])(Edit));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/button/index.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/button/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/pricing-table-inner/components/button/edit.js");
/* harmony import */ var _button_components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../button/components/button */ "./src/blocks/button/components/button.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);


/**
 * BLOCK: Pricing Table - Button Component
 */
//wordpress dependencies



 //external dependencies


 //internal dependencie

 // Register the block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/pricing-table-button', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Button', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adds a product button component.', 'blockly'),
  icon: 'cart',
  category: 'blockly',
  parent: ['blockly/pricing-table'],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pricing table', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('subtitle', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('shop', 'blockly')],
  attributes: {
    buttonText: {
      type: 'string'
    },
    buttonUrl: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'href'
    },
    buttonAlignment: {
      type: 'string'
    },
    buttonBackgroundColor: {
      type: 'string',
      default: '#3373dc'
    },
    buttonTextColor: {
      type: 'string',
      default: '#ffffff'
    },
    buttonSize: {
      type: 'string',
      default: 'bly-button-size-medium'
    },
    buttonShape: {
      type: 'string',
      default: 'bly-button-shape-square'
    },
    buttonTarget: {
      type: 'boolean',
      default: false
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    paddingTop: {
      type: 'number',
      default: 10
    },
    paddingRight: {
      type: 'number',
      default: 20
    },
    paddingBottom: {
      type: 'number',
      default: 10
    },
    paddingLeft: {
      type: 'number',
      default: 20
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__.default,
  save: props => {
    const {
      backgroundColor,
      customBackgroundColor,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      buttonText,
      buttonUrl,
      buttonAlignment,
      buttonBackgroundColor,
      buttonTextColor,
      buttonSize,
      buttonShape,
      buttonTarget
    } = props.attributes;
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const className = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'has-background': backgroundColor || customBackgroundColor,
      'bly-pricing-table-button': true,
      [backgroundClass]: backgroundClass
    });
    const styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className ? className : undefined,
      style: styles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_button_components_button__WEBPACK_IMPORTED_MODULE_5__.default, props, buttonText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: buttonUrl,
      target: buttonTarget ? '_blank' : null,
      rel: buttonTarget ? 'noopener noreferrer' : null,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('bly-button', buttonShape, buttonSize),
      style: {
        color: buttonTextColor,
        backgroundColor: buttonBackgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      value: buttonText
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/button/inspector.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/button/inspector.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blockEditor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_inspector_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../utils/inspector/button */ "./src/utils/inspector/button.js");
/* harmony import */ var _utils_components_padding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../utils/components/padding */ "./src/utils/components/padding.js");

//Inspector Controls Font size, color, background color
//wordpress dependencies




 //internal dependencies


 // Apply fallback styles

const applyFallbackStyles = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withFallbackStyles)((node, ownProps) => {
  const {
    backgroundColor
  } = ownProps.attributes;
  const editableNode = node.querySelector('[contenteditable="true"]');
  const computedStyles = editableNode ? getComputedStyle(editableNode) : null;
  return {
    fallbackBackgroundColor: backgroundColor || !computedStyles ? undefined : computedStyles.backgroundColor
  };
});

class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        buttonText,
        buttonUrl,
        buttonAlignment,
        buttonBackgroundColor,
        buttonTextColor,
        buttonSize,
        buttonShape,
        buttonTarget
      },
      isSelected,
      setAttributes,
      backgroundColor,
      setBackgroundColor,
      fallbackBackgroundColor
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Settings', 'blockly')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_inspector_button__WEBPACK_IMPORTED_MODULE_5__.default // Open in new window
    , {
      buttonTarget: buttonTarget,
      onChangeButtonTarget: value => setAttributes({
        buttonTarget: !buttonTarget
      }) // Button Size
      ,
      buttonSize: buttonSize,
      onChangeButtonSize: buttonSize => setAttributes({
        buttonSize
      }) // Button Shape
      ,
      buttonShape: buttonShape,
      onChangeButtonShape: buttonShape => setAttributes({
        buttonShape
      }) // Button color
      ,
      buttonBackgroundColor: buttonBackgroundColor,
      onChangeButtonColor: buttonBackgroundColor => setAttributes({
        buttonBackgroundColor
      }) // Button text color
      ,
      buttonTextColor: buttonTextColor,
      onChangeButtonTextColor: buttonTextColor => setAttributes({
        buttonTextColor
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Settings', 'blockly'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_padding__WEBPACK_IMPORTED_MODULE_6__.default // Top padding
    , {
      paddingEnableTop: true,
      paddingTop: paddingTop,
      paddingTopMin: "0",
      paddingTopMax: "100",
      onChangePaddingTop: paddingTop => setAttributes({
        paddingTop
      }) // Right padding
      ,
      paddingEnableRight: true,
      paddingRight: paddingRight,
      paddingRightMin: "0",
      paddingRightMax: "100",
      onChangePaddingRight: paddingRight => setAttributes({
        paddingRight
      }) // Bottom padding
      ,
      paddingEnableBottom: true,
      paddingBottom: paddingBottom,
      paddingBottomMin: "0",
      paddingBottomMax: "100",
      onChangePaddingBottom: paddingBottom => setAttributes({
        paddingBottom
      }) // Left padding
      ,
      paddingEnableLeft: true,
      paddingLeft: paddingLeft,
      paddingLeftMin: "0",
      paddingLeftMax: "100",
      onChangePaddingLeft: paddingLeft => setAttributes({
        paddingLeft
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'blockly'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'blockly')
      }]
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([applyFallbackStyles, (0,_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.withFontSizes)('fontSize'), (0,_wordpress_blockEditor__WEBPACK_IMPORTED_MODULE_3__.withColors)('backgroundColor')])(Inspector));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/features/edit.js":
/*!********************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/features/edit.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/pricing-table-inner/components/features/inspector.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);

//wordpress dependencies




 //internal dependencies


 //external dependencies



class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    var _computeFontSize;

    const {
      attributes: {
        features,
        borderStyle,
        borderColor,
        borderWidth,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      },
      isSelected,
      className,
      setAttributes,
      fallbackFontSize,
      fontSize,
      backgroundColor,
      textColor
    } = this.props; // Setup class names

    const editClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
      'bly-pricing-table-features': true,
      [fontSize.class]: fontSize.class,
      'has-text-color': textColor.color,
      'has-background': backgroundColor.color,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class,
      [borderStyle]: borderStyle,
      ['bly-list-border-width-' + borderWidth]: borderWidth
    }); // Setup styles

    const editStyles = {
      fontSize: (_computeFontSize = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_6__.computeFontSize)(fontSize)) !== null && _computeFontSize !== void 0 ? _computeFontSize : undefined,
      backgroundColor: backgroundColor.color,
      color: textColor.color,
      borderColor: borderColor ? borderColor : undefined,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 'bly-pricing-table-inner-component-description-' + this.props.clientId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_5__.default, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "ul",
      multiline: "li",
      itemProp: "description",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a product feature', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: features,
      onChange: value => setAttributes({
        features: value
      }),
      style: editStyles,
      className: editClassName ? editClassName : undefined
    }))];
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withFontSizes)('fontSize'), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withColors)('backgroundColor', {
  textColor: 'color'
})])(Edit));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/features/index.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/features/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/blocks/pricing-table-inner/components/features/edit.js");


/**
 * BLOCK: Pricing Table - Features Component
 */
//wordpress dependencies



 //internal dependencie

 //external dependencie

 //register the block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/pricing-table-features', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Features', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adds a product feature component with schema markup.', 'blockly'),
  icon: 'cart',
  category: 'blockly',
  parent: ['blockly/pricing-table'],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pricing table', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('features', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('shop', 'blockly')],
  attributes: {
    features: {
      type: 'string',
      source: 'html',
      selector: 'ol,ul',
      multiline: 'li',
      default: '<li>abc</li>'
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    borderStyle: {
      type: 'string',
      default: 'bly-list-border-none'
    },
    borderColor: {
      type: 'string'
    },
    borderWidth: {
      type: 'number',
      default: 1
    },
    paddingTop: {
      type: 'number',
      default: 10
    },
    paddingRight: {
      type: 'number',
      default: 20
    },
    paddingBottom: {
      type: 'number',
      default: 10
    },
    paddingLeft: {
      type: 'number',
      default: 20
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__.default,
  save: props => {
    const {
      features,
      fontSize,
      customFontSize,
      backgroundColor,
      textColor,
      customBackgroundColor,
      customTextColor,
      borderStyle,
      borderColor,
      borderWidth,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    } = props.attributes;
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getFontSizeClass)(fontSize);
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const className = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      'has-background': backgroundColor || customBackgroundColor,
      'bly-pricing-table-features': true,
      [fontSizeClass]: fontSizeClass,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass,
      [borderStyle]: borderStyle,
      ['bly-list-border-width-' + borderWidth]: borderWidth
    });
    const styles = {
      fontSize: fontSizeClass ? undefined : customFontSize,
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      borderColor: borderColor ? borderColor : undefined,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "ul",
      itemProp: "description",
      value: features,
      className: className ? className : undefined,
      style: styles
    });
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/features/inspector.js":
/*!*************************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/features/inspector.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_components_padding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../utils/components/padding */ "./src/utils/components/padding.js");
/* harmony import */ var _utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/components/fontsize-picker */ "./src/utils/components/fontsize-picker/index.js");

//wordpress dependencies




 //internal dependencies


 // Apply fallback styles

const applyFallbackStyles = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withFallbackStyles)((node, ownProps) => {
  const {
    textColor,
    backgroundColor,
    fontSize,
    customFontSize
  } = ownProps.attributes;
  const editableNode = node.querySelector('[contenteditable="true"]');
  const computedStyles = editableNode ? getComputedStyle(editableNode) : null;
  return {
    fallbackBackgroundColor: backgroundColor || !computedStyles ? undefined : computedStyles.backgroundColor,
    fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color,
    fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined
  };
});

class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        borderStyle,
        borderColor,
        borderWidth,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      },
      isSelected,
      setAttributes,
      fallbackFontSize,
      fontSize,
      setFontSize,
      backgroundColor,
      textColor,
      setBackgroundColor,
      setTextColor,
      fallbackBackgroundColor,
      fallbackTextColor
    } = this.props;
    const borderStyles = [{
      value: 'bly-list-border-none',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None')
    }, {
      value: 'bly-list-border-solid',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Solid')
    }, {
      value: 'bly-list-border-dotted',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dotted')
    }, {
      value: 'bly-list-border-dashed',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dashed')
    }];

    const onChangeBorderColor = value => setAttributes({
      borderColor: value
    });

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Settings', 'blockly')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_6__.BLYblockFontSizePicker, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Border Style', 'blockly'),
      value: borderStyle,
      options: borderStyles.map(({
        value,
        label
      }) => ({
        value,
        label
      })),
      onChange: value => setAttributes({
        borderStyle: value
      })
    }), 'bly-list-border-none' !== borderStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Border Width', 'blockly'),
      value: borderWidth,
      onChange: value => setAttributes({
        borderWidth: value
      }),
      min: 1,
      max: 5,
      step: 1
    }), 'bly-list-border-none' !== borderStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Border Color', 'blockly'),
      id: 'bly-list-border-color-' + this.props.clientId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
      initialOpen: false,
      value: borderColor,
      onChange: onChangeBorderColor
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Settings', 'blockly'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_padding__WEBPACK_IMPORTED_MODULE_5__.default // Top padding
    , {
      paddingEnableTop: true,
      paddingTop: paddingTop,
      paddingTopMin: "0",
      paddingTopMax: "100",
      onChangePaddingTop: paddingTop => setAttributes({
        paddingTop
      }) // Right padding
      ,
      paddingEnableRight: true,
      paddingRight: paddingRight,
      paddingRightMin: "0",
      paddingRightMax: "100",
      onChangePaddingRight: paddingRight => setAttributes({
        paddingRight
      }) // Bottom padding
      ,
      paddingEnableBottom: true,
      paddingBottom: paddingBottom,
      paddingBottomMin: "0",
      paddingBottomMax: "100",
      onChangePaddingBottom: paddingBottom => setAttributes({
        paddingBottom
      }) // Left padding
      ,
      paddingEnableLeft: true,
      paddingLeft: paddingLeft,
      paddingLeftMin: "0",
      paddingLeftMax: "100",
      onChangePaddingLeft: paddingLeft => setAttributes({
        paddingLeft
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'blockly'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'blockly')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'blockly')
      }]
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color,
      fallbackTextColor,
      fallbackBackgroundColor,
      fontSize: fontSize.size
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([applyFallbackStyles, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withFontSizes)('fontSize'), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)('backgroundColor', {
  textColor: 'color'
})])(Inspector));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/global/inspector.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/global/inspector.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_components_padding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../utils/components/padding */ "./src/utils/components/padding.js");
/* harmony import */ var _utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/components/fontsize-picker */ "./src/utils/components/fontsize-picker/index.js");

//wordpress dependencies




 //internal dependencies


 // Apply fallback styles

const applyFallbackStyles = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withFallbackStyles)((node, ownProps) => {
  const {
    textColor,
    backgroundColor,
    fontSize,
    customFontSize
  } = ownProps.attributes;
  const editableNode = node.querySelector('[contenteditable="true"]');
  const computedStyles = editableNode ? getComputedStyle(editableNode) : null;
  return {
    fallbackBackgroundColor: backgroundColor || !computedStyles ? undefined : computedStyles.backgroundColor,
    fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color,
    fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined
  };
});

class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      },
      isSelected,
      setAttributes,
      fallbackFontSize,
      fontSize,
      setFontSize,
      backgroundColor,
      textColor,
      setBackgroundColor,
      setTextColor,
      fallbackBackgroundColor,
      fallbackTextColor
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Settings', 'blockly')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_6__.BLYblockFontSizePicker, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Settings', 'blockly'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_padding__WEBPACK_IMPORTED_MODULE_5__.default // Top padding
    , {
      paddingEnableTop: true,
      paddingTop: paddingTop,
      paddingTopMin: "0",
      paddingTopMax: "100",
      onChangePaddingTop: paddingTop => setAttributes({
        paddingTop
      }) // Right padding
      ,
      paddingEnableRight: true,
      paddingRight: paddingRight,
      paddingRightMin: "0",
      paddingRightMax: "100",
      onChangePaddingRight: paddingRight => setAttributes({
        paddingRight
      }) // Bottom padding
      ,
      paddingEnableBottom: true,
      paddingBottom: paddingBottom,
      paddingBottomMin: "0",
      paddingBottomMax: "100",
      onChangePaddingBottom: paddingBottom => setAttributes({
        paddingBottom
      }) // Left padding
      ,
      paddingEnableLeft: true,
      paddingLeft: paddingLeft,
      paddingLeftMin: "0",
      paddingLeftMax: "100",
      onChangePaddingLeft: paddingLeft => setAttributes({
        paddingLeft
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'blockly'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'blockly')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'blockly')
      }]
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color,
      fallbackTextColor,
      fallbackBackgroundColor,
      fontSize: fontSize.size
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([applyFallbackStyles, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withFontSizes)('fontSize'), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)('backgroundColor', {
  textColor: 'color'
})])(Inspector));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/inspector.js":
/*!****************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/inspector.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Inspector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

//wordpress dependencies




class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        borderWidth,
        borderColor,
        borderRadius,
        backgroundColor,
        padding
      },
      setAttributes
    } = this.props;

    const onChangeBorderColor = value => setAttributes({
      borderColor: value
    });

    const onChangeBackgroundColor = value => setAttributes({
      backgroundColor: value
    });

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Padding', 'blockly'),
      value: padding,
      onChange: value => setAttributes({
        padding: value
      }),
      min: 0,
      max: 20,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Border', 'blockly'),
      value: borderWidth,
      onChange: value => setAttributes({
        borderWidth: value
      }),
      min: 0,
      max: 10,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Border Radius', 'blockly'),
      value: borderRadius,
      onChange: value => setAttributes({
        borderRadius: value
      }),
      min: 0,
      max: 20,
      step: 1
    })), 0 < borderWidth && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Border Color', 'blockly'),
      initialOpen: false,
      colorSettings: [{
        value: borderColor,
        onChange: onChangeBorderColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'blockly')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Background Color', 'blockly'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'blockly')
      }]
    }));
  }

}

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/price/edit.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/price/edit.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/pricing-table-inner/components/price/inspector.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);

//wordpress dependencies



 //internal dependencies


 //external dependencie



class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    var _computeFontSize;

    const {
      attributes: {
        price,
        currency,
        term,
        showTerm,
        showCurrency,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      },
      isSelected,
      className,
      setAttributes,
      fallbackFontSize,
      fontSize,
      backgroundColor,
      textColor
    } = this.props; // Setup wrapper class names

    const editClassWrapperName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'bly-pricing-table-price-wrap': true,
      'has-text-color': textColor.color,
      'has-background': backgroundColor.color,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class,
      'bly-pricing-has-currency': showCurrency
    }); // Setup price class names

    const editClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'bly-pricing-table-price': true,
      [fontSize.class]: fontSize.class
    }); // Setup wrapper styles

    const editWrapStyles = {
      backgroundColor: backgroundColor.color,
      color: textColor.color,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined
    }; // Setup price styles

    const editStyles = {
      fontSize: (_computeFontSize = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_5__.computeFontSize)(fontSize)) !== null && _computeFontSize !== void 0 ? _computeFontSize : undefined //fontSize: fontSize.size ? fontSize.size + 'px' : undefined,

    }; // Setup currency styles

    const currencySize = Math.floor(fontSize.size / 2.5);
    const currencyStyles = {
      fontSize: fontSize.size ? currencySize + 'px' : undefined
    }; // Setup term styles

    const termSize = Math.floor(fontSize.size / 2.5);
    const termStyles = {
      fontSize: fontSize.size ? termSize + 'px' : undefined
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 'bly-pricing-table-inner-component-price-' + this.props.clientId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_4__.default, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: editClassWrapperName ? editClassWrapperName : undefined,
      style: editWrapStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      itemProp: "offers",
      itemScope: true,
      itemType: "http://schema.org/Offer"
    }, showCurrency && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "span",
      itemProp: "priceCurrency",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('$', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: currency,
      onChange: value => setAttributes({
        currency: value
      }),
      className: "bly-pricing-table-currency",
      style: currencyStyles
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "div",
      itemProp: "price",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('49', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: price,
      onChange: value => setAttributes({
        price: value
      }),
      style: editStyles,
      className: editClassName ? editClassName : undefined
    }), showTerm && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "span",
      value: term,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('/mo', 'blockly'),
      keepPlaceholderOnFocus: true,
      onChange: value => setAttributes({
        term: value
      }),
      className: "bly-pricing-table-term",
      style: termStyles
    }))))];
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withFontSizes)('fontSize'), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)('backgroundColor', {
  textColor: 'color'
})])(Edit));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/price/index.js":
/*!******************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/price/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/pricing-table-inner/components/price/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);


/**
 * BLOCK: Pricing Table - Price Component
 */
//wordpress dependencies 



 //internal dependencie

 //external dependencie

 // Register the block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/pricing-table-price', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Price', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adds a product price component with schema markup.', 'blockly'),
  icon: 'cart',
  category: 'blockly',
  parent: ['blockly/pricing-table'],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pricing table', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('price', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('shop', 'blockly')],
  attributes: {
    price: {
      type: 'string'
    },
    currency: {
      type: 'string'
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number',
      default: 60
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    term: {
      type: 'string'
    },
    showTerm: {
      type: 'boolean',
      default: true
    },
    showCurrency: {
      type: 'boolean',
      default: true
    },
    paddingTop: {
      type: 'number',
      default: 10
    },
    paddingRight: {
      type: 'number',
      default: 20
    },
    paddingBottom: {
      type: 'number',
      default: 10
    },
    paddingLeft: {
      type: 'number',
      default: 20
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__.default,
  save: props => {
    const {
      price,
      currency,
      fontSize,
      customFontSize,
      backgroundColor,
      textColor,
      customBackgroundColor,
      customTextColor,
      term,
      showTerm,
      showCurrency,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    } = props.attributes; //retrive the class name

    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getFontSizeClass)(fontSize);
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor); // Setup wrapper class names

    const wrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      'has-background': backgroundColor || customBackgroundColor,
      'bly-pricing-table-price-wrap': true,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass,
      'bly-pricing-has-currency': showCurrency && currency
    }); // Setup class names

    const className = classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      'bly-pricing-table-price': true,
      [fontSizeClass]: fontSizeClass
    }); // Setup styles

    const wrapperStyles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined
    }; // Setup styles

    const styles = {
      fontSize: fontSizeClass ? undefined : customFontSize
    }; // Setup currency styles

    const computedFontSize = fontSizeClass ? undefined : customFontSize;
    const currencySize = Math.floor(computedFontSize / 2.5);
    const currencyStyles = {
      fontSize: computedFontSize ? currencySize + 'px' : undefined
    }; // Setup term styles

    const termSize = Math.floor(computedFontSize / 2.5);
    const termStyles = {
      fontSize: computedFontSize ? termSize + 'px' : undefined
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: wrapperClassName ? wrapperClassName : undefined,
      style: wrapperStyles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      itemProp: "offers",
      itemScope: true,
      itemType: "http://schema.org/Offer"
    }, currency && showCurrency && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "span",
      itemProp: "priceCurrency",
      value: currency,
      className: "bly-pricing-table-currency",
      style: currencyStyles
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "div",
      itemProp: "price",
      value: price,
      className: className ? className : undefined,
      style: styles
    }), term && showTerm && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "span",
      value: term,
      className: "bly-pricing-table-term",
      style: termStyles
    })));
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/price/inspector.js":
/*!**********************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/price/inspector.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_components_padding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../utils/components/padding */ "./src/utils/components/padding.js");
/* harmony import */ var _utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/components/fontsize-picker */ "./src/utils/components/fontsize-picker/index.js");

//wordpress dependencies




 // internal dependencies


 // Apply fallback styles

const applyFallbackStyles = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withFallbackStyles)((node, ownProps) => {
  const {
    textColor,
    backgroundColor,
    fontSize,
    customFontSize
  } = ownProps.attributes;
  const editableNode = node.querySelector('[contenteditable="true"]');
  const computedStyles = editableNode ? getComputedStyle(editableNode) : null;
  return {
    fallbackBackgroundColor: backgroundColor || !computedStyles ? undefined : computedStyles.backgroundColor,
    fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color,
    fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined
  };
});

class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        showTerm,
        showCurrency,
        term,
        currency,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      },
      isSelected,
      setAttributes,
      fallbackFontSize,
      fontSize,
      setFontSize,
      backgroundColor,
      textColor,
      setBackgroundColor,
      setTextColor,
      fallbackBackgroundColor,
      fallbackTextColor
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      key: "inspector"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Settings', 'blockly')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_6__.BLYblockFontSizePicker, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show currency symbol', 'blockly'),
      checked: showCurrency,
      onChange: () => this.props.setAttributes({
        showCurrency: !showCurrency
      })
    }), showCurrency && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Currency Symbol', 'blockly'),
      type: "text",
      value: currency,
      onChange: value => this.props.setAttributes({
        currency: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show pricing duration', 'blockly'),
      checked: showTerm,
      onChange: () => this.props.setAttributes({
        showTerm: !showTerm
      })
    }), showTerm && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Duration', 'blockly'),
      type: "text",
      value: term,
      onChange: value => this.props.setAttributes({
        term: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Settings', 'blockly'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_padding__WEBPACK_IMPORTED_MODULE_5__.default // Top padding
    , {
      paddingEnableTop: true,
      paddingTop: paddingTop,
      paddingTopMin: "0",
      paddingTopMax: "100",
      onChangePaddingTop: paddingTop => setAttributes({
        paddingTop
      }) // Right padding
      ,
      paddingEnableRight: true,
      paddingRight: paddingRight,
      paddingRightMin: "0",
      paddingRightMax: "100",
      onChangePaddingRight: paddingRight => setAttributes({
        paddingRight
      }) // Bottom padding
      ,
      paddingEnableBottom: true,
      paddingBottom: paddingBottom,
      paddingBottomMin: "0",
      paddingBottomMax: "100",
      onChangePaddingBottom: paddingBottom => setAttributes({
        paddingBottom
      }) // Left padding
      ,
      paddingEnableLeft: true,
      paddingLeft: paddingLeft,
      paddingLeftMin: "0",
      paddingLeftMax: "100",
      onChangePaddingLeft: paddingLeft => setAttributes({
        paddingLeft
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'blockly'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'blockly')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'blockly')
      }]
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color,
      fallbackTextColor,
      fallbackBackgroundColor,
      fontSize: fontSize.size
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([applyFallbackStyles, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withFontSizes)('fontSize'), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)('backgroundColor', {
  textColor: 'color'
})])(Inspector));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/subtitle2/edit.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/subtitle2/edit.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/inspector */ "./src/blocks/pricing-table-inner/components/global/inspector.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);

//wordpress dependencies



 //internal dependencies


 //external dependencie



class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    var _computeFontSize;

    const {
      attributes: {
        subtitle,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        customFontSize
      },
      isSelected,
      className,
      setAttributes,
      fallbackFontSize,
      fontSize,
      backgroundColor,
      textColor
    } = this.props;
    const editClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'bly-pricing-table-subtitle2': true,
      'has-text-color': textColor.color,
      'has-background': backgroundColor.color,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class
    }, (fontSize === null || fontSize === void 0 ? void 0 : fontSize.class) && {
      [fontSize === null || fontSize === void 0 ? void 0 : fontSize.class]: fontSize === null || fontSize === void 0 ? void 0 : fontSize.class
    });
    const editStyles = {
      backgroundColor: backgroundColor.color,
      color: textColor.color,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
      fontSize: (_computeFontSize = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_5__.computeFontSize)(fontSize)) !== null && _computeFontSize !== void 0 ? _computeFontSize : undefined
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 'bly-pricing-table-inner-component-subtitle-' + this.props.clientId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_global_inspector__WEBPACK_IMPORTED_MODULE_4__.default, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "div",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price Subtitle', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: subtitle,
      onChange: value => setAttributes({
        subtitle: value
      }),
      style: editStyles,
      className: editClassName ? editClassName : undefined
    }))];
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withFontSizes)('fontSize'), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)('backgroundColor', {
  textColor: 'color'
})])(Edit));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/subtitle2/index.js":
/*!**********************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/subtitle2/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/pricing-table-inner/components/subtitle2/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);


/**
 * BLOCK: Pricing Table - Subtitle2 Component
 */
//wordpress dependencies


 //internal dependencie

 //external dependencie

 // Register the block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/pricing-table-subtitle2', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Subtitle', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adds a product subtitle component with schema markup.', 'blockly'),
  icon: 'cart',
  category: 'blockly',
  parent: ['blockly/pricing-table-inner'],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pricing table', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('subtitle', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('shop', 'blockly')],
  attributes: {
    subtitle: {
      type: 'string'
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    paddingTop: {
      type: 'number',
      default: 10
    },
    paddingRight: {
      type: 'number',
      default: 20
    },
    paddingBottom: {
      type: 'number',
      default: 10
    },
    paddingLeft: {
      type: 'number',
      default: 20
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__.default,
  save: props => {
    const {
      subtitle,
      fontSize,
      customFontSize,
      backgroundColor,
      textColor,
      customBackgroundColor,
      customTextColor,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    } = props.attributes;
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getFontSizeClass)(fontSize);
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const className = classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      'has-background': backgroundColor || customBackgroundColor,
      'bly-pricing-table-subtitle2': true,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass,
      [fontSizeClass]: fontSizeClass
    }); // Setup styles

    const styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
      fontSize: fontSizeClass ? undefined : customFontSize
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "div",
      value: subtitle,
      className: className ? className : undefined,
      style: styles
    });
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/subtitle/edit.js":
/*!********************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/subtitle/edit.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/inspector */ "./src/blocks/pricing-table-inner/components/global/inspector.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);

//wordpress dependencies



 //internal dependencies


 //external dependencie



class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    var _computeFontSize;

    const {
      attributes: {
        subtitle,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        customFontSize
      },
      isSelected,
      className,
      setAttributes,
      fallbackFontSize,
      fontSize,
      backgroundColor,
      textColor
    } = this.props;
    const editClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'bly-pricing-table-subtitle': true,
      'has-text-color': textColor.color,
      'has-background': backgroundColor.color,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class
    }, (fontSize === null || fontSize === void 0 ? void 0 : fontSize.class) && {
      [fontSize === null || fontSize === void 0 ? void 0 : fontSize.class]: fontSize === null || fontSize === void 0 ? void 0 : fontSize.class
    });
    const editStyles = {
      backgroundColor: backgroundColor.color,
      color: textColor.color,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
      fontSize: (_computeFontSize = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_5__.computeFontSize)(fontSize)) !== null && _computeFontSize !== void 0 ? _computeFontSize : undefined
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 'bly-pricing-table-inner-component-subtitle-' + this.props.clientId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_global_inspector__WEBPACK_IMPORTED_MODULE_4__.default, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "div",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price Subtitle', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: subtitle,
      onChange: value => setAttributes({
        subtitle: value
      }),
      style: editStyles,
      className: editClassName ? editClassName : undefined
    }))];
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withFontSizes)('fontSize'), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)('backgroundColor', {
  textColor: 'color'
})])(Edit));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/subtitle/index.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/subtitle/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/pricing-table-inner/components/subtitle/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);


/**
 * BLOCK: Pricing Table - Subtitle Component
 */


 //internal dependencie

 //external dependencie

 // Register the block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/pricing-table-subtitle', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Subtitle', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adds a product subtitle component with schema markup.', 'blockly'),
  icon: 'cart',
  category: 'blockly',
  parent: ['blockly/pricing-table-inner'],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pricing table', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('subtitle', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('shop', 'blockly')],
  attributes: {
    subtitle: {
      type: 'string'
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    paddingTop: {
      type: 'number',
      default: 10
    },
    paddingRight: {
      type: 'number',
      default: 20
    },
    paddingBottom: {
      type: 'number',
      default: 10
    },
    paddingLeft: {
      type: 'number',
      default: 20
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__.default,
  save: props => {
    const {
      subtitle,
      fontSize,
      customFontSize,
      backgroundColor,
      textColor,
      customBackgroundColor,
      customTextColor,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    } = props.attributes; //retrieve class name 

    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getFontSizeClass)(fontSize);
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor); // Setup class names

    const className = classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      'has-background': backgroundColor || customBackgroundColor,
      'bly-pricing-table-subtitle': true,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass,
      [fontSizeClass]: fontSizeClass
    }); // Setup styles

    const styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
      fontSize: fontSizeClass ? undefined : customFontSize
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "div",
      value: subtitle,
      className: className ? className : undefined,
      style: styles
    });
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/title/edit.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/title/edit.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/inspector */ "./src/blocks/pricing-table-inner/components/global/inspector.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);

//wordpress dependencies



 //internal dependencies


 //external dependencie



class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    var _computeFontSize;

    const {
      attributes: {
        title,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft
      },
      isSelected,
      className,
      setAttributes,
      fallbackFontSize,
      fontSize,
      customFontSize,
      backgroundColor,
      textColor
    } = this.props;
    const editClassName = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      'bly-pricing-table-title': true,
      'has-text-color': textColor.color,
      'has-background': backgroundColor.color,
      [backgroundColor.class]: backgroundColor.class,
      [textColor.class]: textColor.class
    }, (fontSize === null || fontSize === void 0 ? void 0 : fontSize.class) && {
      [fontSize === null || fontSize === void 0 ? void 0 : fontSize.class]: fontSize === null || fontSize === void 0 ? void 0 : fontSize.class
    });
    const editStyles = {
      backgroundColor: backgroundColor.color,
      color: textColor.color,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
      fontSize: (_computeFontSize = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_5__.computeFontSize)(fontSize)) !== null && _computeFontSize !== void 0 ? _computeFontSize : undefined
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 'bly-pricing-table-inner-component-title-' + this.props.clientId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_global_inspector__WEBPACK_IMPORTED_MODULE_4__.default, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "div",
      itemProp: "name",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Price Title', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: title,
      onChange: value => setAttributes({
        title: value
      }),
      style: editStyles,
      className: editClassName ? editClassName : undefined
    }))];
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withFontSizes)('fontSize'), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)('backgroundColor', {
  textColor: 'color'
})])(Edit));

/***/ }),

/***/ "./src/blocks/pricing-table-inner/components/title/index.js":
/*!******************************************************************!*\
  !*** ./src/blocks/pricing-table-inner/components/title/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/pricing-table-inner/components/title/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);


/**
 * BLOCK: Pricing Table - title Component
 */
//wordpress dependencies



 //internal dependencie

 //external dependencie

 // Register the block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/pricing-table-title', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Title', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Adds a product title component with schema markup.', 'blockly'),
  icon: 'cart',
  category: 'blockly',
  parent: ['blockly/pricing-table-inner'],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pricing table', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('title', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('shop', 'blockly')],
  attributes: {
    title: {
      type: 'string'
    },
    fontSize: {
      type: 'string'
    },
    customFontSize: {
      type: 'number'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string',
      default: '#fff'
    },
    paddingTop: {
      type: 'number',
      default: 0
    },
    paddingRight: {
      type: 'number',
      default: 0
    },
    paddingBottom: {
      type: 'number',
      default: 0
    },
    paddingLeft: {
      type: 'number',
      default: 0
    }
  },
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_4__.default, props);
  },
  save: props => {
    const {
      title,
      fontSize,
      customFontSize,
      backgroundColor,
      textColor,
      customBackgroundColor,
      customTextColor,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
    } = props.attributes;
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getFontSizeClass)(fontSize);
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.getColorClassName)('background-color', backgroundColor);
    const styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      paddingTop: paddingTop ? paddingTop + 'px' : undefined,
      paddingRight: paddingRight ? paddingRight + 'px' : undefined,
      paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
      paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
      fontSize: fontSizeClass ? undefined : customFontSize
    };
    const className = classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      'has-background': backgroundColor || customBackgroundColor,
      'bly-pricing-table-title': true,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass,
      [fontSizeClass]: fontSizeClass
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "div",
      itemProp: "name",
      value: title,
      style: styles,
      className: className ? className : undefined
    });
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table-inner/index.js":
/*!*************************************************!*\
  !*** ./src/blocks/pricing-table-inner/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inspector */ "./src/blocks/pricing-table-inner/components/inspector.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/pricing-table-inner/styles/style.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/pricing-table-inner/styles/editor.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);


/**
 * BLOCK: Pricing Table Inner
 */
//wordpress dependencies




 //internal dependencies



 //external dependencie


const ALLOWED_BLOCKS = ['blockly/pricing-table-subtitle', 'blockly/pricing-table-subtitle2', 'blockly/pricing-table-title', 'blockly/pricing-table-description', 'blockly/pricing-table-price', 'blockly/pricing-table-button', 'core/paragraph', 'core/image', 'core/html', 'core/shortcode'];
const ALLOWED_BLOCKS2 = ['blockly/pricing-table-title', 'blockly/pricing-table-description', 'blockly/pricing-table-price', 'blockly/pricing-table-button', 'core/paragraph', 'core/image', 'core/html', 'core/shortcode'];

class EditPricingTableBlock extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        borderWidth,
        borderColor,
        borderRadius,
        backgroundColor,
        padding,
        alignment,
        pricing_style
      },
      setAttributes
    } = this.props;
    const styles = {
      borderWidth: borderWidth ? borderWidth : null,
      borderStyle: 0 < borderWidth ? 'solid' : null,
      borderColor: borderColor ? borderColor : null,
      borderRadius: borderRadius ? borderRadius : null,
      backgroundColor: backgroundColor ? backgroundColor : null,
      padding: padding ? padding + '%' : null
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
      key: "controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
      value: alignment,
      onChange: nextAlign => {
        setAttributes({
          alignment: nextAlign
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_inspector__WEBPACK_IMPORTED_MODULE_5__.default, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 'bly-pricing-table-inner-fragment-' + this.props.clientId
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(alignment ? 'bly-block-pricing-table-' + alignment : 'bly-block-pricing-table-center', 'bly-block-pricing-table'),
      itemScope: true,
      itemType: "http://schema.org/Product"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bly-block-pricing-table-inside",
      style: styles
    }, pricing_style == 'style_one' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: [['blockly/pricing-table-title', {
        title: '<strong>Price Title</strong>',
        customFontSize: 20,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10
      }], ['blockly/pricing-table-subtitle', {
        subtitle: 'Price Subtitle',
        customFontSize: 18,
        paddingTop: 20,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
      }], ['blockly/pricing-table-price', {
        price: '49',
        currency: '$',
        customFontSize: 60,
        term: '/mo',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20
      }], ['blockly/pricing-table-subtitle2', {
        subtitle: 'Price Subtitle',
        customFontSize: 20,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 20,
        paddingLeft: 0
      }], ['blockly/pricing-table-features', {
        features: '<li>Product Feature One</li><li>Product Feature Two</li><li>Product Feature Three</li>',
        multilineTag: 'li',
        ordered: false,
        customFontSize: 20,
        paddingTop: 15,
        paddingRight: 20,
        paddingBottom: 15,
        paddingLeft: 20
      }], ['blockly/pricing-table-button', {
        buttonText: 'Buy Now',
        buttonBackgroundColor: '#255b95',
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
      }]],
      templateLock: "all",
      allowedBlocks: ALLOWED_BLOCKS,
      templateInsertUpdatesSelection: false
    }), pricing_style == 'style_two' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: [['blockly/pricing-table-title', {
        title: '<strong>Price Title</strong>',
        customFontSize: 20,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10
      }], ['blockly/pricing-table-price', {
        price: '49',
        currency: '$',
        customFontSize: 60,
        term: '/mo',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20
      }], ['blockly/pricing-table-features', {
        features: '<li>Product Feature One</li><li>Product Feature Two</li><li>Product Feature Three</li>',
        multilineTag: 'li',
        ordered: false,
        customFontSize: 20,
        paddingTop: 15,
        paddingRight: 20,
        paddingBottom: 15,
        paddingLeft: 20
      }], ['blockly/pricing-table-button', {
        buttonText: 'Buy Now',
        buttonBackgroundColor: '#255b95',
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
      }]],
      templateLock: "all",
      allowedBlocks: ALLOWED_BLOCKS2,
      templateInsertUpdatesSelection: false
    }))))];
  }

} // Register the block


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/pricing-table-inner', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a pricing column.', 'blockly'),
  icon: 'cart',
  category: 'blockly',
  parent: ['blockly/pricing-table'],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('pricing', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('shop', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('buy', 'blockly')],
  attributes: {
    pricing_style: {
      type: 'string',
      default: 'style_one'
    },
    borderWidth: {
      type: 'number',
      default: 1
    },
    borderColor: {
      type: 'string',
      default: '#70707080'
    },
    borderRadius: {
      type: 'number',
      default: 0
    },
    backgroundColor: {
      type: 'string'
    },
    alignment: {
      type: 'string'
    },
    padding: {
      type: 'number',
      default: 0
    }
  },
  bly_settings_data: {
    bly_pricing_inner_padding: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Padding', 'blockly')
    },
    bly_pricing_inner_borderWidth: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Border', 'blockly')
    },
    bly_pricing_inner_borderRadius: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Border Radius', 'blockly')
    },
    bly_pricing_inner_borderColor: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Border Color', 'blockly')
    },
    bly_pricing_inner_colorSettings: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Column Background Color', 'blockly')
    }
  },
  edit: EditPricingTableBlock,
  save: props => {
    const {
      borderWidth,
      borderColor,
      borderRadius,
      backgroundColor,
      alignment,
      padding
    } = props.attributes;
    const styles = {
      borderWidth: borderWidth ? borderWidth : null,
      borderStyle: 0 < borderWidth ? 'solid' : null,
      borderColor: borderColor ? borderColor : null,
      borderRadius: borderRadius ? borderRadius : null,
      backgroundColor: backgroundColor ? backgroundColor : null,
      padding: padding ? padding + '%' : null
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(alignment ? 'bly-block-pricing-table-' + alignment : 'bly-block-pricing-table-center', 'bly-block-pricing-table'),
      itemScope: true,
      itemType: "http://schema.org/Product"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bly-block-pricing-table-inside",
      style: styles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table/components/inspector.js":
/*!**********************************************************!*\
  !*** ./src/blocks/pricing-table/components/inspector.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Inspector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);

//WordPress dependencies



 //Create an Inspector Controls wrapper Component

class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        columns,
        columnsGap,
        style_type
      },
      setAttributes
    } = this.props;
    const style_types = [{
      value: 'style_one',
      label: 'Style One'
    }, {
      value: 'style_two',
      label: 'Style Two'
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Please select the style component.",
      options: style_types,
      value: style_type,
      onChange: style_type => {
        setAttributes({
          style_type
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Columns', 'blockly'),
      value: columns,
      onChange: value => setAttributes({
        columns: value
      }),
      min: 1,
      max: 4
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pricing Columns Gap', 'blockly'),
      value: columnsGap,
      onChange: value => setAttributes({
        columnsGap: value
      }),
      min: 0,
      max: 5,
      step: 1
    })));
  }

}

/***/ }),

/***/ "./src/blocks/pricing-table/components/pricing.js":
/*!********************************************************!*\
  !*** ./src/blocks/pricing-table/components/pricing.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pricing; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Pricing Block Wrapper
 */


class Pricing extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        columns,
        align
      },
      setAttribues
    } = this.props;
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()([this.props.className, 'bly-pricing-columns-' + columns], {
      ['align' + align]: align
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className ? className : undefined
    }, this.props.children);
  }

}

/***/ }),

/***/ "./src/blocks/pricing-table/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/pricing-table/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inspector */ "./src/blocks/pricing-table/components/inspector.js");
/* harmony import */ var _components_pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pricing */ "./src/blocks/pricing-table/components/pricing.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/times */ "./node_modules/lodash/times.js");
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_10__);



/**
 * BLOCK: Pricing Table
 */
//wordpress dependencies




 //internal dependencies


 //external dependencies




const ALLOWED_BLOCKS = ['blockly/pricing-table-inner']; // Get the pricing template

const getPricingTemplate = memize__WEBPACK_IMPORTED_MODULE_9___default()(columns => {
  return lodash_times__WEBPACK_IMPORTED_MODULE_10___default()(columns, () => ['blockly/pricing-table-inner']);
}); //edit pricing table component

class EditPricingBlock extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  componentDidUpdate(prevProps) {
    if (this.props.attributes.columns !== prevProps.attributes.columns) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').synchronizeTemplate();
    } // update child component atteibute


    const pricing_styles = [];
    let pricingTableId = this.props.clientId;
    const pricingTable = wp.data.select('core/block-editor').getBlock(pricingTableId);
    pricingTable.innerBlocks.map(block => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/block-editor').updateBlockAttributes(block.clientId, {
        'pricing_style': this.props.attributes.style_type
      });
    });
  }

  render() {
    const {
      attributes: {
        columns,
        columnsGap,
        align
      },
      setAttributes
    } = this.props;
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockControls, {
      key: "controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockAlignmentToolbar, {
      value: align,
      onChange: align => setAttributes({
        align
      }),
      controls: ['center', 'wide', 'full']
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_inspector__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-pricing-table-inspector-' + this.props.clientId,
      setAttributes
    }, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_pricing__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-pricing-table-' + this.props.clientId
    }, this.props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('bly-pricing-table-wrap-admin', 'bly-block-pricing-table-gap-' + columnsGap)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
      template: getPricingTemplate(columns),
      templateLock: "all",
      allowedBlocks: ALLOWED_BLOCKS
    })))];
  }

} // Register the block


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('blockly/pricing-table', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pricing', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add a pricing table.', 'blockly'),
  icon: {
    src: 'cart',
    background: '#cce5ff',
    foreground: '#004085'
  },
  category: 'blockly',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('pricing table', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('shop', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('purchase', 'blockly')],
  attributes: {
    style_type: {
      type: 'string',
      default: 'style_one'
    },
    columns: {
      type: 'number',
      default: 2
    },
    columnsGap: {
      type: 'number',
      default: 2
    },
    align: {
      type: 'string'
    }
  },
  bly_settings_data: {
    bly_pricing_columns: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pricing Columns', 'blockly')
    },
    bly_pricing_columnsGap: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pricing Columns Gap', 'blockly')
    }
  },

  // Add alignment to block wrapper
  getEditWrapperProps({
    align
  }) {
    if ('left' === align || 'right' === align || 'full' === align || 'wide' === align) {
      return {
        'data-align': align
      };
    }
  },

  edit: EditPricingBlock,
  save: props => {
    const {
      columnsGap
    } = props.attributes;
    const className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(['bly-pricing-table-wrap', 'bly-block-pricing-table-gap-' + columnsGap]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_pricing__WEBPACK_IMPORTED_MODULE_7__.default, props, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: className ? className : undefined
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/quote/components/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/quote/components/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector */ "./src/blocks/quote/components/inspector.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);


//WordPress dependencies



 //internal dependencies


 //external dependencie



class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    var _computeFontSize;

    const {
      attributes: {
        content,
        name_show_hide,
        name,
        padding,
        borderRadius,
        style_type,
        align
      },
      backgroundColor,
      className,
      setAttributes,
      textColor,
      iconColor,
      fontSize
    } = this.props;
    const styles = {
      backgroundColor: backgroundColor === null || backgroundColor === void 0 ? void 0 : backgroundColor.color,
      color: textColor === null || textColor === void 0 ? void 0 : textColor.color,
      fontSize: (_computeFontSize = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_6__.computeFontSize)(fontSize)) !== null && _computeFontSize !== void 0 ? _computeFontSize : undefined,
      borderRadius: borderRadius ? borderRadius : null,
      padding: padding ? padding + 'px' : null,
      textAlign: align
    };
    const nameSize = Math.floor(fontSize.size * 1.2);
    const stylesName = {
      fontSize: fontSize.size ? nameSize + 'px' : undefined
    };
    const classes = classnames__WEBPACK_IMPORTED_MODULE_7___default()('bly-quote-box-wrap', style_type == 'style_two' && 'quote-bg-icon-center', className, backgroundColor && {
      'has-background': backgroundColor.color,
      [backgroundColor.class]: backgroundColor.class
    }, textColor && {
      'has-text-color': textColor.color,
      [textColor.class]: textColor.class
    }, (fontSize === null || fontSize === void 0 ? void 0 : fontSize.class) && {
      [fontSize === null || fontSize === void 0 ? void 0 : fontSize.class]: fontSize === null || fontSize === void 0 ? void 0 : fontSize.class
    });
    const hrStyle = {
      borderColor: textColor === null || textColor === void 0 ? void 0 : textColor.color
    };
    const hrStyleClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
      [textColor.class]: textColor.class
    });
    const svgStyle = {
      fill: iconColor === null || iconColor === void 0 ? void 0 : iconColor.color
    };
    const svgStyleClass = classnames__WEBPACK_IMPORTED_MODULE_7___default()({
      [iconColor.class]: iconColor.class
    });
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
      key: "controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
      value: align,
      onChange: nextAlign => setAttributes({
        align: nextAlign
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_5__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-quote-inspector-' + this.props.clientId,
      setAttributes
    }, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, style_type == 'style_one' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", {
      className: classes,
      style: styles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      class: "bly-quote-box-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      id: "Group_135",
      "data-name": "Group 135",
      xmlns: "http://www.w3.org/2000/svg",
      width: "72.3",
      height: "43.6",
      viewBox: "0 0 72.3 43.6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      style: svgStyle,
      className: svgStyleClass,
      id: "Path_97",
      "data-name": "Path 97",
      d: "M150.98,678.162a16.254,16.254,0,0,0,.93-32.481,22.835,22.835,0,0,1,6.266-11.119c-8.977,0-23.451,12.243-23.451,27.346A16.255,16.255,0,0,0,150.98,678.162Z",
      transform: "translate(-134.725 -634.562)"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      style: svgStyle,
      className: svgStyleClass,
      id: "Path_98",
      "data-name": "Path 98",
      d: "M190.77,678.162a16.254,16.254,0,0,0,.93-32.481,22.835,22.835,0,0,1,6.266-11.119c-8.977,0-23.451,12.243-23.451,27.346A16.255,16.255,0,0,0,190.77,678.162Z",
      transform: "translate(-134.725 -634.562)"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      className: "message",
      value: content,
      onChange: content => setAttributes({
        content
      }),
      placeholder: "Add text...",
      format: "string"
    }), name_show_hide && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      class: "name-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("hr", {
      style: hrStyle,
      className: hrStyleClass
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      className: "name",
      value: name,
      onChange: name => setAttributes({
        name
      }),
      style: stylesName,
      placeholder: "Add name...",
      format: "string"
    })))), style_type == 'style_two' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", {
      className: classes,
      style: styles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      class: "bly-quote-box-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "173.082",
      height: "130.613",
      viewBox: "0 0 173.082 130.613"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", {
      id: "Group_139",
      "data-name": "Group 139",
      class: "cls-1",
      transform: "translate(-413.459 -153.944)"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      style: svgStyle,
      className: svgStyleClass,
      style: {
        opacity: 0.1,
        mixBlendMode: 'multiply',
        isolation: 'isolate'
      },
      id: "Path_99",
      "data-name": "Path 99",
      class: "cls-2",
      d: "M458.73,214.044a32.818,32.818,0,0,1,16.429,9.215q12.3,12.306,10.074,31.314a29.787,29.787,0,0,1-5.845,14.519q-13.833,18.117-36.212,15.016a31.234,31.234,0,0,1-14.2-5.815q-15.517-11.466-15.513-29.4a42.668,42.668,0,0,1,2.8-15.624l39.265-79.33h26.041Zm100.965,0a32.822,32.822,0,0,1,16.429,9.215q12.3,12.306,10.074,31.314a29.79,29.79,0,0,1-5.844,14.519q-13.827,18.106-36.189,15.019A31.248,31.248,0,0,1,529.95,278.3q-15.54-11.468-15.531-29.4a42.691,42.691,0,0,1,2.806-15.624l39.266-79.33h26.041Z"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      className: "message",
      value: content,
      onChange: content => setAttributes({
        content
      }),
      placeholder: "Add text...",
      format: "string"
    }))))];
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)('backgroundColor', {
  textColor: 'color'
}, {
  iconColor: 'color'
}), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withFontSizes)('fontSize')])(Edit));

/***/ }),

/***/ "./src/blocks/quote/components/inspector.js":
/*!**************************************************!*\
  !*** ./src/blocks/quote/components/inspector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/components/fontsize-picker */ "./src/utils/components/fontsize-picker/index.js");

//WordPress dependencies




 //internal dependencie



class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const style_types = [{
      value: 'style_one',
      label: 'Style One'
    }, {
      value: 'style_two',
      label: 'Style Two'
    }];
    const {
      attributes: {
        name_show_hide,
        padding,
        borderRadius,
        style_type
      },
      backgroundColor,
      textColor,
      iconColor,
      setBackgroundColor,
      setTextColor,
      setIconColor,
      fallbackBackgroundColor,
      fallbackTextColor,
      setAttributes
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Please select the style component.",
      options: style_types,
      value: style_type,
      onChange: style_type => {
        setAttributes({
          style_type
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quote settings', 'blockly'),
      className: "bly-highlight-font-size"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_components_fontsize_picker__WEBPACK_IMPORTED_MODULE_5__.BLYblockFontSizePicker, this.props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'blockly'),
      value: padding,
      onChange: value => setAttributes({
        padding: value
      }),
      min: 0,
      max: 100,
      step: 1
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'blockly'),
      value: borderRadius,
      onChange: value => setAttributes({
        borderRadius: value
      }),
      min: 0,
      max: 20,
      step: 1
    })), style_type == 'style_one' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
      heading: "Please select if the name should be Show.",
      label: "name show?",
      checked: name_show_hide,
      onChange: name_show_hide => {
        setAttributes({
          name_show_hide
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color settings', 'blockly'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor.color,
        onChange: setBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background color', 'blockly')
      }, {
        value: textColor.color,
        onChange: setTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text color', 'blockly')
      }, {
        value: iconColor.color,
        onChange: setIconColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon color', 'blockly')
      }]
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.ContrastChecker, {
      textColor: textColor.color,
      backgroundColor: backgroundColor.color,
      fallbackBackgroundColor,
      fallbackTextColor
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withColors)('backgroundColor', {
  textColor: 'color'
}, {
  iconColor: 'color'
}), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withFontSizes)('fontSize')])(Inspector));

/***/ }),

/***/ "./src/blocks/quote/components/save.js":
/*!*********************************************!*\
  !*** ./src/blocks/quote/components/save.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

//WordPress dependencies


 //external dependencie


class Save extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      content,
      name_show_hide,
      name,
      padding,
      borderRadius,
      style_type,
      align,
      backgroundColor,
      textColor,
      iconColor,
      customIconColor,
      customFontSize,
      fontSize,
      customBackgroundColor,
      customTextColor
    } = this.props.attributes;
    const {
      className
    } = this.props;
    const fontSizeClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getFontSizeClass)(fontSize);
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', textColor);
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('background-color', backgroundColor);
    const iconClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)('color', iconColor);
    const styles = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor,
      borderRadius: borderRadius ? borderRadius : null,
      padding: padding ? padding + 'px' : null,
      textAlign: align,
      fontSize: fontSizeClass ? undefined : customFontSize
    };
    const computedFontSize = fontSizeClass ? undefined : customFontSize;
    const nameSize = Math.floor(computedFontSize * 1.2);
    const stylesName = {
      fontSize: computedFontSize ? nameSize + 'px' : undefined
    };
    const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'bly-quote-box-wrap', style_type == 'style_two' && 'quote-bg-icon-center', {
      'has-background': backgroundColor || customBackgroundColor,
      [textClass]: textClass,
      [backgroundClass]: backgroundClass
    }, (fontSize === null || fontSize === void 0 ? void 0 : fontSize.class) && {
      [fontSize === null || fontSize === void 0 ? void 0 : fontSize.class]: fontSize === null || fontSize === void 0 ? void 0 : fontSize.class
    });
    const hrStyle = {
      borderColor: textClass ? undefined : customTextColor
    };
    const hrStyleClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [textClass]: textClass
    });
    const svgStyle = {
      fill: iconClass ? undefined : customIconColor
    };
    const svgStyleClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [iconClass]: iconClass
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, style_type == 'style_one' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: classes,
      style: styles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bly-quote-box-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "Group_135",
      "data-name": "Group 135",
      xmlns: "http://www.w3.org/2000/svg",
      width: "72.3",
      height: "43.6",
      viewBox: "0 0 72.3 43.6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: svgStyle,
      className: svgStyleClass,
      id: "Path_97",
      "data-name": "Path 97",
      d: "M150.98,678.162a16.254,16.254,0,0,0,.93-32.481,22.835,22.835,0,0,1,6.266-11.119c-8.977,0-23.451,12.243-23.451,27.346A16.255,16.255,0,0,0,150.98,678.162Z",
      transform: "translate(-134.725 -634.562)"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: svgStyle,
      className: svgStyleClass,
      id: "Path_98",
      "data-name": "Path 98",
      d: "M190.77,678.162a16.254,16.254,0,0,0,.93-32.481,22.835,22.835,0,0,1,6.266-11.119c-8.977,0-23.451,12.243-23.451,27.346A16.255,16.255,0,0,0,190.77,678.162Z",
      transform: "translate(-134.725 -634.562)"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      value: content,
      className: "message"
    }), name_show_hide && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "name-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
      style: hrStyle,
      className: hrStyleClass
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      value: name,
      className: "name",
      style: stylesName
    })))), style_type == 'style_two' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: classes,
      style: styles
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "bly-quote-box-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "173.082",
      height: "130.613",
      viewBox: "0 0 173.082 130.613"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Group_139",
      "data-name": "Group 139",
      class: "cls-1",
      transform: "translate(-413.459 -153.944)"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      style: svgStyle,
      className: svgStyleClass,
      style: {
        opacity: 0.1,
        mixBlendMode: 'multiply',
        isolation: 'isolate'
      },
      id: "Path_99",
      "data-name": "Path 99",
      class: "cls-2",
      d: "M458.73,214.044a32.818,32.818,0,0,1,16.429,9.215q12.3,12.306,10.074,31.314a29.787,29.787,0,0,1-5.845,14.519q-13.833,18.117-36.212,15.016a31.234,31.234,0,0,1-14.2-5.815q-15.517-11.466-15.513-29.4a42.668,42.668,0,0,1,2.8-15.624l39.265-79.33h26.041Zm100.965,0a32.822,32.822,0,0,1,16.429,9.215q12.3,12.306,10.074,31.314a29.79,29.79,0,0,1-5.844,14.519q-13.827,18.106-36.189,15.019A31.248,31.248,0,0,1,529.95,278.3q-15.54-11.468-15.531-29.4a42.691,42.691,0,0,1,2.806-15.624l39.266-79.33h26.041Z"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      value: content,
      className: "message"
    }))));
  }

}

/***/ }),

/***/ "./src/blocks/quote/index.js":
/*!***********************************!*\
  !*** ./src/blocks/quote/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit */ "./src/blocks/quote/components/edit.js");
/* harmony import */ var _components_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save */ "./src/blocks/quote/components/save.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/quote/styles/style.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/quote/styles/editor.scss");


/**
 * BLOCK: Quote
 */
// wordpress dependencies

 //internal dependencies




 //register block quote

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)("blockly/quote", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quote Box', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A simple block for Quote', 'blockly'),
  category: 'blockly',
  icon: {
    src: 'editor-quote',
    background: '#cce5ff',
    foreground: '#004085'
  },
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('quote', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('quote box', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('blockly', 'blockly')],
  example: {
    attributes: {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea sequat, vel illum dolore eu feugiat nulla facili.', 'blockly'),
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Russell Hawlader', 'blockly')
    }
  },
  attributes: {
    style_type: {
      type: 'string',
      default: 'style_one'
    },
    content: {
      type: 'string',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea sequat, vel illum dolore eu feugiat nulla facili', 'blockly')
    },
    name: {
      type: 'string',
      default: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Russell Hawlader', 'blockly')
    },
    name_show_hide: {
      type: 'Boolean',
      default: true
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    iconColor: {
      type: 'string'
    },
    customIconColor: {
      type: 'string',
      default: '#dddddd'
    },
    fontSize: {
      type: "string"
    },
    customFontSize: {
      type: "number",
      default: 16
    },
    borderRadius: {
      type: 'number',
      default: 0
    },
    padding: {
      type: 'number',
      default: 0
    },
    align: {
      type: "string"
    }
  },
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_edit__WEBPACK_IMPORTED_MODULE_3__.default, props);
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_save__WEBPACK_IMPORTED_MODULE_4__.default, props);
  }
});

/***/ }),

/***/ "./src/blocks/testimonial/components/edit.js":
/*!***************************************************!*\
  !*** ./src/blocks/testimonial/components/edit.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/blocks/testimonial/components/inspector.js");
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimonial */ "./src/blocks/testimonial/components/testimonial.js");
/* harmony import */ var _utils_components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../utils/components/icons */ "./src/utils/components/icons/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);




 // Import block dependencies and components


/**
 * WordPress dependencies
 */





const ALLOWED_MEDIA_TYPES = ['image'];
class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    // Setup the attributes
    const {
      attributes: {
        testimonialName,
        testimonialTitle,
        testimonialContent,
        testimonialAlignment,
        testimonialImgURL,
        testimonialImgID,
        testimonialTextColor,
        style_type
      },
      setAttributes
    } = this.props;

    const onRemoveImage = () => {
      setAttributes({
        testimonialImgURL: null,
        testimonialImgID: null
      });
    };

    return [// Show the alignment toolbar on focus
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockControls, {
      key: "controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.AlignmentToolbar, {
      value: testimonialAlignment,
      onChange: value => setAttributes({
        testimonialAlignment: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-testimonial-inspector-' + this.props.clientId,
      setAttributes
    }, this.props)), // Show the block markup in the editor
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_testimonial__WEBPACK_IMPORTED_MODULE_3__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      key: 'bly-testimonial-editor-' + this.props.clientId
    }, this.props), style_type == 'style_one' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      class: "blockly-testimonial-wrap-symbol-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      class: "blockly-testimonial-wrap-symbol-inner"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      id: "testimonial-quote-icon",
      "data-name": "testimonial-quote-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "88.295",
      height: "53.245",
      viewBox: "0 0 88.295 53.245"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      id: "Path_55",
      "data-name": "Path 55",
      class: "cls-1",
      d: "M594.485,126.2a19.85,19.85,0,0,0-1.136,39.667A27.876,27.876,0,0,1,585.7,179.44c10.963,0,28.639-14.951,28.639-33.395A19.851,19.851,0,0,0,594.485,126.2Z",
      transform: "translate(-526.041 -126.195)"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      id: "Path_56",
      "data-name": "Path 56",
      class: "cls-1",
      d: "M527.434,126.2a19.85,19.85,0,0,0-1.136,39.667,27.876,27.876,0,0,1-7.652,13.578c10.964,0,28.639-14.951,28.639-33.395A19.851,19.851,0,0,0,527.434,126.2Z",
      transform: "translate(-507.583 -126.195)"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bly-testimonial-text"
    }, style_type == 'style_two' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      class: "bly-testiominal-image-wrap-upper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      id: "quotes-upper",
      xmlns: "http://www.w3.org/2000/svg",
      width: "50.366",
      height: "53.151",
      viewBox: "0 0 50.366 53.151"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", {
      id: "Group_1",
      "data-name": "Group 1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      id: "Path_2",
      "data-name": "Path 2",
      d: "M86.684,85.914,95.053,65.67a7.979,7.979,0,0,0-10.26,4.465l-2.3,5.714a55.944,55.944,0,0,0-4.057,20.916V103.2a8.216,8.216,0,0,0,8.216,8.216h7.358a5.027,5.027,0,0,0,5.027-5.027V85.914Z",
      transform: "translate(-78.433 -65.138)",
      fill: "#537cfa"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      id: "Path_3",
      "data-name": "Path 3",
      d: "M137.653,97.676l8.369-20.244a7.978,7.978,0,0,0-10.26,4.466l-2.3,5.714a55.953,55.953,0,0,0-4.056,20.916v6.438a8.215,8.215,0,0,0,8.216,8.216h7.357A5.027,5.027,0,0,0,150,118.154V97.676Z",
      transform: "translate(-99.636 -70.031)",
      fill: "#537cfa"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.RichText, {
      tagName: "div",
      multiline: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Add testimonial text...', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: testimonialContent,
      allowedFormats: ['core/bold', 'core/italic', 'core/strikethrough', 'core/link'],
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('testimonial-content'),
      style: {
        textAlign: testimonialAlignment
      },
      onChange: value => setAttributes({
        testimonialContent: value
      })
    }), style_type == 'style_two' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      class: "bly-testiominal-image-wrap-lower"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
      id: "quotes-lower",
      xmlns: "http://www.w3.org/2000/svg",
      width: "50.366",
      height: "53.151",
      viewBox: "0 0 50.366 53.151"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", {
      id: "Group_3",
      "data-name": "Group 3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      id: "Path_4",
      "data-name": "Path 4",
      d: "M988.614,481.9l-8.369-20.244a7.978,7.978,0,0,1,10.26,4.465l2.3,5.714a55.946,55.946,0,0,1,4.057,20.917v6.438a8.216,8.216,0,0,1-8.216,8.216h-7.357a5.027,5.027,0,0,1-5.028-5.028V481.9Z",
      transform: "translate(-946.498 -461.124)",
      fill: "#537cfa"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      id: "Path_5",
      "data-name": "Path 5",
      d: "M937.645,493.663l-8.369-20.245a7.978,7.978,0,0,1,10.26,4.466l2.3,5.714a55.957,55.957,0,0,1,4.057,20.917v6.438a8.216,8.216,0,0,1-8.216,8.216h-7.357a5.028,5.028,0,0,1-5.028-5.028V493.663Z",
      transform: "translate(-925.295 -466.017)",
      fill: "#537cfa"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bly-testimonial-info"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bly-testimonial-avatar-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "bly-testimonial-image-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.MediaUpload, {
      buttonProps: {
        className: 'change-image'
      },
      onSelect: img => setAttributes({
        testimonialImgID: img.id,
        testimonialImgURL: img.url
      }),
      allowed: ALLOWED_MEDIA_TYPES,
      type: "image",
      value: testimonialImgID,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
        className: testimonialImgID ? 'bly-change-image' : 'bly-add-image',
        onClick: open
      }, !testimonialImgID ? _utils_components_icons__WEBPACK_IMPORTED_MODULE_4__.default.upload : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        className: "bly-testimonial-avatar",
        src: testimonialImgURL,
        alt: "avatar"
      })), testimonialImgID && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
        className: "bly-remove-image",
        onClick: onRemoveImage
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Dashicon, {
        icon: 'dismiss'
      })))
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.RichText, {
      tagName: "h2",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Add name', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: testimonialName,
      className: "bly-testimonial-name",
      style: {
        color: testimonialTextColor
      },
      onChange: value => setAttributes({
        testimonialName: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.RichText, {
      tagName: "small",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Add title', 'blockly'),
      keepPlaceholderOnFocus: true,
      value: testimonialTitle,
      className: "bly-testimonial-title",
      style: {
        color: testimonialTextColor
      },
      onChange: value => setAttributes({
        testimonialTitle: value
      })
    })))];
  }

}

/***/ }),

/***/ "./src/blocks/testimonial/components/inspector.js":
/*!********************************************************!*\
  !*** ./src/blocks/testimonial/components/inspector.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Inspector; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */


 // Import Inspector components


/**
 * Create an Inspector Controls wrapper Component
 */

class Inspector extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    // Cite Alignment Options
    const citeAlignOptions = [{
      value: 'left-aligned',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left Aligned', 'blockly')
    }, {
      value: 'right-aligned',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right Aligned', 'blockly')
    }]; // Setup the attributes

    const {
      attributes: {
        testimonialBackgroundColor,
        testimonialTextColor,
        testimonialFontSize,
        testimonialCiteAlign,
        style_type
      },
      setAttributes
    } = this.props;
    const style_types = [{
      value: 'style_one',
      label: 'Style One'
    }, {
      value: 'style_two',
      label: 'Style Two'
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Please select the style component.",
      options: style_types,
      value: style_type,
      onChange: style_type => {
        setAttributes({
          style_type
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'blockly'),
      value: testimonialFontSize,
      onChange: value => setAttributes({
        testimonialFontSize: value
      }),
      min: 14,
      max: 24,
      step: 1
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings'),
      colorSettings: [{
        value: testimonialBackgroundColor,
        onChange: testimonialBackgroundColor => setAttributes({
          testimonialBackgroundColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }, {
        value: testimonialTextColor,
        onChange: testimonialTextColor => setAttributes({
          testimonialTextColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
      }]
    }));
  }

}

/***/ }),

/***/ "./src/blocks/testimonial/components/save.js":
/*!***************************************************!*\
  !*** ./src/blocks/testimonial/components/save.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testimonial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonial */ "./src/blocks/testimonial/components/testimonial.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */



class Save extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      testimonialName,
      testimonialTitle,
      testimonialContent,
      testimonialAlignment,
      testimonialImgURL,
      testimonialTextColor,
      style_type
    } = this.props.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_testimonial__WEBPACK_IMPORTED_MODULE_1__.default, this.props, style_type == 'style_one' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "blockly-testimonial-wrap-symbol-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "blockly-testimonial-wrap-symbol-inner"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "testimonial-quote-icon",
      "data-name": "testimonial-quote-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "88.295",
      height: "53.245",
      viewBox: "0 0 88.295 53.245"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      id: "Path_55",
      "data-name": "Path 55",
      class: "cls-1",
      d: "M594.485,126.2a19.85,19.85,0,0,0-1.136,39.667A27.876,27.876,0,0,1,585.7,179.44c10.963,0,28.639-14.951,28.639-33.395A19.851,19.851,0,0,0,594.485,126.2Z",
      transform: "translate(-526.041 -126.195)"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      id: "Path_56",
      "data-name": "Path 56",
      class: "cls-1",
      d: "M527.434,126.2a19.85,19.85,0,0,0-1.136,39.667,27.876,27.876,0,0,1-7.652,13.578c10.964,0,28.639-14.951,28.639-33.395A19.851,19.851,0,0,0,527.434,126.2Z",
      transform: "translate(-507.583 -126.195)"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bly-testimonial-text"
    }, style_type == 'style_two' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "bly-testiominal-image-wrap-upper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "quotes-upper",
      xmlns: "http://www.w3.org/2000/svg",
      width: "50.366",
      height: "53.151",
      viewBox: "0 0 50.366 53.151"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Group_1",
      "data-name": "Group 1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      id: "Path_2",
      "data-name": "Path 2",
      d: "M86.684,85.914,95.053,65.67a7.979,7.979,0,0,0-10.26,4.465l-2.3,5.714a55.944,55.944,0,0,0-4.057,20.916V103.2a8.216,8.216,0,0,0,8.216,8.216h7.358a5.027,5.027,0,0,0,5.027-5.027V85.914Z",
      transform: "translate(-78.433 -65.138)",
      fill: "#537cfa"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      id: "Path_3",
      "data-name": "Path 3",
      d: "M137.653,97.676l8.369-20.244a7.978,7.978,0,0,0-10.26,4.466l-2.3,5.714a55.953,55.953,0,0,0-4.056,20.916v6.438a8.215,8.215,0,0,0,8.216,8.216h7.357A5.027,5.027,0,0,0,150,118.154V97.676Z",
      transform: "translate(-99.636 -70.031)",
      fill: "#537cfa"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "div",
      className: "testimonial-content",
      style: {
        textAlign: testimonialAlignment
      },
      value: testimonialContent
    }), style_type == 'style_two' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "bly-testiominal-image-wrap-lower"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      id: "quotes-lower",
      xmlns: "http://www.w3.org/2000/svg",
      width: "50.366",
      height: "53.151",
      viewBox: "0 0 50.366 53.151"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Group_3",
      "data-name": "Group 3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      id: "Path_4",
      "data-name": "Path 4",
      d: "M988.614,481.9l-8.369-20.244a7.978,7.978,0,0,1,10.26,4.465l2.3,5.714a55.946,55.946,0,0,1,4.057,20.917v6.438a8.216,8.216,0,0,1-8.216,8.216h-7.357a5.027,5.027,0,0,1-5.028-5.028V481.9Z",
      transform: "translate(-946.498 -461.124)",
      fill: "#537cfa"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      id: "Path_5",
      "data-name": "Path 5",
      d: "M937.645,493.663l-8.369-20.245a7.978,7.978,0,0,1,10.26,4.466l2.3,5.714a55.957,55.957,0,0,1,4.057,20.917v6.438a8.216,8.216,0,0,1-8.216,8.216h-7.357a5.028,5.028,0,0,1-5.028-5.028V493.663Z",
      transform: "translate(-925.295 -466.017)",
      fill: "#537cfa"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bly-testimonial-info"
    }, testimonialImgURL && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bly-testimonial-avatar-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bly-testimonial-image-wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "bly-testimonial-avatar",
      src: testimonialImgURL,
      alt: "avatar"
    }))), testimonialName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h2",
      className: "bly-testimonial-name",
      style: {
        color: testimonialTextColor ? testimonialTextColor : '#32373c'
      },
      value: testimonialName
    }), testimonialTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "small",
      className: "bly-testimonial-title",
      style: {
        color: testimonialTextColor ? testimonialTextColor : '#32373c'
      },
      value: testimonialTitle
    })));
  }

}

/***/ }),

/***/ "./src/blocks/testimonial/components/testimonial.js":
/*!**********************************************************!*\
  !*** ./src/blocks/testimonial/components/testimonial.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Testimonial; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Testimonial Block Wrapper
 */
// Setup the block
 // Import block dependencies and components


/**
 * Create a Testimonial wrapper Component
 */

class Testimonial extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    // Setup the attributes
    const {
      attributes: {
        testimonialImgURL,
        testimonialBackgroundColor,
        testimonialTextColor,
        testimonialFontSize,
        testimonialCiteAlign,
        style_type
      }
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        background: testimonialBackgroundColor ? testimonialBackgroundColor : '#f2f2f2',
        color: testimonialTextColor ? testimonialTextColor : '#32373c'
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(this.props.className, testimonialCiteAlign, {
        'bly-has-avatar': testimonialImgURL
      }, 'bly-font-size-' + testimonialFontSize, 'bly-block-testimonial', style_type == 'style_one' && 'style_one', style_type == 'style_two' && 'style_two')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('blockly-testimonial-wrap')
    }, this.props.children));
  }

}

/***/ }),

/***/ "./src/blocks/testimonial/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/testimonial/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/edit */ "./src/blocks/testimonial/components/edit.js");
/* harmony import */ var _components_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save */ "./src/blocks/testimonial/components/save.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/blocks/testimonial/styles/editor.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/testimonial/styles/style.scss");


/**
 * BLOCK: Testimonial
 */
//wordpress dependencies

 //internal dependencies




 // Register the block testimonial

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('blockly/testimonial', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Testimonial', 'blockly'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a user testimonial with a name and title.', 'blockly'),
  icon: {
    src: 'testimonial',
    background: '#cce5ff',
    foreground: '#004085'
  },
  category: 'blockly',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('testimonial', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('quote', 'blockly'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('blockly', 'blockly')],
  example: {
    attributes: {
      testimonialContent: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'blockly'),
      testimonialName: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Russell Hawlader', 'blockly'),
      testimonialTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ARNTECH Founder & CEO', 'blockly')
    }
  },
  attributes: {
    style_type: {
      type: 'string',
      default: 'style_one'
    },
    testimonialName: {
      type: 'array',
      selector: '.bly-testimonial-name',
      source: 'children'
    },
    testimonialTitle: {
      type: 'array',
      selector: '.bly-testimonial-title',
      source: 'children'
    },
    testimonialContent: {
      type: 'array',
      selector: '.testimonial-content',
      source: 'children'
    },
    testimonialAlignment: {
      type: 'string'
    },
    testimonialImgURL: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: 'img'
    },
    testimonialImgID: {
      type: 'number'
    },
    testimonialBackgroundColor: {
      type: 'string',
      default: '#f2f2f2'
    },
    testimonialTextColor: {
      type: 'string',
      default: '#32373c'
    },
    testimonialFontSize: {
      type: 'number',
      default: 18
    },
    testimonialCiteAlign: {
      type: 'string',
      default: 'left-aligned'
    }
  },
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_edit__WEBPACK_IMPORTED_MODULE_3__.default, props);
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_save__WEBPACK_IMPORTED_MODULE_4__.default, props);
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_global_styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/global-styles/index.js */ "./src/blocks/global-styles/index.js");
/* harmony import */ var _utils_extensions_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/extensions/typography */ "./src/utils/extensions/typography/index.js");
/* harmony import */ var _blocks_testimonial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/testimonial */ "./src/blocks/testimonial/index.js");
/* harmony import */ var _blocks_author_profile_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/author-profile-box */ "./src/blocks/author-profile-box/index.js");
/* harmony import */ var _blocks_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/alert */ "./src/blocks/alert/index.js");
/* harmony import */ var _blocks_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/button */ "./src/blocks/button/index.js");
/* harmony import */ var _blocks_highlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/highlight */ "./src/blocks/highlight/index.js");
/* harmony import */ var _blocks_quote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/quote */ "./src/blocks/quote/index.js");
/* harmony import */ var _blocks_pricing_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/pricing-table */ "./src/blocks/pricing-table/index.js");
/* harmony import */ var _blocks_pricing_table_inner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/pricing-table-inner */ "./src/blocks/pricing-table-inner/index.js");
/* harmony import */ var _blocks_pricing_table_inner_components_title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/pricing-table-inner/components/title */ "./src/blocks/pricing-table-inner/components/title/index.js");
/* harmony import */ var _blocks_pricing_table_inner_components_subtitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/pricing-table-inner/components/subtitle */ "./src/blocks/pricing-table-inner/components/subtitle/index.js");
/* harmony import */ var _blocks_pricing_table_inner_components_subtitle2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/pricing-table-inner/components/subtitle2 */ "./src/blocks/pricing-table-inner/components/subtitle2/index.js");
/* harmony import */ var _blocks_pricing_table_inner_components_price__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/pricing-table-inner/components/price */ "./src/blocks/pricing-table-inner/components/price/index.js");
/* harmony import */ var _blocks_pricing_table_inner_components_features__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/pricing-table-inner/components/features */ "./src/blocks/pricing-table-inner/components/features/index.js");
/* harmony import */ var _blocks_pricing_table_inner_components_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/pricing-table-inner/components/button */ "./src/blocks/pricing-table-inner/components/button/index.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */
//Global styles.

 //All block components include






 //pricing table





 // import './blocks/pricing-table-inner/components/image';





/***/ }),

/***/ "./src/utils/components/font-family/fonts.js":
/*!***************************************************!*\
  !*** ./src/utils/components/font-family/fonts.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Google Fonts for the FontFamily component.
 */
const fonts = {
  'Abril Fatface': {
    weight: ['400']
  },
  Anton: {
    weight: ['400']
  },
  Arvo: {
    weight: ['400', '700']
  },
  Asap: {
    weight: ['400', '500', '600', '700']
  },
  'Barlow Condensed': {
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  Barlow: {
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  'Cormorant Garamond': {
    weight: ['300', '400', '500', '600', '700']
  },
  Faustina: {
    weight: ['400', '500', '600', '700']
  },
  'Fira Sans': {
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  'IBM Plex Sans': {
    weight: ['100', '200', '300', '400', '500', '600', '700']
  },
  Inconsolata: {
    weight: ['400', '700']
  },
  Heebo: {
    weight: ['100', '300', '400', '500', '700', '800', '900']
  },
  Karla: {
    weight: ['400', '700']
  },
  Lato: {
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  Lora: {
    weight: ['400', '700']
  },
  Merriweather: {
    weight: ['300', '400', '500', '600', '700', '800', '900']
  },
  Montserrat: {
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  },
  'Noto Sans': {
    weight: ['400', '700']
  },
  'Noto Serif': {
    weight: ['400', '700']
  },
  'Open Sans': {
    weight: ['300', '400', '500', '600', '700', '800']
  },
  Oswald: {
    weight: ['200', '300', '400', '500', '600', '700']
  },
  'Playfair Display': {
    weight: ['400', '700', '900']
  },
  'PT Serif': {
    weight: ['400', '700']
  },
  Roboto: {
    weight: ['100', '300', '400', '500', '700', '900']
  },
  Rubik: {
    weight: ['300', '400', '500', '700', '900']
  },
  Tajawal: {
    weight: ['200', '300', '400', '500', '700', '800', '900']
  },
  Ubuntu: {
    weight: ['300', '400', '500', '700']
  },
  Yrsa: {
    weight: ['300', '400', '500', '600', '700']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (fonts);

/***/ }),

/***/ "./src/utils/components/font-family/index.js":
/*!***************************************************!*\
  !*** ./src/utils/components/font-family/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts */ "./src/utils/components/font-family/fonts.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);



/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */





function FontFamilyPicker({
  label,
  value,
  help,
  instanceId,
  onChange,
  className,
  ...props
}) {
  const id = `inspector-blockly-font-family-${instanceId}`;
  const systemFonts = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Default', 'blyolck')
  }, {
    value: 'Arial',
    label: 'Arial'
  }, {
    value: 'Helvetica',
    label: 'Helvetica'
  }, {
    value: 'Times New Roman',
    label: 'Times New Roman'
  }, {
    value: 'Georgia',
    label: 'Georgia'
  }];
  let fonts = []; // Add Google Fonts

  Object.keys(_fonts__WEBPACK_IMPORTED_MODULE_2__.default).forEach(k => {
    fonts.push({
      value: k,
      label: k
    });
  });
  systemFonts.reverse().forEach(font => {
    fonts.unshift(font);
  });
  /**
   * Filter the available list of Google fonts
   *
   * @type {Array}
   */

  fonts = wp.hooks.applyFilters('blockly.google_fonts', fonts);

  const onChangeValue = event => {
    const meta = wp.data.select('core/editor').getEditedPostAttribute('meta');
    let ba = '';
    const googleFontsAttr = ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';
    const link = document.createElement('link');
    const isSystemFont = systemFonts.filter(function (font) {
      return font.label === event.target.value;
    }).length > 0;
    link.rel = 'stylesheet';

    if (typeof meta !== 'undefined' && typeof meta._blockly_fonts_attr !== 'undefined') {
      ba = meta._blockly_fonts_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value) && !isSystemFont) {
        link.href = 'https://fonts.googleapis.com/css?family=' + event.target.value.replace(/ /g, '+') + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace(',' + event.target.value, '');
      ba = ba + ',' + event.target.value;
    } else {
      link.href = 'https://fonts.googleapis.com/css?family=' + event.target.value.replace(/ /g, '+') + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch('core/editor').editPost({
      meta: {
        _blockly_fonts_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("select", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    id: id,
    className: "components-select-control__input components-select-control__input--blockly-fontfamily",
    onChange: onChangeValue,
    "aria-describedby": !!help ? `${id}__help` : undefined,
    value: value
  }, props), fonts.map((option, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("option", {
    key: `${option.label}-${option.value}-${index}`,
    value: option.value
  }, option.label))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.withInstanceId)(FontFamilyPicker));

/***/ }),

/***/ "./src/utils/components/fontsize-picker/index.js":
/*!*******************************************************!*\
  !*** ./src/utils/components/fontsize-picker/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLYblockFontSizePicker": function() { return /* binding */ BLYblockFontSizePicker; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * BLYblockFontSizePicker is a functional component to interface `withFontSizes` hoc to FontSizePicker controls.
 * @param {Object} props Accepts block props provided by `withFontSizes`.
 */

const BLYblockFontSizePicker = props => {
  const {
    fallbackFontSize,
    fontSize,
    setFontSize
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.FontSizePicker, {
    fallbackFontSize: fallbackFontSize,
    value: fontSize.size,
    onChange: value => {
      const fontSizeValue = value ? parseInt(value, 10) : undefined;

      if (!Number.isNaN(fontSizeValue)) {
        setFontSize(fontSizeValue);
      }
    }
  });
};

/***/ }),

/***/ "./src/utils/components/icons/index.js":
/*!*********************************************!*\
  !*** ./src/utils/components/icons/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.upload = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "32px",
  height: "32px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"
}));
icons.facebook = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20px",
  height: "20px",
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fab",
  "data-icon": "facebook-f",
  class: "svg-inline--fa fa-facebook-f fa-w-10",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 320 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
}));
icons.twitter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20px",
  height: "20px",
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fab",
  "data-icon": "twitter",
  class: "svg-inline--fa fa-twitter fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
}));
icons.github = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20px",
  height: "20px",
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fab",
  "data-icon": "github",
  class: "svg-inline--fa fa-github fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 496 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
}));
icons.linkedin = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20px",
  height: "20px",
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fab",
  "data-icon": "linkedin-in",
  class: "svg-inline--fa fa-linkedin-in fa-w-14",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
}));
icons.youtube = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20px",
  height: "20px",
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fab",
  "data-icon": "youtube",
  class: "svg-inline--fa fa-youtube fa-w-18",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
}));
icons.website = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20px",
  height: "20px",
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "globe-americas",
  class: "svg-inline--fa fa-globe-americas fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 496 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/utils/components/padding.js":
/*!*****************************************!*\
  !*** ./src/utils/components/padding.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Padding; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




function Padding(props) {
  const {
    // Padding props
    padding,
    paddingTitle,
    paddingHelp,
    paddingMin,
    paddingMax,
    paddingEnable,
    onChangePadding = () => {},
    // Padding top props
    paddingTop,
    paddingTopMin,
    paddingTopMax,
    paddingEnableTop,
    onChangePaddingTop = () => {},
    // Padding right props
    paddingRight,
    paddingRightMin,
    paddingRightMax,
    paddingEnableRight,
    onChangePaddingRight = () => {},
    // Padding bottom props
    paddingBottom,
    paddingBottomMin,
    paddingBottomMax,
    paddingEnableBottom,
    onChangePaddingBottom = () => {},
    // Padding left props
    paddingLeft,
    paddingLeftMin,
    paddingLeftMax,
    paddingEnableLeft,
    onChangePaddingLeft = () => {},
    // Padding vertical props
    paddingVertical,
    paddingEnableVertical,
    paddingVerticalMin,
    paddingVerticalMax,
    onChangePaddingVertical = () => {},
    // Padding horizontal props
    paddingHorizontal,
    paddingEnableHorizontal,
    paddingHorizontalMin,
    paddingHorizontalMax,
    onChangePaddingHorizontal = () => {}
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, paddingEnable && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: paddingTitle ? paddingTitle : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'blockly'),
    help: paddingHelp ? paddingHelp : null,
    value: padding,
    min: paddingMin,
    max: paddingMax,
    onChange: onChangePadding
  }), paddingEnableTop && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Top', 'blockly'),
    value: paddingTop,
    min: paddingTopMin,
    max: paddingTopMax,
    onChange: onChangePaddingTop
  }), paddingEnableRight && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Right', 'blockly'),
    value: paddingRight,
    min: paddingRightMin,
    max: paddingRightMax,
    onChange: onChangePaddingRight
  }), paddingEnableBottom && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Bottom', 'blockly'),
    value: paddingBottom,
    min: paddingBottomMin,
    max: paddingBottomMax,
    onChange: onChangePaddingBottom
  }), paddingEnableLeft && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Left', 'blockly'),
    value: paddingLeft,
    min: paddingLeftMin,
    max: paddingLeftMax,
    onChange: onChangePaddingLeft
  }), paddingEnableVertical && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Vertical', 'blockly'),
    value: paddingVertical,
    min: paddingVerticalMin,
    max: paddingVerticalMax,
    onChange: onChangePaddingVertical
  }), paddingEnableHorizontal && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Horizontal', 'blockly'),
    value: paddingHorizontal,
    min: paddingHorizontalMin,
    max: paddingHorizontalMax,
    onChange: onChangePaddingHorizontal
  }));
}

/***/ }),

/***/ "./src/utils/components/typography-controls/attributes.js":
/*!****************************************************************!*\
  !*** ./src/utils/components/typography-controls/attributes.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Set the attributes for the text panel
 *
 * @type {Object}
 */
const TypographyAttributes = {
  fontSize: {
    type: 'string'
  },
  customFontSize: {
    type: 'number'
  },
  fontFamily: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  customTextColor: {
    type: 'string'
  },
  lineHeight: {
    type: 'number'
  },
  letterSpacing: {
    type: 'number'
  },
  fontWeight: {
    type: 'string',
    default: ''
  },
  textTransform: {
    type: 'string',
    default: ''
  },
  noBottomSpacing: {
    type: 'boolean',
    default: false
  },
  noTopSpacing: {
    type: 'boolean',
    default: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TypographyAttributes);

/***/ }),

/***/ "./src/utils/components/typography-controls/classes.js":
/*!*************************************************************!*\
  !*** ./src/utils/components/typography-controls/classes.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Set inline CSS classes.
 *
 * @param {Object} props The passed props.
 * @return {Array} The classes.
 */
function TypograpyClasses(props) {
  return [{
    'has-text-color': props.attributes.textColor || props.attributes.customTextColor
  }];
}

/* harmony default export */ __webpack_exports__["default"] = (TypograpyClasses);

/***/ }),

/***/ "./src/utils/components/typography-controls/icons.js":
/*!***********************************************************!*\
  !*** ./src/utils/components/typography-controls/icons.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const icons = {};
icons.typography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  height: "20",
  viewBox: "0 0 20 20",
  width: "20",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.G, {
  fill: "currentColor",
  fillRule: "nonzero"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m3 16v2h14v-2z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m9.11555556 2-4.88888889 12.4444444h2l.99555555-2.6666666h5.55555558l.9955555 2.6666666h2l-4.88-12.4444444zm-1.22666667 8 2.11555551-5.62666667 2.1155556 5.62666667z"
})));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/utils/components/typography-controls/index.js":
/*!***********************************************************!*\
  !*** ./src/utils/components/typography-controls/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyAttributes": function() { return /* reexport safe */ _attributes__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "TypograpyClasses": function() { return /* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "TypographyTransforms": function() { return /* reexport safe */ _transforms__WEBPACK_IMPORTED_MODULE_10__.default; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_font_family_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/font-family/fonts */ "./src/utils/components/font-family/fonts.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributes */ "./src/utils/components/typography-controls/attributes.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes */ "./src/utils/components/typography-controls/classes.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transforms */ "./src/utils/components/typography-controls/transforms.js");
/* harmony import */ var _components_font_family_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../components/font-family/index */ "./src/utils/components/font-family/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons */ "./src/utils/components/typography-controls/icons.js");

//WordPress dependencies





 //External dependencies

 //Internal dependencies







/**
 * Export
 */


/**
 * Fallback styles
 */

const {
  getComputedStyle
} = window;
const applyFallbackStyles = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withFallbackStyles)((node, ownProps) => {
  const {
    textColor,
    fontSize,
    customFontSize
  } = ownProps.attributes;
  const editableNode = node.querySelector('[contenteditable="true"]'); //verify if editableNode is available, before using getComputedStyle.

  const computedStyles = editableNode ? getComputedStyle(editableNode) : undefined;
  return {
    fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color,
    fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined
  };
});
const allowedBlocks = ['core/paragraph', 'core/heading', 'core/button', 'core/list', 'blockly/highlight'];
/**
 * Typography Component
 */

class TypographyControls extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes,
      setAttributes,
      icon = _icons__WEBPACK_IMPORTED_MODULE_12__.default.typography,
      label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change typography', 'blockly')
    } = this.props; // Show line height on appropriate blocks.

    if (!allowedBlocks.includes(this.props.name)) {
      return null;
    }

    const {
      customFontSize,
      fontFamily,
      lineHeight,
      letterSpacing,
      noBottomSpacing,
      noTopSpacing,
      fontWeight,
      textTransform
    } = attributes;
    const weight = [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'blockly')
    }, {
      value: 'normal',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'blockly')
    }, {
      value: 'bold',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bold', 'blockly')
    }];
    const transform = [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'blockly')
    }, {
      value: 'uppercase',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Uppercase', 'blockly')
    }, {
      value: 'lowercase',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lowercase', 'blockly')
    }, {
      value: 'capitalize',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Capitalize', 'blockly')
    }, {
      value: 'initial',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'blockly')
    }];

    if (typeof _components_font_family_fonts__WEBPACK_IMPORTED_MODULE_7__.default[fontFamily] !== 'undefined' && typeof _components_font_family_fonts__WEBPACK_IMPORTED_MODULE_7__.default[fontFamily].weight !== 'undefined') {
      _components_font_family_fonts__WEBPACK_IMPORTED_MODULE_7__.default[fontFamily].weight.forEach(k => {
        weight.push({
          value: k,
          label: k
        });
      });
    }

    const onFontChange = value => {
      setAttributes({
        fontFamily: value
      });

      if (typeof _components_font_family_fonts__WEBPACK_IMPORTED_MODULE_7__.default[value] !== 'undefined' && typeof _components_font_family_fonts__WEBPACK_IMPORTED_MODULE_7__.default[value].weight !== 'undefined') {
        if (fontWeight && Object.values(_components_font_family_fonts__WEBPACK_IMPORTED_MODULE_7__.default[fontFamily].weight).indexOf(fontWeight) < 0) {
          setAttributes({
            fontWeight: undefined
          });
        }
      }
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('components-dropdown-menu', 'components-blockly-typography-dropdown'),
      contentClassName: "components-dropdown-menu__popover components-blockly-typography-dropdown",
      renderToggle: ({
        isOpen,
        onToggle
      }) => {
        const openOnArrowDown = event => {
          if (!isOpen && event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__.DOWN) {
            event.preventDefault();
            event.stopPropagation();
            onToggle();
          }
        };

        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
          className: "components-dropdown-menu__toggle",
          icon: icon,
          onClick: onToggle,
          onKeyDown: openOnArrowDown,
          "aria-haspopup": "true",
          "aria-expanded": isOpen,
          label: label,
          tooltip: label
        });
      },
      renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-blockly-typography-dropdown__inner"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_font_family_index__WEBPACK_IMPORTED_MODULE_11__.default, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font', 'blockly'),
        value: fontFamily,
        onChange: nextFontFamily => onFontChange(nextFontFamily),
        className: "components-base-control--with-flex components-blockly-typography-dropdown__inner--font"
      }), typeof attributes.textPanelFontWeight === 'undefined' || typeof attributes.textPanelFontWeight !== 'undefined' && typeof attributes.textPanelFontWeight === 'undefined' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Weight', 'blockly'),
        value: fontWeight,
        options: weight,
        onChange: nextFontWeight => setAttributes({
          fontWeight: nextFontWeight
        }),
        className: "components-base-control--with-flex components-blockly-typography-dropdown__inner--weight"
      }) : null, typeof attributes.textPanelTextTransform === 'undefined' || typeof attributes.textPanelTextTransform !== 'undefined' && typeof attributes.textPanelTextTransform === 'undefined' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Transform', 'blockly'),
        value: textTransform,
        options: transform,
        onChange: nextTextTransform => setAttributes({
          textTransform: nextTextTransform
        }),
        className: "components-base-control--with-flex components-blockly-typography-dropdown__inner--transform"
      }) : null, typeof attributes.textPanelHideSize === 'undefined' || typeof attributes.textPanelHideSize !== 'undefined' && typeof attributes.textPanelHideSize === 'undefined' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size', 'blockly'),
        value: parseFloat(customFontSize) || undefined,
        onChange: nextFontSize => setAttributes({
          customFontSize: nextFontSize
        }),
        min: 1,
        max: 100,
        step: 1,
        className: "components-blockly-typography-dropdown__inner--size"
      }) : null, typeof attributes.textPanelLineHeight === 'undefined' || typeof attributes.textPanelLineHeight !== 'undefined' && typeof attributes.textPanelLineHeight === 'undefined' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line height', 'blockly'),
        value: parseFloat(lineHeight) || undefined,
        onChange: nextLineHeight => setAttributes({
          lineHeight: nextLineHeight
        }),
        min: 1,
        max: 3,
        step: .01,
        className: "components-blockly-typography-dropdown__inner--line-height"
      }) : null, typeof attributes.textPanelLetterSpacing === 'undefined' || typeof attributes.textPanelLetterSpacing !== 'undefined' && typeof attributes.textPanelLetterSpacing === 'undefined' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter spacing', 'blockly'),
        value: parseFloat(letterSpacing) || undefined,
        onChange: nextLetterSpacing => setAttributes({
          letterSpacing: nextLetterSpacing
        }),
        min: -1,
        max: 3,
        step: .1,
        className: "components-blockly-typography-dropdown__inner--letter-spacing"
      }) : null, typeof attributes.textPanelShowSpacingControls !== 'undefined' && attributes.textPanelShowSpacingControls && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "components-blockly-typography-dropdown__footer"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No top spacing', 'blockly'),
        checked: !!noTopSpacing,
        onChange: () => setAttributes({
          noTopSpacing: !noTopSpacing
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No bottom spacing', 'blockly'),
        checked: !!noBottomSpacing,
        onChange: () => setAttributes({
          noBottomSpacing: !noBottomSpacing
        })
      }))))
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([applyFallbackStyles])(TypographyControls));

/***/ }),

/***/ "./src/utils/components/typography-controls/transforms.js":
/*!****************************************************************!*\
  !*** ./src/utils/components/typography-controls/transforms.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Set the attributes for the Text Panel transformations.
 *
 * @param {Object} props The passed props.
 * @return {Object} The transforms.
 */
function TypographyTransforms(props) {
  const transforms = {
    fontSize: props.fontSize,
    customFontSize: props.customFontSize,
    fontFamily: props.fontFamily,
    lineHeight: props.lineHeight,
    letterSpacing: props.letterSpacing,
    textColor: props.textColor,
    fontWeight: props.fontWeight,
    textTransform: props.textTransform,
    customTextColor: props.customTextColor
  };
  return transforms;
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyTransforms);

/***/ }),

/***/ "./src/utils/extensions/typography/apply-style.js":
/*!********************************************************!*\
  !*** ./src/utils/extensions/typography/apply-style.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//Internal dependencies
 //External dependencies


const styleAttributes = ['fontFamily', 'lineHeight', 'letterSpacing', 'fontWeight', 'textTransform'];

function applyStyle(attributes, name) {
  const style = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pickBy)(attributes, (value, key) => !!value && styleAttributes.includes(key));

  if (typeof attributes.customFontSize !== 'undefined') {
    style.fontSize = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_0__.computeFontSize)(attributes.customFontSize);
  }

  if (typeof attributes.customTextColor !== 'undefined') {
    style.color = attributes.customTextColor;
  }

  return style;
}

/* harmony default export */ __webpack_exports__["default"] = (applyStyle);

/***/ }),

/***/ "./src/utils/extensions/typography/controls.js":
/*!*****************************************************!*\
  !*** ./src/utils/extensions/typography/controls.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_typography_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/typography-controls */ "./src/utils/components/typography-controls/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

//Internal dependencies
 //WordPress dependencies




class Controls extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      name,
      attributes
    } = this.props;
    let hideToolbar = false;

    if (!hideToolbar) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_typography_controls__WEBPACK_IMPORTED_MODULE_1__.default, this.props));
    }

    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./src/utils/extensions/typography/index.js":
/*!**************************************************!*\
  !*** ./src/utils/extensions/typography/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deprecateTypographyControls": function() { return /* binding */ deprecateTypographyControls; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/utils/extensions/typography/controls.js");
/* harmony import */ var _apply_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apply-style */ "./src/utils/extensions/typography/apply-style.js");
/* harmony import */ var _components_typography_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/typography-controls */ "./src/utils/components/typography-controls/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);


//WordPress Dependencies



 //Internal Dependencies



 //External Dependencies


const allowedBlocks = ['core/paragraph', 'core/heading', 'core/cover', 'core/button', 'core/list'];
const deprecatedBlocks = ['blockly/alert-blox'];
/**
 * Compares against list of blocks with deprecated typography controls and prepares
 * attributes for deprecation when needed.
 *
 * Does not modify settings for registered block - Will only modify attributes
 * used within the deprecated function.
 *
 * @param {Object} attributes Original registered block attributes.
 * @return {Object} Block attributes filtered for deprecation .
 */

function deprecateTypographyControls(attributes) {
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'blockly/inspector/attributes', settings => {
    if (deprecatedBlocks.includes(settings.name)) {
      attributes = Object.assign(attributes, _components_typography_controls__WEBPACK_IMPORTED_MODULE_7__.TypographyAttributes);
    }

    return settings;
  });
  return attributes;
}
/**
 * Filters registered block settings, extending attributes with settings
 *
 * @param {Object} settings Original block settings.
 * @return {Object} Filtered block settings.
 */

function addAttributes(settings) {
  // Use Lodash's assign to gracefully handle if attributes are undefined
  if (allowedBlocks.includes(settings.name)) {
    settings.attributes = Object.assign(settings.attributes, _components_typography_controls__WEBPACK_IMPORTED_MODULE_7__.TypographyAttributes);
  }

  return settings;
}
/**
 * Override the default edit UI to include a new block toolbar control
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */


const withControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), props.isSelected && allowedBlocks.includes(props.name) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_controls__WEBPACK_IMPORTED_MODULE_5__.default, props));
  };
}, 'withControls');
/**
 * Override the default block element to add	wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */

const enhance = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)(
/**
 * For blocks whose block type doesn't support `multiple`, provides the
 * wrapped component with `originalBlockClientId` -- a reference to the
 * first block of the same type in the content -- if and only if that
 * "original" block is not the current one. Thus, an inexisting
 * `originalBlockClientId` prop signals that the block is valid.
 *
 * @param {Function} WrappedBlockEdit A filtered BlockEdit instance.
 *
 * @return {Function} Enhanced component with merged state data props.
 */
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  return {
    selected: select('core/block-editor').getSelectedBlock(),
    select
  };
}));
const withFontSettings = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.createHigherOrderComponent)(BlockListBlock => {
  return enhance(({
    select,
    ...props
  }) => {
    let wrapperProps = props.wrapperProps;
    let customData = {};
    const block = select('core/block-editor').getBlock(props.clientId);
    const blockName = select('core/block-editor').getBlockName(props.clientId);

    if (allowedBlocks.includes(blockName) && block !== null && block !== void 0 && block.attributes) {
      const {
        customFontSize,
        fontFamily,
        lineHeight,
        fontWeight,
        letterSpacing,
        textTransform,
        customTextColor
      } = block.attributes;

      if (customFontSize) {
        customData = Object.assign(customData, {
          'data-custom-fontsize': 1
        });
      }

      if (lineHeight) {
        customData = Object.assign(customData, {
          'data-custom-lineheight': 1
        });
      }

      if (fontFamily) {
        customData = Object.assign(customData, {
          'data-blockly-font': 1
        });
      }

      if (fontWeight) {
        customData = Object.assign(customData, {
          'data-custom-fontweight': 1
        });
      }

      if (textTransform) {
        customData = Object.assign(customData, {
          'data-custom-texttransform': 1
        });
      }

      if (customTextColor) {
        customData = Object.assign(customData, {
          'data-custom-textcolor': 1
        });
      }

      if (letterSpacing) {
        customData = Object.assign(customData, {
          'data-custom-letterspacing': 1
        });
      }

      wrapperProps = { ...wrapperProps,
        style: (0,_apply_style__WEBPACK_IMPORTED_MODULE_6__.default)(block.attributes, blockName),
        ...customData
      };
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, props, {
      wrapperProps: wrapperProps
    }));
  });
}, 'withFontSettings');
/**
 * Override props assigned to save component to inject atttributes
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */

function applyFontSettings(extraProps, blockType, attributes) {
  if (allowedBlocks.includes(blockType.name) || deprecatedBlocks.includes(blockType.name)) {
    if (typeof extraProps.style !== 'undefined') {
      extraProps.style = Object.assign(extraProps.style, (0,_apply_style__WEBPACK_IMPORTED_MODULE_6__.default)(attributes, blockType.name));
    } else {
      extraProps.style = (0,_apply_style__WEBPACK_IMPORTED_MODULE_6__.default)(attributes, blockType.name);
    }

    const {
      fontFamily,
      lineHeight,
      fontWeight,
      letterSpacing,
      textTransform,
      noBottomSpacing,
      noTopSpacing
    } = attributes;

    if (fontFamily) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(extraProps.className, 'has-custom-font');
    }

    if (fontWeight) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(extraProps.className, 'has-custom-weight');
    }

    if (textTransform) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(extraProps.className, 'has-custom-transform');
    }

    if (lineHeight) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(extraProps.className, 'has-custom-lineheight');
    }

    if (letterSpacing) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(extraProps.className, 'has-custom-letterspacing');
    }

    if (typeof noBottomSpacing !== 'undefined' && noBottomSpacing) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(extraProps.className, 'mb-0 pb-0');
    }

    if (typeof noTopSpacing !== 'undefined' && noTopSpacing) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_8___default()(extraProps.className, 'mt-0 pt-0');
    }
  }

  return extraProps;
}

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'blockly/inspector/attributes', addAttributes);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'blockly/typography', withControls);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockListBlock', 'blockly/withFontSettings', withFontSettings);
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.getSaveContent.extraProps', 'blockly/applyFontSettings', applyFontSettings);

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeFontSize": function() { return /* binding */ computeFontSize; }
/* harmony export */ });
/**
 * computeFontSize will return numeric fontSize value with appropriate css string suffix
 * `em, px, or rem`.
 * @param {Object|string} fontSize Object passed from withFontSizes HOC props or fontsize value.
 * @return {string} fontSize string value that is ready for inline CSS.
 */
const computeFontSize = fontSize => {
  var _fontSize$size;

  const size = (_fontSize$size = fontSize === null || fontSize === void 0 ? void 0 : fontSize.size) !== null && _fontSize$size !== void 0 ? _fontSize$size : fontSize;
  return RegExp(/([a-z])/).test(size) ? size : size + 'px';
};

/***/ }),

/***/ "./src/utils/inspector/button.js":
/*!***************************************!*\
  !*** ./src/utils/inspector/button.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ButtonSettings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

//wordpress dependencies




function ButtonSettings(props) {
  const {
    enableButtonBackgroundColor,
    buttonBackgroundColor,
    onChangeButtonColor = () => {},
    enableButtonTextColor,
    buttonTextColor,
    onChangeButtonTextColor = () => {},
    enableButtonSize,
    buttonSize,
    onChangeButtonSize = () => {},
    enableButtonShape,
    buttonShape,
    onChangeButtonShape = () => {},
    enableButtonTarget,
    buttonTarget,
    onChangeButtonTarget = () => {}
  } = props; // Button size values

  const buttonSizeOptions = [{
    value: 'bly-button-size-small',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small', 'blockly')
  }, {
    value: 'bly-button-size-medium',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Medium', 'blockly')
  }, {
    value: 'bly-button-size-large',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Large', 'blockly')
  }, {
    value: 'bly-button-size-extralarge',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Extra Large', 'blockly')
  }]; // Button shape

  const buttonShapeOptions = [{
    value: 'bly-button-shape-square',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Square', 'blockly')
  }, {
    value: 'bly-button-shape-rounded',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rounded Square', 'blockly')
  }, {
    value: 'bly-button-shape-circular',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Circular', 'blockly')
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, false !== enableButtonTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open link in new window', 'blockly'),
    checked: buttonTarget,
    onChange: onChangeButtonTarget
  }), false !== enableButtonSize && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    selected: buttonSize,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Size', 'blockly'),
    value: buttonSize,
    options: buttonSizeOptions.map(({
      value,
      label
    }) => ({
      value,
      label
    })),
    onChange: onChangeButtonSize
  }), false !== enableButtonShape && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Shape', 'blockly'),
    value: buttonShape,
    options: buttonShapeOptions.map(({
      value,
      label
    }) => ({
      value,
      label
    })),
    onChange: onChangeButtonShape
  }), false !== enableButtonBackgroundColor && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Color', 'blockly'),
    initialOpen: false,
    colorSettings: [{
      value: buttonBackgroundColor,
      onChange: onChangeButtonColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Color', 'blockly')
    }]
  }), false !== enableButtonTextColor && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text Color', 'blockly'),
    initialOpen: false,
    colorSettings: [{
      value: buttonTextColor,
      onChange: onChangeButtonTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text Color', 'blockly')
    }]
  }));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/times.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/times.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.times(3, String);
 * // => ['0', '1', '2']
 *
 *  _.times(4, _.constant(0));
 * // => [0, 0, 0, 0]
 */
function times(n, iteratee) {
  n = toInteger(n);
  if (n < 1 || n > MAX_SAFE_INTEGER) {
    return [];
  }
  var index = MAX_ARRAY_LENGTH,
      length = nativeMin(n, MAX_ARRAY_LENGTH);

  iteratee = castFunction(iteratee);
  n -= MAX_ARRAY_LENGTH;

  var result = baseTimes(length, iteratee);
  while (++index < n) {
    iteratee(index);
  }
  return result;
}

module.exports = times;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/***/ (function(module) {

/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;


/***/ }),

/***/ "./src/blocks/alert/styles/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/alert/styles/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/alert/styles/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/alert/styles/style.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/author-profile-box/styles/editor.scss":
/*!**********************************************************!*\
  !*** ./src/blocks/author-profile-box/styles/editor.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/author-profile-box/styles/style.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/author-profile-box/styles/style.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/button/styles/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/button/styles/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/button/styles/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/button/styles/style.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/global-styles/styles/editor.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/global-styles/styles/editor.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/global-styles/styles/style.scss":
/*!****************************************************!*\
  !*** ./src/blocks/global-styles/styles/style.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/highlight/styles/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/highlight/styles/editor.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/highlight/styles/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/highlight/styles/style.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/pricing-table-inner/styles/editor.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/pricing-table-inner/styles/editor.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/pricing-table-inner/styles/style.scss":
/*!**********************************************************!*\
  !*** ./src/blocks/pricing-table-inner/styles/style.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/quote/styles/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/quote/styles/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/quote/styles/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/quote/styles/style.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/testimonial/styles/editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/testimonial/styles/editor.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/testimonial/styles/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/testimonial/styles/style.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkblockly"] = self["webpackChunkblockly"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".buttonComponent {\n  padding: 0.3rem 0.5rem;\n  margin: 10px;\n  border-radius: 3px;\n  transition: all 0.3s ease-out;\n  box-shadow: #272727 1px 1px 1px, #272727 -1px -1px 1px;\n  cursor: pointer;\n  font-family: sans-serif; }\n  .buttonComponent:hover {\n    box-shadow: #272727 3px 3px 6px, #272727 -1px -1px 3px; }\n  .buttonComponent.primary {\n    background-color: #0077ff; }\n  .buttonComponent.secondary {\n    background-color: #ff0062; }\n  .buttonComponent.success {\n    background-color: #07f126; }\n  .buttonComponent.default {\n    background-color: #949393; }\n";
styleInject(css_248z);

/*
 * Example button component.
 * This component renders button based on variant type
 */
var Varient;
(function (Varient) {
    Varient["Primary"] = "primary";
    Varient["Secondary"] = "secondary";
    Varient["Success"] = "success";
    Varient["Default"] = "default";
})(Varient || (Varient = {}));
var AwesomeButton = function (props) {
    var variant = props.variant, children = props.children;
    var _a = React.useState(Varient.Default), bgColor = _a[0], setBgColor = _a[1];
    React.useEffect(function () {
        if (variant) {
            if (variant === Varient.Primary) {
                setBgColor(Varient.Primary);
            }
            else if (variant === Varient.Secondary) {
                setBgColor(Varient.Secondary);
            }
            else if (variant === Varient.Success) {
                setBgColor(Varient.Success);
            }
            else {
                setBgColor(Varient.Default);
            }
        }
    }, [variant]);
    return React__default["default"].createElement("button", { className: "buttonComponent ".concat(bgColor) }, children);
};

exports.AwesomeButton = AwesomeButton;
//# sourceMappingURL=index.js.map

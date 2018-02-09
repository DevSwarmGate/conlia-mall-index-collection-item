"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _CustomElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        var _refreshRem = require('./_refreshRem');

        module.exports = function _connectedCallback(_this) {
            var _resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

            _refreshRem();
            _this._render();
            //set listener
            window.addEventListener(_resizeEvt, function () {
                _refreshRem();
            }, false);

            _this.addEventListener('click', function (e) {
                _this._onclick(e);
            }, false);
        };
    }, { "./_refreshRem": 2 }], 2: [function (require, module, exports) {
        module.exports = function _refreshRem() {
            /**
            * ================================================
            *   设置根元素font-size
            * 当设备宽度为375(iPhone6)时，根元素font-size=10px; 依次增大；
            * 当为设备宽度大于768(iPad)之后，font-size不再继续增大
            × ================================================
            */
            var _dpr = 0;
            var _scale = 0;
            var _metaEl = window.document.querySelector('meta[name="viewport"]');
            var _metaCtt = _metaEl ? _metaEl.content : '';
            var _matchScale = _metaCtt.match(/initial\-scale=([\d\.]+)/);
            var _docEl = window.document.documentElement;
            var _clientWidth = _docEl.clientWidth;
            var _fz = void 0;
            var _maxWidth = 1366;
            var _width = _clientWidth;
            if (_matchScale) {
                _scale = parseInt(_matchScale[1]);
                _dpr = parseInt(1 / _scale);
            }
            if (_clientWidth / _dpr > _maxWidth) {
                _width = _maxWidth * _dpr;
            }
            _fz = 10 * (_width / 375);
            _docEl.style.fontSize = _fz + 'px';
        };
    }, {}], 3: [function (require, module, exports) {
        module.exports = function _render(_this) {
            //set val
            _this._img.src = _this.getAttribute('img');
            _this._item_name.innerText = _this.getAttribute('item-name');

            if (_this.getAttribute('on-sale') == null || _this.getAttribute('on-sale') == '') {
                _this._on_sale_price.innerText = _this.getAttribute('price');
                _this._price.innerText = '';
            } else {
                _this._on_sale_price.innerText = _this.getAttribute('on-sale');
                _this._price.innerText = _this.getAttribute('price');
            }
        };
    }, {}], 4: [function (require, module, exports) {
        var Base = require('front-end-webcomponent-base');

        var _connectedCallback = require('./_connectedCallback'),
            _render2 = require('./_render');

        var Component = function (_Base) {
            _inherits(Component, _Base);

            function Component(name) {
                _classCallCheck(this, Component);

                var _this2 = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, name));

                _this2._img = _this2.shadowRoot.querySelector('#img');
                _this2._item_name = _this2.shadowRoot.querySelector('#item-name');
                _this2._on_sale_price = _this2.shadowRoot.querySelector('#on-sale-price');
                _this2._price = _this2.shadowRoot.querySelector('#price');

                _this2._onclick = function (e) {};
                return _this2;
            }

            _createClass(Component, [{
                key: "connectedCallback",


                //public
                value: function connectedCallback() {
                    _connectedCallback(this);
                }
            }, {
                key: "attributeChangedCallback",
                value: function attributeChangedCallback() {
                    _render2(this);
                }
                //private

            }, {
                key: "_render",
                value: function _render() {
                    _render2(this);
                }
            }, {
                key: "onClick",
                set: function set(cb) {
                    this._onclick = cb;
                }
            }], [{
                key: "observedAttributes",
                get: function get() {
                    return ['img', 'item-name', 'price', 'on-sale'];
                }
            }]);

            return Component;
        }(Base);

        ;

        new Component('conlia-mall-index-collection-item');
    }, { "./_connectedCallback": 1, "./_render": 3, "front-end-webcomponent-base": 5 }], 5: [function (require, module, exports) {
        var _init_v0 = require('./_init_v0'),
            _init_v1 = require('./_init_v1');

        module.exports = function () {
            function ComponentElement(component) {
                var _this3 = this;

                _classCallCheck(this, ComponentElement);

                this.__is_open_root__ = true;

                this.__name__ = typeof component === "string" ? component : component.__name__;

                this.__scriptOwner__ = typeof component === "string" ? (document._currentScript || document.currentScript).ownerDocument : component.__scriptOwner__;

                this.shadowRoot = typeof component === "string" ? document : component.shadowRoot;

                if (window.customElements && typeof component === "string") return window.addEventListener('WebComponentsReady', function () {
                    _init_v1(_this3);
                });

                if (document.registerElement && typeof component === "string") return _init_v0(this);
            }

            _createClass(ComponentElement, [{
                key: "connectedCallback",
                value: function connectedCallback() {
                    console.log('connectedCallback', this);
                }
            }, {
                key: "disconnectedCallback",
                value: function disconnectedCallback() {
                    console.log('disconnectedCallback', this);
                }
            }, {
                key: "attributeChangedCallback",
                value: function attributeChangedCallback(attrName, oldVal, newVal) {
                    console.log('attributeChangedCallback', this, attrName, oldVal, newVal);
                }
                //not support for now
                //adoptedCallback(){console.log('adoptedCallback');}

            }]);

            return ComponentElement;
        }();
    }, { "./_init_v0": 11, "./_init_v1": 12 }], 6: [function (require, module, exports) {
        module.exports = function _createShadowDom(wrapper, ele) {
            if (ele.createShadowRoot) return ele.createShadowRoot();

            if (ele.attachShadow) return ele.attachShadow({ mode: wrapper.__is_open_root__ ? 'open' : 'close' });
        };
    }, {}], 7: [function (require, module, exports) {
        module.exports = function _createTemplate(_this, scriptOwner) {
            if (!('content' in document.createElement('template'))) {
                return console.error('HTML template not working');
            }

            var template = scriptOwner.querySelector("template[id=" + _this.__name__ + "]"),
                clone = template.content.cloneNode(true);

            return clone;
        };
    }, {}], 8: [function (require, module, exports) {
        module.exports = function _inherit_method(wrapper, ele) {
            var method_names = Object.getOwnPropertyDescriptors(wrapper.__proto__);

            for (var i in method_names) {

                if (i !== 'constructor' && i !== 'observedAttributes') {
                    Object.defineProperty(ele.__proto__, i, method_names[i]);
                }
            }
        };
    }, {}], 9: [function (require, module, exports) {
        module.exports = function _inhert_observed_attributes(wrapper) {
            var _static = [];

            if (wrapper.constructor.observedAttributes !== undefined) {
                return wrapper.constructor.observedAttributes;
            } else {
                _static = Object.getOwnPropertyNames(wrapper.__proto__).filter(function (prop) {
                    return typeof wrapper.__proto__[prop] === 'function';
                });

                for (var i = 0; i < _static.length; i++) {
                    if (_static[i] === 'observedAttributes') return _static[i];
                }
            }

            return _static;
        };
    }, {}], 10: [function (require, module, exports) {
        module.exports = function _inhert_property(wrapper, ele) {
            //recreateion
            //create a shadow instance,get full initallized props
            var _new_wrapper = null;

            //shadowRoot enable
            wrapper.shadowRoot = ele.shadowRoot;
            _new_wrapper = new wrapper.__proto__.constructor(wrapper);
            _new_wrapper.shadowRoot = ele.shadowRoot;

            //inherit
            for (var propName in _new_wrapper) {
                Object.defineProperty(ele, propName, {
                    value: _new_wrapper[propName],
                    writable: true,
                    configurable: true
                });
            }

            //delete the shadow instance
            _new_wrapper = null;
        };
    }, {}], 11: [function (require, module, exports) {
        var _createShadowDom = require('./_createShadowDom'),
            _inherit_method = require('./_inherit_method'),
            _inherit_observed_attributes = require('./_inherit_observed_attributes'),
            _inherit_property = require('./_inherit_property'),
            _createTemplate = require('./_createTemplate');

        module.exports = function _init_v0(_this) {

            var proto = Object.create(HTMLElement.prototype);

            proto.createdCallback = function () {
                this.__template__ = _createTemplate(_this, _this.__scriptOwner__);
                //create dom
                _createShadowDom(_this, this).appendChild(this.__template__);
                //inherit props
                _inherit_property(_this, this);
                //inherit method
                _inherit_method(_this, this);
            };

            proto.attachedCallback = function () {
                _this.connectedCallback.call(this);
            };

            proto.detachedCallback = function () {
                _this.disconnectedCallback.call(this);
            };

            proto.attributeChangedCallback = function (attrName, oldVal, newVal) {
                _this.attributeChangedCallback.call(this, attrName, oldVal, newVal);
            };

            document.registerElement(_this.__name__, {
                observedAttributes: _inherit_observed_attributes(_this),
                prototype: proto
            });
        };
    }, { "./_createShadowDom": 6, "./_createTemplate": 7, "./_inherit_method": 8, "./_inherit_observed_attributes": 9, "./_inherit_property": 10 }], 12: [function (require, module, exports) {
        var _inherit_observed_attributes = require('./_inherit_observed_attributes'),
            _inherit_method = require('./_inherit_method'),
            _inherit_property = require('./_inherit_property'),
            _createShadowDom = require('./_createShadowDom'),
            _createTemplate = require('./_createTemplate');

        module.exports = function _init_v1(_this) {
            if (window.customElements.get(_this.__name__)) return;

            window.customElements.define(_this.__name__, function (_CustomElement2) {
                _inherits(_class, _CustomElement2);

                function _class() {
                    _classCallCheck(this, _class);

                    var _this4 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

                    _this4.__template__ = _createTemplate(_this, _this.__scriptOwner__);
                    //create dom
                    _createShadowDom(_this, _this4).appendChild(_this4.__template__);
                    //inherit props
                    _inherit_property(_this, _this4);
                    //inherit method
                    _inherit_method(_this, _this4);
                    return _this4;
                }

                _createClass(_class, [{
                    key: "connectedCallback",
                    value: function connectedCallback() {
                        _this.connectedCallback.call(this);
                    }
                }, {
                    key: "disconnectedCallback",
                    value: function disconnectedCallback() {
                        _this.disconnectedCallback.call(this);
                    }
                }, {
                    key: "attributeChangedCallback",
                    value: function attributeChangedCallback(attrName, oldVal, newVal) {
                        _this.attributeChangedCallback.call(this, attrName, oldVal, newVal);
                    }
                }], [{
                    key: "observedAttributes",
                    get: function get() {
                        return _inherit_observed_attributes(_this);
                    }
                }]);

                return _class;
            }(_CustomElement));
        };
    }, { "./_createShadowDom": 6, "./_createTemplate": 7, "./_inherit_method": 8, "./_inherit_observed_attributes": 9, "./_inherit_property": 10 }] }, {}, [4]);
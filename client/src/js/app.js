const Base = require('front-end-webcomponent-base');

const _connectedCallback = require('./_connectedCallback'),
	  _render = require('./_render')

class Component extends Base{
    constructor(name){
        super(name);
        this._debug = false;
        this._version = "v1.2";
        this._sku = this.shadowRoot.querySelector('#sku')
        this._img = this.shadowRoot.querySelector('#img');
        this._item_name = this.shadowRoot.querySelector('#item-name');
        this._on_sale_price = this.shadowRoot.querySelector('#on-sale-price');
        this._price = this.shadowRoot.querySelector('#price');
        
        this._onclick = (e)=>{};
    }
    static get observedAttributes(){return ['sku-id','img','item-name','price','on-sale'];}

    set debug(bool){this._debug = bool;}

    set onClick(cb){this._onclick = cb;}

    //public
    connectedCallback(){_connectedCallback(this);}
    attributeChangedCallback(){_render(this);}
    //private
    _render(){_render(this);}

};

new Component('conlia-mall-index-collection-item');
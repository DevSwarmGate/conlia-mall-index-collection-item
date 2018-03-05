module.exports = function _render(_this){	
	//set val
	_this._img.src = _this.getAttribute('img');
	_this._item_name.innerText = _this.getAttribute('item-name');

	if(_this.getAttribute('on-sale') == null || _this.getAttribute('on-sale') == ''){
		_this._on_sale_price.innerText = _this.getAttribute('price');
		_this._price.innerText = '';
	}
	else{
		_this._on_sale_price.innerText = _this.getAttribute('on-sale');
		_this._price.innerText = _this.getAttribute('price');
	}

	if(_this.getAttribute('sku-id') != null){
        _this._sku.setAttribute('value', _this.getAttribute('sku-id'))
    }

}
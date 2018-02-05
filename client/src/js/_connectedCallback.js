const _refreshRem = require('./_refreshRem');

module.exports = function _connectedCallback(_this){
	let _resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

	_refreshRem();
	_this._render();
	//set listener
	window.addEventListener(_resizeEvt,function(){
		_refreshRem();
	},false)

	_this.addEventListener('click', function(e){
		_this._onclick(e);
	},false)

}
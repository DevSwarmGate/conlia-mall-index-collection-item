module.exports = function _refreshRem(){
    /**
    * ================================================
    *   设置根元素font-size
    * 当设备宽度为375(iPhone6)时，根元素font-size=10px; 依次增大；
    * 当为设备宽度大于768(iPad)之后，font-size不再继续增大
    × ================================================
    */
    let _dpr = 0;
    let _scale = 0;
    let _metaEl = window.document.querySelector('meta[name="viewport"]');
    let _metaCtt = _metaEl ? _metaEl.content : '';
    let _matchScale = _metaCtt.match(/initial\-scale=([\d\.]+)/)
    let _docEl = window.document.documentElement;
    let _clientWidth = _docEl.clientWidth;
    let _fz;
    let _maxWidth = 1366;
    let _width = _clientWidth;
    if(_matchScale){
        _scale = parseInt(_matchScale[1])
        _dpr = parseInt(1 / _scale)
    }
    if(_clientWidth/_dpr > _maxWidth){
        _width = _maxWidth*_dpr;
    }
    _fz = 10 * (_width / 375);
    _docEl.style.fontSize = _fz + 'px';
}
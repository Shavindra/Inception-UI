; (function (window, document, _, CORE) {

    if (!CORE) {
        console.log('include the core module');
    } else {
        console.log('core module included');
    }

    var CORE = window.CORE || {};

    CORE.Register('Utils');


})(window, document, _, CORE)
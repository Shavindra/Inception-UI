; (function (window, document, _, CORE) {

    if (!CORE.Utils) {
        console.log('include the Utils module');
    } else {
        console.log('Utils module included');
    }

    CORE.Register('Utils.Data');

    var getData = function (options) {
        this.options = options;
        this.success = options.success,
        this.fail = '',
        this.done = ''

       return $.ajax({
            url: options.url,
            method: 'GET',
            dataType: options.dataType,
            success: options.success
        });
    }

    CORE.Utils.Data.get = function (options) {
        return new getData(options);
    }


})(window, document, _, CORE)
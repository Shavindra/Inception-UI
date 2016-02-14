﻿;
(function(window, document, _) {


    function Namespace(root, rootName) {

        function createNs(namespace) {
            var nsparts = namespace.split(".");
            var parent = root;

            // we want to be able to include or exclude the root namespace 
            // So we strip it if it's in the namespace
            if (nsparts[0] === rootName) {
                nsparts = nsparts.slice(1);
            }

            // loop through the parts and create 
            // a nested namespace if necessary
            for (var i = 0; i < nsparts.length; i++) {
                var partname = nsparts[i];
                // check if the current parent already has 
                // the namespace declared, if not create it
                if (typeof parent[partname] === "undefined") {
                    parent[partname] = {};
                }
                // get a reference to the deepest element 
                // in the hierarchy so far
                parent = parent[partname];
            }
            // the parent is now completely constructed 
            // with empty namespaces and can be used.
            return parent;
        }

        return createNs;
    }

    // create the root namespace and making sure we're not overwriting it
    var CORE = window.CORE || {};

    CORE.Register = new Namespace(CORE, 'CORE');

    CORE.Register('Widgets');

    CORE.Register('Components');

    window.CORE = CORE;

})(window, document, _);


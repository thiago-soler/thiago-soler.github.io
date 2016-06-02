/**
 * @depend ../../../../HOST.js
 */

'use strict';
// HOST/venda/modules/Metrics/Metrics.js - START
/* jshint unused: false */

( function ( namespace ) {
    /**
     * Cria um work space para trabalhar abaixo de um modulo Metrics
     *
     * @module Metrics
     * @namespace HOST.Metrics
     * @constructor
     *
     */
    function Metrics () {
        var $private = {};
        var $protected = this;
        var $public = $protected.constructor.prototype;
    }

    namespace.Metrics = (function () {
        return new Metrics();
    })();

    namespace.Metrics.fn = Metrics.prototype;

    return namespace.Metrics;
} )( HOST );
// HOST/venda/modules/Metrics/Metrics.js - END
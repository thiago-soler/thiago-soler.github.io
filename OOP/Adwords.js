/**
 * @depend ../Metrics.js
 */
'use strict';
/* jshint unused: false */

// HOST/venda/modules/Metrics/Classes/Adwords.js - START
( function ( namespace ) {
    /**
     * Classe que disponibiliza metodos para exibir o resumo de compra
     * que utilizam o box de compra no fluxo Metrics
     *
     * @module Metrics
     * @namespace HOST.Metrics
     * @class Adwords
     *
     */
    function Adwords () {
        var $protected = this;
        var $public = $protected.constructor.prototype;

        /**
         * Recupera as ofertas da tela
         * @method $public.config
         * @param {Object} [data] Objeto com os dados retornados pelo servico do venda
         * @namespace HOST.Metrics.Adwords
         * @return {Array} Listas de ofertas resgatados na pagina
         */
        $public.config = function ( data, skin, pageType ) {
            //Google Code for Smart Pixel
            //Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. For instructions on adding this tag and more information on the above requirements, read the setup guide: google.com/ads/remarketingsetup

          if ( data && data.hasOwnProperty('products') ) {
            var adws, noS, img, google_tag_params = {}, nameService = [], item;
            
            skin = skin || HOST.Utils.Browser.getParam('skin');
            pageType = pageType || HOST.Summary.Config.settings.pageType;

            for ( item in data.products ) {
              nameService.push(data.products[item].mainProduct.name);
            }
             /* <![CDATA[ */
            google_tag_params.pname = skin;
            google_tag_params.pageType = pageType;
            google_tag_params.pcat = nameService.toString();

            var google_conversion_id = 1056650882;
            var google_conversion_label = '3wSzCPbtzAIQgu3s9wM';
            var google_remarketing_only = true;
            var google_custom_params = window.google_tag_params;

            noS = document.createElement('noscript');
            adws = document.createElement('script');
            adws.defer = true;
            adws.src ='https://www.googleadservices.com/pagead/conversion.js';
            document.body.appendChild(adws);

            img = document.createElement('img');
            img.src = 'https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1056650882/?value=1.000000&label=3wSzCPbtzAIQgu3s9wM&guid=ON&script=0';
            img.width = 1;
            img.height = 1;
            img.style.display = 'none';
            noS.appendChild(img);
            document.body.appendChild(noS);
            /* ]]> */
          }
        };

    }

    namespace.Adwords = (function () {
        return new Adwords();
    })();

    namespace.Adwords.fn = Adwords.prototype;

    return namespace.Adwords;
} )( HOST.Metrics );
// HOST/venda/modules/Metrics/Classes/Adwords.js - END
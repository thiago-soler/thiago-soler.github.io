(function(){

	var $global = window,
		uh = $global.uh = $global.uh || {};

	/**
	 * Classe de dominios
	 */
	function Domains () {

		var $public = this,
			$private = {};

		$public.campaign = new Campaign();

	}

	/**
	 * Classe de campanhas
	 */
	function Campaign () {

		var $public = this,
			$private = {};

		/**
		 * Storage para armazenar o JSON apos ser normalizado
		 * @type {Object}
		 */
		$public.storage = undefined;

		$private.getFormatedJson = function (json) {

			if ($public.storage !== undefined) {

				return $public.storage;

			} else {
			
				return $private.formatJSON(json);

			}

		};

		$private.replicatesData = function (key, obj, merge) {

			var listFilter = obj[key],
				idx = 0,
				extension = '';

			merge = merge || {};

			delete obj[key];

			for (idx in listFilter) {

				extension = listFilter[idx];

				merge[extension] = obj;

			}

			return merge;


		};

		$private.iterateMetaInfo = function (list) {

		};

		$private.formatJSON = function (json) {

			var metaInfoExtensions = json.CAMPAIGN.META_INFO_EXTENSIONS,
				metaInfo = {},
				idx = 0,
				formatedDataA = {};

			for (idx in metaInfoExtensions) {

				var formatedDataB = {};

				metaInfo = metaInfoExtensions[idx];
				
				
				for (idx in metaInfo.PERIOD) {

					formatedDataB = $private.replicatesData('LIST_YEARS', metaInfo.PERIOD[idx], formatedDataB);

				}
				
				metaInfo.PERIOD = formatedDataB;

				formatedDataA = $private.replicatesData('LIST_EXTENSIONS', metaInfo, formatedDataA);

			}

			json.CAMPAIGN.META_INFO_EXTENSIONS = formatedDataA;

			return json;

		};

		/**
		 * Retorna os meta infos da campanha
		 * 
		 * @param  {Object} json JSON retornado pelo monaco
		 * @return {Object}      JSON formatado com apenas os dados do meta info
		 */
		$public.getMetaInfoCampaign = function (json) {

			json = $private.getFormatedJson(json);
			
			console.log(json);

			window.test = json;

		};

		$public.getMetaInfoExtensions = function () {

		};
	}

	// Extende o objeto privado com a classe Domains
	uh.Domains = Domains;

	// Expoem para o escopo global 
	$global.uh = uh;

})();
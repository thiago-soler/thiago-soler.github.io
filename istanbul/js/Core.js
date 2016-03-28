(function(){

	var $global = window,
		uh = $global.uh = $global.uh || {};

	/**
	 * Classe de dominios
	 */
	function Domains (json) {

		var $public = this,
			$private = {};

		$public.campaign = new Campaign(json);

	}

	/**
	 * Classe de campanhas
	 */
	function Campaign (json) {

		var $public = this,
			$private = {};

		/**
		 * Storage para armazenar o JSON apos ser normalizado
		 * @type {Object}
		 */
		$private.storage = undefined;

		$private.POINTERS = {
			'YEARS' : 'YEARS_',
			'CONFIG': 'CONFIG_',
			'EXTENSIONS': 'EXTENSIONS_'
		};

		$private.getFormatedJson = function (json) {

			if ($private.storage !== undefined) {

				return $private.storage;

			} else {
				
				$private.storage = $private.formatJSON(json);

				window.storage = $private.storage;
				return $private.storage;

			}

		};

		$private.replicatesData = function (key, obj, merge) {

			var listFilter = obj[key],
				idx = 0,
				data = '';

			merge = merge || {};

			delete obj[key];

			for (idx in listFilter) {

				data = listFilter[idx];

				merge[data] = obj;

			}

			return merge;


		};

		$private.formatJSON = function (json) {

			json.CAMPAIGN.META_CONFIG = new Object();

			var metaInfoExtensions = json.CAMPAIGN.META_INFO_EXTENSIONS,
				metaInfo = {},
				idxA = 0,
				idxB = 0,
				formatedDataA = {};

			for (idxA in metaInfoExtensions) {

				var formatedDataB = {},
					metaConfig = json.CAMPAIGN.META_CONFIG,
					pointerExtensions = $private.POINTERS.EXTENSIONS + idxA,
					pointerYears = $private.POINTERS.YEARS,
					pointerConfig = $private.POINTERS.CONFIG + idxA,
					metaConfigExtensions = metaConfig[pointerExtensions] = {},
					metaConfigYears = {};

				
				metaConfigExtensions[pointerConfig] = metaInfoExtensions[idxA];
				
				metaInfo = metaConfigExtensions[pointerConfig];

				for (idxB in metaInfo.PERIOD) {

					metaConfigExtensions[pointerYears + idxB] = metaInfo.PERIOD[idxB];

					formatedDataB = $private.replicatesData('LIST_YEARS', metaConfigExtensions[pointerYears + idxB], formatedDataB);

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
		$public.getMetaInfoCampaign = function () {

			return json.CAMPAIGN.META_INFO_CAMPAIGN || {};

		};

		$public.getMetaInfoExtensions = function () {

			return json.CAMPAIGN.META_INFO_EXTENSIONS || {};

		};

		$public.getMetaInfoExtension = function (extension) {

			extension = extension || '';

			return json.CAMPAIGN.META_INFO_EXTENSIONS[extension] || {};

		};

		$private.init = function (json) {

			json = $private.getFormatedJson(json);

			return json;

		}(json);
	}

	// Extende o objeto privado com a classe Domains
	uh.Domains = Domains;

	// Expoem para o escopo global 
	$global.uh = uh;

})();
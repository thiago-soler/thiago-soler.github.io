mock({
	"CAMPAIGN": {
		"NAME": "blackFriday",
		"META_INFO_CAMPAIGN": {
			"BLOCK_1": "<div class='block1'><h3>Quanto maior o período maior a economia.</h3><p>Além de pagar menos, você evita que outros interessados registrem seu domínio. Veja abaixo os valores promocionais progressivos:</p></div>",
			"BLOCK_2": "<div class='block1'><h3>Quanto maior o período maior a economia.</h3><p>Além de pagar menos, você evita que outros interessados registrem seu domínio. Veja abaixo os valores promocionais progressivos:</p></div>"
		},
		"META_INFO_EXTENSIONS": [
			{
				"LIST_EXTENSIONS": ["*"],
				"DEFAULT_YEAR_SELECTED": 5,
				"PERIOD": [
					{
						"LIST_YEARS": [1, 2],
						"BLOCK_1": "(economize 20%)",
						"BLOCK_2": "<div>Teste de reset all</div>",
						"BLOCK_3": "<p>R$ 100,00 por ano</p>"
					},
					{
						"LIST_YEARS": [3, 8],
						"BLOCK_1": "(economize 20%)",
						"BLOCK_2": "* A partir do 2º ano será cobrado R$ 49,99",
						"BLOCK_3": "<p>R$ 49,99</p><p>R$ 15,00 /1º ano*</p>"
					}
				]
			},
			{
				"LIST_EXTENSIONS": [".com", ".net", ".tv", ".adv.br"],
				"DEFAULT_YEAR_SELECTED": 2,
				"PERIOD": [
					{
						"LIST_YEARS": [1, 3],
						"BLOCK_1": "(economize 00%)",
						"BLOCK_2": "<div>Economize até 00% registrando seu domínio a partir de 2 anos</div>",
						"BLOCK_3": "<p>R$ 49.00 por ano</p>"
					},
					{
						"LIST_YEARS": [2, 5, 10],
						"BLOCK_1": "(economize 20%)",
						"BLOCK_2": "* A partir do 2º ano será cobrado R$ 49,99",
						"BLOCK_3": "<p>R$ 49,99</p><p>R$ 15,00 /1º ano*</p>"
					}
				]
			}
		]
	}
});

<?php

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'] = array (
    '_DEFAULT' => array (
        'init' => array (
            'enableCHashCache' => TRUE,
            'appendMissingSlash' => 'ifNotFile',
            'enableUrlDecodeCache' => TRUE,
            'enableUrlEncodeCache' => TRUE,
            'emptyUrlReturnValue' => \TYPO3\CMS\Core\Utility\GeneralUtility::getIndpEnv('TYPO3_SITE_URL'),
        ),
        'pagePath' => array (
            'type' => 'user',
            'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
            'spaceCharacter' => '-',
            'languageGetVar' => 'L',
        ),
        'redirects' => array (
        ),
        'preVars' => array (
            '0' => array (
                'GETvar' => 'no_cache',
                'valueMap' => array (
                    'nc' => '1',
                ),
                'noMatch' => 'bypass'
            ),
            '1' => array (
                'GETvar' => 'L',
                'valueMap' => array (
                    'da' => '1',
                    'de' => '2',
                ),
                'noMatch' => 'bypass',
            ),
        ),
        'fixedPostVars' => array(
			        'operations' => array( 
				         	array(
										'GETvar' => 'tx_operations_list[controller]',
											'noMatch' => 'bypass',
										),
										array(
											'GETvar' => 'tx_operations_list[action]',
											'noMatch' => 'bypass',
											'valueMap' => array(
												'suche' => 'search',
									      'einsatz' => 'show',
											),
										),
										array(
											'GETvar' => 'tx_operations_list[operation]',
											'lookUpTable' => array(
												'table' => 'tx_operations_domain_model_operation',
												'id_field' => 'uid',
												'alias_field' => 'title',
												'addWhereClause' => ' AND NOT deleted',
												'useUniqueCache' => 1,
												'useUniqueCache_conf' => array(
													'strtolower' => 1,
													'spaceCharacter' => '-',
												),
											),
										),
			          ),
								//page uid for singleview operations
								'13' => 'operations',
								
								'vehicle' => array( 
									array(
										'GETvar' => 'tx_operations_list[vehicle]',
										'lookUpTable' => array(
											'table' => 'tx_operations_domain_model_vehicle',
											'id_field' => 'uid',
											'alias_field' => 'title',
											'addWhereClause' => ' AND NOT deleted',
											'useUniqueCache' => 1,
											'useUniqueCache_conf' => array(
												'strtolower' => 1,
												'spaceCharacter' => '-',
											),
										),
									),
									array(
										'GETvar' => 'tx_operations_list[action]',
										'noMatch' => 'bypass'
									),
									array(
										'GETvar' => 'tx_operations_list[controller]',
										'noMatch' => 'bypass'
									),
								),
								// page uid for single view vehicle
				        '5' => 'vehicle',
								
								'resources' => array( 
									array(
										'GETvar' => 'tx_operations_list[resources]',
										'lookUpTable' => array(
											'table' => 'tx_operations_domain_model_resources',
											'id_field' => 'uid',
											'alias_field' => 'title',
											'addWhereClause' => ' AND NOT deleted',
											'useUniqueCache' => 1,
											'useUniqueCache_conf' => array(
												'strtolower' => 1,
												'spaceCharacter' => '-',
											),
										),
									),
									array(
										'GETvar' => 'tx_operations_list[action]',
										'noMatch' => 'bypass'
									),
									array(
										'GETvar' => 'tx_operations_list[controller]',
										'noMatch' => 'bypass'
									),
								),
								// page uid for single view resources
				        '6' => 'resources',

				),
        'postVarSets' => array (
            '_DEFAULT' => array (
                'page' => array(
                    0 => array(
                        'GETvar' => 'page',
                    ),
                ),
            ),
        ),
        'fileName' => array (
            'defaultToHTMLsuffixOnPrev' => true,
        ),
    )
);
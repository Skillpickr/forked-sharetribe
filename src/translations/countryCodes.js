// Add here the translations of the country names using key "<language_code>: 'transalation'" e.g. fi: 'Afganistan'
// prettier-ignore
const countryCodes = [
  { code: 'AF', en: 'Afghanistan', fr: 'Afghanistan', es: 'Afganistán', de: 'Afghanistan' },
  { code: 'AX', en: 'Åland Islands', fr: 'Îles Åland', es: 'Islas Áland', de: 'Åland' },
  { code: 'AL', en: 'Albania', fr: 'Albanie', es: 'Albania', de: 'Albanien' },
  { code: 'DZ', en: 'Algeria', fr: 'Algérie', es: 'Argel', de: 'Algerien' },
  { code: 'AS', en: 'American Samoa', fr: 'Samoa américaines', es: 'Samoa Americana', de: 'Amerikanisch-Samoa' },
  { code: 'AD', en: 'Andorra', fr: 'Andorre', es: 'Andorra', de: 'Andorra' },
  { code: 'AO', en: 'Angola', fr: 'Angola', es: 'Angola', de: 'Angola' },
  { code: 'AI', en: 'Anguilla', fr: 'Anguilla', es: 'Anguila', de: 'Anguilla' },
  { code: 'AQ', en: 'Antarctica', fr: 'Antarctique', es: 'Antártida', de: 'Antarktika' },
  { code: 'AG', en: 'Antigua and Barbuda', fr: 'Antigua-et-Barbuda', es: 'Antigua y Barbuda', de: 'Antigua und Barbuda' },
  { code: 'AR', en: 'Argentina', fr: 'Argentine', es: 'Argentina', de: 'Argentinien' },
  { code: 'AM', en: 'Armenia', fr: 'Arménie', es: 'Armenia', de: 'Armenien' },
  { code: 'AW', en: 'Aruba', fr: 'Aruba', es: 'Aruba', de: 'Aruba' },
  { code: 'AU', en: 'Australia', fr: 'Australie', es: 'Australia', de: 'Australien' },
  { code: 'AT', en: 'Austria', fr: 'Autriche', es: 'Austria', de: 'Österreich' },
  { code: 'AZ', en: 'Azerbaijan', fr: 'Azerbaïdjan', es: 'Azerbaiyán', de: 'Aserbaidschan' },
  { code: 'BS', en: 'Bahamas', fr: 'Bahamas', es: 'Bahamas', de: 'Bahamas' },
  { code: 'BH', en: 'Bahrain', fr: 'Bahreïn', es: 'Bahréin', de: 'Bahrain' },
  { code: 'BD', en: 'Bangladesh', fr: 'Bangladesh', es: 'Bangladesh', de: 'Bangladesch' },
  { code: 'BB', en: 'Barbados', fr: 'Barbade', es: 'Barbados', de: 'Barbados' },
  { code: 'BY', en: 'Belarus', fr: 'Biélorussie', es: 'Belarús', de: 'Belarus' },
  { code: 'BE', en: 'Belgium', fr: 'Belgique', es: 'Bélgica', de: 'Belgien' },
  { code: 'BZ', en: 'Belize', fr: 'Belize', es: 'Belice', de: 'Belize' },
  { code: 'BJ', en: 'Benin', fr: 'Bénin', es: 'Benin', de: 'Benin' },
  { code: 'BM', en: 'Bermuda', fr: 'Bermudes', es: 'Bermudas', de: 'Bermuda' },
  { code: 'BT', en: 'Bhutan', fr: 'Bhoutan', es: 'Bhután', de: 'Bhutan' },
  { code: 'BO', en: 'Bolivia', fr: 'Bolivie', es: 'Bolivia', de: 'Bolivien' },
  { code: 'BQ', en: 'Bonaire, Sint Eustatius and Saba', fr: 'Pays-Bas caribéens', es: 'Caribe Neerlandés', de: 'Bonaire, Sint Eustatius und Saba' },
  { code: 'BA', en: 'Bosnia and Herzegovina', fr: 'Bosnie-Herzégovine', es: 'Bosnia y Herzegovina', de: 'Bosnien und Herzegowina' },
  { code: 'BW', en: 'Botswana', fr: 'Botswana', es: 'Botsuana', de: 'Botswana' },
  { code: 'BV', en: 'Bouvet Island', fr: 'Île Bouvet', es: 'Isla Bouvet', de: 'Bouvetinsel' },
  { code: 'BR', en: 'Brazil', fr: 'Brésil', es: 'Brasil', de: 'Brasilien' },
  { code: 'IO', en: 'British Indian Ocean Territory', fr: 'Territoire britannique de l’Océan Indien', es: 'Territorio Británico del Océano Índico', de: 'Britisches Territorium im Indischen Ozean' },
  { code: 'BN', en: 'Brunei Darussalam', fr: 'Brunei Darussalam', es: 'Brunéi', de: 'Brunei Darussalam' },
  { code: 'BG', en: 'Bulgaria', fr: 'Bulgarie', es: 'Bulgaria', de: 'Bulgarien' },
  { code: 'BF', en: 'Burkina Faso', fr: 'Burkina Faso', es: 'Burkina Faso', de: 'Burkina Faso' },
  { code: 'BI', en: 'Burundi', fr: 'Burundi', es: 'Burundi', de: 'Burundi' },
  { code: 'KH', en: 'Cambodia', fr: 'Cambodge', es: 'Camboya', de: 'Kambodscha' },
  { code: 'CM', en: 'Cameroon', fr: 'Cameroun', es: 'Camerún', de: 'Kamerun' },
  { code: 'CA', en: 'Canada', fr: 'Canada', es: 'Canadá', de: 'Kanada' },
  { code: 'CV', en: 'Cape Verde', fr: 'Cap-Vert', es: 'Cabo Verde', de: 'Kap Verde' },
  { code: 'KY', en: 'Cayman Islands', fr: 'Iles Cayman', es: 'Islas Caimán', de: 'Kaimaninseln' },
  { code: 'CF', en: 'Central African Republic', fr: 'République centrafricaine', es: 'República Centro-Africana', de: 'Zentralafrikanische Republik' },
  { code: 'TD', en: 'Chad', fr: 'Tchad', es: 'Chad', de: 'Tschad' },
  { code: 'CL', en: 'Chile', fr: 'Chili', es: 'Chile', de: 'Chile' },
  { code: 'CN', en: 'China', fr: 'Chine', es: 'China', de: 'China, Volksrepublik' },
  { code: 'CX', en: 'Christmas Island', fr: 'Île Christmas', es: 'Islas Christmas', de: 'Weihnachtsinsel' },
  { code: 'CC', en: 'Cocos (Keeling) Islands', fr: 'Îles Cocos', es: 'Islas Cocos', de: 'Kokosinseln' },
  { code: 'CO', en: 'Colombia', fr: 'Colombie', es: 'Colombia', de: 'Kolumbien' },
  { code: 'KM', en: 'Comoros', fr: 'Comores', es: 'Comoros', de: 'Komoren' },
  { code: 'CG', en: 'Congo', fr: 'République du Congo', es: 'Congo', de: 'Kongo, Republik' },
  { code: 'CD', en: 'Congo, the Democratic Republic of the', fr: 'République démocratique du Congo', es: 'República democrática del Congo', de: 'Kongo, Demokratische Republik' },
  { code: 'CK', en: 'Cook Islands', fr: 'Îles Cook', es: 'Islas Cook', de: 'Cookinseln' },
  { code: 'CR', en: 'Costa Rica', fr: 'Costa Rica', es: 'Costa Rica', de: 'Costa Rica' },
  { code: 'CI', en: 'Côte d\'Ivoire', fr: 'Côte d’Ivoire', es: 'Costa de Marfil', de: 'Côte d’Ivoire' },
  { code: 'HR', en: 'Croatia', fr: 'Croatie', es: 'Croacia', de: 'Kroatien' },
  { code: 'CU', en: 'Cuba', fr: 'Cuba', es: 'Cuba', de: 'Kuba' },
  { code: 'CW', en: 'Curaçao', fr: 'Curaçao', es: 'Curazao', de: 'Curaçao' },
  { code: 'CY', en: 'Cyprus', fr: 'Chypre', es: 'Chipre', de: 'Zypern' },
  { code: 'CZ', en: 'Czech Republic', fr: 'République tchèque', es: 'República Checa', de: 'Tschechien' },
  { code: 'DK', en: 'Denmark', fr: 'Danemark', es: 'Dinamarca', de: 'Dänemark' },
  { code: 'DJ', en: 'Djibouti', fr: 'Djibouti', es: 'Yibuti', de: 'Dschibuti' },
  { code: 'DM', en: 'Dominica', fr: 'Dominique', es: 'Domínica', de: 'Dominica' },
  { code: 'DO', en: 'Dominican Republic', fr: 'République dominicaine', es: 'República Dominicana', de: 'Dominikanische Republik' },
  { code: 'EC', en: 'Ecuador', fr: 'Équateur', es: 'Ecuador', de: 'Ecuador' },
  { code: 'EG', en: 'Egypt', fr: 'Égypte', es: 'Egipto', de: 'Ägypten' },
  { code: 'SV', en: 'El Salvador', fr: 'Salvador', es: 'El Salvador', de: 'El Salvador' },
  { code: 'GQ', en: 'Equatorial Guinea', fr: 'Guinée équatoriale', es: 'Guinea Ecuatorial', de: 'Äquatorialguinea' },
  { code: 'ER', en: 'Eritrea', fr: 'Érythrée', es: 'Eritrea', de: 'Eritrea' },
  { code: 'EE', en: 'Estonia', fr: 'Estonie', es: 'Estonia', de: 'Estland' },
  { code: 'ET', en: 'Ethiopia', fr: 'Éthiopie', es: 'Etiopía', de: 'Äthiopien' },
  { code: 'FK', en: 'Falkland Islands (Malvinas)', fr: 'Îles Falkland', es: 'Islas Malvinas', de: 'Falklandinseln' },
  { code: 'FO', en: 'Faroe Islands', fr: 'Îles Féroé', es: 'Islas Faroe', de: 'Färöer' },
  { code: 'FJ', en: 'Fiji', fr: 'Fidji', es: 'Fiji', de: 'Fidschi' },
  { code: 'FI', en: 'Finland', fr: 'Finlande', es: 'Finlandia', de: 'Finnland' },
  { code: 'FR', en: 'France', fr: 'France', es: 'Francia', de: 'Frankreich' },
  { code: 'GF', en: 'French Guiana', fr: 'Guyane française', es: 'Guayana Francesa', de: 'Französisch-Guayana' },
  { code: 'PF', en: 'French Polynesia', fr: 'Polynésie française', es: 'Polinesia Francesa', de: 'Französisch-Polynesien' },
  { code: 'TF', en: 'French Southern Territories', fr: 'Terres australes et antarctiques françaises', es: 'Territorios Australes Franceses', de: 'Französische Süd- und Antarktisgebiete' },
  { code: 'GA', en: 'Gabon', fr: 'Gabon', es: 'Gabón', de: 'Gabun' },
  { code: 'GM', en: 'Gambia', fr: 'Gambie', es: 'Gambia', de: 'Gambia' },
  { code: 'GE', en: 'Georgia', fr: 'Géorgie', es: 'Georgia', de: 'Georgien' },
  { code: 'DE', en: 'Germany', fr: 'Allemagne', es: 'Alemania', de: 'Deutschland' },
  { code: 'GH', en: 'Ghana', fr: 'Ghana', es: 'Ghana', de: 'Ghana' },
  { code: 'GI', en: 'Gibraltar', fr: 'Gibraltar', es: 'Gibraltar', de: 'Gibraltar' },
  { code: 'GR', en: 'Greece', fr: 'Grèce', es: 'Grecia', de: 'Griechenland' },
  { code: 'GL', en: 'Greenland', fr: 'Groenland', es: 'Groenlandia', de: 'Grönland' },
  { code: 'GD', en: 'Grenada', fr: 'Grenade', es: 'Granada', de: 'Grenada' },
  { code: 'GP', en: 'Guadeloupe', fr: 'Guadeloupe', es: 'Guadalupe', de: 'Guadeloupe' },
  { code: 'GU', en: 'Guam', fr: 'Guam', es: 'Guam', de: 'Guam' },
  { code: 'GT', en: 'Guatemala', fr: 'Guatemala', es: 'Guatemala', de: 'Guatemala' },
  { code: 'GG', en: 'Guernsey', fr: 'Guernesey', es: 'Guernsey', de: 'Guernsey' },
  { code: 'GN', en: 'Guinea', fr: 'Guinée', es: 'Guinea', de: 'Guinea' },
  { code: 'GW', en: 'Guinea-Bissau', fr: 'Guinée-Bissau', es: 'Guinea-Bissau', de: 'Guinea-Bissau' },
  { code: 'GY', en: 'Guyana', fr: 'Guyane', es: 'Guayana', de: 'Guyana' },
  { code: 'HT', en: 'Haiti', fr: 'Haïti', es: 'Haití', de: 'Haiti' },
  { code: 'HM', en: 'Heard Island and McDonald Islands', fr: 'Îles Heard-et-MacDonald', es: 'Islas Heard y McDonald', de: 'Heard und McDonaldinseln' },
  { code: 'VA', en: 'Holy See (Vatican City State)', fr: 'Saint-Siège (Vatican)', es: 'Ciudad del Vaticano', de: 'Vatikanstadt' },
  { code: 'HN', en: 'Honduras', fr: 'Honduras', es: 'Honduras', de: 'Honduras' },
  { code: 'HK', en: 'Hong Kong', fr: 'Hong Kong', es: 'Hong Kong', de: 'Hongkong' },
  { code: 'HU', en: 'Hungary', fr: 'Hongrie', es: 'Hungría', de: 'Ungarn' },
  { code: 'IS', en: 'Iceland', fr: 'Islande', es: 'Islandia', de: 'Island' },
  { code: 'IN', en: 'India', fr: 'Inde', es: 'India', de: 'Indien' },
  { code: 'ID', en: 'Indonesia', fr: 'Indonésie', es: 'Indonesia', de: 'Indonesien' },
  { code: 'IR', en: 'Iran, Islamic Republic of', fr: 'Iran', es: 'Irán', de: 'Iran, Islamische Republik' },
  { code: 'IQ', en: 'Iraq', fr: 'Irak', es: 'Irak', de: 'Irak' },
  { code: 'IE', en: 'Ireland', fr: 'Irlande', es: 'Irlanda', de: 'Irland' },
  { code: 'IM', en: 'Isle of Man', fr: 'Ile de Man', es: 'Isla de Man', de: 'Insel Man' },
  { code: 'IL', en: 'Israel', fr: 'Israël', es: 'Israel', de: 'Israel' },
  { code: 'IT', en: 'Italy', fr: 'Italie', es: 'Italia', de: 'Italien' },
  { code: 'JM', en: 'Jamaica', fr: 'Jamaïque', es: 'Jamaica', de: 'Jamaika' },
  { code: 'JP', en: 'Japan', fr: 'Japon', es: 'Japón', de: 'Japan' },
  { code: 'JE', en: 'Jersey', fr: 'Jersey', es: 'Jersey', de: 'Jersey (Kanalinsel)' },
  { code: 'JO', en: 'Jordan', fr: 'Jordanie', es: 'Jordania', de: 'Jordanien' },
  { code: 'KZ', en: 'Kazakhstan', fr: 'Kazakhstan', es: 'Kazajstán', de: 'Kasachstan' },
  { code: 'KE', en: 'Kenya', fr: 'Kenya', es: 'Kenia', de: 'Kenia' },
  { code: 'KI', en: 'Kiribati', fr: 'Kiribati', es: 'Kiribati', de: 'Kiribati' },
  { code: 'KP', en: 'Korea, Democratic People\'s Republic of', fr: 'Corée du Nord', es: 'Corea del Norte', de: 'Korea, Demokratische Volksrepublik (Nordkorea)' },
  { code: 'KR', en: 'Korea, Republic of', fr: 'Corée du Sud', es: 'Corea del Sur', de: 'Korea, Republik (Südkorea)' },
  { code: 'KW', en: 'Kuwait', fr: 'Koweït', es: 'Kuwait', de: 'Kuwait' },
  { code: 'KG', en: 'Kyrgyzstan', fr: 'Kirghizistan', es: 'Kirguistán', de: 'Kirgisistan' },
  { code: 'LA', en: 'Laos', fr: 'Laos', es: 'Laos', de: 'Laos' },
  { code: 'LV', en: 'Latvia', fr: 'Lettonie', es: 'Letonia', de: 'Lettland' },
  { code: 'LB', en: 'Lebanon', fr: 'Liban', es: 'Líbano', de: 'Libanon' },
  { code: 'LS', en: 'Lesotho', fr: 'Lesotho', es: 'Lesotho', de: 'Lesotho' },
  { code: 'LR', en: 'Liberia', fr: 'Libéria', es: 'Liberia', de: 'Liberia' },
  { code: 'LY', en: 'Libya', fr: 'Libye', es: 'Libia', de: 'Libyen' },
  { code: 'LI', en: 'Liechtenstein', fr: 'Liechtenstein', es: 'Liechtenstein', de: 'Liechtenstein' },
  { code: 'LT', en: 'Lithuania', fr: 'Lituanie', es: 'Lituania', de: 'Litauen' },
  { code: 'LU', en: 'Luxembourg', fr: 'Luxembourg', es: 'Luxemburgo', de: 'Luxemburg' },
  { code: 'MO', en: 'Macao', fr: 'Macao', es: 'Macao', de: 'Macau' },
  { code: 'MK', en: 'North Macedonia', fr: 'Macédoine du Nord', es: 'Macedonia del Norte', de: 'Nordmazedonien' },
  { code: 'MG', en: 'Madagascar', fr: 'Madagascar', es: 'Madagascar', de: 'Madagaskar' },
  { code: 'MW', en: 'Malawi', fr: 'Malawi', es: 'Malawi', de: 'Malawi' },
  { code: 'MY', en: 'Malaysia', fr: 'Malaisie', es: 'Malasia', de: 'Malaysia' },
  { code: 'MV', en: 'Maldives', fr: 'Maldives', es: 'Maldivas', de: 'Malediven' },
  { code: 'ML', en: 'Mali', fr: 'Mali', es: 'Mali', de: 'Mali' },
  { code: 'MT', en: 'Malta', fr: 'Malte', es: 'Malta', de: 'Malta' },
  { code: 'MH', en: 'Marshall Islands', fr: 'Îles Marshall', es: 'Islas Marshall', de: 'Marshallinseln' },
  { code: 'MQ', en: 'Martinique', fr: 'Martinique', es: 'Martinica', de: 'Martinique' },
  { code: 'MR', en: 'Mauritania', fr: 'Mauritanie', es: 'Mauritania', de: 'Mauretanien' },
  { code: 'MU', en: 'Mauritius', fr: 'Maurice', es: 'Mauricio', de: 'Mauritius' },
  { code: 'YT', en: 'Mayotte', fr: 'Mayotte', es: 'Mayotte', de: 'Mayotte' },
  { code: 'MX', en: 'Mexico', fr: 'Mexique', es: 'México', de: 'Mexiko' },
  { code: 'FM', en: 'Micronesia, Federated States of', fr: 'Micronésie', es: 'Micronesia', de: 'Mikronesien' },
  { code: 'MD', en: 'Moldova', fr: 'Moldavie', es: 'Moldova', de: 'Moldawien' },
  { code: 'MC', en: 'Monaco', fr: 'Monaco', es: 'Mónaco', de: 'Monaco' },
  { code: 'MN', en: 'Mongolia', fr: 'Mongolie', es: 'Mongolia', de: 'Mongolei' },
  { code: 'ME', en: 'Montenegro', fr: 'Monténégro', es: 'Montenegro', de: 'Montenegro' },
  { code: 'MS', en: 'Montserrat', fr: 'Montserrat', es: 'Montserrat', de: 'Montserrat' },
  { code: 'MA', en: 'Morocco', fr: 'Maroc', es: 'Marruecos', de: 'Marokko' },
  { code: 'MZ', en: 'Mozambique', fr: 'Mozambique', es: 'Mozambique', de: 'Mosambik' },
  { code: 'MM', en: 'Myanmar', fr: 'Myanmar', es: 'Myanmar', de: 'Myanmar' },
  { code: 'NA', en: 'Namibia', fr: 'Namibie', es: 'Namibia', de: 'Namibia' },
  { code: 'NR', en: 'Nauru', fr: 'Nauru', es: 'Nauru', de: 'Nauru' },
  { code: 'NP', en: 'Nepal', fr: 'Népal', es: 'Nepal', de: 'Nepal' },
  { code: 'NL', en: 'Netherlands', fr: 'Pays-Bas', es: 'Países Bajos', de: 'Niederlande' },
  { code: 'NC', en: 'New Caledonia', fr: 'Nouvelle-Calédonie', es: 'Nueva Caledonia', de: 'Neukaledonien' },
  { code: 'NZ', en: 'New Zealand', fr: 'Nouvelle-Zélande', es: 'Nueva Zelanda', de: 'Neuseeland' },
  { code: 'NI', en: 'Nicaragua', fr: 'Nicaragua', es: 'Nicaragua', de: 'Nicaragua' },
  { code: 'NE', en: 'Niger', fr: 'Niger', es: 'Níger', de: 'Niger' },
  { code: 'NG', en: 'Nigeria', fr: 'Nigeria', es: 'Nigeria', de: 'Nigeria' },
  { code: 'NU', en: 'Niue', fr: 'Niue', es: 'Niue', de: 'Niue' },
  { code: 'NF', en: 'Norfolk Island', fr: 'Île Norfolk', es: 'Islas Norkfolk', de: 'Norfolkinsel' },
  { code: 'MP', en: 'Northern Mariana Islands', fr: 'Îles Mariannes du Nord', es: 'Islas Marianas del Norte', de: 'Nördliche Marianen' },
  { code: 'NO', en: 'Norway', fr: 'Norvège', es: 'Noruega', de: 'Norwegen' },
  { code: 'OM', en: 'Oman', fr: 'Oman', es: 'Omán', de: 'Oman' },
  { code: 'PK', en: 'Pakistan', fr: 'Pakistan', es: 'Pakistán', de: 'Pakistan' },
  { code: 'PW', en: 'Palau', fr: 'Palau', es: 'Islas Palaos', de: 'Palau' },
  { code: 'PS', en: 'Palestine, State of', fr: 'Palestine', es: 'Palestina', de: 'Staat Palästina' },
  { code: 'PA', en: 'Panama', fr: 'Panama', es: 'Panamá', de: 'Panama' },
  { code: 'PG', en: 'Papua New Guinea', fr: 'Papouasie-Nouvelle-Guinée', es: 'Papúa Nueva Guinea', de: 'Papua-Neuguinea' },
  { code: 'PY', en: 'Paraguay', fr: 'Paraguay', es: 'Paraguay', de: 'Paraguay' },
  { code: 'PE', en: 'Peru', fr: 'Pérou', es: 'Perú', de: 'Peru' },
  { code: 'PH', en: 'Philippines', fr: 'Philippines', es: 'Filipinas', de: 'Philippinen' },
  { code: 'PN', en: 'Pitcairn', fr: 'Pitcairn', es: 'Islas Pitcairn', de: 'Pitcairninseln' },
  { code: 'PL', en: 'Poland', fr: 'Pologne', es: 'Polonia', de: 'Polen' },
  { code: 'PT', en: 'Portugal', fr: 'Portugal', es: 'Portugal', de: 'Portugal' },
  { code: 'PR', en: 'Puerto Rico', fr: 'Puerto Rico', es: 'Puerto Rico', de: 'Puerto Rico' },
  { code: 'QA', en: 'Qatar', fr: 'Qatar', es: 'Qatar', de: 'Katar' },
  { code: 'RE', en: 'Réunion', fr: 'Réunion', es: 'Reunión', de: 'Réunion' },
  { code: 'RO', en: 'Romania', fr: 'Roumanie', es: 'Rumanía', de: 'Rumänien' },
  { code: 'RU', en: 'Russian Federation', fr: 'Russie', es: 'Rusia', de: 'Russische Föderation' },
  { code: 'RW', en: 'Rwanda', fr: 'Rwanda', es: 'Ruanda', de: 'Ruanda' },
  { code: 'BL', en: 'Saint Barthélemy', fr: 'Saint-Barthélemy', es: 'San Bartolomé', de: 'Saint-Barthélemy' },
  { code: 'SH', en: 'Saint Helena, Ascension and Tristan da Cunha', fr: 'Sainte-Hélène', es: 'Santa Elena', de: 'St. Helena' },
  { code: 'KN', en: 'Saint Kitts and Nevis', fr: 'Saint-Kitts-et-Nevis', es: 'San Cristóbal y Nieves', de: 'St. Kitts und Nevis' },
  { code: 'LC', en: 'Saint Lucia', fr: 'Sainte-Lucie', es: 'Santa Lucía', de: 'St. Lucia' },
  { code: 'MF', en: 'Saint Martin (French part)', fr: 'Saint-Martin (partie française)', es: 'San Martín (parte francesa)', de: 'Saint-Martin (franz. Teil)' },
  { code: 'PM', en: 'Saint Pierre and Miquelon', fr: 'Saint-Pierre-et-Miquelon', es: 'San Pedro y Miquelón', de: 'Saint-Pierre und Miquelon' },
  { code: 'VC', en: 'Saint Vincent and the Grenadines', fr: 'Saint-Vincent-et-les Grenadines', es: 'San Vicente y las Granadinas', de: 'St. Vincent und die Grenadinen' },
  { code: 'WS', en: 'Samoa', fr: 'Samoa', es: 'Samoa', de: 'Samoa' },
  { code: 'SM', en: 'San Marino', fr: 'Saint-Marin', es: 'San Marino', de: 'San Marino' },
  { code: 'ST', en: 'Sao Tome and Principe', fr: 'Sao Tomé-et-Principe', es: 'Santo Tomé y Príncipe', de: 'São Tomé und Príncipe' },
  { code: 'SA', en: 'Saudi Arabia', fr: 'Arabie Saoudite', es: 'Arabia Saudita', de: 'Saudi-Arabien' },
  { code: 'SN', en: 'Senegal', fr: 'Sénégal', es: 'Senegal', de: 'Senegal' },
  { code: 'RS', en: 'Serbia', fr: 'Serbie', es: 'Serbia y Montenegro', de: 'Serbien' },
  { code: 'SC', en: 'Seychelles', fr: 'Seychelles', es: 'Seychelles', de: 'Seychellen' },
  { code: 'SL', en: 'Sierra Leone', fr: 'Sierra Leone', es: 'Sierra Leona', de: 'Sierra Leone' },
  { code: 'SG', en: 'Singapore', fr: 'Singapour', es: 'Singapur', de: 'Singapur' },
  { code: 'SX', en: 'Sint Maarten (Dutch part)', fr: 'Saint-Martin (partie néerlandaise)', es: 'San Martín (parte neerlandesa)', de: 'Sint Maarten (niederl. Teil)' },
  { code: 'SK', en: 'Slovakia', fr: 'Slovaquie', es: 'Eslovaquia', de: 'Slowakei' },
  { code: 'SI', en: 'Slovenia', fr: 'Slovénie', es: 'Eslovenia', de: 'Slowenien' },
  { code: 'SB', en: 'Solomon Islands', fr: 'Îles Salomon', es: 'Islas Solomón', de: 'Salomonen' },
  { code: 'SO', en: 'Somalia', fr: 'Somalie', es: 'Somalia', de: 'Somalia' },
  { code: 'ZA', en: 'South Africa', fr: 'Afrique du Sud', es: 'Sudáfrica', de: 'Südafrika' },
  { code: 'GS', en: 'South Georgia and the South Sandwich Islands', fr: 'Géorgie du Sud et les îles Sandwich du Sud', es: 'Georgia del Sur e Islas Sandwich deSur', de: 'Südgeorgien und die Südlichen Sandwichinseln' },
  { code: 'SS', en: 'South Sudan', fr: 'Sud-Soudan', es: 'Sudán del Sur', de: 'Südsudan' },
  { code: 'ES', en: 'Spain', fr: 'Espagne', es: 'España', de: 'Spanien' },
  { code: 'LK', en: 'Sri Lanka', fr: 'Sri Lanka', es: 'Sri Lanka', de: 'Sri Lanka' },
  { code: 'SD', en: 'Sudan', fr: 'Soudan', es: 'Sudán', de: 'Sudan' },
  { code: 'SR', en: 'Suriname', fr: 'Suriname', es: 'Surinam', de: 'Suriname' },
  { code: 'SJ', en: 'Svalbard and Jan Mayen', fr: 'Svalbard et Jan Mayen', es: 'Islas Svalbard y Jan Mayen', de: 'Svalbard und Jan Mayen' },
  { code: 'SZ', en: 'Swaziland', fr: 'Eswatini', es: 'Suazilandia', de: 'Swasiland' },
  { code: 'SE', en: 'Sweden', fr: 'Suède', es: 'Suecia', de: 'Schweden' },
  { code: 'CH', en: 'Switzerland', fr: 'Suisse', es: 'Suiza', de: 'Schweiz' },
  { code: 'SY', en: 'Syrian Arab Republic', fr: 'Syrie', es: 'Siria', de: 'Syrien, Arabische Republik' },
  { code: 'TW', en: 'Taiwan', fr: 'Taiwan', es: 'Taiwán', de: 'Taiwan' },
  { code: 'TJ', en: 'Tajikistan', fr: 'Tadjikistan', es: 'Tayikistán', de: 'Tadschikistan' },
  { code: 'TZ', en: 'Tanzania', fr: 'Tanzanie', es: 'Tanzania', de: 'Tansania' },
  { code: 'TH', en: 'Thailand', fr: 'Thaïlande', es: 'Tailandia', de: 'Thailand' },
  { code: 'TL', en: 'Timor-Leste', fr: 'Timor-Leste', es: 'Timor-Leste', de: 'Osttimor ' },
  { code: 'TG', en: 'Togo', fr: 'Togo', es: 'Togo', de: 'Togo' },
  { code: 'TK', en: 'Tokelau', fr: 'Tokelau', es: 'Tokelau', de: 'Tokelau' },
  { code: 'TO', en: 'Tonga', fr: 'Tonga', es: 'Tonga', de: 'Tonga' },
  { code: 'TT', en: 'Trinidad and Tobago', fr: 'Trinité-et-Tobago', es: 'Trinidad y Tobago', de: 'Trinidad und Tobago' },
  { code: 'TN', en: 'Tunisia', fr: 'Tunisie', es: 'Túnez', de: 'Tunesien' },
  { code: 'TR', en: 'Turkey', fr: 'Turquie', es: 'Turquía', de: 'Türkei' },
  { code: 'TM', en: 'Turkmenistan', fr: 'Turkménistan', es: 'Turkmenistán', de: 'Turkmenistan' },
  { code: 'TC', en: 'Turks and Caicos Islands', fr: 'Îles Turques-et-Caïques', es: 'Islas Turcas y Caicos', de: 'Turks- und Caicosinseln' },
  { code: 'TV', en: 'Tuvalu', fr: 'Tuvalu', es: 'Tuvalu', de: 'Tuvalu' },
  { code: 'UG', en: 'Uganda', fr: 'Ouganda', es: 'Uganda', de: 'Uganda' },
  { code: 'UA', en: 'Ukraine', fr: 'Ukraine', es: 'Ucrania', de: 'Ukraine' },
  { code: 'AE', en: 'United Arab Emirates', fr: 'Émirats Arabes Unis', es: 'Emiratos Árabes Unidos', de: 'Vereinigte Arabische Emirate' },
  { code: 'GB', en: 'United Kingdom', fr: 'Royaume-Uni', es: 'Reino Unido', de: 'Vereinigtes Königreich Großbritannien und Nordirland' },
  { code: 'US', en: 'United States', fr: 'États-Unis', es: 'Estados Unidos de América', de: 'Vereinigte Staaten von Amerika' },
  { code: 'UM', en: 'United States Minor Outlying Islands', fr: 'Îles mineures éloignées des États-Unis', es: 'Islas Ultramarinas Menores de Estados Unidos', de: 'United States Minor Outlying Islands' },
  { code: 'UY', en: 'Uruguay', fr: 'Uruguay', es: 'Uruguay', de: 'Uruguay' },
  { code: 'UZ', en: 'Uzbekistan', fr: 'Ouzbékistan', es: 'Uzbekistán', de: 'Usbekistan' },
  { code: 'VU', en: 'Vanuatu', fr: 'Vanuatu', es: 'Vanuatu', de: 'Vanuatu' },
  { code: 'VE', en: 'Venezuela', fr: 'Venezuela', es: 'Venezuela', de: 'Venezuela' },
  { code: 'VN', en: 'Viet Nam', fr: 'Viêt Nam', es: 'Vietnam', de: 'Vietnam' },
  { code: 'VG', en: 'Virgin Islands, British', fr: 'British Virgin Islands', es: 'Islas Vírgenes Británicas', de: 'Britische Jungferninseln' },
  { code: 'VI', en: 'Virgin Islands, U.S.', fr: 'Îles Vierges américaines', es: 'Islas Vírgenes de los Estados Unidos de América', de: 'Amerikanische Jungferninseln' },
  { code: 'WF', en: 'Wallis and Futuna', fr: 'Wallis-et-Futuna', es: 'Wallis y Futuna', de: 'Wallis und Futuna' },
  { code: 'EH', en: 'Western Sahara', fr: 'Sahara occidental', es: 'Sahara Occidental', de: 'Westsahara' },
  { code: 'YE', en: 'Yemen', fr: 'Yémen', es: 'Yemen', de: 'Jemen' },
  { code: 'ZM', en: 'Zambia', fr: 'Zambie', es: 'Zambia', de: 'Sambia' },
  { code: 'ZW', en: 'Zimbabwe', fr: 'Zimbabwe', es: 'Zimbabue', de: 'Simbabwe' },
];

const getCountryCodes = (lang) => {
  // Add the lnew locale here so that the correct translations will be returned.
  // If locale is unknown or the translation is missing, this will default to english coutnry name.
  const codes = countryCodes.map((c) => {
    const countryName = c[lang] ? c[lang] : c['en']
    const counryCode = c.code

    return { code: counryCode, name: countryName }
  })
  return codes
}

export default getCountryCodes

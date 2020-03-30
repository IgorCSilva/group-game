
const objects = [
  'abajur',
  'abre-latas',
  'açucareiro',
  'agulha',
  'alfinete',
  'algema',
  'alicate',
  'almofada',
  'âncora',
  'anel',
  'antena',
  'anzol',
  'apagador',
  'apito',
  'apontador',
  'aquecedor',
  'arco',
  'aro',
  'aspirador',
  'azulejo',
  'bacia',
  'balança',
  'banco',
  'bengala',
  'berço',
  'berimbau',
  'bicicleta',
  'bidê',
  'bigorna',
  'binóculo',
  'biruta',
  'bisturi',
  'boia',
  'bola',
  'boneca',
  'borracha',
  'botão',
  'brinco',
  'bule',
  'bumerangue',
  'cabide',
  'cadeado',
  'cadeira',
  'caderno',
  'cajado',
  'cálice',
  'caneta',
  'canivete',
  'capa',
  'capacete',
  'castiçal',
  'cata-vento',
  'celular',
  'chicote',
  'chinelo',
  'chupeta',
  'clipe',
  'colchão',
  'colher',
  'copo',
  'dado',
  'dardo',
  'dedal',
  'dentadura',
  'desentupidor',
  'desfibrilador',
  'desodorante',
  'despertador',
  'detergente',
  'diadema',
  'diamante',
  'diapasão',
  'diário',
  'dicionário',
  'dinamite',
  'disco',
  'disquete',
  'divã',
  'dominó',
  'dVD',
  'edredom',
  'elástico',
  'envelope',
  'enxada',
  'escada',
  'escorredor',
  'escova',
  'escudo',
  'escumadeira',
  'espada',
  'espanador',
  'espelho',
  'esponja',
  'espremedor',
  'esquadro',
  'estátua',
  'esteira',
  'estetoscópio',
  'estojo',
  'extintor',
  'faca',
  'fax',
  'ferradura',
  'fichário',
  'filmadora',
  'filtro',
  'fio',
  'fita',
  'fivela',
  'flauta',
  'flecha',
  'fogão',
  'foguete',
  'foice',
  'folha',
  'frasco',
  'freezer',
  'frigideira',
  'fruteira',
  'funil',
  'gaiola',
  'gancho',
  'gangorra',
  'garfo',
  'gargantilha',
  'garrafa',
  'gaveta',
  'geladeira',
  'gorro',
  'gramofone',
  'grampeador',
  'grampo',
  'granada',
  'gravata',
  'grelha',
  'grinalda',
  'guarda-chuva',
  'guarda-sol',
  'guilhotina',
  'guitarra',
  'haltere',
  'harpa',
  'haste',
  'hélice',
  'helicóptero',
  'helióstato',
  'hidrante',
  'hidratante',
  'hidroavião',
  'hidrômetro',
  'higrômetro',
  'holofote',
  'hóstia',
  'iate',
  'ímã',
  'impressora',
  'inalador',
  'incenso',
  'ingresso',
  'inseticida',
  'interfone',
  'interruptor',
  'ioiô',
  'isca',
  'isopor',
  'isqueiro',
  'jaleco',
  'janela',
  'jangada',
  'jaqueta',
  'jardineira',
  'jarra',
  'jarro',
  'jato',
  'jaula',
  'joelheira',
  'jogo',
  'joia',
  'jornal',
  'joystick',
  'karaokê',
  'kart',
  'ketchup',
  'kilt',
  'kit',
  'lâmina',
  'lâmpada',
  'lança',
  'lancheira',
  'lantejoula',
  'lanterna',
  'lápis',
  'lapiseira',
  'lata',
  'lenço',
  'lençol',
  'lente',
  'leque',
  'liquidificador',
  'livro',
  'lixa',
  'luminária',
  'luneta',
  'lustre',
  'luva',
  'maçaneta',
  'maçarico',
  'machado',
  'maiô',
  'mala',
  'mamadeira',
  'manequim',
  'mangueira',
  'manivela',
  'máquina',
  'marreta',
  'martelo',
  'máscara',
  'medalha',
  'megafone',
  'meia',
  'microfone',
  'microscópio',
  'mochila',
  'mola',
  'nadadeira',
  'narguilé',
  'navalha',
  'nave',
  'navio',
  'nebulizador',
  'notebook',
  'novelo',
  'oboé',
  'óculos',
  'odre',
  'oftalmoscópio',
  'olho mágico',
  'ombreira',
  'orelhão',
  'órgão',
  'ouro',
  'OVNI',
  'ovo',
  'oxigenador',
  'pá',
  'paliteiro',
  'pandeiro',
  'panela',
  'pano',
  'papel',
  'parafuso',
  'paraquedas',
  'piano',
  'picareta',
  'pinça',
  'pincel',
  'pingente',
  'pistola',
  'placa',
  'pote',
  'prancha',
  'prateleira',
  'prato',
  'pulseira',
  'quadriciclo',
  'quadro',
  'quadro negro',
  'quebra-cabeça',
  'quebra-nozes',
  'queijeira',
  'quepe',
  'quimono',
  'rádio',
  'ralador',
  'ralo',
  'raquete',
  'ratoeira',
  'reco-reco',
  'rede',
  'régua',
  'relógio',
  'remo',
  'retrovisor',
  'revista',
  'revólver',
  'rímel',
  'roda',
  'rodo',
  'rolamento',
  'roleta',
  'rolha',
  'rolo',
  'sabonete',
  'saca-rolhas',
  'sacola',
  'saleiro',
  'sandália',
  'sanfona',
  'sapato',
  'saxofone',
  'scanner',
  'secador',
  'selim',
  'seringa',
  'serpentina',
  'serrote',
  'sino',
  'sirene',
  'skate',
  'sofá',
  'sombrinha',
  'spray',
  'tábua',
  'tabuleiro',
  'taça',
  'tamanco',
  'tambor',
  'tampa',
  'teclado',
  'telefone',
  'telescópio',
  'televisão',
  'telha',
  'tênis',
  'termômetro',
  'tesoura',
  'tigela',
  'tijolo',
  'touca',
  'trampolim',
  'travesseiro',
  'troféu',
  'ukulele',
  'ultraleve',
  'umbral',
  'umidificador',
  'unha postiça',
  'uniforme',
  'urinol',
  'urna',
  'urso de pelúcia',
  'válvula',
  'vaporizador',
  'vara',
  'varal',
  'vareta',
  'varinha',
  'vaso',
  'vassoura',
  'vela',
  'velocímetro',
  'ventilador',
  'vídeo',
  'vidro',
  'viola',
  'violão',
  'violino',
  'violoncelo',
  'viseira',
  'vitrola',
  'volante',
  'wafer',
  'walkie-talkie',
  'walkman',
  'webcam',
  'xadrez',
  'xale',
  'xampu',
  'xarope',
  'xequerê',
  'xícara',
  'xilofone',
  'xilogravura',
  'yacht',
  'yagi',
  'yen',
  'zabumba',
  'zambê',
  'zarabatana',
  'zinco',
  'zíper'
]

const foods = [
  'laranja',
  'banana',
  'maçã',
  'goiaba',
  'melancia',
  'melão',
  'limão',
  'coco',
  'cocada',
  'alface',
  'tomate',
  'chuchu',
  'pimentão',
  'cebola',
  'beterraba',
  'cenoura',
  'inhame',
  'macaxeira',
  'queijo',
  'mortadela',
  'iorgute',
  'goiabada',
  'pão',
  'salsicha',
  'ovo',
  'pipoca',
  'batata',
  'coentro',
  'lasanha',
  'bolo',
  'bolacha',
  'biscoito',
  'cuscuz',
  'abacaxi',
  'abóbora',
  'abobrinha',
  'acerola',
  'pimenta',
  'alho',
  'almôndega',
  'amendoim',
  'castanha',
  'cajú',
  'arroz',
  'feijão',
  'macarrão',
  'milho',
  'pamonha',
  'canjica',
  'mandioca',
  'pastel',
  'tapioca',
  'acarajé',
  'jaca',
  'gerimum',
  'gelatina',
  'omelete',
  'chocolate',
  'araçá',
  'pepino',
  'pizza',
  'sanduiche',
  'hamburgue',
  'macarronada'
]

const animals = [
  'abelha',
  'abutre',
  'ácaro',
  'águia',
  'albatroz',
  'alce',
  'alpaca',
  'anaconda',
  'anchova',
  'andorinha',
  'anta',
  'antílope',
  'aranha',
  'arara',
  'asno',
  'atum',
  'avestruz',
  'babuíno',
  'bacalhau',
  'bacuri',
  'badejo',
  'bagre',
  'baiacu',
  'baleia',
  'barata',
  'barbo',
  'barracuda',
  'beija-flor',
  'besouro',
  'bem-te-vi',
  'bezerro',
  'bicho-da-seda',
  'bisonte',
  'boa',
  'bode',
  'boi',
  'borboleta',
  'boto',
  'búfalo',
  'burro',
  'cabra',
  'cachalote',
  'cachorro',
  'cágado',
  'camaleão',
  'camarão',
  'camelo',
  'camundongo',
  'canário',
  'canguru',
  'capivara',
  'caracol',
  'caranguejo',
  'carneiro',
  'carrapato',
  'cascavel',
  'castor',
  'cavalo',
  'cavalo-marinho',
  'cegonha',
  'centopeia',
  'chimpanzé',
  'chinchila',
  'chita',
  'cigarra',
  'cisne',
  'coala',
  'cobra',
  'codorna',
  'coelho',
  'coiote',
  'coruja',
  'corvo',
  'crocodilo',
  'cupim',
  'cutia',
  'damão',
  'dançador',
  'degolado',
  'degu',
  'diablotim',
  'diabo-da-tasmânia',
  'diamante-de-gould',
  'dingo',
  'dinossauro',
  'dodô',
  'doninha',
  'dourado',
  'dragão-de-komodo',
  'dragão-do-banhado',
  'dragão-voador',
  'dromedário',
  'dugongo',
  'égua',
  'elefante',
  'elefante-marinho',
  'ema',
  'enchova',
  'enferrujado',
  'enguia',
  'enho',
  'escaravelho',
  'escorpião',
  'escrevedeira',
  'esmerilhão',
  'espadarte',
  'esponja',
  'esquilo',
  'estorninho',
  'estrela-do-mar',
  'esturjão',
  'faisão',
  'falcão',
  'ferreirinho',
  'flamingo',
  'flautim',
  'foca',
  'formiga',
  'fossa',
  'fraca-da-guiné',
  'freirinha',
  'fuinha',
  'furão',
  'gafanhoto',
  'gaivota',
  'galinha',
  'galo',
  'gambá',
  'gamo',
  'ganso',
  'garça',
  'garoupa',
  'gato',
  'gavião',
  'gazela',
  'geco',
  'gerbo',
  'gibão',
  'girafa',
  'girino',
  'gnu',
  'golfinho',
  'gorila',
  'gralha',
  'grifo',
  'grilo',
  'grou',
  'guará',
  'guaxinim',
  'hadoque',
  'hamster',
  'harpia',
  'hiena',
  'hipopótamo',
  'hírax',
  'iaque',
  'íbex',
  'íbis',
  'iguana',
  'iguanara',
  'impala',
  'indicador',
  'indri',
  'inhacoso',
  'inhala',
  'inhambu',
  'irapuã',
  'irara',
  'iratim',
  'itapema',
  'jabiru',
  'jabuti',
  'jaçanã',
  'jacaré',
  'jacu',
  'jacupará',
  'jaguar',
  'jamanta',
  'jararaca',
  'javali',
  'jegue',
  'jiboia',
  'joaninha',
  'joão-de-barro',
  'jumento',
  'kakapo',
  'kea',
  'kinguio',
  'kiwi',
  'koala',
  'kookaburra',
  'kowari',
  'krill',
  'lacraia',
  'lagarta',
  'lagartixa',
  'lagarto',
  'lagosta',
  'lampreia',
  'lavadeira',
  'lavagante',
  'leão',
  'leão-marinho',
  'lebre',
  'lêmure',
  'leopardo',
  'lesma',
  'lhama',
  'libélula',
  'lince',
  'linguado',
  'lobo',
  'lombriga',
  'lontra',
  'lula',
  'macaco',
  'mamute',
  'manatim',
  'mandril',
  'mangangá',
  'maracanã',
  'marimbondo',
  'mariposa',
  'marisco',
  'marmota',
  'marreco',
  'marta',
  'massarongo',
  'medusa',
  'melro',
  'mergulhão',
  'merluza',
  'mexilhão',
  'mico',
  'milhafre',
  'mineirinho',
  'minhoca',
  'mocho',
  'mono',
  'morcego',
  'moreia',
  'morsa',
  'mosca',
  'mosquito',
  'muçurana',
  'mula',
  'musaranho',
  'naja',
  'nambu',
  'nandaia',
  'narceja',
  'narval',
  'náutilo',
  'negrinho',
  'neon',
  'nhacundá',
  'nhandiá',
  'niala',
  'niquim',
  'noitibó',
  'numbat',
  'nútria',
  'ocapi',
  'olho-de-boi',
  'onça',
  'orangotango',
  'orca',
  'órix',
  'ornitorrinco',
  'osga',
  'ostra',
  'otária',
  'ouriço',
  'ouriço-do-mar',
  'ovelha',
  'panda',
  'pantera',
  'papagaio',
  'pardal',
  'pássaro',
  'pato',
  'pavão',
  'peixe',
  'peixe-boi',
  'pelicano',
  'percevejo',
  'perereca',
  'periquito',
  'pernilongo',
  'peru',
  'pescada',
  'pica-pau',
  'pinguim',
  'piolho',
  'piranha',
  'pirarucu',
  'polvo',
  'pombo',
  'pônei',
  'porco',
  'porco-espinho',
  'porquinho-da-índia',
  'preá',
  'preguiça',
  'pulga',
  'quati',
  'quatimirim',
  'quatipuru',
  'quebra-nozes',
  'quebra-ossos',
  'queixada',
  'quem-te-vestiu',
  'quero-quero',
  'quetzal',
  'quiriquiri',
  'rã',
  'rabudinho',
  'raia',
  'raposa',
  'ratazana',
  'rato',
  'rêmora',
  'rena',
  'rendeira',
  'rinoceronte',
  'robalo',
  'rouxinol',
  'sabiá',
  'sagui',
  'salamandra',
  'salmão',
  'sanguessuga',
  'sapo',
  'sardão',
  'sardinha',
  'saúva',
  'seriema',
  'serpente',
  'siri',
  'suçuarana',
  'sucuri',
  'suiriri',
  'suricate',
  'surubi',
  'surucucu',
  'tainha',
  'tamanduá',
  'tamboril',
  'tapir',
  'tarântula',
  'tartaruga',
  'tatu',
  'tatuí',
  'tentilhão',
  'tetra',
  'texugo',
  'tico-tico',
  'tigre',
  'tilápia',
  'tordo',
  'tororó',
  'toupeira',
  'touro',
  'tritão',
  'truta',
  'tubarão',
  'tucano',
  'tucuxi',
  'uacari',
  'unau',
  'unha-longa',
  'unicórnio',
  'urso panda',
  'urso',
  'uru',
  'urubu',
  'urutaurana',
  'urutu',
  'vaca',
  'vaca-marinha',
  'vaga-lume',
  'veado',
  'verdilhão',
  'verdinho',
  'vespa',
  'víbora',
  'vieira',
  'vira-bosta',
  'vison',
  'vitela',
  'viúva',
  'viúva-negra',
  'wallaby',
  'weimaraner',
  'wombat',
  'xajá',
  'xangó',
  'xará',
  'xarelete',
  'xaréu',
  'xaru',
  'xauim',
  'xero',
  'xexéu',
  'ximango',
  'ximburé',
  'xixarro',
  'xofrango',
  'xuri',
  'yak',
  'ynambu',
  'yorkshire',
  'zabelê',
  'zangão',
  'zaragateiro',
  'zarro',
  'zebra',
  'zebu',
  'zidedê',
  'zombeteiro',
  'zorrilho'
]

export const allThemes = {
  objects,
  foods,
  animals
}

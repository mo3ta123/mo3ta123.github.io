'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "41b87faf121dd654f7723e448751af7a",
".git/config": "f554cac607fac568f8ac1d1190526cd4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ab4d39f7fc27e772dcff614e6233015f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "82a40aa45fe29c35e8260d5d22e9e79c",
".git/logs/refs/heads/main": "8fc9268c7e46283d5d16103c7bc9bce9",
".git/logs/refs/remotes/origin/main": "2dcfa9633bb5231a8176bf835aa577cb",
".git/objects/02/d917fc9e1b28342cf730a99d4d816237867d34": "19ff0326beb4b59ecd49f59dc7da8325",
".git/objects/03/0e4575c37dc1a45d05dc5103ae8f349e9f9461": "594dbf726b103dfc78bcc62890606c0a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/8af97c9923a6290682a47dc7f723c1cdefeb06": "3b86572ee4bf95037129d9a4ad175ec1",
".git/objects/08/badc5f50ecbfb8a8df5e29ec0113ecef2b05d8": "b70083f22621a63d817588535e3fab48",
".git/objects/09/2f8710a15789d13b68e1f059403a02c3b848b8": "82f702913399d275735c845b2ce636f5",
".git/objects/09/4899a279145f82705f064526a87dc4bb03c12e": "d3048d29dc3c71fa5d971b71f80604dd",
".git/objects/0c/062ea84f5660eee60801bb3e4f37a1c0f30be0": "c46195c9ed62eeb902130d5cfa57e5ce",
".git/objects/14/03541cb10d90dcffc072da55fbabf101d642ad": "dc54d0034734e507784c59a778f40405",
".git/objects/17/c2059867efc82f9730c7958f02cc9d8f1a0de1": "0122583756e049949a0870407e44267e",
".git/objects/18/66e72084189d95a5de54a2a4a129bc2fdeab88": "ec749a70c15a4717dc278f9b4f8b8695",
".git/objects/18/93bff89c068206d3b74014b626cde9d444e1ed": "04fc3db8b0476855b360de8c10be6e2f",
".git/objects/1a/6700a36011e65afe727a1ef8e04279cff90121": "7625cf1f072a3f7ee575efff7a5bc31d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/64e8df8901e674b7334b5a0da4674d76f2297e": "3e23bc9b6026c4224a374809c4b7c6b9",
".git/objects/25/bd484577148dce1db7fdcd9107deade37bd55e": "9f3808610ab608306dfc82e95244bf22",
".git/objects/26/d8e78283e576db49c82e176e811eebf2b23786": "2f7e88bc90f0bdbb5a3ab1326f50e7e7",
".git/objects/29/30d054ad9d796c8a3e0f23642624d2cd8c859e": "1d9075992abfaf7755e1d38a04f27ae4",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/655d0314984aa288e60c30d958394515b9bca4": "dfa7ac52d486fa5763c29490247964f3",
".git/objects/32/37efab834b381608715ae9ceb78518d0417e59": "eabec2484750e92aeb2a73d3240da3c7",
".git/objects/32/f60c2733de954387b39b4b01aba4c74ca67b4e": "d5109c96e418390a6317d24f50685db3",
".git/objects/36/e5f819a59a8891fa12786a8fe2fb206cdc9b60": "bca65175f13f1dad23dcf9136eb87785",
".git/objects/38/3c715dd27199e23ec49118449273c3c1292942": "b3f96d6f5087507124d48ce40448d438",
".git/objects/3b/084eec32b549d9534f70361b35d3831aaf5726": "5dbd0208891e00b2c7815f07e0497dfd",
".git/objects/3b/15ab94b864caedac315b6bcdeeb3bc87ca51af": "4fa8f18c3f7b8f2c884c8dedd83f6b35",
".git/objects/3b/47eb9605fb840e61e09ad5ebd6c8bc1722ebad": "8123c5538b803a7c9a4c3ab8f7911fc3",
".git/objects/3d/3adcf8d197ccfddabcc1113c3d01193488d110": "9ec0f60f01d487b245a407e3e7cd7b33",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/8bbf2ba7f7107ae484f5bceb478cdfd74db5bb": "103a4441ab0d798972640e32afe8ae1a",
".git/objects/42/d553efd28d85e7f8e83040ed2bd31668140a76": "5905779209422eeb772b058dbfcce77e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/87eef2d25060a06db91b93fb065bb811c17bd6": "0c025ce50d6f539fd3270840150ebe99",
".git/objects/49/68ed3c3dd2ff5de0e1e5505a9094db7f006efb": "1f5101dfced79b4305249abf66298003",
".git/objects/4e/f7fb0114c0a1782c92dc8c9d229b88f164c470": "8cb174e896bf0fd31883168d83fc7d82",
".git/objects/54/e4fb63cb3eee54a7946d501bd6339e09e7faa8": "83a7153268313cb3fdbcefd1a1b0760f",
".git/objects/55/d3832d638d71f6e247259a227972ba1d21ce66": "a445c9b144ed26228cbd011b66d42146",
".git/objects/58/2f619c1f74cc91ca4317ef9c4bb11d64610d45": "c5a58a7608c2e1720b39c54bde0260b3",
".git/objects/5c/6ec8ac60a1778a2d40bcd576ce9b3726278c05": "7e765f3756ebbe55a323a45490ef1bdd",
".git/objects/5c/f03f5e7044e7f82897204a9a744eac77ca6ff1": "d39025b5417238cadb0200ac395922d5",
".git/objects/5d/60fe70b865d65a21d075af6c31d3baaf02e0bc": "0828cf92d200de2d371029d170079c47",
".git/objects/5e/81a9649b46b1daeb8f1a1285f7d46b716f6f35": "77aae969411b353103009e579002f48c",
".git/objects/5f/3d6dc3c9464a3e652fe6635295e06393ed9617": "0f66a50692cca047d69c630c4729468e",
".git/objects/60/a3338b16c1758250f6ad789625c2c394c8ca29": "27354b36640a0129b584db1c80c496eb",
".git/objects/61/9ab97897ebf2218bcd66b6c4b1a46604a4fffb": "69dd8bb3b918106623dfba3b1ae5729d",
".git/objects/61/b99341996740f8917111b4da687cf8da7be29c": "25c6078c921713026aa810409bf7cf6e",
".git/objects/61/baee1653c0d133a2bff8981d0b6b04a6780626": "4a2aee61a6d691959c2d4804f72a94f5",
".git/objects/65/9468db9f806cf6c0bf95abae594875a75861f4": "f8d3867ef319763830746ccda40bbc23",
".git/objects/66/c582c0966f3f85615f9216851737c7a70843b6": "62b1ae5dd6eadc9caeca48a4ccd537b1",
".git/objects/67/e89e0c72c9c3321e7ff29c0c86f1fdf3c7b694": "d313bd316e80bb5441d6ce2dff569f4e",
".git/objects/6e/40b1484d230cc945b4468a1c3c82789448d435": "850947c8537e15b95cf41d3b370c6da2",
".git/objects/70/e932f152e29b7eb8276003db6efcacf37553d9": "9037a9dbda3b254f632f231114b6c874",
".git/objects/76/acd7cdd2627c1fb9f88abb4d239c53cfef2ea4": "34affdd1e5cc3387925d2b22340e4026",
".git/objects/77/1fbf38770fa21b494f0248f444a98c86b8ff2d": "2936b14e4b87f6f0fb43043ff6ab9a57",
".git/objects/77/b2b940a0afa6293daeca0e3b058b912575638a": "0a14914e8ee4cd407fabbc2fa31c1c65",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/46ee10a6e5781d66e8268b140e5bee5e259cba": "8ac7624fda47a0eee45456a817e9d379",
".git/objects/7f/bc4fd69a7149373aa6cba032fa5b98b6343026": "4a1082d8564f43ebe14c6f01f72b5ea7",
".git/objects/82/bfc7f2c9b4b116892e15219c39c3eb4560583e": "3d046460a9620883ef5c0f419d408758",
".git/objects/83/62f3e6d6473e0d5c1391aee8a8945071d24667": "0a6266240672e8e617ddafd64d5c49a2",
".git/objects/86/c66ec6f6ee0ce275576edbd540316499aa1a04": "301d995e866148f9c511ebdf0404b335",
".git/objects/88/a0906c48ba95ae1e091a47fde65873e398f628": "22399d4428b51fb5041ae0a83cbd8e66",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/3575f5e6c6ee7eb75a4f8d570fe2d725e7cc03": "f1edc7d3c9de9c2e0194448ba1ca9612",
".git/objects/8d/b82f2225b92566d53561a89326fc12a618e4e8": "4e1bdfaa1960911bda22ca601c029a8b",
".git/objects/8e/4e6e3da391a4b4338f7ef07387fca884f76f94": "ade50b3ee36c3967a80873608904a3f4",
".git/objects/8e/c8ec6c311d12cceed3cdde44417d3cb991c1d7": "2876691262b85e6a2022f27015dc4086",
".git/objects/8e/f40cde462accf32092bb06e8669ee92de2bd8d": "c53fa1539ddcd639aa60021fbf15f787",
".git/objects/96/4e9bede70746f27ceb2b9ff8c4e56d0be73d48": "1348fc0ad56b88d00c6842d3b67f249c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/b0bea0e0dca8fe33cc751b65274c0e55514622": "7dd2e5486edcf6934be3e9677a4c822c",
".git/objects/97/bac100e5c3b50f13af0502f62fa2a6335cdbca": "d04ede8010f0ac02da704e5130bc831e",
".git/objects/9a/3a1e9298ad1c619818dfb97d4a8eba22201b51": "c195b8b36962a729a38a6da04311a651",
".git/objects/9a/adb12b42332a7fe781817a8f697c82a118bd66": "f740f6b7933cf387bdf8b6a78b027532",
".git/objects/9f/a0726f4071653352fe015f813660014e6ffe5f": "ca1efdfd1ccc1ff0841861f157afa79c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/5bf5fcd9a870227c6183d83968acd843f86ef0": "b161e1f1a52555c4140d12e2c713ae89",
".git/objects/a4/3cdbc7f43982a3d955c8648751649825ceabbf": "787de43a1d22ddffc729f3e1ab67e9d9",
".git/objects/a4/f8c2ba90de097fec305976aa2264ff5107ac2e": "63e8ede186751931c4ef9af30c2f71f4",
".git/objects/a8/11da8c1780e8c438e2f5113079f9278a6e2579": "1d371b3545d04f1d5fea88843dea8e25",
".git/objects/a9/3899718b93f763bb05edde446f203090c0d39b": "a012afddad5912d012bba55f1242b1db",
".git/objects/a9/f353c110e74e0477bdc2d1689ebf9d9c62078a": "70ad3514bca3093803db8ac79e15eee1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/782fbdd536019c144530e6a158851b30c37592": "6ca83449143d3b7fb8638b3d50e5317e",
".git/objects/ad/370b383af47cb4a59e97fa471a54959aff5863": "845908d3e80982db115eaa90e526e9c2",
".git/objects/ae/4aa42257230e870b24e8036d42413f02dd699e": "55db75cce43a094611e04b485744c5e6",
".git/objects/ae/e8e3d22e192d0019eefa9254378bb5fdbd17df": "e0ac424c5f0b5c720921c683653d112e",
".git/objects/b0/c49cae0de035d9c7b43bedd4d6f400a7f57598": "a2790fc10c23bc99360e05f6ece268c0",
".git/objects/b4/3c24d95fbf46c110cd766a73b9228edb169061": "121ea019d0e1b5aa105037a232d13120",
".git/objects/b4/c8d064e466cec9c01c8f6f74c3e84bacff09ca": "729b1dad3b151690d3e1924958852b56",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/127a1d9fc6f576343b3536246d2bcfa0d0b15f": "8478df3273eedcd16c226e099d1da35e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/34a2feb7426587be29e66e2a8fa81b17a701d7": "e279c3ac6bf1f0548c72de6268f03d3c",
".git/objects/bb/df094e4d8ad7e40d352154bd4d53df99fa090e": "42ba9d21c130afdcc7309a824bbef07b",
".git/objects/c2/5fc1e3d075c3bd5eabdff06ee82fc09f878242": "c0bf39ca3724c412a22071758ae8e598",
".git/objects/c3/488ae11fda94dfc56af9236af059114985d4b8": "291c567bd3ffdffa43acf6d537434cca",
".git/objects/c4/c565fc1f771fb3e3b51e46a625d92c39cd8ffc": "198917852e2025532d9e9de2f445f7c9",
".git/objects/c5/1c477e701ffd10427ff4b229992c3671a13139": "e74f284497bd3522716493be1ed8ac31",
".git/objects/c5/5a6de48a3db0b0c9819a5b01d805909acb9774": "d65345cb918e756692a709c1709bc4ba",
".git/objects/c5/9348129a52be277ff484d8f74667dc12652496": "3582c17935261652815be0faf6d1448c",
".git/objects/c5/edac801c82eeaaaff84f084849bda99622168a": "f1076ee5aa1851f8c2aecc2fa440ee31",
".git/objects/c6/f1448b494243a5f1839de31e82025c2c5dafbd": "b55b9d743b1720b5ddad6e3769469ff0",
".git/objects/c7/7660247ef98acdf9bbb228224acdaf36558b0a": "ca923814ac4bc662436575616e36d02d",
".git/objects/ca/11b449ae2f31829333da6e7d5a8d359bb24268": "403b5701dcf6e69c76711a8b9425caec",
".git/objects/cb/aca2f362f2f1a83e5db20de2a33bb4b201033a": "1fdd0b9ee6b85b3fca2e6db9e33130b5",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/eb3d7de5f09f69c8895a3535a9fc670df98c4b": "8a204de6a2d1c7d6dd47b80508288282",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/36c4d88e4882f6a325c331ec2a7ddd101cd776": "fb976a9d4bd2eedba3d03ce59334275d",
".git/objects/cf/6efb0465786235ab03ee90becabdafbc4f7d3f": "7aaa4133da9f934992487c53e551e2a8",
".git/objects/d0/047dbe7adbe27d9e678efefb95f84400878ca1": "d978c59b393bf7ba2726031a049571af",
".git/objects/d3/cf53d4979a5371eb31cde5742c7374902da703": "66d05381524531c7d695ae4438846ddb",
".git/objects/d6/7f67593a66d7cd67b5c7dd4503db56fbde93a0": "5206c0a70dc289ca6a20da2bc457c280",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/07e96bec24711efbbac0ce5e6bea442ddae48f": "4295c9a8448f5c2e3169e7816719947a",
".git/objects/db/05c4108e4f3d754bc0cfb1ca5b4b3c7503b606": "f9ccf7af71e021cb7b209af895e9e510",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/595057b54abebe8d3c69ddd98ef096445ab877": "f19d85d644253979dc8a2c69251e7bdf",
".git/objects/e4/21e449d6bdefa824687f761d54107864b6fec0": "ae9ad1abd01b5e099dccd72bd69b2ddb",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b665a25593ba6baad242ecb4b0a75cf0a61fc8": "4a067afda6f8c77680a337222808b7fe",
".git/objects/e8/e9d1b7134765c490cfcbf04ee3f5dc347f8c62": "4c68da68d426e04bf1d5703ff520f7bd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/42cdec316bb4063405e4bbd55ae8d46550ece4": "57df5173bc4ba296954b2a2dcaa7b007",
".git/objects/ee/2dc50726c593ad813a7eab9d93f6e1fd89e50d": "832608e726413687db70cfc50289db27",
".git/objects/ee/d4ecdbb1aa14baf5a96b5e933f32101dca5c25": "c03a65ff4cbe04ecf8a770f2e07f3f9b",
".git/objects/f3/401823a843b3ea657465a861f2ab15d1a37ffa": "d963274fea0e5af75cefae9324c6d66a",
".git/objects/f8/f7d58c930b41e246e86d0c1fe93e434217a9ec": "049d689108b8a67f859707c6e76dd26b",
".git/objects/fb/3a7d8b73309a38e2d7dac821bd3835d6c67e39": "dc4df53281ebb6019d6ab3918bd6e610",
".git/objects/fc/c9e85f9a62b4e5988d8a3ba03863f1a7019ef9": "b0c93142dcdcbb1e92238e3f7721d822",
".git/objects/fd/d90cacb6665da63aef27b687aec2677cf54929": "e02dca5e9054e8c171283d81ae713470",
".git/refs/heads/main": "4906b02f89a3ab648eddc62b52271ee0",
".git/refs/remotes/origin/main": "4906b02f89a3ab648eddc62b52271ee0",
"assets/AssetManifest.json": "ae87e03befcd73c719f4434a986de708",
"assets/assets/images/card.jpeg": "6243e1fe7ff455e08318ff97603e2313",
"assets/assets/images/card1.jpeg": "5fae9f75b6022e902513d6e11d2f1bc7",
"assets/assets/images/card3.jpeg": "4c3b99a1f5b33a304b07b01b7be58ac9",
"assets/assets/images/kabkab.jpg": "25e3020fd848174aed6a295834a9df3c",
"assets/assets/images/Logo/Logo_official.png": "71edcad6bf2fe6eb65991a89cd0ee9e9",
"assets/assets/images/Logo/nakhlatech_logo_trans_black.png": "855a09192c20bd9c4e50a0e9e1026e05",
"assets/assets/images/Logo/nakhlatech_logo_trans_main.png": "3578582eeab447b03a679aab557c5ad8",
"assets/assets/images/Logo/nakhlatech_logo_trans_main_logo.png": "133f1fea66a75b9e2183472fb9a4b7c3",
"assets/assets/images/Logo/nakhlatech_logo_trans_text.png": "93fb89dd4daa2548beabdcc4e605bf08",
"assets/assets/images/Logo/nakhlatech_logo_trans_text_cutted.png": "b59b50e5acc764dfbd6004fc9c4e066b",
"assets/assets/images/Logo/nakhlatech_logo_trans_white.png": "be0f761b884316fba5c54ae1a123023c",
"assets/assets/images/mozafati.jpg": "2c8e9e02859970cfcd8000924e18c852",
"assets/assets/images/person.jpg": "b0b918a91478e22518bab8a4cefd1d2e",
"assets/assets/images/person1.jpg": "d27aad729aee390d7c486359e167eb47",
"assets/assets/images/person2.jpg": "fa3539d8f9769cab944fb50c71591757",
"assets/assets/images/person3.png": "fb7d0443b0a873224b52c488728cc276",
"assets/assets/images/person4.jpg": "58f8f87e55d895c0357059ab0a99077d",
"assets/assets/images/person5.jpg": "4f73570558781498cd010d7d7f708e65",
"assets/assets/images/piarom.jpg": "b230c6a05e421f1d9109cab0ccda7219",
"assets/assets/images/rabi.jpg": "e7ddcd460413a9351cb6c064488d7a91",
"assets/assets/images/sayer.jpg": "e1bb8b3033bc28660e3d6a772e584f4b",
"assets/assets/images/team/GHAREEB.png": "57fde864c07fd9c8521cec45da494c0f",
"assets/assets/images/team/MARAM.png": "c20037b4b43c404412daa87fdf47135b",
"assets/assets/images/team/OMAR.png": "6f9fac93dc883fc0bfe88b9f52c9b510",
"assets/assets/images/team/SALAH.png": "bfefc19ca0ec75d29197548ec3dcf336",
"assets/assets/images/temp_img.jpg": "82863c8e540124c3848145bf16484e61",
"assets/assets/images/wallpaper1.jpg": "72ee56ee14f0ea1daefe59c300c9a85b",
"assets/assets/images/wallpaper2.jpg": "7e44f454fdbc75fcf4c0679f328b8e3f",
"assets/assets/images/wallpaper3.jpg": "1e9e0fb4edbd49747be78ec8960538f9",
"assets/assets/images/zahedi.jpg": "0b6ded8a7a08704264f1523629e085c9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c4c1a2d57b4d5a0c49aa951c6a3f924c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2ae6ace84542820bebf1110b50ec56a7",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "f19961a423d43dd47490b92e2169d4d0",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e6f444eebd4734a58c2a2efd01f07d7a",
"/": "e6f444eebd4734a58c2a2efd01f07d7a",
"main.dart.js": "f313ccf2237d1bdca82ad74173c1b297",
"manifest.json": "1e5036633eb4175106c589a2f1bba4e1",
"version.json": "fc6d254bb4592a7a3023863bdbba1d59"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

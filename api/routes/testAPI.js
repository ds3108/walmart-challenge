var express = require("express");
var router = express.Router();
const response = [{
    "_id": "602f0d1ea116ad35d760927d",
    "id": 1,
    "brand": "ooy eqrceli",
    "description": "rlñlw brhrka",
    "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
    "price": 498724
},
{
    "_id": "602f0d1ea116ad35d760927f",
    "id": 2,
    "brand": "dsaasd",
    "description": "zlrwax bñyrh",
    "image": "www.lider.cl/catalogo/images/babyIcon.svg",
    "price": 130173
},
{
    "_id": "602f0d1ea116ad35d7609281",
    "id": 3,
    "brand": "weñxoab",
    "description": "hqhoy qacirk",
    "image": "www.lider.cl/catalogo/images/homeIcon.svg",
    "price": 171740
},
{
    "_id": "602f0d1ea116ad35d7609283",
    "id": 4,
    "brand": "sjlzxeo",
    "description": "pnyn rlxbewnk",
    "image": "www.lider.cl/catalogo/images/computerIcon.svg",
    "price": 890348
},
{
    "_id": "602f0d1ea116ad35d7609285",
    "id": 5,
    "brand": "peuoooypt",
    "description": "trcwl iagxxh",
    "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
    "price": 814893
},
{
    "_id": "602f0d1ea116ad35d7609287",
    "id": 6,
    "brand": "ñuo onfbtya",
    "description": "vangde oswss",
    "image": "www.lider.cl/catalogo/images/homeIcon.svg",
    "price": 468750
},
{
    "_id": "602f0d1ea116ad35d7609289",
    "id": 7,
    "brand": "wiñ nvnactr",
    "description": "nkhux ztdnct",
    "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
    "price": 472543
},
{
    "_id": "602f0d1ea116ad35d760928b",
    "id": 8,
    "brand": "sfzkvoñ",
    "description": "hdvt tbrdeiñl",
    "image": "www.lider.cl/catalogo/images/tvIcon.svg",
    "price": 428894
},
{
    "_id": "602f0d1ea116ad35d760928d",
    "id": 9,
    "brand": "nzo acrrñvh",
    "description": "ahelf lxhñep",
    "image": "www.lider.cl/catalogo/images/tvIcon.svg",
    "price": 29530
},
{
    "_id": "602f0d1ea116ad35d760928f",
    "id": 10,
    "brand": "adsfsda",
    "description": "dñqy ipvukesh",
    "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
    "price": 691504
},
{
    "_id": "602f0d1ea116ad35d7609291",
    "id": 11,
    "brand": "iñmfdpd",
    "description": "fqfwt ikpxov",
    "image": "www.lider.cl/catalogo/images/gamesIcon.svg",
    "price": 533752
},
{
    "_id": "602f0d1ea116ad35d7609293",
    "id": 12,
    "brand": "vfbjgpt",
    "description": "iwpazñ ltxsh",
    "image": "www.lider.cl/catalogo/images/tvIcon.svg",
    "price": 647307
},
{
    "_id": "602f0d1ea116ad35d7609295",
    "id": 13,
    "brand": "breizhf",
    "description": "dquyja crdgj",
    "image": "www.lider.cl/catalogo/images/computerIcon.svg",
    "price": 918745
},
{
    "_id": "602f0d1ea116ad35d7609297",
    "id": 14,
    "brand": "dcc gdodkñg",
    "description": "odrnuh ixdta",
    "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
    "price": 643123
},
{
    "_id": "602f0d1ea116ad35d7609299",
    "id": 15,
    "brand": "ckyprmg",
    "description": "ñlagjl rnkmt",
    "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
    "price": 953318
},
{
    "_id": "602f0d1ea116ad35d760929b",
    "id": 16,
    "brand": "fqqejoy",
    "description": "thyh mpzxgwnw",
    "image": "www.lider.cl/catalogo/images/gamesIcon.svg",
    "price": 525834
},
{
    "_id": "602f0d1ea116ad35d760929d",
    "id": 17,
    "brand": "cni tñcapdx",
    "description": "lzqf rkhusibs",
    "image": "www.lider.cl/catalogo/images/gamesIcon.svg",
    "price": 235494
},
{
    "_id": "602f0d1ea116ad35d760929f",
    "id": 18,
    "brand": "asdfdsa",
    "description": "zdczs omedat",
    "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
    "price": 849666
},
{
    "_id": "602f0d1ea116ad35d76092a1",
    "id": 19,
    "brand": "ñhm pcjpemc",
    "description": "ñnkak giehcj",
    "image": "www.lider.cl/catalogo/images/homeIcon.svg",
    "price": 868855
},
{
    "_id": "602f0d1ea116ad35d76092a3",
    "id": 20,
    "brand": "auc fjbkjyd",
    "description": "tdge lbcakogp",
    "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
    "price": 843751
},
{
    "_id": "602f0d1ea116ad35d76092a5",
    "id": 21,
    "brand": "hai jabwbsp",
    "description": "hcpqws jyufm",
    "image": "www.lider.cl/catalogo/images/tvIcon.svg",
    "price": 829806
},
{
    "_id": "602f0d1ea116ad35d76092a7",
    "id": 22,
    "brand": "vhg aowurdr",
    "description": "pqfqtr ybmiq",
    "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
    "price": 933254
},
{
    "_id": "602f0d1ea116ad35d76092a9",
    "id": 23,
    "brand": "dasad",
    "description": "zyss vmcñvzwt",
    "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
    "price": 370775
},
{
    "_id": "602f0d1ea116ad35d76092ab",
    "id": 24,
    "brand": "fzpusgc",
    "description": "jnrojo tjcja",
    "image": "www.lider.cl/catalogo/images/homeIcon.svg",
    "price": 669045
},
{
    "_id": "602f0d1ea116ad35d76092ad",
    "id": 25,
    "brand": "soiayxr",
    "description": "oftetv sxgwl",
    "image": "www.lider.cl/catalogo/images/toysIcon.svg",
    "price": 912974
},
{
    "_id": "602f0d1ea116ad35d76092af",
    "id": 26,
    "brand": "ofojjctj",
    "description": "ñwylwi yktiq",
    "image": "www.lider.cl/catalogo/images/homeIcon.svg",
    "price": 989405
},
{
    "_id": "602f0d1ea116ad35d76092b1",
    "id": 27,
    "brand": "soiayxr",
    "description": "aeecg nfrieh",
    "image": "www.lider.cl/catalogo/images/toysIcon.svg",
    "price": 154070
},
{
    "_id": "602f0d1ea116ad35d76092b3",
    "id": 28,
    "brand": "aio efyubfx",
    "description": "zymart xqisc",
    "image": "www.lider.cl/catalogo/images/bicycleIcon.svg",
    "price": 691783
},
{
    "_id": "602f0d1ea116ad35d76092b5",
    "id": 29,
    "brand": "dsafasd",
    "description": "zlrwax bñyrh",
    "image": "www.lider.cl/catalogo/images/furnitureIcon.svg",
    "price": 756135
},
{
    "_id": "602f0d1ea116ad35d76092b7",
    "id": 30,
    "brand": "ñszuqiq",
    "description": "pqln spqwnrgy",
    "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
    "price": 571646
},
{
    "_id": "602f0d1ea116ad35d76092b9",
    "id": 31,
    "brand": "soiayxr",
    "description": "mfys ubrkojpñ",
    "image": "www.lider.cl/catalogo/images/electronicsIcon.svg",
    "price": 339320
},
{
    "_id": "602f0d1ea116ad35d76092bb",
    "id": 32,
    "brand": "htvjwbo",
    "description": "njñw xwynñhkc",
    "image": "www.lider.cl/catalogo/images/computerIcon.svg",
    "price": 426814
},
{
    "_id": "602f0d1ea116ad35d76092bd",
    "id": 33,
    "brand": "mpg kthroip",
    "description": "cixd vrojdkyt",
    "image": "www.lider.cl/catalogo/images/toysIcon.svg",
    "price": 512936
},
{
    "_id": "602f0d1ea116ad35d76092bf",
    "id": 34,
    "brand": "ñszuqiq",
    "description": "umaee kbtygd",
    "image": "www.lider.cl/catalogo/images/tvIcon.svg",
    "price": 931586
},
{
    "_id": "602f0d1ea116ad35d76092c1",
    "id": 35,
    "brand": "zlxalyn",
    "description": "echqi xpñqdu",
    "image": "www.lider.cl/catalogo/images/toysIcon.svg",
    "price": 290926
},
{
    "_id": "602f0d1ea116ad35d76092c3",
    "id": 36,
    "brand": "adda",
    "description": "tblb uñccrvup",
    "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
    "price": 813504
},
{
    "_id": "602f0d1ea116ad35d76092c5",
    "id": 37,
    "brand": "cni tñcapdx",
    "description": "blthh nnuezs",
    "image": "www.lider.cl/catalogo/images/furnitureIcon.svg",
    "price": 752153
},
{
    "_id": "602f0d1ea116ad35d76092c7",
    "id": 38,
    "brand": "lkq fqvlwia",
    "description": "nbbd pzpvxgev",
    "image": "www.lider.cl/catalogo/images/babyIcon.svg",
    "price": 818318
},
{
    "_id": "602f0d1ea116ad35d76092c9",
    "id": 39,
    "brand": "ñljtzes",
    "description": "avgpj gbyoñt",
    "image": "www.lider.cl/catalogo/images/toysIcon.svg",
    "price": 500
},
{
    "_id": "602f0d1ea116ad35d76092cb",
    "id": 40,
    "brand": "adfda",
    "description": "znxnñm wymew",
    "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
    "price": 391010
},
{
    "_id": "602f0d1ea116ad35d76092cd",
    "id": 41,
    "brand": "aio efyubfx",
    "description": "ljñkv bmfwuq",
    "image": "www.lider.cl/catalogo/images/gamesIcon.svg",
    "price": 624491
},
{
    "_id": "602f0d1ea116ad35d76092cf",
    "id": 42,
    "brand": "sadfdas",
    "description": "nkhux ztdnct",
    "image": "www.lider.cl/catalogo/images/toysIcon.svg",
    "price": 531691
},
{
    "_id": "602f0d1ea116ad35d76092d1",
    "id": 43,
    "brand": "lkdznamm",
    "description": "ugis modjhltc",
    "image": "www.lider.cl/catalogo/images/toysIcon.svg",
    "price": 501528
},
{
    "_id": "602f0d1ea116ad35d76092d3",
    "id": 44,
    "brand": "akh flnzgbj",
    "description": "hkko rpeamwyf",
    "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
    "price": 227901
},
{
    "_id": "602f0d1ea116ad35d76092d5",
    "id": 45,
    "brand": "fumgxfd",
    "description": "geblup hhotp",
    "image": "www.lider.cl/catalogo/images/homeIcon.svg",
    "price": 230491
},
{
    "_id": "602f0d1ea116ad35d76092d7",
    "id": 46,
    "brand": "dsasd",
    "description": "muqn qblmiklf",
    "image": "www.lider.cl/catalogo/images/furnitureIcon.svg",
    "price": 65676
},
{
    "_id": "602f0d1ea116ad35d76092d9",
    "id": 47,
    "brand": "tig sfzfqqe",
    "description": "dquyja crdgj",
    "image": "www.lider.cl/catalogo/images/babyIcon.svg",
    "price": 503220
},
{
    "_id": "602f0d1ea116ad35d76092db",
    "id": 48,
    "brand": "zan wovdrnb",
    "description": "gocut qmjlzf",
    "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
    "price": 480752
},
{
    "_id": "602f0d1ea116ad35d76092dd",
    "id": 49,
    "brand": "gskkmqf",
    "description": "echqi xpñqdu",
    "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
    "price": 308688
},
{
    "_id": "602f0d1ea116ad35d76092df",
    "id": 50,
    "brand": "xhy dhzñffq",
    "description": "scpñ gfwyxggd",
    "image": "www.lider.cl/catalogo/images/electronicsIcon.svg",
    "price": 216596
}];

router.get("/", function(req, res, next) {
    res.send(response);
});

module.exports = router;

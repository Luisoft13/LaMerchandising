const allListProducts = [
  {
    id: 236,
    src: require("@/images/otrosproductos/img129.jpg"),
    name: "Ave de cerámica bañado en color plata con impresion debajo.",
    code: "LM-TP232",
    flex: 12,
  },
  {
    id: 235,
    src: require("@/images/otrosproductos/img128.jpg"),
    name: "Pequeña y linda caja de cuero con impresión repujada y tarjetas empresariales.",
    code: "LM-TP232",
    flex: 12,
  },
  {
    id: 234,
    src: require("@/images/otrosproductos/img127.jpg"),
    name: "Mochila de emergencia con varios bolsillos.",
    code: "LM-TP232",
    flex: 12,
  },
  {
    id: 232,
    src: require("@/images/otrosproductos/img125.jpg"),
    name: "Abanico de madera con impresión a un solo color.",
    code: "LM-TP232",
    flex: 12,
  },
  {
    id: 231,
    src: require("@/images/otrosproductos/img124.jpg"),
    name: "Banner con brillante impresión a color",
    code: "LM-TP231",
    flex: 12,
  },
  {
    id: 230,
    src: require("@/images/otrosproductos/img123.jpg"),
    name: "Tomatodo color negro y llavero con impresióna un solo color",
    code: "LM-TP230",
    flex: 12,
  },
  {
    id: 229,
    src: require("@/images/otrosproductos/img122.jpg"),
    name: "Libreta con impresión a full color.",
    code: "LM-TP229",
    flex: 12,
  },
  {
    id: 228,
    src: require("@/images/otrosproductos/img121.webp"),
    name: "Llavero con destapador y logo impreso",
    code: "LM-TP228",
    flex: 12,
  },
  {
    id: 227,
    src: require("@/images/otrosproductos/img120.webp"),
    name: "Caja de cuero con telar a color.",
    code: "LM-TP227",
    flex: 12,
  },
  {
    id: 226,
    src: require("@/images/otrosproductos/img119.jpeg"),
    name: "Portabotella en cuero y biocuero, en diferentes colores",
    code: "LM-TP226",
    flex: 12,
  },
  {
    id: 225,
    src: require("@/images/otrosproductos/img117.jpeg"),
    name: "Portacollares para tenerlo exhibido y en orden",
    code: "LM-TP225",
    flex: 12,
  },
  {
    id: 224,
    src: require("@/images/otrosproductos/img118.jpg"),
    name: "Copas, vasos y envase con tapa con nombre",
    code: "LM-TP224",
    flex: 12,
  },
  {
    id: 223,
    src: require("@/images/textiles/img49.png"),
    code: "LM-TP223",
    name: "Lápices ecológicos con semillas",
    flex: 12,
  },
  {
    id: 222,
    src: require("@/images/otrosproductos/img126.jpg"),
    name: "Bolsas 100% algodón grande y pequeña con diferente cerrado y grosor para su comodidad",
    code: "LM-TP222",
    flex: 12,
  },
  {
    id: 221,
    src: require("@/images/otrosproductos/img116.png"),
    name: "Tomatodo liviano con doble impresión delantero, posterior",
    code: "LM-TP221",
    flex: 12,
  },
  {
    id: 220,
    src: require("@/images/otrosproductos/img113.jpeg"),
    name: "Bolsa con impresión y bordes y asas de tela",
    code: "LM-TP220",
    flex: 12,
  },
  {
    id: 219,
    src: require("@/images/otrosproductos/img114.jpeg"),
    name: "Mochila de poliester con portalaptop",
    code: "LM-TP219",
    flex: 12,
  },
  {
    id: 218,
    src: require("@/images/otrosproductos/img115.jpeg"),
    name: "Mochila de poliester con portalaptop colores variados",
    code: "LM-TP218",
    flex: 12,
  },
  {
    id: 217,
    src: require("@/images/otrosproductos/img109.png"),
    name: "Bolsa de algodón con asas de yute natural e impresión",
    code: "LM-TP217",
    flex: 12,
  },
  {
    id: 216,
    src: require("@/images/otrosproductos/img110.png"),
    name: "Bolsa de algodón natural, grande con fuelles y base de 25cm aprox y logo impreso en la delantera",
    code: "LM-TP216",
    flex: 12,
  },
  {
    id: 215,
    src: require("@/images/otrosproductos/img111.png"),
    name: "Vasos térmicos con tapa",
    code: "LM-TP215",
    flex: 12,
  },
  {
    id: 214,
    src: require("@/images/otrosproductos/img112.png"),
    name: "Medalla",
    code: "LM-TP214",
    flex: 12,
  },
  {
    id: 213,
    src: require("@/images/otrosproductos/img108.png"),
    name: "Canguros cuero",
    code: "LM-TP213",
    flex: 12,
  },
  {
    id: 212,
    src: require("@/images/otrosproductos/img8.png"),
    code: "LM-TP212",
    name: "Taza con cuchara en material de fibra de trigo",
    flex: 12,
  },
  {
    id: 211,
    src: require("@/images/otrosproductos/img9.png"),
    code: "LM-TP211",
    name: "Taza con cuchara en material de fibra de trigo",
    flex: 12,
  },
  {
    id: 210,
    src: require("@/images/otrosproductos/img106.png"),
    code: "LM-TP210",
    name: "Identificador maleta en bio-cuero con telar",
    flex: 12,
  },
  {
    id: 209,
    src: require("@/images/otrosproductos/img11.png"),
    code: "LM-TP209",
    name: "Resaltador multi-color",
    flex: 12,
  },
  {
    id: 208,
    src: require("@/images/otrosproductos/img30.png"),
    code: "LM-TP208",
    name: "Tarjetero en cobre",
    flex: 12,
  },
  {
    id: 207,
    src: require("@/images/otrosproductos/img12.png"),
    code: "LM-TP207",
    name: "Pizarra de corcho y acrílico",
    flex: 12,
  },

  {
    id: 206,
    src: require("@/images/otrosproductos/img13.png"),
    code: "LM-TP206",
    name: "Luces de seguridad para zapatilla",
    flex: 12,
  },
  {
    id: 205,
    src: require("@/images/otrosproductos/img14.png"),
    code: "LM-TP205",
    name: "Tomatodo de fibra de trigo ecológico",
    flex: 12,
  },
  {
    id: 204,
    src: require("@/images/otrosproductos/img15.png"),
    code: "LM-TP204",
    name: "Set para vinos",
    flex: 12,
  },
  {
    id: 203,
    src: require("@/images/otrosproductos/img16.png"),
    code: "LM-TP203",
    name: "Pizarra con corcho",
    flex: 12,
  },
  {
    id: 202,
    src: require("@/images/otrosproductos/img17.png"),
    code: "LM-TP202",
    name: "Vaso taza de fibra de trigo ecológico",
    flex: 12,
  },
  {
    id: 201,
    src: require("@/images/otrosproductos/img18.png"),
    code: "LM-TP201",
    name: "Mug térmico",
    flex: 12,
  },
  {
    id: 200,
    src: require("@/images/otrosproductos/img19.png"),
    code: "LM-TP200",
    name: "Maletín 100% cuero",
    flex: 12,
  },
  {
    id: 199,
    src: require("@/images/otrosproductos/img20.png"),
    code: "LM-TP199",
    name: "Tarjetero para celular",
    flex: 12,
  },
  {
    id: 198,
    src: require("@/images/otrosproductos/img21.png"),
    code: "LM-TP198",
    name: "Tomatodo de fibra de trigo",
    flex: 12,
  },
  {
    id: 197,
    src: require("@/images/otrosproductos/img22.png"),
    code: "LM-TP197",
    name: "Tomado de fibra de trigo con vidrio en el interior",
    flex: 12,
  },
  {
    id: 196,
    src: require("@/images/otrosproductos/img23.png"),
    code: "LM-TP196",
    name: "Shaker tomatodo",
    flex: 12,
  },
  {
    id: 195,
    src: require("@/images/otrosproductos/img24.png"),
    code: "LM-TP195",
    name: "Neceser de cuero repujado",
    flex: 12,
  },
  {
    id: 194,
    src: require("@/images/otrosproductos/img25.png"),
    code: "LM-TP194",
    name: "Parante publicitario en acrilico",
    flex: 12,
  },
  {
    id: 193,
    src: require("@/images/otrosproductos/img26.png"),
    code: "LM-TP193",
    name: "Libreta-agenda cuero 100%",
    flex: 12,
  },
  {
    id: 192,
    src: require("@/images/otrosproductos/img27.png"),
    code: "LM-TP192",
    name: "Libreta biodegradable con lapicero y post-it",
    flex: 12,
  },
  {
    id: 191,
    src: require("@/images/otrosproductos/img31.jpg"),
    code: "LM-TP191",
    name: "Vaso en acrílico",
    flex: 12,
  },
  {
    id: 190,
    src: require("@/images/otrosproductos/img32.png"),
    code: "LM-TP190",
    name: "Separador de libros",
    flex: 12,
  },
  {
    id: 189,
    src: require("@/images/otrosproductos/img33.png"),
    code: "LM-TP189",
    name: "Porta documentos y tarjeteros en bio-cuero",
    flex: 12,
  },
  {
    id: 188,
    src: require("@/images/otrosproductos/img34.jpg"),
    code: "LM-TP188",
    name: "Porta tarjetas con filo de metal",
    flex: 12,
  },
  {
    id: 187,
    src: require("@/images/otrosproductos/img35.jpg"),
    code: "LM-TP187",
    name: "Lapicero con impresión",
    flex: 12,
  },
  {
    id: 186,
    src: require("@/images/otrosproductos/img36.jpg"),
    code: "LM-TP186",
    name: "Lápiz ecológico",
    flex: 12,
  },
  {
    id: 185,
    src: require("@/images/otrosproductos/img37.jpg"),
    code: "LM-TP185",
    name: "Lapicero y resaltador con impresión",
    flex: 12,
  },
  {
    id: 184,
    src: require("@/images/otrosproductos/img38.png"),
    code: "LM-TP184",
    name: "Lapicero Inoxcrom con impresión",
    flex: 12,
  },
  {
    id: 183,
    src: require("@/images/otrosproductos/img39.png"),
    code: "LM-TP183",
    name: "Carpeta en bio-cuero con telar",
    flex: 12,
  },
  {
    id: 182,
    src: require("@/images/otrosproductos/img40.jpg"),
    code: "LM-TP182",
    name: "Imprenta y papelería",
    flex: 12,
  },
  {
    id: 181,
    src: require("@/images/otrosproductos/img41.png"),
    code: "LM-TP181",
    name: "Carpeta en cuero 100%",
    flex: 12,
  },
  {
    id: 180,
    src: require("@/images/otrosproductos/img42.png"),
    code: "LM-TP180",
    name: "Portavasos con telar en cuero y bio-cuero con correa para cerrado",
    flex: 12,
  },
  {
    id: 179,
    src: require("@/images/otrosproductos/img43.png"),
    code: "LM-TP179",
    name: "Tarjetero para mesa de bio-cuero con telar",
    flex: 12,
  },
  {
    id: 178,
    src: require("@/images/otrosproductos/img44.png"),
    code: "LM-TP178",
    name: "Monederos en cuero y bio-cuero",
    flex: 12,
  },
  {
    id: 177,
    src: require("@/images/otrosproductos/img45.png"),
    code: "LM-TP177",
    name: "Posavasos con telar en cuero y bio-cuero",
    flex: 12,
  },
  {
    id: 176,
    src: require("@/images/otrosproductos/img46.png"),
    code: "LM-TP176",
    name: "Porta retrato en bio-cuero con telar",
    flex: 12,
  },
  {
    id: 175,
    src: require("@/images/otrosproductos/img47.png"),
    code: "LM-TP175",
    name: "Porta libreta con telar en bio-cuero",
    flex: 12,
  },
  {
    id: 174,
    src: require("@/images/otrosproductos/img48.png"),
    code: "LM-TP174",
    name: "Cartera en cuero con logo interno",
    flex: 12,
  },
  {
    id: 173,
    src: require("@/images/otrosproductos/img49.png"),
    code: "LM-TP173",
    name: "Boligrafo metal con logotipo color",
    flex: 12,
  },
  {
    id: 172,
    src: require("@/images/otrosproductos/img50.png"),
    code: "LM-TP172",
    name: "Vasos en vidrio y acrílico con impresión",
    flex: 12,
  },
  {
    id: 171,
    src: require("@/images/otrosproductos/img51.jpg"),
    code: "LM-TP171",
    name: "Libreta con hojas rayadas",
    flex: 12,
  },
  {
    id: 170,
    src: require("@/images/otrosproductos/img52.png"),
    code: "LM-TP170",
    name: "Libretas en carton con logo impreso",
    flex: 12,
  },
  {
    id: 169,
    src: require("@/images/otrosproductos/img53.png"),
    code: "LM-TP169",
    name: "Posavasos carton duplex con impresión y removedores de acrilico",
    flex: 12,
  },
  {
    id: 168,
    src: require("@/images/otrosproductos/img54.png"),
    code: "LM-TP168",
    name: "Productos en vidrio y vitrofusion",
    flex: 12,
  },
  {
    id: 167,
    src: require("@/images/otrosproductos/img55.png"),
    code: "LM-TP167",
    name: "Bolsa bio-degradable para documentos",
    flex: 12,
  },
  {
    id: 166,
    src: require("@/images/otrosproductos/img56.png"),
    code: "LM-TP166",
    name: "Marco de fotos en cuero",
    flex: 12,
  },
  {
    id: 165,
    src: require("@/images/otrosproductos/img57.png"),
    code: "LM-TP165",
    name: "Libretas papel",
    flex: 12,
  },
  {
    id: 164,
    src: require("@/images/otrosproductos/img58.png"),
    code: "LM-TP164",
    name: "Billetera de cuero",
    flex: 12,
  },
  {
    id: 163,
    src: require("@/images/otrosproductos/img59.png"),
    code: "LM-TP163",
    name: "Carpetas en cuero y bio-cuero con telar y grabado",
    flex: 12,
  },
  {
    id: 162,
    src: require("@/images/otrosproductos/img60.png"),
    code: "LM-TP162",
    name: "Taza térmica",
    flex: 12,
  },
  {
    id: 161,
    src: require("@/images/otrosproductos/img61.png"),
    code: "LM-TP161",
    name: "Identificadores",
    flex: 12,
  },
  {
    id: 160,
    src: require("@/images/otrosproductos/img62.png"),
    code: "LM-TP160",
    name: "Lapiceros metálicos con impresión",
    flex: 12,
  },
  {
    id: 159,
    src: require("@/images/otrosproductos/img63.png"),
    code: "LM-TP159",
    name: "Espejo con peine",
    flex: 12,
  },
  {
    id: 158,
    src: require("@/images/otrosproductos/img64.png"),
    code: "LM-TP158",
    name: "Gel Antibacterial",
    flex: 12,
  },
  {
    id: 157,
    src: require("@/images/otrosproductos/img65.png"),
    code: "LM-TP157",
    name: "Llavero pelota antistress",
    flex: 12,
  },
  {
    id: 156,
    src: require("@/images/otrosproductos/img66.png"),
    code: "LM-TP156",
    name: "Llavero metal y cuero",
    flex: 12,
  },
  {
    id: 155,
    src: require("@/images/otrosproductos/img67.png"),
    code: "LM-TP155",
    name: "Tarjetero para celular en silicona",
    flex: 12,
  },
  {
    id: 154,
    src: require("@/images/otrosproductos/img68.png"),
    code: "LM-TP154",
    name: "Tarjetero para celular en silicona",
    flex: 12,
  },
  {
    id: 153,
    src: require("@/images/otrosproductos/img69.png"),
    code: "LM-TP153",
    name: "Lápices colores",
    flex: 12,
  },
  {
    id: 152,
    src: require("@/images/otrosproductos/img70.jpg"),
    code: "LM-TP152",
    name: "Taza con impresión a un color",
    flex: 12,
  },
  {
    id: 151,
    src: require("@/images/otrosproductos/img71.png"),
    code: "LM-TP151",
    name: "Taza con impresión full color",
    flex: 12,
  },
  {
    id: 150,
    src: require("@/images/otrosproductos/img72.png"),
    code: "LM-TP150",
    name: "Pins publicitarios",
    flex: 12,
  },
  {
    id: 149,
    src: require("@/images/otrosproductos/img73.png"),
    code: "LM-TP149",
    name: "Pin publicitario",
    flex: 12,
  },
  {
    id: 148,
    src: require("@/images/otrosproductos/img74.png"),
    code: "LM-TP148",
    name: "Lapicero en metal",
    flex: 12,
  },

  {
    id: 147,
    src: require("@/images/otrosproductos/img75.png"),
    code: "LM-TP147",
    name: "Lápices de colores con tajador",
    flex: 12,
  },
  {
    id: 146,
    src: require("@/images/otrosproductos/img76.png"),
    code: "LM-TP146",
    name: "Lapiceros con impresión",
    flex: 12,
  },

  {
    id: 145,
    src: require("@/images/otrosproductos/img77.png"),
    code: "LM-TP145",
    name: "Casco antistress con impresión",
    flex: 12,
  },
  {
    id: 144,
    src: require("@/images/otrosproductos/img78.png"),
    code: "LM-TP144",
    name: "Lapicero de madera con impresión",
    flex: 12,
  },
  {
    id: 143,
    src: require("@/images/otrosproductos/img79.png"),
    code: "LM-TP143",
    name: "Aceite aromático",
    flex: 12,
  },
  {
    id: 142,
    src: require("@/images/otrosproductos/img80.png"),
    code: "LM-TP141",
    name: "Cuaderno en cuero repujado",
    flex: 12,
  },
  {
    id: 141,
    src: require("@/images/otrosproductos/img81.png"),
    code: "LM-TP141",
    name: "Gel antibacterial con etiqueta de empresa",
    flex: 12,
  },
  {
    id: 140,
    src: require("@/images/otrosproductos/img82.png"),
    code: "LM-TP140",
    name: "Bloqueador con etiqueta impresa",
    flex: 12,
  },
  {
    id: 139,
    src: require("@/images/otrosproductos/img83.png"),
    code: "LM-TP139",
    name: "Repelente con etiqueta impresa",
    flex: 12,
  },
  {
    id: 138,
    src: require("@/images/otrosproductos/img84.png"),
    code: "LM-TP138",
    name: "Ekeko en cobre con logo",
    flex: 12,
  },
  {
    id: 137,
    src: require("@/images/otrosproductos/img85.png"),
    code: "LM-TP137",
    name: "Lapicero con logo impreso",
    flex: 12,
  },
  {
    id: 136,
    src: require("@/images/otrosproductos/img86.png"),
    code: "LM-TP136",
    name: "Posavaso con logo impreso",
    flex: 12,
  },
  {
    id: 135,
    src: require("@/images/otrosproductos/img87.png"),
    code: "LM-TP135",
    name: "Tarjetero en cobre con logo",
    flex: 12,
  },
  {
    id: 134,
    src: require("@/images/otrosproductos/img88.png"),
    code: "LM-TP134",
    name: "Libreta con impresión",
    flex: 12,
  },
  {
    id: 133,
    src: require("@/images/otrosproductos/img89.png"),
    code: "LM-TP133",
    name: "Carpeta en bio-cuero con impresión",
    flex: 12,
  },
  {
    id: 132,
    src: require("@/images/otrosproductos/img90.png"),
    code: "LM-TP132",
    name: "Carpeta en bio-cuero con repujado",
    flex: 12,
  },
  {
    id: 131,
    src: require("@/images/otrosproductos/img91.png"),
    code: "LM-TP131",
    name: "Taza con diseño",
    flex: 12,
  },
  {
    id: 130,
    src: require("@/images/otrosproductos/img92.png"),
    code: "LM-TP130",
    name: "Monedero en material de neopreno",
    flex: 12,
  },
  {
    id: 129,
    src: require("@/images/otrosproductos/img93.png"),
    code: "LM-TP129",
    name: "Libretas de cuerina",
    flex: 12,
  },
  {
    id: 128,
    src: require("@/images/otrosproductos/img94.png"),
    code: "LM-TP128",
    name: "Libreta biocuero con telar",
    flex: 12,
  },
  {
    id: 127,
    src: require("@/images/otrosproductos/img95.png"),
    code: "LM-TP127",
    name: "Lapiceros porta celular",
    flex: 12,
  },
  {
    id: 126,
    src: require("@/images/otrosproductos/img96.jpg"),
    code: "LM-TP126",
    name: "Cuadro de premiación",
    flex: 12,
  },
  {
    id: 125,
    src: require("@/images/otrosproductos/img97.png"),
    code: "LM-TP125",
    name: "Cuadernos Lego",
    flex: 12,
  },
  {
    id: 124,
    src: require("@/images/otrosproductos/img98.png"),
    code: "LM-TP124",
    name: "Cuaderno Puzzle",
    flex: 12,
  },
  {
    id: 123,
    src: require("@/images/otrosproductos/img99.png"),
    code: "LM-TP123",
    name: "Eco Maceta ecológico con logo en caja",
    flex: 12,
  },
  {
    id: 122,
    src: require("@/images/otrosproductos/img100.jpg"),
    code: "LM-TP122",
    name: "Botella de aluminio y colgador",
    flex: 12,
  },
  {
    id: 121,
    src: require("@/images/otrosproductos/img101.png"),
    code: "LM-TP121",
    name: "Agendas variadas",
    flex: 12,
  },
  {
    id: 120,
    src: require("@/images/otrosproductos/img102.png"),
    code: "LM-TP120",
    name: "Pulsera regla en plástico con metal para imprimir",
    flex: 12,
  },
  {
    id: 119,
    src: require("@/images/otrosproductos/img103.png"),
    code: "LM-TP119",
    name: "Llavero en metal",
    flex: 12,
  },
  {
    id: 118,
    src: require("@/images/otrosproductos/img104.png"),
    code: "LM-TP118",
    name: "Foco antistress",
    flex: 12,
  },
  {
    id: 117,
    src: require("@/images/otrosproductos/img105.png"),
    code: "LM-TP117",
    name: "Monedero en 100% cuero",
    flex: 12,
  },
  {
    id: 116,
    src: require("@/images/otrosproductos/img1.png"),
    name: "Mug de Fibra de Trigo",
    code: "LM-TP116",
    flex: 12,
  },
  {
    id: 115,
    src: require("@/images/otrosproductos/img2.png"),
    code: "LM-TP115",
    name: "Arte Urbano de cemento",
    flex: 12,
  },
  {
    id: 114,
    src: require("@/images/otrosproductos/img3.png"),
    code: "LM-TP114",
    name: "Set parrillero portatil",
    flex: 12,
  },
  {
    id: 113,
    src: require("@/images/otrosproductos/img4.png"),
    code: "LM-TP113",
    name: "Libreta de tela y cuerina",
    flex: 12,
  },
  {
    id: 112,
    src: require("@/images/otrosproductos/img5.png"),
    code: "LM-TP112",
    name: "Tomatodo de fibra de trigo ecológico",
    flex: 12,
  },
  {
    id: 111,
    src: require("@/images/otrosproductos/img6.png"),
    code: "LM-TP111",
    name: "Neceser multiusos de poliester",
    flex: 12,
  },
  {
    id: 110,
    src: require("@/images/otrosproductos/img7.jpg"),
    code: "LM-TP110",
    name: "Mug de Fibra de Trigo",
    flex: 12,
  },
  {
    id: 109,
    src: require("@/images/otrosproductos/img28.png"),
    code: "LM-TP109",
    name: "Libreta biodegradable papel bond con lapicero y Post-it",
    flex: 12,
  },
  {
    id: 108,
    src: require("@/images/otrosproductos/img29.png"),
    code: "LM-TP108",
    name: "Libreta biodegradable",
    flex: 12,
  },
  {
    id: 107,
    src: require("@/images/otrosproductos/img107.png"),
    name: "Lápiz natural con impresión a un color",
    code: "LM-TP107",
    flex: 12,
  },
  {
    id: 106,
    src: require("@/images/textiles/img1.png"),
    name: "Mochila ecólogica en algodon y yute",
    code: "LM-TP106",
    flex: 12,
  },
  {
    id: 105,
    src: require("@/images/textiles/img3.png"),
    code: "LM-TP105",
    name: "Chalina con bordado",
    flex: 12,
  },
  {
    id: 104,
    src: require("@/images/textiles/img4.png"),
    code: "LM-TP104",
    name: "Bolsa reciclable con estampado",
    flex: 12,
  },
  {
    id: 103,
    src: require("@/images/textiles/img5.png"),
    code: "LM-TP103",
    name: "Polo 100% algodón con estampado  con impresion fluorescente",
    flex: 12,
  },
  {
    id: 102,
    src: require("@/images/textiles/img6.png"),
    code: "LM-TP102",
    name: "Mochila en jersey con estampado",
    flex: 12,
  },
  {
    id: 101,
    src: require("@/images/textiles/img7.png"),
    code: "LM-TP101",
    name: "Gorra con tapa cuello y bordado",
    flex: 12,
  },
  {
    id: 100,
    src: require("@/images/textiles/img8.jpg"),
    code: "LM-TP100",
    name: "Bolsa de algodón con estampado",
    flex: 12,
  },
  {
    id: 99,
    src: require("@/images/textiles/img9.jpg"),
    code: "LM-TP099",
    name: "Polo algodón pima 100% con bordado",
    flex: 12,
  },
  {
    id: 98,
    src: require("@/images/textiles/img10.jpg"),
    code: "LM-TP098",
    name: "chaleco en drill nuevo mundo con bordados",
    flex: 12,
  },
  {
    id: 97,
    src: require("@/images/textiles/img11.png"),
    code: "LM-TP097",
    name: "Polo en jersey lycra con bordado",
    flex: 12,
  },
  {
    id: 96,
    src: require("@/images/textiles/img12.png"),
    code: "LM-TP096",
    name: "Gorra en jersey color azul",
    flex: 12,
  },

  {
    id: 95,
    src: require("@/images/textiles/img13.png"),
    code: "LM-TP095",
    name: "Gorra en jersey 100% con estampado",
    flex: 12,
  },
  {
    id: 94,
    src: require("@/images/textiles/img14.jpg"),
    code: "LM-TP094",
    name: "Polo en algodón pique 100% con bordado",
    flex: 12,
  },
  {
    id: 93,
    src: require("@/images/textiles/img15.png"),
    code: "LM-TP093",
    name: "Polo en algodón pima 100% con bordado",
    flex: 12,
  },
  {
    id: 92,
    src: require("@/images/textiles/img16.jpg"),
    code: "LM-TP092",
    name: "Polos en algodón piqué y pima con bordado",
    flex: 12,
  },
  {
    id: 91,
    src: require("@/images/textiles/img17.png"),
    code: "LM-TP091",
    name: "Sombrero en algodón con bordado",
    flex: 12,
  },
  {
    id: 90,
    src: require("@/images/textiles/img18.png"),
    code: "LM-TP090",
    name: "Gorra-visera con bordados",
    flex: 12,
  },
  {
    id: 90,
    src: require("@/images/textiles/img19.png"),
    code: "LM-TP089",
    name: "Polo en jersey con bordado",
    flex: 12,
  },
  {
    id: 89,
    src: require("@/images/textiles/img20.png"),
    code: "LM-TP089",
    name: "Casaca en algodón con jersey lycra",
    flex: 12,
  },
  {
    id: 88,
    src: require("@/images/textiles/img21.png"),
    code: "LM-TP088",
    name: "Polo 100% algodón con estampado full color",
    flex: 12,
  },
  {
    id: 87,
    src: require("@/images/textiles/img22.png"),
    code: "LM-TP087",
    name: "Camisa en algodón con bordado",
    flex: 12,
  },
  {
    id: 86,
    src: require("@/images/textiles/img23.png"),
    code: "LM-TP086",
    name: "Casaca Reflectiva",
    flex: 12,
  },
  {
    id: 85,
    src: require("@/images/textiles/img24.png"),
    code: "LM-TP085",
    name: "Bolsa de botella biodegradable",
    flex: 12,
  },
  {
    id: 84,
    src: require("@/images/textiles/img25.jpg"),
    code: "LM-TP084",
    name: "Bolsa reciclable con estampado",
    flex: 12,
  },
  {
    id: 83,
    src: require("@/images/textiles/img26.png"),
    code: "LM-TP083",
    name: "Maletin en tela impermeable",
    flex: 12,
  },
  {
    id: 82,
    src: require("@/images/textiles/img27.png"),
    code: "LM-TP082",
    name: "Bolsa biodegradable con impresión",
    flex: 12,
  },
  {
    id: 81,
    src: require("@/images/textiles/img28.png"),
    code: "LM-TP081",
    name: "Bolsa en tocuyo con estampado",
    flex: 12,
  },
  {
    id: 80,
    src: require("@/images/textiles/img29.png"),
    code: "LM-TP080",
    name: "bolsa biodegradable",
    flex: 12,
  },
  {
    id: 79,
    src: require("@/images/textiles/img30.png"),
    code: "LM-TP079",
    name: "Bolsa publicitaria",
    flex: 12,
  },
  {
    id: 78,
    src: require("@/images/textiles/img31.png"),
    code: "LM-TP078",
    name: "Maletin/mochila porta laptop",
    flex: 12,
  },
  {
    id: 77,
    src: require("@/images/textiles/img32.jpg"),
    code: "LM-TP077",
    name: "Mochilas con bordados y bolsillo interno portalaptop",
    flex: 12,
  },
  {
    id: 76,
    src: require("@/images/textiles/img33.png"),
    code: "LM-TP076",
    name: "Bolsa reciclable con estampado",
    flex: 12,
  },
  {
    id: 75,
    src: require("@/images/textiles/img34.png"),
    code: "LM-TP075",
    name: "Mandil en tela con bordado",
    flex: 12,
  },
  {
    id: 74,
    src: require("@/images/textiles/img35.png"),
    code: "LM-TP074",
    name: "Neceser en diseño  con productos exclusivos",
    flex: 12,
  },
  {
    id: 73,
    src: require("@/images/textiles/img36.png"),
    code: "LM-TP073",
    name: "Maletin de tela con llavero impreso",
    flex: 12,
  },
  {
    id: 72,
    src: require("@/images/textiles/img37.png"),
    code: "LM-TP072",
    name: "Bolsa porta botella en tela",
    flex: 12,
  },
  {
    id: 71,
    src: require("@/images/textiles/img38.png"),
    code: "LM-TP071",
    name: "Bolsa en tela con impresión",
    flex: 12,
  },
  {
    id: 70,
    src: require("@/images/textiles/img39.png"),
    code: "LM-TP070",
    name: "Bolsa sobre - Notex",
    flex: 12,
  },
  {
    id: 69,
    src: require("@/images/textiles/img40.png"),
    code: "LM-TP069",
    name: "Mochila Porta laptop y correa",
    flex: 12,
  },
  {
    id: 68,
    src: require("@/images/textiles/img41.png"),
    code: "LM-TP068",
    name: "Chaleco Mochila espalda",
    flex: 12,
  },
  {
    id: 67,
    src: require("@/images/textiles/img42.png"),
    code: "LM-TP067",
    name: "Chaleco Mochila delantero",
    flex: 12,
  },
  {
    id: 66,
    src: require("@/images/textiles/img43.png"),
    code: "LM-TP066",
    name: "Polo Perú Algodón",
    flex: 12,
  },
  {
    id: 65,
    src: require("@/images/textiles/img44.png"),
    code: "LM-TP065",
    name: "Polo Rusia Algodón",
    flex: 12,
  },
  {
    id: 64,
    src: require("@/images/textiles/img45.png"),
    code: "LM-TP064",
    name: "Bolsa con cartuchera con cierre",
    flex: 12,
  },
  {
    id: 63,
    src: require("@/images/textiles/img46.jpg"),
    code: "LM-TP063",
    name: "Porta computadora o Tablet de telar",
    flex: 12,
  },
  {
    id: 62,
    src: require("@/images/textiles/img47.png"),
    name: "Casaca Impermeable",
    code: "LM-TP062",
    flex: 12,
  },
  {
    id: 61,
    src: require("@/images/textiles/img2.png"),
    code: "LM-TP061",
    name: "Gorro con bordado",
    flex: 12,
  },
  {
    id: 60,
    src: require("@/images/tecnologia/img1.png"),
    name: "Audifonos Inalámbricos",
    code: "LM-TP060",
    flex: 12,
  },
  {
    id: 59,
    src: require("@/images/tecnologia/img2.png"),
    name: "Set diapositivas con punteros",
    code: "LM-TP059",
    flex: 12,
  },
  {
    id: 58,
    src: require("@/images/tecnologia/img3.png"),
    name: "USB Pulsera",
    code: "LM-TP058",
    flex: 12,
  },
  {
    id: 57,
    src: require("@/images/tecnologia/img4.png"),
    name: "Parlante Rectangular",
    code: "LM-TP057",
    flex: 12,
  },
  {
    id: 56,
    src: require("@/images/tecnologia/img5.png"),
    name: "Balanza Maletas",
    code: "LM-TP056",
    flex: 12,
  },
  {
    id: 55,
    src: require("@/images/tecnologia/img6.png"),
    name: "Parlante Madera",
    code: "LM-TP055",
    flex: 12,
  },
  {
    id: 54,
    src: require("@/images/tecnologia/img7.png"),
    name: "Parlante Metal",
    code: "LM-TP054",
    flex: 12,
  },
  {
    id: 53,
    src: require("@/images/tecnologia/img8.png"),
    name: "USB",
    code: "LM-TP053",
    flex: 12,
  },
  {
    id: 52,
    src: require("@/images/tecnologia/img9.png"),
    name: "Lapicero USB",
    code: "LM-TP052",
    flex: 12,
  },
  {
    id: 51,
    src: require("@/images/tecnologia/img10.png"),
    name: "Minero USB",
    code: "LM-TP051",
    flex: 12,
  },
  {
    id: 50,
    src: require("@/images/tecnologia/img11.jpg"),
    name: "USB Tarjeta",
    code: "LM-TP050",
    flex: 12,
  },
  {
    id: 49,
    src: require("@/images/tecnologia/img12.png"),
    name: "Auricular modelo teléfono",
    code: "LM-TP049",
    flex: 12,
  },
  {
    id: 48,
    src: require("@/images/tecnologia/img13.png"),
    name: "Parlante en colores",
    code: "LM-TP048",
    flex: 12,
  },
  {
    id: 47,
    src: require("@/images/tecnologia/img14.png"),
    name: "Audifonos directos",
    code: "LM-TP047",
    flex: 12,
  },
  {
    id: 46,
    src: require("@/images/tecnologia/img15.png"),
    name: "Audifonos para colocar en cabeza",
    code: "LM-TP046",
    flex: 12,
  },
  {
    id: 45,
    src: require("@/images/tecnologia/img16.png"),
    name: "Power Bank Slim",
    code: "LM-TP045",
    flex: 12,
  },
  {
    id: 44,
    src: require("@/images/tecnologia/img17.png"),
    name: "Camión USB de 8gb",
    code: "LM-TP044",
    flex: 12,
  },
  {
    id: 43,
    src: require("@/images/tecnologia/img18.png"),
    name: "USB Llave",
    code: "LM-TP043",
    flex: 12,
  },
  {
    id: 42,
    src: require("@/images/tecnologia/img19.png"),
    name: "USB con impresión",
    code: "LM-TP042",
    flex: 12,
  },
  {
    id: 41,
    src: require("@/images/tecnologia/img20.png"),
    name: "USB de madera con llavero",
    code: "LM-TP041",
    flex: 12,
  },
  {
    id: 40,
    src: require("@/images/despensa/img1.png"),
    name: "Brownies de chocolate",
    code: "LM-TP040",
    flex: 12,
  },
  {
    id: 39,
    src: require("@/images/despensa/img2.jpg"),
    name: "Brownies corazón",
    code: "LM-TP039",
    flex: 12,
  },
  {
    id: 38,
    src: require("@/images/despensa/img3.png"),
    name: "Caja con grabado",
    code: "LM-TP038",
    flex: 12,
  },
  {
    id: 37,
    src: require("@/images/despensa/img4.jpg"),
    name: "Caja con lazo de tela",
    code: "LM-TP037",
    flex: 12,
  },
  {
    id: 36,
    src: require("@/images/despensa/img5.png"),
    name: "Porta botella en bio-cuero",
    code: "LM-TP036",
    flex: 12,
  },
  {
    id: 35,
    src: require("@/images/despensa/img6.png"),
    name: "Porta botella en cuero con asa de metal",
    code: "LM-TP035",
    flex: 12,
  },
  {
    id: 34,
    src: require("@/images/despensa/img7.png"),
    name: "Caja blanca con lazo",
    code: "LM-TP034",
    flex: 12,
  },
  {
    id: 33,
    src: require("@/images/despensa/img8.jpg"),
    name: "Macerado de pisco de diferentes sabores",
    code: "LM-TP033",
    flex: 12,
  },
  {
    id: 32,
    src: require("@/images/despensa/img9.jpg"),
    name: "Bolsa pequeña con dulces e impresión",
    code: "LM-TP032",
    flex: 12,
  },
  {
    id: 31,
    src: require("@/images/despensa/img10.jpg"),
    name: "Macerado de pisco",
    code: "LM-TP031",
    flex: 12,
  },
  {
    id: 30,
    src: require("@/images/despensa/img11.png"),
    name: "Postre con Etiqueta en Envase",
    code: "LM-TP030",
    flex: 12,
  },
  {
    id: 29,
    src: require("@/images/regalos/img3.jpg"),
    name: "Caja de regalo de artista invitado José Carlos Tassara ",
    code: "LM-TP029",
    flex: 12,
  },
  {
    id: 28,
    src: require("@/images/regalos/img1.jpg"),
    name: "Caja de regalo con copa personalizada y más regalos",
    code: "LM-TP028",
    flex: 12,
  },
  {
    id: 27,
    src: require("@/images/regalos/img2.jpg"),
    name: "Caja de regalo con detalle de cactus y más regalos",
    code: "LM-TP027",
    flex: 12,
  },

  {
    id: 26,
    src: require("@/images/regalos/img4.jpg"),
    name: "Caja de regalo con botella de Perú y más regalos",
    code: "LM-TP026",
    flex: 12,
  },
  {
    id: 25,
    src: require("@/images/regalos/img5.jpg"),
    name: "Caja de regalo para oficina",
    code: "LM-TP025",
    flex: 12,
  },
  {
    id: 24,
    src: require("@/images/regalos/img6.jpg"),
    name: "Caja de regalo con frutos secos y planta y más regalos",
    code: "LM-TP024",
    flex: 12,
  },
  {
    id: 23,
    src: require("@/images/regalos/img7.jpg"),
    name: "Caja de regalo con botella de vino y más regalos",
    code: "LM-TP023",
    flex: 12,
  },
  {
    id: 21,
    src: require("@/images/regalos/img9.jpg"),
    name: "Caja de regalo con botella de whisky, libro y más regalos",
    code: "LM-TP022",
    flex: 12,
  },
  {
    id: 20,
    src: require("@/images/regalos/img8.jpg"),
    name: "Caja de regalo con cafetera y más regalos",
    code: "LM-TP020",
    flex: 12,
  },
  {
    id: 19,
    src: require("@/images/regalos/img10.jpg"),
    name: "Caja de regalo con chalina de baby alpaca y más regalos",
    code: "LM-TP019",
    flex: 12,
  },
  {
    id: 18,
    src: require("@/images/regalos/img11.jpg"),
    name: "Caja de regalo con portaretrato y más regalos",
    code: "LM-TP018",
    flex: 12,
  },
  {
    id: 17,
    src: require("@/images/regalos/img12.jpg"),
    name: "Caja de regalo con botella de vino y más regalos",
    code: "LM-TP017",
    flex: 12,
  },
  {
    id: 16,
    src: require("@/images/regalos/img15.jpg"),
    name: "Caja de regalo con chalina 100% alpaca y más regalos",
    code: "LM-TP016",
    flex: 12,
  },
  {
    id: 15,
    src: require("@/images/regalos/img14.jpg"),
    name: "Caja de regalo cerrada con cinta y un ramo de flores",
    code: "LM-TP015",
    flex: 12,
  },
  {
    id: 14,
    src: require("@/images/regalos/img13.jpg"),
    name: "Caja de regalo cerrada con cinta y dos ramos de flores",
    code: "LM-TP014",
    flex: 12,
  },
  {
    id: 13,
    src: require("@/images/higiene/img1.png"),
    name: "Cepillos Bambu",
    code: "LM-TP013",
    flex: 12,
  },
  {
    id: 12,
    src: require("@/images/higiene/img2.png"),
    name: "Alcohol en Gel",
    code: "LM-TP012",
    flex: 12,
  },
  {
    id: 11,
    src: require("@/images/higiene/img3.png"),
    name: "Botas Plasticas",
    code: "LM-TP011",
    flex: 12,
  },
  {
    id: 10,
    src: require("@/images/higiene/img4.png"),
    name: "Cabina Desinfectante",
    code: "LM-TP010",
    flex: 12,
  },
  {
    id: 9,
    src: require("@/images/higiene/img5.png"),
    name: "Guantes",
    code: "LM-TP009",
    flex: 12,
  },
  {
    id: 8,
    src: require("@/images/higiene/img6.png"),
    name: "Identificador",
    code: "LM-TP008",
    flex: 12,
  },
  {
    id: 7,
    src: require("@/images/higiene/img7.png"),
    name: "Impremeable para Zapatos",
    code: "LM-TP007",
    flex: 12,
  },
  {
    id: 6,
    src: require("@/images/higiene/img8.png"),
    name: "Kit Calzado",
    code: "LM-TP006",
    flex: 12,
  },
  {
    id: 5,
    src: require("@/images/higiene/img9.png"),
    name: "Lentes protectores",
    code: "LM-TP005",
    flex: 12,
  },
  {
    id: 4,
    src: require("@/images/higiene/img10.png"),
    name: "Mascarilla Cubre Rostro",
    code: "LM-TP004",
    flex: 12,
  },
  {
    id: 3,
    src: require("@/images/higiene/img11.png"),
    name: "Mascarillas",
    code: "LM-TP003",
    flex: 12,
  },
  {
    id: 2,
    src: require("@/images/higiene/img12.png"),
    name: "Pulverizador con fácil movilidad",
    code: "LM-TP002",
    flex: 12,
  },
  {
    id: 1,
    src: require("@/images/higiene/img13.png"),
    name: "Overol antibacterial",
    code: "LM-TP001",
    flex: 12,
  },
];

export { allListProducts };

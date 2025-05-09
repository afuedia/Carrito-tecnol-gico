const productos = [
  {
    id: 1,
    nombre: "Laptop Asus Vivobook 15",
    categoria: "Laptop",
    precio: 750,
    imagen:
      "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202312/07/00115215596261____1__1200x1200.jpg",
    descripcion:
      "Portatil asus vivobook con procesador amd ryzen 5 y pantalla full hd.",
    caracteristicas: [
      "Procesador amd ryzen 5",
      "8gb ram",
      "256gb ssd",
      "pantalla 15.6 pulgadas full hd",
    ],
  },
  {
    id: 2,
    nombre: "Smartphone Samsung Galaxy s23",
    categoria: "Smartphones",
    precio: 999,
    imagen:
      "https://www.pascualmarti.es/rep/423b/1636779040/203/smartphone-samsung-s23-8256-61quot-black.jpg",
    descripcion:
      "Telefono de alta gama con camara de 50mp y pantalla amoled de 6.1 pulgadas.",
    caracteristicas: [
      "Pantalla 6.1 pulgadas amoled",
      "camara 50mp",
      "bateria 3900mah",
      "8gb ram",
      "256gb almacenamiento",
    ],
  },
  {
    id: 3,
    nombre: "Monitor lg ultragear 27",
    categoria: "Monitores",
    precio: 320,
    imagen: "https://www.coolmod.com/images/product/large/PROD-036680_1.jpg",
    descripcion:
      "Monitor gamer de 27 pulgadas con tasa de refresco de 144hz y 1ms de respuesta.",
    caracteristicas: [
      "Pantalla ips 27 pulgadas",
      "144hz",
      "1ms tiempo de respuesta",
      "resolucion 2560x1440",
    ],
  },
  {
    id: 4,
    nombre: "Teclado mecanico logitech g pro",
    categoria: "Teclado",
    precio: 129,
    imagen:
      "https://corporativo.tecnoplaza.com.co/wp-content/uploads/2020/09/Teclado-Mecanico-Gamer-Logitech-G-Pro-600x600.jpg",
    descripcion:
      "Teclado compacto para gaming con switches gx blue y retroiluminacion rgb.",
    caracteristicas: [
      "switches gx blue",
      "retroiluminacion rgb",
      "conexion usb",
      "factor de forma compacto",
    ],
  },
  {
    id: 5,
    nombre: "Mouse razer deathadder v2",
    categoria: "Ratones",
    precio: 59,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoW-NFAEsbcTvWA-9aAtapYu1B04EHdVvgmQ&s",
    descripcion: "Mouse ergonomico para gaming con sensor optico de 20k dpi.",
    caracteristicas: [
      "sensor optico 20k dpi",
      "ergonomico",
      "iluminacion rgb",
      "conexion usb",
    ],
  },
  {
    id: 6,
    nombre: "Tablet apple ipad air 5",
    categoria: "Tablets",
    precio: 599,
    imagen:
      "https://rossellimac.es/cdn/shop/files/iPad_Air_Cellular_Space_Gray_PDP_Image_Position-1a_5G__ESES_5bfb1f98-c420-4836-8175-089295c24b03.jpg?v=1689071658&width=823",
    descripcion:
      "Tablet con chip m1 y pantalla liquid retina de 10.9 pulgadas.",
    caracteristicas: [
      "chip m1",
      "pantalla liquid retina 10.9 pulgadas",
      "compatible con apple pencil",
      "usb-c",
    ],
  },
  {
    id: 7,
    nombre: "Auriculares Sony wh-1000xm4",
    categoria: "Auriculares",
    precio: 349,
    imagen:
      "https://media.ldlc.com/r1600/ld/products/00/05/89/88/LD0005898839_1.jpg",
    descripcion: "Auriculares inalambricos con cancelacion de ruido activa.",
    caracteristicas: [
      "cancelacion de ruido",
      "bateria 30h",
      "bluetooth 5.0",
      "carga rapida usb-c",
    ],
  },
  {
    id: 8,
    nombre: "Smartwatch samsung galaxy watch 5",
    categoria: "Smartwatch",
    precio: 279,
    imagen:
      "https://www.yaphone.com/5212-thickbox_default/samsung-galaxy-watch-5.jpg",
    descripcion:
      "Reloj inteligente con sensor de frecuencia cardiaca y gps integrado.",
    caracteristicas: [
      "pantalla amoled",
      "gps integrado",
      "medidor de oxigeno en sangre",
      "bateria 24h",
    ],
  },
  {
    id: 9,
    nombre: "Cargador inalambrico Belkin Boost Up",
    categoria: "Cargadores",
    precio: 45,
    imagen: "https://m.media-amazon.com/images/I/61HNSwSlYvL.jpg",
    descripcion: "Cargador rapido inalambrico compatible con iphone y android.",
    caracteristicas: [
      "carga rapida 15w",
      "compatible con magsafe",
      "usb-c",
      "diseño compacto",
    ],
  },
  {
    id: 10,
    nombre: "Disco ssd samsung 980 pro 1tb",
    categoria: "Disco ssd",
    precio: 179,
    imagen: "https://thumb.pccomponentes.com/w-530-530/articles/79/792656/3605-samsung-980-pro-1tb-ssd-pcie-40-nvme-m2-con-disipador-de-calor-mejor-precio.jpg",
    descripcion:
      "Unidad de almacenamiento nvme de alta velocidad con tecnologia pcie 4.0.",
    caracteristicas: [
      "capacidad 1tb",
      "velocidad 7000mb/s",
      "tecnologia pcie 4.0",
      "factor de forma m.2",
    ],
  },
  {
    id: 11,
    nombre: "Camara web logitech c920",
    categoria: "Camaras web",
    precio: 89,
    imagen: "https://i.ebayimg.com/images/g/k1kAAOSw-k9mYVzO/s-l1200.jpg",
    descripcion: "Camara web full hd 1080p con microfono integrado.",
    caracteristicas: [
      "resolucion 1080p",
      "microfono integrado",
      "conexion usb",
      "campo de vision 78°",
    ],
  },
  {
    id: 12,
    nombre: "Impresora hp deskjet 4155e",
    categoria: "Impresoras",
    precio: 129,
    imagen: "https://m.media-amazon.com/images/I/51zufECQVaL.jpg",
    descripcion:
      "Impresora multifuncional con conexion wifi y compatible con hp instant ink.",
    caracteristicas: [
      "impresion inalambrica",
      "escaneo y copiado",
      "compatible con hp instant ink",
      "wifi",
    ],
  },
  {
    
    id: 13,
    nombre: "Altavoces bluetooth jbl flip 6",
    categoria: "Altavoces",
    precio: 119,
    imagen: "https://media.ldlc.com/r1600/ld/products/00/05/96/55/LD0005965586.jpg",
    descripcion:
      "Altavoz portatil con sonido potente y resistencia al agua ip67.",
    caracteristicas: [
      "bluetooth 5.1",
      "resistencia al agua ip67",
      "bateria 12h",
      "sonido estereo",
    ],
  },
  {
    id: 14,
    nombre: "Tarjeta grafica nvidia rtx 3060",
    categoria: "Tarjetas gráfica",
    precio: 349,
    imagen: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_100541854?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
    descripcion: "Gpu para gaming con 12gb de vram y arquitectura ampere.",
    caracteristicas: [
      "12gb gddr6",
      "ray tracing",
      "hdmi y displayport",
      "arquitectura ampere",
    ],
  },
  {
    id: 15,
    nombre: "Router tp-link archer ax73",
    categoria: "Routers",
    precio: 159,
    imagen: "https://tiendaselectron.com/126972-large_default/router-tp-link-archer-ax53-ax3000.jpg",
    descripcion:
      "Router wifi 6 con tecnologia de doble banda y velocidad de hasta 5400 mbps.",
    caracteristicas: [
      "wifi 6",
      "doble banda",
      "velocidad 5400mbps",
      "6 antenas externas",
    ],
  },
  {
    id: 16,
    nombre: "Silla gamer Dxracer formula",
    categoria: "Sillas gamer",
    precio: 299,
    imagen: "https://m.media-amazon.com/images/I/712UqX-KrxL.jpg",
    descripcion:
      "Silla ergonomica para gaming con reposabrazos ajustables y soporte lumbar.",
    caracteristicas: [
      "ajuste de altura",
      "reclinable",
      "reposabrazos 3d",
      "soporte lumbar",
    ],
  },
  {
    id: 17,
    nombre: "Microfono rode nt-usb",
    categoria: "Micrófonos",
    precio: 169,
    imagen: "https://www.muslands.com/311-thickbox_default/rode-microfono-estudio-usb-nt-usb.jpg",
    descripcion:
      "Microfono usb con calidad de estudio y patron polar cardioide.",
    caracteristicas: [
      "conectividad usb",
      "patron cardioide",
      "filtro antipop",
      "compatible con pc y mac",
    ],
  },
  {
    id: 18,
    nombre: "Consola Playstation 5",
    categoria: "Consolas",
    precio: 499,
    imagen: "https://media.direct.playstation.com/is/image/psdglobal/PS5-digital-edition-console-side-recert",
    descripcion:
      "Consola de videojuegos con tecnologia de ray tracing y 825gb de ssd.",
    caracteristicas: [
      "gpu amd rdna 2",
      "ssd 825gb",
      "4k hdr",
      "compatible con juegos ps4",
    ],
  },
  {
    id: 19,
    nombre: "Kit luces led Nanoleaf shapes",
    categoria: "Luces",
    precio: 199,
    imagen: "https://m.media-amazon.com/images/I/611iYn7WUBL._AC_UF894,1000_QL80_.jpg",
    descripcion:
      "Paneles led inteligentes personalizables con control por app y voz.",
    caracteristicas: [
      "control por app",
      "compatible con alexa y google home",
      "rgb",
      "sincronizacion con musica",
    ],
  },
];

export default function getAllProducts() {
    return productos
}

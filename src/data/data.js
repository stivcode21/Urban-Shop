import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";

import bgslider1 from "../assets/slider-bg1.png";
import bgslider2 from "../assets/slider-bg2.png";
import bgslider3 from "../assets/slider-bg3.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Juega con Nike eléctrica",
  subtitle: "Adapt 2.0 Sneakers",
  img: heroimg,
  btntext: "Explorar Producto",
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
  ],
};

const popularsales = {
  title: "Ventas Populares",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "MEN Zapatos deportivos",
      rating: "4.9",
      btn: "Comprar Ahora",
      img: psale2,
      price: "200.000",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "MEN Zapatos Deportivos",
      rating: "4.5",
      btn: "Comprar Ahora",
      img: psale1,
      price: "190.000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: psale3,
      price: "210.000",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "PREVENTA",
  title: "NIKE AIR CON OPCIONES ILIMITADAS",
  text: "Nuestro Propósito es hacer avanzar al mundo. Actuamos construyendo comunidad, protegiendo nuestro planeta y aumentando el acceso al deporte.",
  btn: "Explorar Producto",
  url: "/",
  img: hightlightimg,
};

const sneaker = {
  heading: "PROMOCION",
  title: "ZAPATILLAS NIKE ZAPATOS AIR LANZAMIENTO",
  text: "El resplandor vive en los zapatos Nike Air Lancing, le dan un nuevo giro a lo que mejor conoces: super costuras duraderas, acabados limpios y la cantidad perfecta de brillo para hacerte brillar.",
  btn: "Explorar Producto",
  url: "/",
  img: sneakershoe,
};

const slider = {
  title: "Black friday",
  items: [
    {
      img: bgslider1,
    },
    {
      img: bgslider2,
    },
    {
      img: bgslider3,
    },
  ],
};

const toprateslaes = {
  title: "Zapatos",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product7,
      price: "150.000",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product2,
      price: "170.000",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product3,
      price: "160.000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product4,
      price: "250.000",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product5,
      price: "220.000",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product6,
      price: "230.000",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product1,
      price: "210.000",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product9,
      price: "240.000",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product10,
      price: "200.000",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product12,
      price: "190.000",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product11,
      price: "180.000",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "MEN Zapatos Deportivos",
      rating: "5+",
      btn: "Comprar Ahora",
      img: product8,
      price: "210.000",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};

const story = {
  title: "Gorras",
  news: [
    {
      title: "Goorin Bros",
      text: "Gorra Beisbolera Camionero Colección Animal Farm",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_975245-MCO31005746477_062019-F.webp",
      url: "/",
      price: "70.000",
      like: "5",
      btn: "Comprar Ahora",
    },
    {
      title: "Goorin Bros",
      text: "Gorra Beisbolera Camionero Colección Animal Farm",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_607862-MCO31042397742_062019-F.webp",
      like: "4",
      price: "85.000",
      url: "/",
      btn: "Comprar Ahora",
    },
    {
      title: "Goorin Bros",
      text: "Gorra Queen Abeja Animal Ajustable - Original",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_621379-MCO52536677402_112022-F.webp",
      url: "/",
      price: "80.000",
      like: "3",
      btn: "Comprar Ahora",
    },
    {
      title: "Goorin Bros",
      text: "Gorra Tigre Blanco Tiger En Drill 100% Original",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_663935-MCO73279077555_122023-F.webp",
      url: "/",
      price: "70.000",
      like: "4",
      btn: "Comprar Ahora",
    },
    {
      title: "Goorin Bros",
      text: "Gorra King León 100% Original Nueva Colección",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_650453-MCO47260144387_082021-F.webp",
      url: "/",
      price: "60.000",
      like: "4",
      btn: "Comprar Ahora",
    },
    {
      title: "Goorin Bros",
      text: "Gorra Goorin Bros Black Panther nueva coleccion",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_968720-MCO47566021450_092021-F.webp",
      url: "/",
      price: "75.000",
      like: "3",
      btn: "Comprar Ahora",
    },
    {
      title: "Goorin Bros",
      text: "Gorra Vaca Cash Dinero Ganado Animal - Original",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_664362-MCO53484378779_012023-F.webp",
      url: "/",
      price: "85.000",
      like: "4",
      btn: "Comprar Ahora",
    },
    {
      title: "Goorin Bros",
      text: "Gorra Tigre Silver Tiger Negro 100% Original",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_987109-MCO47565904302_092021-F.webp",
      url: "/",
      price: "65.000",
      like: "3",
      btn: "Comprar Ahora",
    },
    {
      title: "Goorin Bros",
      text: "Gorra Moon Lover Wolf Lobo 100% Original",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_828306-MCO71566770066_092023-F.webp",
      url: "/",
      price: "70.000",
      like: "3",
      btn: "Comprar Ahora",
    },
  ],
};

const footerAPI = {
  titles: [
    { title: "Acerca de Nosotros" },
    { title: "Obtener Ayuda" },
    { title: "Empresa" },
  ],
  links: [
    [
      { link: "Noticias" },
      { link: "Locaciones" },
      { link: "Inventario" },
      { link: "Proposito" },
      { link: "Sostenibilidad" },
    ],
    [
      { link: "Estado del Pedido" },
      { link: "Envio y Entrega" },
      { link: "Opciones de Pago" },
      { link: "Reportes" },
      { link: "Contacta Con Nosotros" },
      { link: "FAQ" },
    ],
    [
      { link: "Promociones" },
      { link: "Sugerencias" },
      { link: "Inscribirse" },
      { link: "Socios" },
      { link: "Envianos Tus Comentarios" },
    ],
  ],
};

export {
  heroapi,
  footerAPI,
  story,
  sneaker,
  highlight,
  toprateslaes,
  popularsales,
  slider,
};

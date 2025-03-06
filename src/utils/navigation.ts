const BASE_URL = import.meta.env.BASE_URL;

const navBarLinks = [
  { name: "Home", url: `${BASE_URL}/` },
  { name: "Servicios", url: `${BASE_URL}/services` },
  { name: "Equipo", url: `${BASE_URL}/teams` },
  { name: "Contacto", url: `${BASE_URL}/contact` },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
};

export default {
  navBarLinks,
  socialLinks,
};
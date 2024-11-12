// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = {
    home: {
      en: "Home",
      fr: "Accueil",
      es: "Inicio",
    },
    about: {
      en: "About",
      fr: "À propos",
      es: "Acerca de",
    },
    contact: {
      en: "Contact",
      fr: "Contactez-nous",
      es: "Contactenos",
    }
  };
  res.status(200).json(data);
}

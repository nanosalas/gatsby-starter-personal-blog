const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "thoughts", // <title>
  shortSiteTitle: "thoughts", // <title> ending for posts and pages
  siteDescription: "Conociendo más lo que hay dentro de una cabeza",
  siteUrl: "https://nanosalasblog.netlify.com/",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Luis F. Salas",
  authorTwitterAccount: "luis_salas",
  // info
  infoTitle: "thoughts",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "thoughts",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "luisalas@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/nanosalas" },
    { name: "twitter", url: "https://twitter.com/Luis_Salas" },
    { name: "facebook", url: "https://www.facebook.com/nanosalas" }
  ]
};

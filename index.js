const fs = require("fs");

const CLOUDINARY_LINK = "https://res.cloudinary.com/zinovik/image/upload/";
const TRANSFORM_LINK = "c_scale,h_0.25,w_0.25/";

(async () => {
  const buf = await fs.readFileSync("index.mdx");
  const text = buf.toString();

  const regExp = new RegExp(
    `<Cloudinary.*?link="(.*?)".*?alt="(.*?)".*?>`,
    "gs"
  );
  const matches = text.matchAll(regExp);

  const images = [];

  for (const match of matches) {
    images.push({
      path: "zalessie",
      url: `${CLOUDINARY_LINK}${match[1]}`,
      urlThumbnail: `${CLOUDINARY_LINK}${TRANSFORM_LINK}${match[1]}`,
      description: match[2],
      text: "",
      order: 0,
    });
  }

  console.log(images);
  console.log(images.length);
})();

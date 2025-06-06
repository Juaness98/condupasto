import type {APIRoute, ImageMetadata} from "astro";
import {getImage} from "astro:assets";
import icon from "@images/icon.png";

interface Favicon {
  purpose: 'any' | 'maskable' | 'monochrome';
  src: ImageMetadata;
  sizes: number[];
}

const sizes = [192, 512];
const favicons: Favicon[] = [
  {
    purpose: 'any',
    src: icon,
    sizes,
  },
];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    favicons.flatMap((favicon) =>
      favicon.sizes.map(async (size) => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: "png",
        });
        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
          purpose: favicon.purpose,
        };
      }),
    ),
  );

  const manifest = {
    short_name: "CRC",
    name: "Condupasto",
    icons,
    display: "minimal-ui",
    id: "/condupasto",
    start_url: "/condupasto",
    theme_color: "#FFEDD5",
    background_color: "#262626",
  };

  return new Response(JSON.stringify(manifest));
};

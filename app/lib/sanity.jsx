import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'lw4dj7dv',
  dataset: 'iqlas-store',
  apiVersion: '2022-03-07',
  useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
  return imgBuilder.image(source);
}

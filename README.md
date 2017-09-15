# save-image [![Build Status](https://travis-ci.org/zzarcon/save-image.svg)](https://travis-ci.org/zzarcon/save-image) 🌈💾
> Save remote images locally with ease

**Save image** is a dependency free + promise oriented + image saver utility that makes saving remote images locally trivial.

# Default

Saves an image in the current directory using the remote image name. In this case will output `./avatar.jpeg`

```javascript
import saveImage from 'save-image';

const imageUrl = 'http://zzarcon.github.io/static/images/avatar.jpeg';
const image = await saveImage(imageUrl);

console.log(image.path);
console.log(image.content);
```

# Specify location

```javascript
import saveImage from 'save-image';

const imageUrl = 'http://zzarcon.github.io/static/images/avatar.jpeg';

saveImage(imageUrl, './public/download.jpeg');
```

# Return type

```typescript
interface Image {
  path: string;
  content: string;
}
```

**path**: Absolute location where the image was saved

**content**: Binary content of the image

# Installation

```
$ yarn add save-image
```

# TODO

- [ ] Allow to preserve image extension `saveImage(imageUrl, './public/download')` => `./public/download.jpeg`

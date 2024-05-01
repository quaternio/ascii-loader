# ASCII Loader

An ASCII progress bar utility.

## Summary

An ASCII loader maintains an internal representation of its progress bar
that reflects its progress property (a float between 0 and 1).

## Usage

To use in your project, ```npm install ascii-loader```.

The example below shows how to instantiate a loader.

```javascript
const { ASCIILoader } = require('ascii-loader');

const barLength = 16;
this.progressBar = new ASCIILoader(barLength);
```

To update progress, use ```.updateProgress()``` passing in the new progress
parameter. To access the loader string representation maintained internally,
call ```.getRepresentation()```.

## Contact
Question? Contact thomas.c.noel@gmail.com

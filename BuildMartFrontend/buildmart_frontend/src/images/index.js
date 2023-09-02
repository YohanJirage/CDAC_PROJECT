const images = {};

// Use require.context to dynamically import all files in the folder
const context = require.context('.', false, /\.(png|jpg|jpeg|gif|svg|mp4)$/);
context.keys().forEach((key) => {
  const imageName = key.slice(2); // Remove the './' from the beginning of the filename
  images[imageName] = context(key);
});

export default images;
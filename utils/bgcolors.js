export const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}


export const generateBackgroundAndTextColor = () => {
  // Generate a random color (R, G, B)
  const randomByte = () => Math.floor(Math.random() * 256);

  const r = randomByte().toString(16).padStart(2, '0');
  const g = randomByte().toString(16).padStart(2, '0');
  const b = randomByte().toString(16).padStart(2, '0');

  const bgColor = `#${r}${g}${b}`;

  // Calculate the brightness of the color
  const brightness = (parseInt(r, 16) * 299 + parseInt(g, 16) * 587 + parseInt(b, 16) * 114) / 1000;

  // Determine the contrasting text color
  const textColor = brightness > 128 ? '#000000' : '#FFFFFF';

  // Return an object containing both background and text colors
  return {
    bgColor,
    textColor
  };
};

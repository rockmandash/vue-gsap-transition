const fs = require('fs-extra');
const path = require('path');

const allTransitions = [
  { name: 'Fade', enter: { opacity: 1 }, leave: { opacity: 0 } }
];

allTransitions.forEach(({ name, enter, leave }) => {
  const [indexJSPath, typingPath] = ['index.js', 'index.d.ts'].map(fileName =>
    path.resolve(process.cwd(), `./${name}/${fileName}`)
  );

  fs.writeFile(
    indexJSPath,
    `
module.exports = require('../makeTransition')(
  ${JSON.stringify(enter)},
  ${JSON.stringify(leave)}
);
`.trim()
  );

  fs.copy(path.resolve(__dirname, './types.ts'), typingPath);
});

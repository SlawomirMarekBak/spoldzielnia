/**
 * @format
 */

module.exports = {
  printWidth: 80, // Advocated by Prettier & Google 4.4 (Airbnb advocates <100)
  tabWidth: 2, // Advocated by Airbnb 19.1 & Google 4.2
  useTabs: false, // Advocated by Airbnb 19.1 & Google 2.3.1
  semi: true, // Advocated by Airbnb 21.1 & Google 4.3.2
  singleQuote: true, // Advocated by Airbnb 6.1 & Google 5.6.1
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true, // Advocated by Airbnb 19.11 (NOT by Google 4.6.2)
  jsxBracketSameLine: false,
  arrowParens: 'always', // Advocated by Google 5.5.3 & accepted by Airbnb 8.4
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'ignore', // preserveWhitespaces is false in Angular 6+
  insertPragma: false,
  requirePragma: false,
  endOfLine: 'auto',
};

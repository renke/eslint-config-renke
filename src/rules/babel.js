// TODO: Which of these are needed? And which eslint rules have to be disabled?
export default {
  // babel/generator-star-spacing: Handles async/await functions correctly
  "babel/generator-star-spacing": [2, {before: false, after: true}],
  // babel/new-cap: Ignores capitalized decorators (@Decorator)
  "babel/new-cap": [2, {newIsCap: true, capIsNew: false}],
  // babel/array-bracket-spacing: Handles destructuring arrays with flow type in function parameters
  "babel/array-bracket-spacing": [2, "never"],
  // babel/object-curly-spacing: doesn't complain about export x from "mod"; or export * as x from "mod";
  "babel/object-curly-spacing": [2, "never"],
  // babel/object-shorthand: doesn't fail when using object spread (...obj)
  "babel/object-shorthand": [2, "always"],
  // babel/arrow-parens: Handles async functions correctly
  "babel/arrow-parens": [2, "as-needed"],
  // babel/no-await-in-loop: guard against awaiting async functions inside of a loop
  "babel/no-await-in-loop": [2],
};

export default {
  // display-name: Prevent missing displayName in a React component definition
  "react/display-name": [2, {ignoreTranspilerName: false}], // TODO
  // forbid-prop-types: Forbid certain propTypes
  "react/forbid-prop-types": [0], // TODO
  // no-danger: Prevent usage of dangerous JSX properties
  "react/no-danger": [0],
  // no-deprecated: Prevent usage of deprecated methods
  "react/no-deprecated": [2],
  // no-did-mount-set-state: Prevent usage of setState in componentDidMount
  "react/no-did-mount-set-state": [0],
  // no-did-update-set-state: Prevent usage of setState in componentDidUpdate
  "react/no-did-update-set-state": [2],
  // no-direct-mutation-state: Prevent direct mutation of this.state
  "react/no-direct-mutation-state": [2],
  // no-is-mounted: Prevent usage of isMounted
  "react/no-is-mounted": [2],
  // no-multi-comp: Prevent multiple component definition per file
  "react/no-multi-comp": [2],
  // no-set-state: Prevent usage of setState
  "react/no-set-state": [0],
  // no-string-refs: Prevent using string references in ref attribute.
  "react/no-string-refs": [2],
  // no-unknown-property: Prevent usage of unknown DOM property (fixable)
  "react/no-unknown-property": [2],
  // prefer-es6-class: Enforce ES5 or ES6 class for React Components
  "react/prefer-es6-class": [2, "always"],
  // prop-types: Prevent missing props validation in a React component definition
  "react/prop-types": [2], // TODO
  // react-in-jsx-scope: Prevent missing React when using JSX
  "react/react-in-jsx-scope": [2],
  // require-extension: Restrict file extensions that may be required
  "react/require-extension": [2, {extensions: [".js", ".jsx"]}],
  // self-closing-comp: Prevent extra closing tags for components without children
  "react/self-closing-comp": [2],
  // sort-comp: Enforce component methods order
  "react/sort-comp": [2],
  // sort-prop-types: Enforce propTypes declarations alphabetical sorting
  "react/sort-prop-types": [0], // TODO
  // wrap-multilines: Prevent missing parentheses around multilines JSX (fixable)
  "react/wrap-multilines": [0], // TODO
  // jsx-boolean-value: Enforce boolean attributes notation in JSX (fixable)
  "react/jsx-boolean-value": [2, "always"],
  // jsx-closing-bracket-location: Validate closing bracket location in JSX
  "react/jsx-closing-bracket-location": [2, {nonEmpty: "after-props", selfClosing: "tag-aligned"}], // TODO
  // jsx-curly-spacing: Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
  "react/jsx-curly-spacing": [2, "never"],
  // jsx-equals-spacing: Enforce or disallow spaces around equal signs in JSX attributes
  "react/jsx-equals-spacing": [2, "never"],
  // jsx-handler-names: Enforce event handler naming conventions in JSX
  "react/jsx-handler-names": [2], // TODO
  // jsx-indent-props: Validate props indentation in JSX
  "react/jsx-indent-props": [0], // TODO
  // jsx-indent: Validate JSX indentation
  "react/jsx-indent": [2, 2], // TODO
  // jsx-key: Validate JSX has key prop when in array or iterator
  "react/jsx-key": [2],
  // jsx-max-props-per-line: Limit maximum of props on a single line in JSX
  "react/jsx-max-props-per-line": [2, {maximum: 3}], // TODO
  // jsx-no-bind: Prevent usage of .bind() and arrow functions in JSX props
  "react/jsx-no-bind": [2, {ignoreRefs: false, allowArrowFunctions: false, allowBind: false}], // TODO
  // jsx-no-duplicate-props: Prevent duplicate props in JSX
  "react/jsx-no-duplicate-props": [2, {ignoreCase: false}],
  // jsx-no-literals: Prevent usage of unwrapped JSX strings
  "react/jsx-no-literals": [0],
  // jsx-no-undef: Disallow undeclared variables in JSX
  "react/jsx-no-undef": [2],
  // jsx-pascal-case: Enforce PascalCase for user-defined JSX components
  "react/jsx-pascal-case": [2],
  // jsx-sort-props: Enforce props alphabetical sorting
  "react/jsx-sort-props": [0],
  // jsx-space-before-closing: Validate spacing before closing bracket in JSX (fixable)
  "react/jsx-space-before-closing": [2, "never"],
  // jsx-uses-react: Prevent React to be incorrectly marked as unused
  "react/jsx-uses-react": [2],
  // jsx-uses-vars: Prevent variables used in JSX to be incorrectly marked as unused
  "react/jsx-uses-vars": [2],
};

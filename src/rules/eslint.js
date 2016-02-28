export default {
// * [comma-dangle](comma-dangle.md) - disallow or enforce trailing commas (recommended)
  "comma-dangle": [2, "always-multiline"],
// * [no-cond-assign](no-cond-assign.md) - disallow assignment in conditional expressions (recommended)
  "no-cond-assign": [2, "except-parens"],
// * [no-console](no-console.md) - disallow use of `console` (recommended)
  "no-console": [1],
  // * [no-constant-condition](no-constant-condition.md) - disallow use of constant expressions in conditions (recommended)
  "no-constant-condition": [2],
  // * [no-control-regex](no-control-regex.md) - disallow control characters in regular expressions (recommended)
  "no-control-regex": [2],
  // * [no-debugger](no-debugger.md) - disallow use of `debugger` (recommended)
  "no-debugger": [2],
  // * [no-dupe-args](no-dupe-args.md) - disallow duplicate arguments in functions (recommended)
  "no-dupe-args": [2],
  // * [no-dupe-keys](no-dupe-keys.md) - disallow duplicate keys when creating object literals (recommended)
  "no-dupe-keys": [2],
  // * [no-duplicate-case](no-duplicate-case.md) - disallow a duplicate case label. (recommended)
  "no-duplicate-case": [2],
  // * [no-empty](no-empty.md) - disallow empty block statements (recommended)
  "no-empty": [2],
  // * [no-empty-character-class](no-empty-character-class.md) - disallow the use of empty character classes in regular expressions (recommended)
  "no-empty-character-class": [2],
  // * [no-ex-assign](no-ex-assign.md) - disallow assigning to the exception in a `catch` block (recommended)
  "no-ex-assign": [2],
  // * [no-extra-boolean-cast](no-extra-boolean-cast.md) - disallow double-negation boolean casts in a boolean context (recommended)
  "no-extra-boolean-cast": [2],
  // * [no-extra-parens](no-extra-parens.md) - disallow unnecessary parentheses
  "no-extra-parens": [2, "all"],
  // * [no-extra-semi](no-extra-semi.md) - disallow unnecessary semicolons (recommended) (fixable)
  "no-extra-semi": [2],
  // * [no-func-assign](no-func-assign.md) - disallow overwriting functions written as function declarations (recommended)
  "no-func-assign": [2],
  // * [no-inner-declarations](no-inner-declarations.md) - disallow function or variable declarations in nested blocks (recommended)
  "no-inner-declarations": [2, "both"],
  // * [no-invalid-regexp](no-invalid-regexp.md) - disallow invalid regular expression strings in the `RegExp` constructor (recommended)
  "no-invalid-regexp": [2],
  // * [no-irregular-whitespace](no-irregular-whitespace.md) - disallow irregular whitespace outside of strings and comments (recommended)
  "no-irregular-whitespace": [2],
  // * [no-negated-in-lhs](no-negated-in-lhs.md) - disallow negation of the left operand of an `in` expression (recommended)
  "no-negated-in-lhs": [2],
  // * [no-obj-calls](no-obj-calls.md) - disallow the use of object properties of the global object (`Math` and `JSON`) as functions (recommended)
  "no-obj-calls": [2],
  // * [no-regex-spaces](no-regex-spaces.md) - disallow multiple spaces in a regular expression literal (recommended)
  "no-regex-spaces": [2],
  // * [no-sparse-arrays](no-sparse-arrays.md) - disallow sparse arrays (recommended)
  "no-sparse-arrays": [2],
  // * [no-unexpected-multiline](no-unexpected-multiline.md) - Avoid code that looks like two expressions but is actually one (recommended)
  "no-unexpected-multiline": [2],
  // * [no-unreachable](no-unreachable.md) - disallow unreachable statements after a return, throw, continue, or break statement (recommended)
  "no-unreachable": [2],
  // * [use-isnan](use-isnan.md) - disallow comparisons with the value `NaN` (recommended)
  "use-isnan": [2],
  // * [valid-jsdoc](valid-jsdoc.md) - Ensure JSDoc comments are valid
  "valid-jsdoc": [2],
  // * [valid-typeof](valid-typeof.md) - Ensure that the results of typeof are compared against a valid string (recommended)
  "valid-typeof": [2],
  // * [accessor-pairs](accessor-pairs.md) - Enforces getter/setter pairs in objects
  "accessor-pairs": [2],
  // * [array-callback-return](array-callback-return.md) - Enforces return statements in callbacks of array's methods
  "array-callback-return": [2],
  // * [block-scoped-var](block-scoped-var.md) - treat `var` statements as if they were block scoped
  "block-scoped-var": [2],
  // * [complexity](complexity.md) - specify the maximum cyclomatic complexity allowed in a program
  complexity: [2, 20],
  // * [consistent-return](consistent-return.md) - require `return` statements to either always or never specify values
  "consistent-return": [2],
  // * [curly](curly.md) - specify curly brace conventions for all control statements
  curly: [2, "all"],
  // * [default-case](default-case.md) - require `default` case in `switch` statements
  "default-case": [2],
  // * [dot-location](dot-location.md) - enforces consistent newlines before or after dots
  "dot-location": [2, "property"],
  // * [dot-notation](dot-notation.md) - encourages use of dot notation whenever possible
  "dot-notation": [2, {allowPattern: "^[a-zA-Z]+(_[a-zA-Z]+)+$"}],
  // * [eqeqeq](eqeqeq.md) - require the use of `===` and `!==`
  eqeqeq: [2],
  // * [guard-for-in](guard-for-in.md) - make sure `for-in` loops have an `if` statement
  "guard-for-in": [2],
  // * [no-alert](no-alert.md) - disallow the use of `alert`, `confirm`, and `prompt`
  "no-alert": [1],
  // * [no-caller](no-caller.md) - disallow use of `arguments.caller` or `arguments.callee`
  "no-caller": [2],
  // * [no-case-declarations](no-case-declarations.md) - disallow lexical declarations in case clauses (recommended)
  "no-case-declarations": [2],
  // * [no-div-regex](no-div-regex.md) - disallow division operators explicitly at beginning of regular expression
  "no-div-regex": [2],
  // * [no-else-return](no-else-return.md) - disallow `else` after a `return` in an `if`
  "no-else-return": [2],
  // * [no-empty-function](no-empty-function.md) - disallow use of empty functions
  "no-empty-function": [2],
  // * [no-empty-pattern](no-empty-pattern.md) - disallow use of empty destructuring patterns (recommended)
  "no-empty-pattern": [2],
  // * [no-eq-null](no-eq-null.md) - disallow comparisons to null without a type-checking operator
  "no-eq-null": [2],
  // * [no-eval](no-eval.md) - disallow use of `eval()`
  "no-eval": [2],
  // * [no-extend-native](no-extend-native.md) - disallow adding to native types
  "no-extend-native": [2],
  // * [no-extra-bind](no-extra-bind.md) - disallow unnecessary function binding
  "no-extra-bind": [2],
  // * [no-extra-label](no-extra-label.md) - disallow unnecessary labels
  "no-extra-label": [2],
  // * [no-fallthrough](no-fallthrough.md) - disallow fallthrough of `case` statements (recommended)
  "no-fallthrough": [2],
  // * [no-floating-decimal](no-floating-decimal.md) - disallow the use of leading or trailing decimal points in numeric literals
  "no-floating-decimal": [2],
  // * [no-implicit-coercion](no-implicit-coercion.md) - disallow the type conversions with shorter notations
  "no-implicit-coercion": [2, {allow: ["!!"/* "!!", "~", "*", "+" */]}],
  // * [no-implicit-globals](no-implicit-globals.md) - disallow `var` and named functions in global scope
  "no-implicit-globals": [2],
  // * [no-implied-eval](no-implied-eval.md) - disallow use of `eval()`-like methods
  "no-implied-eval": [2],
  // * [no-invalid-this](no-invalid-this.md) - disallow `this` keywords outside of classes or class-like objects
  "no-invalid-this": [2],
  // * [no-iterator](no-iterator.md) - disallow usage of `__iterator__` property
  "no-iterator": [2],
  // * [no-labels](no-labels.md) - disallow use of labeled statements
  "no-labels": [2],
  // * [no-lone-blocks](no-lone-blocks.md) - disallow unnecessary nested blocks
  "no-lone-blocks": [2],
  // * [no-loop-func](no-loop-func.md) - disallow creation of functions within loops
  "no-loop-func": [2],
  // * [no-magic-numbers](no-magic-numbers.md) - disallow the use of magic numbers
  "no-magic-numbers": [0], // TODO
  // * [no-multi-spaces](no-multi-spaces.md) - disallow use of multiple spaces (fixable)
  "no-multi-spaces": [2],
  // * [no-multi-str](no-multi-str.md) - disallow use of multiline strings
  "no-multi-str": [2],
  // * [no-native-reassign](no-native-reassign.md) - disallow reassignments of native objects
  "no-native-reassign": [2],
  // * [no-new](no-new.md) - disallow use of the `new` operator when not part of an assignment or comparison
  "no-new": [2],
  // * [no-new-func](no-new-func.md) - disallow use of new operator for `Function` object
  "no-new-func": [2],
  // * [no-new-wrappers](no-new-wrappers.md) - disallows creating new instances of `String`,`Number`, and `Boolean`
  "no-new-wrappers": [2],
  // * [no-octal](no-octal.md) - disallow use of octal literals (recommended)
  "no-octal": [2],
  // * [no-octal-escape](no-octal-escape.md) - disallow use of octal escape sequences in string literals, such as `var foo = "Copyright \251";`
  "no-octal-escape": [2],
  // * [no-param-reassign](no-param-reassign.md) - disallow reassignment of function parameters
  "no-param-reassign": [2],
  // * [no-process-env](no-process-env.md) - disallow use of `process.env`
  "no-process-env": [0],
  // * [no-proto](no-proto.md) - disallow usage of `__proto__` property
  "no-proto": [2],
  // * [no-redeclare](no-redeclare.md) - disallow declaring the same variable more than once (recommended)
  "no-redeclare": [2],
  // * [no-return-assign](no-return-assign.md) - disallow use of assignment in `return` statement
  "no-return-assign": [2, "always"],
  // * [no-script-url](no-script-url.md) - disallow use of `javascript:` urls.
  "no-script-url": [2],
  // * [no-self-assign](no-self-assign.md) - disallow assignments where both sides are exactly the same (recommended)
  "no-self-assign": [2],
  // * [no-self-compare](no-self-compare.md) - disallow comparisons where both sides are exactly the same
  "no-self-compare": [2],
  // * [no-sequences](no-sequences.md) - disallow use of the comma operator
  "no-sequences": [2],
  // * [no-throw-literal](no-throw-literal.md) - restrict what can be thrown as an exception
  "no-throw-literal": [2],
  // * [no-unmodified-loop-condition](no-unmodified-loop-condition.md) - disallow unmodified conditions of loops
  "no-unmodified-loop-condition": [2],
  // * [no-unused-expressions](no-unused-expressions.md) - disallow usage of expressions in statement position
  "no-unused-expressions": [2],
  // * [no-unused-labels](no-unused-labels.md) - disallow unused labels (recommended)
  "no-unused-labels": [2],
  // * [no-useless-call](no-useless-call.md) - disallow unnecessary `.call()` and `.apply()`
  "no-useless-call": [2],
  // * [no-useless-concat](no-useless-concat.md) - disallow unnecessary concatenation of literals or template literals
  "no-useless-concat": [2],
  // * [no-void](no-void.md) - disallow use of the `void` operator
  "no-void": [2],
  // * [no-warning-comments](no-warning-comments.md) - disallow usage of configurable warning terms in comments - e.g. `TODO` or `FIXME`
  "no-warning-comments": [0],
  // * [no-with](no-with.md) - disallow use of the `with` statement
  "no-with": [2],
  // * [radix](radix.md) - require use of the second argument for `parseInt()`
  radix: [2, "as-needed"],
  // * [vars-on-top](vars-on-top.md) - require declaration of all vars at the top of their containing scope
  "vars-on-top": [2],
  // * [wrap-iife](wrap-iife.md) - require immediate function invocation to be wrapped in parentheses
  "wrap-iife": [2, "outside"],
  // * [yoda](yoda.md) - require or disallow Yoda conditions
  yoda: [2, "never"],
  // * [strict](strict.md) - require effective use of strict mode directives
  strict: [2, "never"],
  // * [init-declarations](init-declarations.md) - enforce or disallow variable initializations at definition
  "init-declarations": [0, "always"], // TODO
  // * [no-catch-shadow](no-catch-shadow.md) - disallow the catch clause parameter name being the same as a variable in the outer scope
  "no-catch-shadow": [2],
  // * [no-delete-var](no-delete-var.md) - disallow deletion of variables (recommended)
  "no-delete-var": [2],
  // * [no-label-var](no-label-var.md) - disallow labels that share a name with a variable
  "no-label-var": [2],
  // * [no-shadow](no-shadow.md) - disallow declaration of variables already declared in the outer scope
  "no-shadow": [2], // TODO
  // * [no-shadow-restricted-names](no-shadow-restricted-names.md) - disallow shadowing of names such as `arguments`
  "no-shadow-restricted-names": [2],
  // * [no-undef](no-undef.md) - disallow use of undeclared variables unless mentioned in a `/*global */` block (recommended)
  "no-undef": [2, {typeof: true}],
  // * [no-undef-init](no-undef-init.md) - disallow use of undefined when initializing variables
  "no-undef-init": [2],
  // * [no-undefined](no-undefined.md) - disallow use of `undefined` variable
  "no-undefined": [2],
  // * [no-unused-vars](no-unused-vars.md) - disallow declaration of variables that are not used in the code (recommended)
  "no-unused-vars": [2, {vars: "all", args: "after-used"}],
  // * [no-use-before-define](no-use-before-define.md) - disallow use of variables before they are defined
  "no-use-before-define": [2, {functions: false, classes: true}],
  // * [callback-return](callback-return.md) - enforce `return` after a callback
  "callback-return": [2, ["callback", "cb", "next"]],
  // * [global-require](global-require.md) - enforce `require()` on top-level module scope
  "global-require": [0],
  // * [handle-callback-err](handle-callback-err.md) - enforce error handling in callbacks
  "handle-callback-err": [2], // TODO
  // * [no-mixed-requires](no-mixed-requires.md) - disallow mixing regular variable and require declarations
  "no-mixed-requires": [0], // TODO
  // * [no-new-require](no-new-require.md) - disallow use of `new` operator with the `require` function
  "no-new-require": [2],
  // * [no-path-concat](no-path-concat.md) - disallow string concatenation with `__dirname` and `__filename`
  "no-path-concat": [2],
  // * [no-process-exit](no-process-exit.md) - disallow `process.exit()`
  "no-process-exit": [2],
  // * [no-restricted-imports](no-restricted-imports.md) - restrict usage of specified node imports
  "no-restricted-imports": [2], // TODO
  // * [no-restricted-modules](no-restricted-modules.md) - restrict usage of specified node modules
  "no-restricted-modules": [2], // TODO
  // * [no-sync](no-sync.md) - disallow use of synchronous methods
  "no-sync": [0],
  // * [array-bracket-spacing](array-bracket-spacing.md) - enforce spacing inside array brackets (fixable)
  "array-bracket-spacing": [2, "never"], // TODO  Babel
  // * [block-spacing](block-spacing.md) - disallow or enforce spaces inside of single line blocks (fixable)
  "block-spacing": [2, "always"],
  // * [brace-style](brace-style.md) - enforce one true brace style
  "brace-style": [2, "1tbs"],
  // * [camelcase](camelcase.md) - require camel case names
  camelcase: [2, {properties: "never"}],
  // * [comma-spacing](comma-spacing.md) - enforce spacing before and after comma (fixable)
  "comma-spacing": [2, {before: false, after: true}],
  // * [comma-style](comma-style.md) - enforce one true comma style
  "comma-style": [2, "last"],
  // * [computed-property-spacing](computed-property-spacing.md) - require or disallow padding inside computed properties (fixable)
  "computed-property-spacing": [2, "never"],
  // * [consistent-this](consistent-this.md) - enforce consistent naming when capturing the current execution context
  "consistent-this": [2, "that"],
  // * [eol-last](eol-last.md) - enforce newline at the end of file, with no multiple empty lines (fixable)
  "eol-last": [2],
  // * [func-names](func-names.md) - require function expressions to have a name
  "func-names": [2],
  // * [func-style](func-style.md) - enforce use of function declarations or expressions
  "func-style": [2, "declaration", {allowArrowFunctions: true}],
  // * [id-blacklist](id-blacklist.md) - blacklist certain identifiers to prevent them being used
  "id-blacklist": [2], // TODO
  // * [id-length](id-length.md) - this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  "id-length": [0], // TODO
  // * [id-match](id-match.md) - require identifiers to match the provided regular expression
  "id-match": [0], // TODO
  // * [indent](indent.md) - specify tab or space width for your code (fixable)
  indent: [2, 2, {SwitchCase: 1}],
  // * [jsx-quotes](jsx-quotes.md) - specify whether double or single quotes should be used in JSX attributes (fixable)
  "jsx-quotes": [2, "prefer-double"], // TODO
  // * [key-spacing](key-spacing.md) - enforce spacing between keys and values in object literal properties
  "key-spacing": [2, {beforeColon: false, afterColon: true}],
  // * [keyword-spacing](keyword-spacing.md) - enforce spacing before and after keywords (fixable)
  "keyword-spacing": [2, {before: true, after: true}],
  // * [linebreak-style](linebreak-style.md) - disallow mixed 'LF' and 'CRLF' as linebreaks
  "linebreak-style": [2, "unix"],
  // * [lines-around-comment](lines-around-comment.md) - enforce empty lines around comments
  "lines-around-comment": [0],
  // * [max-depth](max-depth.md) - specify the maximum depth that blocks can be nested
  "max-depth": [0], // TODO
  // * [max-len](max-len.md) - specify the maximum length of a line in your program
  "max-len": [2, 160, 4, {ignoreUrls: true}], // TODO
  // * [max-nested-callbacks](max-nested-callbacks.md) - specify the maximum depth callbacks can be nested
  "max-nested-callbacks": [2, 10],
  // * [max-params](max-params.md) - limits the number of parameters that can be used in the function declaration
  "max-params": [2, 5], // TODO
  // * [max-statements](max-statements.md) - specify the maximum number of statement allowed in a function
  "max-statements": [2, 50], // TODO
  // * [new-cap](new-cap.md) - require a capital letter for constructors
  "new-cap": [2, {newIsCap: true, capIsNew: false}], // TODO Babel
  // * [new-parens](new-parens.md) - disallow the omission of parentheses when invoking a constructor with no arguments
  "new-parens": [2],
  // * [newline-after-var](newline-after-var.md) - require or disallow an empty newline after variable declarations
  "newline-after-var": [0],
  // * [newline-per-chained-call](newline-per-chained-call.md) - enforce newline after each call when chaining the calls
  "newline-per-chained-call": [0],
  // * [no-array-constructor](no-array-constructor.md) - disallow use of the `Array` constructor
  "no-array-constructor": [2],
  // * [no-bitwise](no-bitwise.md) - disallow use of bitwise operators
  "no-bitwise": [1],
  // * [no-continue](no-continue.md) - disallow use of the `continue` statement
  "no-continue": [0], // TODO
  // * [no-inline-comments](no-inline-comments.md) - disallow comments inline after code
  "no-inline-comments": [0],
  // * [no-lonely-if](no-lonely-if.md) - disallow `if` as the only statement in an `else` block
  "no-lonely-if": [2],
  // * [no-mixed-spaces-and-tabs](no-mixed-spaces-and-tabs.md) - disallow mixed spaces and tabs for indentation (recommended)
  "no-mixed-spaces-and-tabs": [2],
  // * [no-multiple-empty-lines](no-multiple-empty-lines.md) - disallow multiple empty lines
  "no-multiple-empty-lines": [2, {max: 1, maxBOF: 0, maxEOF: 0}],
  // * [no-negated-condition](no-negated-condition.md) - disallow negated conditions
  "no-negated-condition": [2],
  // * [no-nested-ternary](no-nested-ternary.md) - disallow nested ternary expressions
  "no-nested-ternary": [2],
  // * [no-new-object](no-new-object.md) - disallow the use of the `Object` constructor
  "no-new-object": [2],
  // * [no-plusplus](no-plusplus.md) - disallow use of unary operators, `++` and `--`
  "no-plusplus": [0], // TODO
  // * [no-restricted-syntax](no-restricted-syntax.md) - disallow use of certain syntax in code
  "no-restricted-syntax": [2],
  // * [no-spaced-func](no-spaced-func.md) - disallow space between function identifier and application (fixable)
  "no-spaced-func": [2],
  // * [no-ternary](no-ternary.md) - disallow the use of ternary operators
  "no-ternary": [0],
  // * [no-trailing-spaces](no-trailing-spaces.md) - disallow trailing whitespace at the end of lines (fixable)
  "no-trailing-spaces": [2, {skipBlankLines: false}],
  // * [no-underscore-dangle](no-underscore-dangle.md) - disallow dangling underscores in identifiers
  "no-underscore-dangle": [0], // TODO
  // * [no-unneeded-ternary](no-unneeded-ternary.md) - disallow the use of ternary operators when a simpler alternative exists
  "no-unneeded-ternary": [2],
  // * [no-whitespace-before-property](no-whitespace-before-property.md) - disallow whitespace before properties
  "no-whitespace-before-property": [2],
  // * [object-curly-spacing](object-curly-spacing.md) - require or disallow padding inside curly braces (fixable)
  "object-curly-spacing": [0, "never"], // TODO Babel
  // * [one-var](one-var.md) - require or disallow one variable declaration per function
  "one-var": [2, "never"],
  // * [one-var-declaration-per-line](one-var-declaration-per-line.md) - require or disallow an newline around variable declarations
  "one-var-declaration-per-line": [0],
  // * [operator-assignment](operator-assignment.md) - require assignment operator shorthand where possible or prohibit it entirely
  "operator-assignment": [0], // TODO
  // * [operator-linebreak](operator-linebreak.md) - enforce operators to be placed before or after line breaks
  "operator-linebreak": [2, "before"],
  // * [padded-blocks](padded-blocks.md) - enforce padding within blocks
  "padded-blocks": [2, "never"],
  // * [quote-props](quote-props.md) - require quotes around object literal property names
  "quote-props": [2, "as-needed"],
  // * [quotes](quotes.md) - specify whether backticks, double or single quotes should be used (fixable)
  quotes: [2, "double", "avoid-escape"],
  // * [require-jsdoc](require-jsdoc.md) - Require JSDoc comment
  "require-jsdoc": [0],
  // * [semi](semi.md) - require or disallow use of semicolons instead of ASI (fixable)
  semi: [2, "always"],
  // * [semi-spacing](semi-spacing.md) - enforce spacing before and after semicolons (fixable)
  "semi-spacing": [2, {before: false, after: true}],
  // * [sort-imports](sort-imports.md) - sort import declarations within module
  "sort-imports": [0], // TODO
  // * [sort-vars](sort-vars.md) - sort variables within the same declaration block
  "sort-vars": [2, {ignoreCase: false}],
  // * [space-before-blocks](space-before-blocks.md) - require or disallow a space before blocks (fixable)
  "space-before-blocks": [2, "always"],
  // * [space-before-function-paren](space-before-function-paren.md) - require or disallow a space before function opening parenthesis (fixable)
  "space-before-function-paren": [2, "never"],
  // * [space-in-parens](space-in-parens.md) - require or disallow spaces inside parentheses (fixable)
  "space-in-parens": [2, "never"],
  // * [space-infix-ops](space-infix-ops.md) - require spaces around operators (fixable)
  "space-infix-ops": [0], // TODO: See https://github.com/eslint/eslint/issues/3587
  // * [space-unary-ops](space-unary-ops.md) - require or disallow spaces before/after unary operators (fixable)
  "space-unary-ops": [2, {words: true, nonwords: false}],
  // * [spaced-comment](spaced-comment.md) - require or disallow a space immediately following the `//` or `/*` in a comment
  "spaced-comment": [2, "always"],
  // * [wrap-regex](wrap-regex.md) - require regex literals to be wrapped in parentheses
  "wrap-regex": [0],
  // * [arrow-body-style](arrow-body-style.md) - require braces in arrow function body
  "arrow-body-style": [0],
  // * [arrow-parens](arrow-parens.md) - require parens in arrow function arguments
  "arrow-parens": [2, "as-needed"], // TODO Babel
  // * [arrow-spacing](arrow-spacing.md) - require space before/after arrow function's arrow (fixable)
  "arrow-spacing": [2, {before: true, after: true}],
  // * [constructor-super](constructor-super.md) - verify calls of `super()` in constructors (recommended)
  "constructor-super": [2],
  // * [generator-star-spacing](generator-star-spacing.md) - enforce spacing around the `*` in generator functions (fixable)
  "generator-star-spacing": [1, {before: false, after: true}], // TODO Babel
  // * [no-class-assign](no-class-assign.md) - disallow modifying variables of class declarations (recommended)
  "no-class-assign": [2],
  // * [no-confusing-arrow](no-confusing-arrow.md) - disallow arrow functions where they could be confused with comparisons
  "no-confusing-arrow": [1],
  // * [no-const-assign](no-const-assign.md) - disallow modifying variables that are declared using `const` (recommended)
  "no-const-assign": [2],
  // * [no-dupe-class-members](no-dupe-class-members.md) - disallow duplicate name in class members (recommended)
  "no-dupe-class-members": [2],
  // * [no-new-symbol](no-new-symbol.md) - disallow use of the `new` operator with the `Symbol` object (recommended)
  "no-new-symbol": [2],
  // * [no-this-before-super](no-this-before-super.md) - disallow use of `this`/`super` before calling `super()` in constructors (recommended)
  "no-this-before-super": [2],
  // * [no-useless-constructor](no-useless-constructor.md) - disallow unnecessary constructor
  "no-useless-constructor": [2],
  // * [no-var](no-var.md) - require `let` or `const` instead of `var`
  "no-var": [1],
  // * [object-shorthand](object-shorthand.md) - require method and property shorthand syntax for object literals
  "object-shorthand": [2, "always"], // TODO Babel
  // * [prefer-arrow-callback](prefer-arrow-callback.md) - suggest using arrow functions as callbacks
  "prefer-arrow-callback": [2],
  // * [prefer-const](prefer-const.md) - suggest using `const` declaration for variables that are never modified after declared
  "prefer-const": [2],
  // * [prefer-reflect](prefer-reflect.md) - suggest using Reflect methods where applicable
  "prefer-reflect": [0], // TODO
  // * [prefer-rest-params](prefer-rest-params.md) - suggest using the rest parameters instead of `arguments`
  "prefer-rest-params": [2],
  // * [prefer-spread](prefer-spread.md) - suggest using the spread operator instead of `.apply()`
  "prefer-spread": [2],
  // * [prefer-template](prefer-template.md) - suggest using template literals instead of strings concatenation
  "prefer-template": [2],
  // * [require-yield](require-yield.md) - disallow generator functions that do not have `yield`
  "require-yield": [0],
  // * [template-curly-spacing](template-curly-spacing.md) - enforce spacing around embedded expressions of template strings (fixable)
  "template-curly-spacing": [2, "never"],
  // * [yield-star-spacing](yield-star-spacing.md) - enforce spacing around the `*` in `yield*` expressions (fixable)
  "yield-star-spacing": [2, "after"],
};

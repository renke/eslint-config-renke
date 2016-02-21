export default {
  // Ensure imports point to a file/module that can be resolved. (no-unresolved)
  "import/no-unresolved": [2],
  // Ensure named imports correspond to a named export in the remote file. (named)
  "import/named": [2],
  // Ensure a default export is present, given a default import. (default)
  "import/default": [2],
  // Ensure imported namespaces contain dereferenced properties as they are dereferenced. (namespace)
  "import/namespace": [2],
  // Report any invalid exports, i.e. re-export of the same name (export)
  "import/export": [2],
  // Report use of exported name as identifier of default export (no-named-as-default)
  "import/no-named-as-default": [2],
  // Report CommonJS require calls and module.exports or exports.*. (no-commonjs)
  "import/no-commonjs": [0], // TODO
  // Report AMD require and define calls. (no-amd)
  "import/no-amd": [2],
  // Ensure all imports appear before other statements (imports-first)
  "import/imports-first": [2],
  // Report repeated import of the same module in multiple places (no-duplicates)
  "import/no-duplicates": [2],
};

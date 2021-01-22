module.exports = {
    env: {
        "browser": true,
        "es2021": true,
    },
    extends: [
        "plugin:react/recommended",
        "airbnb",
    ],
    parser: `@typescript-eslint/parser`,
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
    ],
    rules: {
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [2, {extensions: [".js", ".jsx", ".ts", ".tsx"]}],
        "react/jsx-props-no-spreading": "off",
        "import/extensions": "off",
        "max-len": ["error", {"code": 140}],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/no-unused-vars": "error",
        "no-unused-vars": "off"
    },
};

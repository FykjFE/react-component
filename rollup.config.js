export default {
    input: "./components/index.tsx",
    output: [
        {
            format: "cjs",
            file: "lib/bundle.cjs.js"
        },
        {
            format: "es",
            file: "lib/bundle.esm.js"
        }
    ]
};
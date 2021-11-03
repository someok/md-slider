module.exports = {
    engine: ({ marp }) => marp.use(require("markdown-it-table-of-contents")),
    bespoke: {
        osc: true,
        progress: true,
        // transition: true,
    },
    inputDir: "src",
    output: "public",
    // themeSet: 'themes',
    allowLocalFiles: true,
};

const { FuseBox, CSSModules, CSSPlugin, BabelPlugin } = require("fuse-box");
const fuse = FuseBox.init({
    homeDir : "./",
    target : 'electron',
    output : "dist/$name.js",
    plugins : [
        BabelPlugin(), CSSModules, CSSPlugin
    ]
})
fuse.dev(); // launch http server
fuse.bundle("bundle").instructions(">index.js").hmr().watch()
fuse.run();

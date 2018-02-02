const { FuseBox, CSSModules, CSSPlugin, BabelPlugin, CSSResourcePlugin } = require("fuse-box");
const fuse = FuseBox.init({
    homeDir : "./",
    target : 'electron',
    output : "dist/$name.js",
    plugins : [
        BabelPlugin(), CSSPlugin(
            {
                group: 'bundle.css',
                outFile: 'dist/bundle.css'
            })
    ]
})
fuse.dev(); // launch http server
fuse.bundle("bundle").instructions(">index.js").hmr().watch()
fuse.run();

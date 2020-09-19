module.exports = {
    run: function run({name, h}) {
        return {
            steps: [
                {
                    type: "copy",
                    to: `${name}/hello-world.txt`,
                    from: "hello-world.txt",
                }
            ]
        }
    }
}
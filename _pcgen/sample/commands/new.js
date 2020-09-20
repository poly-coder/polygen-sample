module.exports = {
    /**
     * Run function receives the foolowing arguments as a single parameter
     * - name: string; is the name send by the CLI when doing 'pcgen new sample <name> [options]'
     * - model: any; is the model indicated by pcgen option --model
     * - h: any; is the helpers container, typically env, config, case, inflections and humanize
     * - console: Consola; See npm package Consola for documentation
     * - genSystem; references the generator system. Do not use unless you know what you are doing
     * - generatorDescriptor; Describes the current generator. Do not use unless you know what you are doing
     * - commandDescriptor; Describes the current command. Do not use unless you know what you are doing
     */
    run: function({name}) {
        return {
            steps: [
                {
                    type: "file",
                    from: "sample.ejs",
                    to: `${name}.js`,
                },
                {
                    type: "file",
                    skip: false,
                    from: "cssample.ejs",
                    to: `myfile.cs`,
                },
                {
                    type: "snippet",
                    from: "cssnippet.ejs",
                    to: `myfile.cs`,
                    start: "#region [ Start ]",
                    end: "#endregion [ End ]",
                },
            ]
        }
    }
}
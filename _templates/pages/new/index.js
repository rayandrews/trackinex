/* eslint-disable quotes */
module.exports = {
  prompt: async ({ prompter, args }) => {
    if (args.name) {
      if (typeof args.module === 'undefined') {
        args.module = null
      }
      return args
    }

    const res = await prompter
      .prompt({
        type: 'input',
        name: 'module',
        message: `Please type module name:`,
      })
      .then(async (res) => {
        const r = await prompter.prompt({
          type: 'input',
          name: 'name',
          message: `What is the name of the component for [${res.module}]?`,
        })
        return { ...res, ...r }
      })

    if (typeof res.module === 'undefined') {
      res.module = undefined
    }

    return res
  },
}

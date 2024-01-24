export async function registerGlobalComponents(root) {
  return new Promise(async (resolve, reject) => {
    const components = import.meta.glob('./components/**/*.vue')
    for (const fileName in components) {
      /* @vite-ignore */
      const component = await import(/* @vite-ignore */ fileName)
      const componentName = (component?.name || fileName)
        .substring(fileName.lastIndexOf('/') + 1)
        .replace(/\.\w+$/, '')
      root.component(componentName, component.default)
    }
    resolve()
  })
}

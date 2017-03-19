
let theme = {
  defaults: {
    btn: 'button'
  }
}

for (let key in theme.defaults) {
  theme[key] = () => theme.defaults[key]
}

export default theme

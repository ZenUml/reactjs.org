export default {
  props: ['message', 'reset'],
  render (createElement) {
    return createElement('div', [
      createElement('span', this.message),
      createElement('button', {
        on: {
          click: this.reset,
        },
      }),
    ])
  },
}
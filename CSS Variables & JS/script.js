const view = {
  addEventListener() {
    const inputs = document.querySelectorAll('.controls input')
    inputs.forEach(input => {
      input.addEventListener('mousemove', this.handleInput)
      input.addEventListener('change', this.handleInput)
    })
  },

  handleInput() {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
  },
}

view.addEventListener();
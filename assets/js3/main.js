// slider
const playSlider = () => {
    const first = slider[mark]
    const second = slider.find(e => e.el === first.next)

    first.hide()
    second.show()

    mark = (mark + 1) % slider.length
}
const setSlider = () => {
    const parent = document.querySelector('.slider-container')
    const el = document.querySelectorAll('.slider')

    el.forEach((e, i) => slider.push(new Slider(e, parent, i)))
}



// button
const setButton = () => {
    const el = document.querySelectorAll('.button')

    el.forEach((e, i) => {
        button.push(new Button(e, i))
    })
}
const changeButton = (index) => {
    for(const but of button) but.change(index)
}
const onClickButton = (event) => {
    const target = event.target
    const key = target.getAttribute('key')

    if(button[key].checked) return

    // button[key].click(key)
}



// init
const init = () => {
    setSlider()
    setButton()

    setInterval(() => playSlider(), 3000)

    for(const but of button) but.el.addEventListener('click', (e) => onClickButton(e), false)
}
init()
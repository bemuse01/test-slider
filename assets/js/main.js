const parent = document.querySelector('.slider-container')
let slider = [], button = [], play


// slider
const playSlider = () => {
    const first = slider[0]
    const second = slider[1]

    second.beforeShow()

    setTimeout(() => {
        first.hide()
        second.show()
    }, 100)

    for(const but of button){
        but.change(second.index)
    }

    const item = slider.shift()
    slider.push(item)

    // play = setTimeout(playSlider, 2900)
}
const setSlider = () => {
    const el = document.querySelectorAll('.slider')

    el.forEach((e, i) => {
        slider.push(new Slider(e, parent, i))
    })
}


// button
const setButton = () => {
    const el = document.querySelectorAll('.button')

    el.forEach((e, i) => {
        button.push(new Button(e, i))
    })
}
const onClickButton = (event) => {
    const target = event.target
    const key = target.getAttribute('key')

    if(key == slider[0].index) return

    button[key].click(key, slider, button)
}


// init
const init = () => {
    setSlider()
    setButton()
    play = setInterval(playSlider, 3000)

    for(const but of button) but.el.addEventListener('click', (e) => onClickButton(e), false)
}
init()
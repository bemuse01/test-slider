// slider
const playSlider = () => {
    const currentTime = window.performance.now()
    
    const first = slider[mark]
    const second = slider.find(e => e.el === first.next)

    
    // before slider
    if(before){
        second.beforeShow()

        before = false
    }


    // active slider
    if(currentTime - oldTime > delay){
        first.hide()
        second.show()

        before = true
        after = true
        oldTime = currentTime
    }


    // after slider
    if(after){
        changeButton(second.index)

        mark = (mark + 1) % slider.length
        
        after = false
    }
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

    before = true
    after = false
    oldTime = window.performance.now()

    button[key].click(key)
}



// animate
const animate = () => {
    playSlider()

    for(const but of button) but.animate(slider, button)

    requestAnimationFrame(animate)
}



// init
const init = () => {
    setSlider()
    setButton()
    animate()

    for(const but of button) but.el.addEventListener('click', (e) => onClickButton(e), false)
}
init()
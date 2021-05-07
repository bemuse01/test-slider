class Button{
    constructor(el, index){
        this.el = el
        this.index = index

        this.init()
    }


    // init
    init(){
        if(this.index === 0) this.el.style.background = 'black'
    }


    // event
    click(key, slider, button){
        const first = slider[0]
        const second = slider.find(e => e.index == key)

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
    }
    change(i){
        if(this.index === i) this.el.style.background = 'black'
        else this.el.style.background = 'none'
    }
}
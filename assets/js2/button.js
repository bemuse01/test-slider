class Button{
    constructor(el, index){
        this.el = el
        this.index = index
        this.checked = false

        this.play = false
        this.key = null
        this.before = true
        this.active = false
        this.after = false
        this.oldTime = null

        this.init()
    }


    // init
    init(){
        if(this.index === 0) {
            this.el.style.background = 'black'
            this.checked = true
        }
    }


    // event
    click(key){
        this.key = parseInt(key)
        this.play = true
        this.before = true
        this.active = false
        this.after = false
        this.oldTime = window.performance.now()
    }
    change(i){
        if(this.index == i) {
            this.el.style.background = 'black'
            this.checked = true
        }else{
            this.el.style.background = 'none'
            this.checked = false
        }
    }


    // animate
    animate(slider, button){
        if(!this.play) return 

        const currentTime = window.performance.now()
        
        const first = slider[mark]
        const second = slider[this.key]

        // before slider
        if(this.before){
            second.beforeShow()

            this.before = false
            // this.active = true
        }
    
    
        // active slider
        // should be modified (if condition)
        if(currentTime - this.oldTime > 100){
        // if(this.active){
            first.hide()
            second.show()

            // this.active = false
            this.after = true
        }
    
    
        // after slider
        if(this.after){
            for(const but of button) but.change(this.key)

            mark = this.key

            this.after = false
            this.play = false
        }
    }
}
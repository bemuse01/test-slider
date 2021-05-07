class Button{
    constructor(el, index){
        this.el = el
        this.index = index
        this.checked = false
        this.key = null
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


}
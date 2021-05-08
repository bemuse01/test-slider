class Slider{
    constructor(el, parent, index){
        this.el = el
        this.prev = el.previousElementSibling || parent.lastElementChild
        this.next = el.nextElementSibling || parent.firstElementChild
        this.parent = parent
        this.index = index

        this.transitionTime = 0.3
        this.playHide = false
        this.playShow = false

        this.init()
    }


    // init
    init(){
        this.el.style.transition = `transform ${this.transitionTime}s`
        if(this.index !== 0) {
            // this.setDisplayNone()
            this.el.style.transform = 'translate(100%, 0)'
        }

        this.el.addEventListener('transitionend', () => this.afterHide(), false)
    }


    // event
    hide(){
        this.playHide = true

        this.el.style.transition = `transform ${this.transitionTime}s`
        this.el.style.transform = 'translate(-100%, 0)'

    }
    show(){
        this.el.style.transition = `transform ${this.transitionTime}s`
        this.el.style.transform = 'translate(0, 0)'
    }


    // set display
    setDisplayNone(){
        this.el.style.display = 'none'
    }

    setDisplayBlock(){
        this.el.style.display = 'block'
    }


    // hook
    afterHide(){
        if(!this.playHide) return

        this.el.style.transition = 'transform 0s'
        this.el.style.transform = 'translate(100%, 0)'

        clickEable = true

        this.playHide = false
    }
    beforeShow(){
    }
}
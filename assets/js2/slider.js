class Slider{
    constructor(el, parent, index){
        this.el = el
        this.prev = el.previousElementSibling || parent.lastElementChild
        this.next = el.nextElementSibling || parent.firstElementChild
        this.parent = parent
        this.index = index
        this.init()
    }


    // init
    init(){
        this.el.style.transition = 'transform 0.4s'
        if(this.index !== 0) {
            // this.setDisplayNone()
            this.el.style.transform = 'translate(100%, 0)'
        }
    }


    // event
    hide(){
        this.el.style.transition = 'transform 0.4s'
        this.el.style.transform = 'translate(-100%, 0)'
    }
    show(){
        this.el.style.transition = 'transform 0.4s'
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
        // this.setDisplayNone()
        // this.parent.removeChild(this.el)
        // this.parent.appendChild(this.el)
    }
    beforeShow(){
        // this.setDisplayBlock()
        this.el.style.transition = 'transform 0s'
        this.el.style.transform = 'translate(100%, 0)'
    }
}
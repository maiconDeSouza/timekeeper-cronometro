(function(){
    const buttons = getElements('footer button')
    let isValid = true
    let clear;
    
    buttons.forEach(e => {
        e.addEventListener('click', e => {
            const el = e.target.innerText
            
            if(el === 'start' && isValid){
                isValid = false
                clear = run()
            }
            if(el === 'pause'){
                isValid = true
                clearInterval(clear)
            }
            if(el === 'reset'){
                isValid = true
                clearInterval(clear)
                reset()
            }
        })
    })
   
})()
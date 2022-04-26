export function clickOutside(element: Node, callbackFunction: ()=> void) {
  
    function onClick(event:Event) {
        if (!element.contains(event.target as Node))  callbackFunction()
    }   
    
    document.addEventListener('click', onClick);
    
    return {
        update(newCallbackFunction: ()=> void) {
            callbackFunction = newCallbackFunction;
        },
        destroy() {
            document.removeEventListener('click', onClick);
        }
    }
}
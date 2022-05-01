export default (node:Node, options: { scrollable: boolean}) => {
    let { scrollable } = options;
    
    const handler: any = (e: WheelEvent) => {
        if (!scrollable) e.preventDefault();
    };
    
    node.addEventListener('wheel', handler, { passive: false });
    
    return {
        update(options: { scrollable: boolean}) {
            scrollable = options.scrollable;
        },
        destroy() {
            node.removeEventListener('wheel', handler);
        }
    };
};
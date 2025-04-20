import type {DirectiveBinding, VNode} from "vue";


export interface ClickableHtmlElement extends HTMLElement {
    clickOutsideEvent?: (event:Event) => void
}

const vClickOutside =  {
    beforeMount(el:ClickableHtmlElement, binding:DirectiveBinding) {
        el.clickOutsideEvent = function(event) {
            if (!(el == event.target || el.contains(event.target as Node))) {
                binding.value(event);
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el:ClickableHtmlElement) {
        if (el.clickOutsideEvent) document.removeEventListener('click', el.clickOutsideEvent);
    },
    getSSRProps (_binding:DirectiveBinding, _vnode:VNode) {return {}}
};

export default vClickOutside;

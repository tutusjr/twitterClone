
import classNames from "classnames";
import { createElement } from "react";

export default function Button({ as = 'button', size= 'normal', variant = 'primary', className, children , ... props}) { //children ile tek sefer yaz sonrasinda istedigin yerde kullan.
    return createElement(as, {
        className: classNames( "font-bold flex items-center justify-center rounded-full transition-all", {
            "px-4 h-8 text-sm" : size === 'small',
            "px-4 h-9" : size === 'normal',
            "px-4 text-[1.063rem] h-[52px] w-full" : size === 'large',
            "bg-[color:var(--color-primary)] hover:bg-opacity-90 text-white": variant === 'primary',
            "bg-[#eff3f4] hover:bg-[#d7dbdc] text-black": variant === 'white',
            "border border-[#b4b4b4] hover:border-[#67070f] hover-bg-[#f4212e1a] hover:text-[#f4212e]": variant === 'white-outline',
            [className]: true
        }),
        ... props
    }, children)
}
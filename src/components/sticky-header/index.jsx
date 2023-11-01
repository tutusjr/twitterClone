/* eslint-disable react/prop-types */

import classNames from 'classnames';
import PropTypes from 'prop-types';


export default function StickyHeader({title, children}) {
    return(
        <header className="sticky border-b border-[color:var(--background-third)] top-0 z-10 bg-[color:var(--background-primary-alpha)] backdrop-blur-md"
        >
            
        <h3 className={classNames({ 
            'px-4 h-[3.313rem] flex items-center text-xl font-bold' : title
        })}>{title}</h3>
        {children}
        </header>
        
    )
}

StickyHeader.prototypes = {
    title: PropTypes.string.isRequired
}
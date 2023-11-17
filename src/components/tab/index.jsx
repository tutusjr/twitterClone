/* eslint-disable react/prop-types */
import Items from "./items"
import Item from "./item"
import Content from "./content"
import React from "react";
import PropTypes from 'prop-types'
import { TabContext } from "./context";
import { useState } from "react";
import StickyHeader from "../sticky-header";


export default function Tab({children, activeTab}){

    const [active, setActive] = useState(activeTab)

    const childrenArray = React.Children.toArray(children);
    const contents = childrenArray.filter(c => c.type === Content)
    const stickyHeader = children.filter(c => c.type === StickyHeader)
    const items = stickyHeader[0]

    const content = contents.find(c => c.props.id === active)

    const data = {
        active,
        setActive
    }
    return (
        <TabContext.Provider value={data}>
            {items}
            {content}
        </TabContext.Provider>
    )
}

Tab.items = Items
Tab.item = Item
Tab.content = Content

Tab.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.node
    ),
    activeTab: PropTypes.string.isRequired
}
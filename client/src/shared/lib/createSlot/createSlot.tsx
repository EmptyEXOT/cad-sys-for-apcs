import React from "react";

export function createSlot() {
    const Slot = ({children, showChildren}) => {
        return showChildren ? children : null;
    }

    Slot.Renderer = ({nodes, children}) => {
        const slotted = React.Children.toArray(nodes).find(node => {
            return React.isValidElement(node) && node.type === Slot
        })

        if (!slotted || !React.isValidElement(slotted)) {
            return children
        }
        return React.cloneElement(slotted, {showChildren: true})
    };

    return Slot;
}
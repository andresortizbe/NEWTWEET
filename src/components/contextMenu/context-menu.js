import React from 'react';
import '../tweet/styles.css';
import {TrashOutline} from '@graywolfai/react-heroicons';

export default function ContextMenu(props) {
    return (
        <div className="contextual-dropdown">
            <div className="contextual-dropdown__row" onClick={() => props.removeFn(props.index)}>
                <TrashOutline />
                <span>Eliminar Tweet</span>
            </div>
        </div>
    )
}
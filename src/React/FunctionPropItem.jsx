import React from 'react'

export default function AlertPropItem ({onAlert}) {
    return (
        <button value="React" onClick={(e) => onAlert('React Alert', e)}>alert 호출</button>
    )
}
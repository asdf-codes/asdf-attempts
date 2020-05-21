import React, { useContext } from 'react'
import './container.css'
import {ContainerItem} from './ContainerItem'
import {DragItem} from './DragItem'


export const Container = () => {


    return (
        <div className="container container-grid">
            <DragItem>

            </DragItem>
        </div>
    )
}
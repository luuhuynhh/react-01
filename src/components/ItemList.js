import React, { Component } from 'react'
import Item from './Item'

export default class ItemList extends Component {
    render() {
        return (
            <div className='row gx-lg-5 justify-content-center g-1 pb-5'>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        )
    }
}

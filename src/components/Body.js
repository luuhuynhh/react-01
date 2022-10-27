import React, { Component } from 'react'
import Banner from './Banner'
import ItemList from './ItemList'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Banner />
                <ItemList />
            </div>
        )
    }
}

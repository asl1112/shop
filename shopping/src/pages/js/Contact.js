import React, { Component } from 'react'


export default class Contact extends Component {
 
  render() {
    return (
      <div>
        
          {
            this.state.data1.map(item => {
              return <p>{item.title}</p>
            })
          }

      </div>
    )
  }
}

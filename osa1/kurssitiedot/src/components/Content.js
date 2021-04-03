import React form 'react'
import Part from './part'

const Content = (props) => {
    return (
      <div>
        <div>
            <p></p>
            <Part content={props.content[0]} />
            <Part content={props.content[1]} />
            <Part content={props.content[2]} />
        </div>
      </div>
    )
}

export default Content
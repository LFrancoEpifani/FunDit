import React from 'react'
import Card from '../Card/Card'
import {CSSTransition} from 'react-transition-group'
import {useState} from 'react'


function FlipCard() {

    const [isFlipped, setIsFlipped] = useState(true)

  return (
    <div className='flipped-card'>
       <CSSTransition
       in={isFlipped}
       timeout={300}
       classNames='flip'>
            <Card flipHandle={() => {
                setIsFlipped((front) => !front);
            }}/>
       </CSSTransition>
    </div>
  )
}

export default FlipCard
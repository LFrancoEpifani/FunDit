import React from 'react'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import BillBoard from '../BillBoard/BillBoard'


export default  function Header() {
  return (
    <>
    <div>
        <NavBar/>
        <Main/>
    </div>
    <main>
      <BillBoard/>
    </main>
    </>
  )
}


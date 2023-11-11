import Header from './components/Header/Header'
import BillBoard from './components/BillBoard/BillBoard'
import Main from './components/Main/Main'
import PublicationModal from './components/PublicModal/PublicationModal'

export default function App() {

  return (
   <div className='max-w-screen-2xl'>
    <div>
      <Header/>
    </div>
    <Main/>
    <BillBoard/>
   </div>
  )
}



import { Navigate, Routes, Route } from 'react-router-dom'
import './darkly.css'
import Nav from './components/Nav'
import Pirates from './components/Pirates'
import AllPirates from './pages/AllPirates'
import NewPirate from './pages/NewPirate'
import ShowPirate from './pages/ShowPirate'


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Navigate to='/pirates' />} />
        <Route path={'/pirates'} element={<Pirates />} >
          <Route index element={<AllPirates />} />
          <Route path=':id' element={<ShowPirate />} />
          <Route path='new' element={<NewPirate />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
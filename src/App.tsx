import Header from './components/Layout/Header'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SinglePostPage from './pages/SinglePostPage'
import Footer from './components/Layout/Footer'
import Category from './pages/Category'
import { HelmetProvider } from 'react-helmet-async'

function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <div className='min-h-[100vh] flex flex-col'>
            <Header />
            <div className='font-openSans text-lg bg-greyBg h-full grow flex flex-col'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='post/:id' element={<SinglePostPage />} />
                <Route path='/category/:category' element={<Category />} />
              </Routes>
            </div>
            <Footer className='' />
          </div >
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App

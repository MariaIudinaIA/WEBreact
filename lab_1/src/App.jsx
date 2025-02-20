import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import trieggs from '/eggs.jpg'

import './App.css'
import Header from './header'
import Footer from './components/Footer'
import PostList from './components/PostList'

function App() {

  const name = "Masha Tanea Nastea"
  return (
    <div>
      <Header />
      <p>Hello, Dura x 3 !!!!!!!!!!!!!!!!!!!!!! {1 + 2} {name}</p>
      <img src={trieggs} alt="" />
      <Footer />
      <main>
        <PostList />
      </main>
    </div>
  )
}

export default App

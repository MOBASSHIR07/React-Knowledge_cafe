
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([]);
  const [readingtime , setReadingTime] = useState(0);

  const handleBookmarks = blog =>{

    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkasread = (time)=>
  {
  const newtime = readingtime +time;
  setReadingTime(newtime)
  }

  return (
    <>
     
    <Header></Header>
    <div className="w-11/12 mx-auto md:flex gap-6  p-4">
  <Blogs handleMarkasread ={handleMarkasread} handleBookmarks={handleBookmarks} />
  <Bookmarks readingtime={readingtime} bookmarks ={bookmarks} />
</div>

     
    </>
  )
}

export default App

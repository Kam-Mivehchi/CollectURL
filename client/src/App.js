import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Sortable from 'sortablejs'



function App() {
  return (
    <>
      <NavBar />
      {/* workspace needs to have top bar to create the lists and the list library  */}
      <main className="relative  m-0 p-0">
        {/* <Sidebar /> */}
        {/* top bar to create the lists */}
        <div className="bg-blue-100 w-full flex justify-center px-8 py-5">
          {/* needs to be a dropdown list bucket or item */}
          <button className="bg-blue-500 p-5 py-2 rounded-full  text-white"> + New Bucket</button>
        </div>
        {/* list library (row of rows) */}
        <div className="grid grid-cols-12  bg-gray-400 overflow-y-auto" >

          {/* bucket/collection rows  content rows*/}

          <div className="flex gap-3  no wrap w-screen sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 2xl:col-span-12 pt-8 pb-3 overflow-y-auto mx-3 relative">
            <h2 className="absolute top-2 left-2 font-bold flex w-screen">Collection Name</h2>
            <button className="bg-gray-300 border-black text-xl rounded-full p-2 h-1/4 my-auto   ">+</button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(el => {
              return (

                <>
                  <div className="bg-white min-w-[8em] h-[11em] p-4 rounded-lg ">
                    <h2 className=" font-bold flex w-screen">List#{el}</h2>
                    <ol className="list-decimal p-4 ">
                      <li>asdf</li>
                      <li>asd</li>
                      <li>asd</li>
                    </ol>
                  </div>
                </>


              )
            })}
          </div>

        </div>

      </ main>
    </>
  );
}

export default App;

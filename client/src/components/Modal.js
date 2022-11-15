import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiFillDelete, AiOutlinePlusCircle } from 'react-icons/ai'
import axios from 'axios'
const Input = styled.input`
padding:.75rem;
position:relative;
border-radius:10px;
font-size: 0.875rem; 
line-height: 1.25rem;
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
outline:none;
width:80%;
display:block;
margin:1rem auto;

`
const Select = styled.select`
padding:.75rem;
position:relative;
border-radius:10px;
font-size: 0.875rem; 
line-height: 1.25rem;
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
outline:none;
width:80%;
display:block;

margin:1rem auto;
`
// < input type = "select" placeholder = "Placeholder" class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10" />

const Form = styled.form`
display:grid:
grid-template-columns:repeat(12,1fr);
padding:1.5em;
text-align:center
`
const Label = styled.label`
grid-columns:span 12;
font-weight:500;

`
const Modal = ({ toggle, buckets }) => {
   const [showModal, setShowModal] = useState(toggle);
   const [data, setData] = useState({
      bucket: "Free Thoughts",
      listName: ""
   });


   const createList = async (e) => {

      e.preventDefault();
      try {
         setShowModal(false)
         const response = await axios.post('http://localhost:3001/api/lists/', data)

         console.log(response)

      } catch (error) {

      }
   }

   useEffect(() => {
      console.log(data)
      async function getBuckets() {

         try {
            const response = await axios.get('http://localhost:3001/api/buckets/')
            setShowModal(false)
            console.log(response)



         } catch (error) {

         }
      }
   }, [])


   return (
      <>
         <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
         >
            Open regular modal
         </button>
         {showModal ? (
            <>
               <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
               >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                     {/*content*/}
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                           <h3 className="text-3xl font-semibold">
                              New List
                           </h3>
                           <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                           >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                 ×
                              </span>
                           </button>
                        </div>
                        {/*body*/}
                        {/* <div className="relative p-6 flex-auto">
                           <p className="my-4 text-slate-500 text-lg leading-relaxed">
                              I always felt like I could do anything. That’s the main
                              thing people are controlled by! Thoughts- their perception
                              of themselves! They're slowed down by their perception of
                              themselves. If you're taught you can’t do anything, you
                              won’t do anything. I was taught I could do everything.
                           </p>
                        </div> */}
                        <Form onSubmit={createList}>
                           <Label >
                              Bucket
                              <Select className="focus:outline-none focus:ring " default="Free Thoughts" name="bucket" onChange={e => setData({ ...data, bucket: e.target.value })}>
                                 <option value="volvo">Free Thoughts</option>
                              </Select>
                              <Label >
                                 List Name
                                 <Input type="text" placeholder="i.e. Wine, Todo's " class=" focus:outline-none focus:ring w-full " required onChange={e => setData({ ...data, listName: e.target.value })} />
                              </Label>
                              {/* <Label >
                                 Add a List Item
                                 <div className="flex items-center">

                                    <AiFillDelete />
                                    <Input type="text" placeholder="roadmap.sh " class=" focus:outline-none focus:ring w-full " value={listItems} onChange={e => setListItems(e.target.value)} />
                                    <AiOutlinePlusCircle />
                                 </div>
                              </Label> */}
                           </Label>

                           {/*footer*/}

                           <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                           >
                              Close
                           </button>
                           <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
                              type="submit"

                           >
                              Create List
                           </button>
                        </Form>
                     </div>
                  </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
         ) : null
         }
      </>
   );
}

export default Modal
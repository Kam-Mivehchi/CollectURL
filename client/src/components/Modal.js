import { useState, useEffect } from 'react'
import { Input, Select, Form, Label, ModalWrapper, ModalCard } from './styles/Modal.styles.js'
import { Button } from './styles/Utilities.styles.js'
import { AiFillDelete, AiOutlinePlusCircle } from 'react-icons/ai'
import { useNavigate, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useTheme } from 'styled-components'
const Modal = ({ toggle }) => {
   const [showModal, setShowModal] = useState(toggle);
   const navigate = useNavigate()
   const theme = useTheme()
   const [data, setData] = useState({
      bucket: "Free Thoughts",
      listName: ""
   });
   const [buckets, setBuckets] = useState();


   const createList = async (e) => {

      e.preventDefault();
      try {
         setShowModal(false)
         const response = await axios.post('http://localhost:3001/api/lists/', data);

         navigate(0)
         console.log(response)

      } catch (error) {

      }
   }


   const getBuckets = async () => {

      try {
         const response = await axios.get('http://localhost:3001/api/buckets/');
         console.log("________________________", response.data)
         setBuckets(response.data)
      } catch (error) {

      }
   }
   useEffect(() => {
      console.log(data)
      getBuckets()
   }, [])


   return (
      <>
         <Button
            bg={theme.colors.accent}
            color={theme.colors.primary}
            pad={'.3rem 1.4rem'}
            onClick={() => setShowModal(true)}
         >+</Button>

         {showModal ? (
            <>
               <ModalWrapper

               >
                  <ModalCard >
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

                        <Form onSubmit={createList}>
                           <Label >
                              Bucket
                              <Select className=" focus:ring " default="Free Thoughts" name="bucket" onChange={e => setData({ ...data, bucket: e.target.value })}>
                                 {buckets.map((el) => {
                                    return <option value={el._id}>{el.bucketName}</option>
                                 })}
                                 <option value="new">New Bucket</option>

                              </Select>

                              <Label >
                                 List Name
                                 <Input type="text" placeholder="i.e. Wine, Todo's " class="focus:ring" required onChange={e => setData({ ...data, listName: e.target.value })} />
                              </Label>

                           </Label>

                           {/*footer*/}

                           <Button bg={'transparent'}
                              color={theme.colors.red}
                              className="ease-linear transition-all duration-150"

                              onClick={() => setShowModal(false)}
                           >
                              Close
                           </Button>
                           <Button bg={theme.colors.accent}
                              color={theme.colors.primary}
                              className=" ease-linear transition-all duration-150"
                              type="submit"

                           >
                              Create List
                           </Button>
                        </Form>
                     </div>
                  </ModalCard>
               </ModalWrapper>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
         ) : null
         }
      </>
   );
}

export default Modal
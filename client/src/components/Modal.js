import { useState, useEffect } from 'react'
import { Input, Select, Form, Label, ModalWrapper, ModalCard } from './styles/Modal.styles.js'
import { Button } from './styles/Utilities.styles.js'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { getBuckets, newList, createNewBucket } from '../Utils/API'
import { useUserContext } from "../Utils/UserContext"
import { UPDATE_BUCKETS } from '../Utils/actions';

const Modal = ({ toggle }) => {
   const [showModal, setShowModal] = useState(toggle);
   const navigate = useNavigate()
   const theme = useTheme()
   const [data, setData] = useState({
      bucket: "Free Thoughts",
      listName: ""
   });
   const [visible, setVisible] = useState(false)
   const [user, dispatch] = useUserContext();

   const createList = async (e) => {

      e.preventDefault();
      try {
         setShowModal(false)
         const response = await newList(data)
         navigate(0)
         console.log(response)

      } catch (error) {

      }
   }


   const renderBuckets = async () => {

      try {
         const response = await getBuckets()
         // setBuckets(response)
         dispatch({ type: UPDATE_BUCKETS, buckets: response })
      } catch (error) {

      }
   }
   const handleBucket = e => {
      if (e.target.value === 'new') return setVisible(true)
      setData({ ...data, bucket: e.target.value })
   }
   const newBucket = async (e) => {
      try {

         await createNewBucket(data);

         renderBuckets()

      } catch (error) {

      }
   }
   useEffect(() => {
      console.log(data)
      renderBuckets()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])


   return (
      <>
         <Button
            bg={`linear-gradient(45deg ,${theme.colors.accent} 0%, #CB1C8D 100%)`}
            color={theme.colors.primary}
            pad={'.3rem 1.4rem'}
            onClick={() => setShowModal(true)}
         >+</Button>

         {
            showModal ? (
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
                                 <span className=" h-6 w-6 text-2xl ">
                                    ×
                                 </span>
                              </button>
                           </div>

                           <Form onSubmit={createList}>
                              {!visible && (<Label >
                                 Bucket
                                 <Select className=" focus:ring " default="Free Thoughts" name="bucket" onChange={handleBucket}>
                                    {user.buckets.map((el) => {
                                       return <option value={el._id}>{el.bucketName}</option>
                                    })}
                                    <option value="new">New Bucket</option>

                                 </Select>
                              </Label>)}

                              {visible && (
                                 <>
                                    <Label >
                                       New Bucket Name
                                       <Input type="text" placeholder="i.e. Projects, Python, Front-End " class="focus:ring" required onChange={e => setData({ ...data, bucket: e.target.value })} />
                                       <Button bg={theme.colors.accent2} color={theme.colors.primary} ht={'.2rem 1rem'} style={{ display: 'block', margin: '1rem auto' }} onClick={newBucket}>New Bucket</Button>
                                    </Label>
                                 </>
                              )}
                              <Label >
                                 List Name
                                 <Input type="text" placeholder="i.e. Wine, Todo's " class="focus:ring" required onChange={e => setData({ ...data, listName: e.target.value })} />
                              </Label>


                              {/*footer*/}

                              <Button bg={'transparent'}
                                 color={theme.colors.accent2}
                                 className="ease-linear transition-all duration-150"

                                 onClick={() => setShowModal(false)}
                              >
                                 Close
                              </Button>
                              <Button bg={theme.colors.accent}
                                 color={theme.colors.primary}
                                 className=" ease-linear transition-all duration-150"
                                 type="submit"
                                 onClick={newList(data)}
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
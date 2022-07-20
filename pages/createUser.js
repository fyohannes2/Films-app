import Head from 'next/head'
import {useStateContext} from '../components/HBOProvider'

export default function CreateUser() {
  const globalState = useStateContext();
  console.log(globalState)
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
        
          <span className="create-user__title">
           "YourStream": the app  that personalizes your film library.
          </span>
        </div>

        <div className="create-user__form">
            <div className="create-user__input-group">
              <label>Name</label>
              <input value={globalState.user} onChange={globalState.createUserAction} type="text" className="create-user__inputText"/>
             
              
            </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  )
}
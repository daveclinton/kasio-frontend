import React, { useState, useEffect } from "react"
import SignUp from "../components/formComponents/SignUp"
import ConfirmSignUp from "../components/formComponents/ConfirmSignUp"
import SignIn from "../components/formComponents/SignIn"
import Inventory from "../components/Inventory"

const Admin = () => {
  const [formState, setFormState] = useState("signUp")
  const [isAdmin, setIsAdmin] = useState(false)

  const toggleFormState = (formState) => {
    setFormState(formState)
  }

  useEffect(() => {
    // check and update signed in state
  }, [])

  const signUp = async (form) => {
    const { username, email, password } = form
    // sign up
    setFormState("confirmSignUp")
  }

  const confirmSignUp = async (form) => {
    const { username, authcode } = form
    // confirm sign up
    setFormState("signIn")
  }

  const signIn = async (form) => {
    const { username, password } = form
    // signIn
    setFormState("signedIn")
    setIsAdmin(true)
  }

  const signOut = async () => {
    // sign out
    setFormState("signUp")
  }

  const renderForm = (formState, state) => {
    switch (formState) {
      case "signUp":
        return (
          <SignUp
            {...state}
            signUp={signUp}
            toggleFormState={toggleFormState}
          />
        )
      case "confirmSignUp":
        return <ConfirmSignUp {...state} confirmSignUp={confirmSignUp} />
      case "signIn":
        return (
          <SignIn
            {...state}
            signIn={signIn}
            toggleFormState={toggleFormState}
          />
        )
      case "signedIn":
        return isAdmin ? (
          <Inventory {...state} signOut={signOut} />
        ) : (
          <h3>Not an admin</h3>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col">
      <div className="max-w-fw flex flex-col">
        <div className="pt-10">
          <h1 className="text-5xl font-light">Admin Panel</h1>
        </div>
        {renderForm(formState)}
      </div>
    </div>
  )
}

export default Admin

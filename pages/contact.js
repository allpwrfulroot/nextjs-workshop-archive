import React, { useState } from 'react'
import { Button } from 'components'

function Contact() {
  const [email, setEmail] = useState('unknown')

  const getEmail = async () => {
    try {
      const res = await fetch('/api/my-email')
      const json = await res.json()
      setEmail(json.email)
    } catch (err) {
      console.log('err: ', err)
    }
  }

  return (
    <>
      <p>Contact email: {email}</p>
      <Button label="Get the email!" onClick={getEmail} />
    </>
  )
}

export default Contact

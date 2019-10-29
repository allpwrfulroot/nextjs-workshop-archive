import React, { useState } from 'react'
import { Button } from 'components'

function Contact() {
  const [name, setName] = useState('unknown')

  const getName = async () => {
    try {
      const res = await fetch('/api/my-name')
      const json = await res.json()
      setName(json.name)
    } catch (err) {
      console.log('err: ', err)
    }
  }

  return (
    <>
      <p>Project name: {name}</p>
      <Button label="Get the name!" onClick={getName} />
    </>
  )
}

export default Contact

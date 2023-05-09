import React, {useState} from 'react'

const Form = (props) => {
  const [input, setInput] = useState("")

  const formSubmit = (e) => {
    e.preventDefault()
    props.addBox(input)
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        Color<input onChange={(e) => setInput(e.target.value)} value={input}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default Form
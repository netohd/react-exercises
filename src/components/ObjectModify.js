import { useState } from "react"

export default function ObjectModify() {

  const initialState = {
    content: 'Lorem ipsun',
    title: 'Manchete',
    author: 'Antonio Almeida'
  }

  const [msg, setMsg] = useState(initialState)
  const handleChange = (e) => {
    setMsg({ ...msg, content: e.target.value })
  }
  return (
    <>
      <p>{msg.title}</p>
      <p>Por: {msg.author}</p>
      <div className="message">
        <label>{msg.content}</label>
      </div>
      <br/>
      <br/>
      <input
        type='text'
        label='Conteudo'
        value={msg.content}
        onChange={handleChange}
        required
      />
    </>
  )
}
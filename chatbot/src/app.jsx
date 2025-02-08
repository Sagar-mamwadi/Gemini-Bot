import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import axios from 'axios'

export function App() {
  const [question,Setquestion]=useState("")
  const [answer,Setanswer]=useState("")
  
async function getAnswer() {
  console.log('Loading...');
  const response= await axios({
    url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=paste your key here",
    method: 'post',
    data: 
    {"contents":[{"parts":[{"text":question}]}]}
    
  })
  Setanswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
}

  return (
    <>
      <h1>AI Chatbot</h1>
      <textarea name="" id="" cols="50" rows="20" value={question} onChange={(e)=>{Setquestion(e.target.value)}}></textarea>
      <button onclick={getAnswer}>Ask</button>
      <pre>{answer}</pre>
    </>
  )
}

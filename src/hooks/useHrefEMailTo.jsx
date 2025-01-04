import {useState} from 'react'

export const useHrefEMailTo = () => {
   const [btnLocate, setBtnLocate] = useState("fauzan18296@gmail.com")

  const handleBtnLocate = () => {
    setBtnLocate(location.href = `mailto:${btnLocate}`)
  }
  return handleBtnLocate
}
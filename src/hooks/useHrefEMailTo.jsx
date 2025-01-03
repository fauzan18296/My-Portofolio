import {useState} from 'react'

export const useHrefEMailTo = () => {
   const [btnLocate, setBtnLocate] = useState("mailto:fauzan18296@gmail.com")

  const handleBtnLocate = () => {
    setBtnLocate(location.href = btnLocate)
  }
  return handleBtnLocate
}
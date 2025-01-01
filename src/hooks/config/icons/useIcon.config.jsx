import feather from 'feather-icons'
import { useEffect } from 'react'

export const useFeatherIcons = () => {
  useEffect(() => {
     feather.replace()
  }, [])
}
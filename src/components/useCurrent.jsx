import React, { useContext } from 'react'
import { Context } from '../Store/Context'
const useCurrent = () => {
  return (
    useContext(Context)
  )
}

export default useCurrent

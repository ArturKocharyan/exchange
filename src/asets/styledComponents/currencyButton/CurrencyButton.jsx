import { Button } from 'antd'
import React from 'react'

function CurrencyButton({country}) {
  return (
    <Button>{country}</Button>
  )
}

export default CurrencyButton
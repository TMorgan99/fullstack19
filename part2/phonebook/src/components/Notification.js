import React from 'react'

// ////////////////////////////////////////////////////////////////////
// const Notification = ({notice, text}) => {
  const Notification = ({classMessage}) => {
    // encode both text and class in one state component

  if (classMessage === null)    return null
  const [className, message] = classMessage.split(':')
  console.log( 'Notification', className, message)
  return (
    <div className={className}>
     {message}
  </div>
  )
}

export { Notification }

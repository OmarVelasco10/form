import React from 'react';

interface ErrorMessageInterface {
    name: string
}

export const ErrorMessage = (props: ErrorMessageInterface) => {
    const { name } = props ;
  return (
    <p
    className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative"
    role="alert"
  >
    The {name} is required
  </p>
  )
}

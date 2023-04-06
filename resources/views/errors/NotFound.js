import React from 'react'

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-500">Page not found</p>
      </div>
    )
  }
}
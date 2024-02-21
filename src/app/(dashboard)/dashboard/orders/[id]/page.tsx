import React from 'react'

export default function DetailOrdersDashboard({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <div>DetailOrdersDashboard {id}</div>
  )
}

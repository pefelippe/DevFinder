import React from 'react'
import LoadingCard from './LoadingCard'

describe('<LoadingCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoadingCard />)
  })
})
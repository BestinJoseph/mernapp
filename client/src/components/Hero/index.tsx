import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const HeroComponent = styled.header`
    padding: 5rem 0;
    height: 60vh;
    background-image:url("https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-size: cover;
    background-position: bottom;
`
const HeaderContainer = styled.div`
    background-color: green;
    color: white;
    padding: 3rem;
    width: 32.5rem;
`

const Hero = () => {
    return (
        <HeroComponent>
        </HeroComponent>
    )
}

export default Hero

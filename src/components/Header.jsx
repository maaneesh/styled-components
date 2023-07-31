import React from "react";
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

function Header() {
    return (
        <StyledHeader >
            <Container>
                <Nav>
                    <Logo src='.images/logo.svg' alt='' />
                    <Button>Try it Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build the community your fans will Love.</h1>
                        <p>Huddle re-imagines the way we build communities. You have a voice,
                            and so does your audience. Create conections with your users as you engage in genuine discussion.</p>
                            <Button bg='#ff0099' color='#fff'> Get started for Free
                            </Button>
                    </div>
                    <Image src='./images/illustration-mockcups.svg' alt=''/>

             
                </Flex>

            </Container>

        </StyledHeader>
    )
}

export default Header
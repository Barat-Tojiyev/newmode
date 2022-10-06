import React, { Component } from 'react';
import { Navbar,Description, Search, SearchInput,Icon, Container,Main }
 from './Counter/style';
import Logo from './Counter/image/logo.svg'
import User from './Counter/image/user.svg'
import Home from './Counter/image/home.svg'
import Price from './Counter/image/price.svg'

import {FaHandHoldingUsd,FaFilter,FaSearch,FaBed,FaBath,FaCar,FaSave}
 from 'react-icons/fa';

class App extends Component {
  render() {

    
    return (
      <div>
        <Container>
      <Navbar justify='space-around'>
        <Navbar.Logo>
       <img src={Logo} alt='#' /> 
       <Description fw='600' fs='14px' ml='5px'>Houzing</Description> 
        </Navbar.Logo>
        <div>
          <Navbar.Ul>
            <Navbar.Li>Home</Navbar.Li>
            <Navbar.Li>Propirties</Navbar.Li>
            <Navbar.Li>Contact</Navbar.Li> 
          </Navbar.Ul>
        </div>
        <div>
        <img src={User} alt='#' />  
        </div>
      </Navbar>
      <Search justify='space-evenly'>
        <Search.Box>
          <Icon fs='20px' color='#0061DF'><img src={Home} alt="#" /></Icon>
          <SearchInput type="text" 
          placeholder='Enter an address, neighborhood, city, or ZIP code' />          
        </Search.Box>
        <Search.Box>
<Icon fs='20px' color='#0061DF'><FaHandHoldingUsd/> 
</Icon> <Description color='#0D263B' ml='10px'>Status</Description>
        </Search.Box>
        <Search.Box>
<Icon fs='20px' color='#0061DF'><img src={Price} alt="#" /> 
</Icon><Description color='#0D263B' ml='10px'>Price</Description>
        </Search.Box>
        <Search.Box>
<Icon fs='20px' color='#0061DF'><FaFilter/> 
</Icon><Description color='#0D263B' ml='10px'>Advanced</Description>
        </Search.Box>
        <Search.Button justify='center'><Icon mr='5px'><FaSearch/></Icon>Sending</Search.Button>
      </Search>
      <Main justify='center'>
        <div>

        <Description  fw='700' fs='44px'>
        Skyper Pool Partment
        </Description>
     <Description fw='400' text='center'>112 Glenwood Ave Hyde Park, 
     Boston, MA</Description>   
     <Main.Box>
      <div>
        <Icon><FaBed/></Icon>
        <Description>4 beds</Description>
      </div>
      <div>
      <Icon><FaBath/></Icon>
        <Description>8 bath</Description>
      </div>
      <div>
      <Icon><FaCar/></Icon>
        <Description>2 car</Description>
      </div>
      <div>
      <Icon><FaSave/></Icon>
        <Description>1200 Sq Ft</Description>
      </div>
     </Main.Box>
        </div>
      </Main>
      </Container>
      </div>
    );
  }
}

export default App;

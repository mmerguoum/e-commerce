import React from 'react'
import styled from 'styled-components'



const Header = () => {
  return (
    <Wrapper className="section-center">
      <article className="content inline-block">
              <h1>
                Get your taste of <br />
                Artshop
              </h1>
              <p>
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsumlorem ipsumlorem ipsum
                lorem ipsumlorem ipsumlorem ipsum
                lorem ipsumlorem ipsumlorem ipsumlorem ipsum
              </p>
              <button type="submit" className=" px-6 py-2 border-2 border-yellow-500 text-black font-medium text-xs leading-tight uppercase rounded hover:bg-yellow-700 hover:text-white  focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-28">
              Shop Now
            </button>
            </article>
      <article className="img-container">
        <img src={require('../../assets/tab3.jpg')} className="main-img"/>
        <img src={require('../../assets/tab4.jpg')} className="accent-img"/>
        {/* <img className=" bg-orange rounded"/> */}
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  overflow-y:auto;
  .img-container {
    display: none;
  }
  h1 {
    margin-left:16%;
    font-size: 3rem;
    font-weight: bold;
  
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
    margin-left: 16%;

  }
  shopNowbtn {
    // display: inline-block;
    // padding: 1.5rem;
    // padding-top: 0.5rem;
    // border: 2;
    // border-color: #FDD835;
    // color: black;
    

  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
      
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      text-align: center;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: 4px;
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: 4px;
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Header
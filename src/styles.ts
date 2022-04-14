import styled from 'styled-components'

export const Container = styled.div`
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    margin: auto;
    background-image: url("https://images.unsplash.com/photo-1597067449676-babffb33bec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(50%);
`

export const Box = styled.div`
    width: 50%;
    border-radius: 8px;
    padding: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    background-color: #E6E6FA;
    opacity: 0.9;

`

export const Form = styled.form`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    justify-items: center;
    flex-direction: column;
`

export const Input = styled.input`
    border: 1px solid 	#191970;
    display: block;
    width: 14rem;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
`

export const Button = styled.button`
    width: 16rem;
    font-size: 1rem;
    cursor :pointer;
    border: none;
    border-radius: 0.4rem;
    background: #191970;
    color:#eee;
    padding: .8rem 1.2rem;
    box-sizing: border-box;
    transition: 0.1s;
    min-width: 8rem;
`

export const Message = styled.div`
    width: 100%;
    font-size: 1.2rem;
    padding: 0.8rem;
    color: #191970;
    display: flex;
    justify-content: center;
    align-text: justify;

`
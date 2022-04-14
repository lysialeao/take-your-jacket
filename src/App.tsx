import { FormEvent, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Container, Box, Form, Input, Button, Message } from './styles'
import './App.css'

const GET_TEMP = gql`
  query($name: String!){  
    getCityByName(name: $name) {
      weather {
        temperature {
          actual 
        }
      }
    }
  }
`;

function App() {

  const [ name, setName ] = useState('');
  const [ message, setMessage ] = useState('');

  const { data } = useQuery(GET_TEMP, { variables: { name: name}})

  function mustWearJacket(temperature) {

    if(temperature < 15)
      setMessage('The current temperature is '+temperature+'. Its cold, take your jacket!')
    else(
      setMessage('The current temperature is '+temperature+'. Its not so cold, wear light clothes.')
    )

  }
  

  function handleGetTemperature(event: FormEvent) {
    event.preventDefault()

    if(!name) {
      return;
    }

    return mustWearJacket(data.getCityByName.weather.temperature.actual)

  }


  return (
    <Container>
      <Box> 
        <Message>Hi! How about knowing the temperature of your city? This can help you know if you need to wear a jacket or not.<br/>Just type the name of the city in the field to the side and click on the button "Submit!".</Message>
        <Form onSubmit={handleGetTemperature}>
          <Input type="text" value={name} onChange={e => setName(e.target.value)}></Input> <br/>
          <Button type="submit">Submit!</Button> <br/>
          <Message><b>{message}</b></Message>
        </Form>
      </Box>
    </Container>
  )
}

export default App

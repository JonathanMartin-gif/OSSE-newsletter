import logo from './logo.svg'
import './App.css'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Container, Form } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'

function App() {
  return (
    <Container className='App'>
      <Form>
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'black',
            width: '70%',
            margin: 'auto',
            padding: '5px 5px 10px 5px',
            border: '1px solid grey',
            backgroundColor: 'white',
            boxShadow: '10px 10px 5px #aaaaaa',
            fontSize: '50px',
          }}>
          Subscribe To The Old School Space Empire Newsletter
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'black',
            width: '50%',
            margin: 'auto',
            padding: '5px 5px 10px 5px',
            border: '1px solid grey',
            backgroundColor: 'white',
            boxShadow: '10px 10px 5px #aaaaaa',
          }}>
          <h2>Updates will come every 2 weeks until completion!</h2>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            color: 'black',
            width: '50%',
            margin: 'auto',
            padding: '5px 5px 10px 5px',
            border: '1px solid grey',
            backgroundColor: 'white',
            boxShadow: '10px 10px 5px #aaaaaa',
          }}>
          <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
        </div>
      </Form>
    </Container>
  )
}

export default App

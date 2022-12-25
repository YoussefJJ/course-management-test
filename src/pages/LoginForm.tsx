import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Form/Container'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Submit from '../components/Form/Submit'
import Title from '../components/Form/Title'
import { AppContext } from '../contexts/AppContext'
import { validateForm } from '../util/utils'

function LoginForm() {

  const { login, users } = useContext(AppContext)
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!validateForm(credentials)) {
      alert('All fields are required')
      return
  }
    users.find(user => user.nickname === credentials.nickname && user.password === credentials.password) ? login(credentials) : alert('Wrong credentials')
    navigate('/')
  }

  const [credentials, setCredentials] = useState({
    nickname: '',
    password: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCredentials({
        ...credentials,
        [event.target.name]: event.target.value
    })
  }

  return (
    <Form>
        <Container>
            <Title>Login</Title>
            <Input onChange={handleChange} label='nickname' type='text' placeholder='Enter nickname' name='nickname'>Nickname</Input>
            <Input onChange={handleChange} label='password' type='password' placeholder='Enter Password' name='password'>Password</Input>
            <Submit onSubmit={handleSubmit}>Login</Submit>
            <h5 className='text-justify mt-4'>Don't have an account? Sign up <Link to={'/register'}>here</Link></h5>
        </Container>
    </Form>
  )
}

export default LoginForm
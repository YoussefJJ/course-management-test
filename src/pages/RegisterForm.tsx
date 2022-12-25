import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Form/Container'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Radio from '../components/Form/Radio'
import Submit from '../components/Form/Submit'
import Title from '../components/Form/Title'
import { AppContext } from '../contexts/userContext'
import { validateForm } from '../util/utils'

function RegisterForm() {

  const { currentUser, register } = useContext(AppContext)
  const navigate = useNavigate()

  const [data, setData] = useState({
    nickname: '',
    firstName: '',
    lastName: '',
    password: '',
    birthDate: '',
    role: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData({
        ...data,
        [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!validateForm(data)) {
      alert('All fields are required')
      return
    }
    register(data)
    navigate('/')
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])

  return (
    <Form>
        <Container>
            <Title>Register</Title>
            <Input onChange={handleChange} label='nickname' type='text' placeholder='Enter nickname' name='nickname'>Nickname</Input>
            <Input onChange={handleChange} label='firstName' type='text' placeholder='Enter first name' name='firstName'>First Name</Input>
            <Input onChange={handleChange} label='lastName' type='text' placeholder='Enter last name' name='lastName'>Last Name</Input>
            <Input onChange={handleChange} label='password' type='password' placeholder='Enter Password' name='password'>Password</Input>
            <Input onChange={handleChange} label='password' type='date' placeholder='Enter Birth Date' name='birthDate'>Birth Date</Input>
            <Radio onChange={handleChange} id='student' name='role' value='student'>Student</Radio>
            <Radio onChange={handleChange} id='instructor' name='role' value='instructor'>Instructor</Radio>
            <Submit onSubmit={handleSubmit}>Login</Submit>
        </Container>
    </Form>
  )
}

export default RegisterForm
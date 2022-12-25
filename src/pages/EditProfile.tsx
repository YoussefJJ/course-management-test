import React, { useContext, useState } from 'react'
import Container from '../components/Form/Container'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Submit from '../components/Form/Submit'
import Title from '../components/Form/Title'
import { AppContext } from '../contexts/AppContext'
import { validateForm } from '../util/utils'

function EditProfile() {

  const { currentUser, editProfile } = useContext(AppContext)

  const [data, setData] = useState({
    nickname: currentUser?.nickname || '',
    firstName: currentUser?.firstName || '',
    lastName: currentUser?.lastName || '',
    password: currentUser?.password || '',
    birthDate: currentUser?.birthDate || '',
    role: currentUser?.role || '',
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
    editProfile(data)
  }

  return (
    <Form>
        <Container>
            <Title>Edit Profile</Title>
            <Input onChange={handleChange} value={data.nickname} label='nickname' type='text' placeholder='Enter nickname' name='nickname'>Nickname</Input>
            <Input onChange={handleChange} value={data.firstName} label='firstName' type='text' placeholder='Enter first name' name='firstName'>First Name</Input>
            <Input onChange={handleChange} value={data.lastName} label='lastName' type='text' placeholder='Enter last name' name='lastName'>Last Name</Input>
            <Input onChange={handleChange} value={data.password} label='password' type='password' placeholder='Enter Password' name='password'>Password</Input>
            <Input onChange={handleChange} value={data.birthDate} label='birthDate' type='date' placeholder='Enter Birth Date' name='birthDate'>Birth Date</Input>
            <Submit onSubmit={handleSubmit}>Edit Profile</Submit>
        </Container>
    </Form>
  )
}

export default EditProfile
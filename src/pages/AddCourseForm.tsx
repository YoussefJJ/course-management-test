import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Form/Container'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Submit from '../components/Form/Submit'
import Title from '../components/Form/Title'
import { AppContext } from '../contexts/AppContext'
import { validateDate, validateForm } from '../util/utils'

const generateRandomNumber = () => Math.floor(Math.random() * 1000000)

function AddCourseForm() {

  const { addCourse, currentUser } = useContext(AppContext)
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    description: '',
    category: '',
    nbStudents: 0,
    subject: '',
    startTime: '',
    endTime: '',
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData({
        ...data,
        [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // check if no field is empty
    if (!validateForm(data)) {
        alert('All fields are required')
        return
    }
    if (!validateDate(data.startTime, data.endTime)) {
        alert('Start time must be before end time')
        return
    }
    addCourse({
        id: generateRandomNumber(),
        ...data
    })
    navigate('/courses')
  }

  if (currentUser?.role !== 'instructor') return (<div>Only instructors can add courses</div>)

  return (
    <Form>
        <Container>
            <Title>Add Course</Title>
            <Input onChange={handleChange} label='name' type='text' placeholder='Enter name' name='name'>Name</Input>
            <Input onChange={handleChange} label='description' type='text' placeholder='Enter Description' name='description'>Description</Input>
            <Input onChange={handleChange} label='subject' type='text' placeholder='Enter Subject' name='subject'>Subject</Input>
            <Input onChange={handleChange} label='category' type='text' placeholder='Enter Category' name='category'>Category</Input>
            <Input onChange={handleChange} label='startTime' type='datetime-local' placeholder='Enter Start Time' name='startTime'>Start Time</Input>
            <Input onChange={handleChange} label='endTime' type='datetime-local' placeholder='Enter End Time' name='endTime'>End Time</Input>
            <Input onChange={handleChange} label='nbStudents' type='number' placeholder='Enter Number of students' name='nbStudents'>Number of Students</Input>
            <Submit onSubmit={handleSubmit}>Create Course</Submit>
        </Container>
    </Form>
  )
}

export default AddCourseForm
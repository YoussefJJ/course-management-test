import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from '../components/Form/Container'
import Form from '../components/Form/Form'
import Input from '../components/Form/Input'
import Submit from '../components/Form/Submit'
import Title from '../components/Form/Title'
import { AppContext } from '../contexts/userContext'
import { validateDate, validateForm } from '../util/utils'

function EditCourseForm() {

  const { editCourse, courses } = useContext(AppContext)
  const { id } = useParams<{ id: string }>() || '1'
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
  useEffect(() => {
    const course = courses.find((course) => course.id === parseInt(id ? id : '1'))
    if (course) {
        setData({
            name: course.name,
            description: course.description,
            category: course.category,
            nbStudents: course.nbStudents,
            subject: course.subject,
            startTime: course.startTime,
            endTime: course.endTime,
        })
    }
    }, [courses, id])

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
    if (!validateDate(data.startTime, data.endTime)) {
        alert('Start time must be before end time')
        return
    }

    editCourse({
        id: parseInt(id ? id : '1'),
        ...data
    })
    navigate('/courses')
  }

  console.log(data)

  return (
    <Form>
        <Container>
            <Title>Edit Course</Title>
            <Input onChange={handleChange} value={data.name} label='name' type='text' placeholder='Enter name' name='name'>Name</Input>
            <Input onChange={handleChange} value={data.description} label='description' type='text' placeholder='Enter Description' name='description'>Description</Input>
            <Input onChange={handleChange} value={data.subject} label='subject' type='text' placeholder='Enter Subject' name='subject'>Subject</Input>
            <Input onChange={handleChange} value={data.category} label='category' type='text' placeholder='Enter Category' name='category'>Category</Input>
            <Input onChange={handleChange} value={data.startTime} label='startTime' type='datetime-local' placeholder='Enter Start Time' name='startTime'>Start Time</Input>
            <Input onChange={handleChange} value={data.endTime} label='endTime' type='datetime-local' placeholder='Enter End Time' name='endTime'>End Time</Input>
            <Input onChange={handleChange} value={`${data.nbStudents}`} label='nbStudents' type='number' placeholder='Enter Number of students' name='nbStudents'>Number of Students</Input>
            <Submit onSubmit={handleSubmit}>Edit Course</Submit>
        </Container>
    </Form>
  )
}

export default EditCourseForm
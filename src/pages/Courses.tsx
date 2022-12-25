import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DateRangePicker from '../components/Course/DateRangePicker'
import List from '../components/Course/List'
import SearchBar from '../components/Course/SearchBar'
import { AppContext } from '../contexts/AppContext'

function Courses() {
  const { courses, currentUser } = useContext(AppContext)
  const [coursesList, setCoursesList] = useState(courses)
  const [dateRange, setDateRange] = useState({
    startDate: new Date().toISOString().substring(0,16),
    endDate: new Date().toISOString().substring(0,16),
  })

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const dateRangeCopy = {
        ...dateRange,
        [event.target.name]: event.target.value
    }
    setDateRange({
        ...dateRange,
        [event.target.name]: event.target.value
    });
    const filteredCourses = courses.filter((course) => {
        const courseDate = new Date(course.startTime)
        const startDate = new Date(dateRangeCopy.startDate)
        const endDate = new Date(dateRangeCopy.endDate)
        return courseDate >= startDate && courseDate <= endDate
    })
    if (filteredCourses.length > 0) {
        setCoursesList(filteredCourses)
    } else {
        setCoursesList(courses)
    }
  }


  const navigate = useNavigate()

  useEffect(() => {
    setCoursesList(courses)
  }, [courses])

  const handleSearch = (search: string) => {
    console.log(search)
    const filteredCourses = courses.filter((course) => course.name.toLowerCase().includes(search.toLowerCase()))
    setCoursesList(filteredCourses)
  }

  console.log(new Date(dateRange.startDate))
  console.log(dateRange.endDate)

  return (
    <div className='d-flex flex-column p-3' style={{
        width: '100%',
    }}>
        <div className='d-flex justify-content-between align-items-center my-3' style={{
            width: '100%',
        }}>
            <h1>Courses</h1>
            {currentUser?.role === 'instructor' && <button type="button" className='btn bg-black text-white fw-bold py-2 px-3 rounded' onClick={() => navigate('/add-course')}>Add Course</button>}
        </div>
        <SearchBar onChange={(event) => handleSearch(event.target.value)} placeholder='Search by course name'/>
        <DateRangePicker onChange={handleDateChange} startDate={dateRange.startDate} endDate={dateRange.endDate} />
        <hr/>
        <List items={coursesList}/>
    </div>
  )
}

export default Courses
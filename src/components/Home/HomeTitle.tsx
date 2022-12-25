import { useNavigate } from 'react-router-dom'
import Image from '../../assets/img/course-management.png'

function HomeTitle() {
  const navigate = useNavigate()
  return (
    <div className='d-flex flex-column align-items-center'>
        <img src={Image} style={{
            height: '200px',
            width: '200px',
        }}/>
        <h1 className='text-center mt-3'>This is the homepage for a course management project. Created as part of technical test.</h1>
        <button className='mt-3 bg-black text-white py-2 px-4 font-weight-bold rounded' onClick={() => navigate('/courses')}>See Courses</button>
    </div>
  )
}

export default HomeTitle
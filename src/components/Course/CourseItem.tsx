import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';

interface CourseItemProps {
    id: number;
    name: string;
    description: string;
    category: string;
    subject: string;
    startTime: string;
    endTime: string;
    nbStudents: number;
}

function CourseItem(props: CourseItemProps) {
  const navigate = useNavigate()
  const { removeCourse, courses, currentUser } = useContext(AppContext)

  const handleRemove = (id: number) => { 
    const course = courses.find((course) => course.id === props.id)
    if (course)
        removeCourse(course)
  }

  return (
    <div className="card my-2">
        <div className="card-header">
            <strong>{props.name}</strong>
        </div>
        <div className="card-body">
            <h5 className="card-title"><strong>Category: </strong>{props.category}</h5>
            <h5 className="card-title"><strong>Subject: </strong>{props.subject}</h5>
            <h5 className="card-title"><strong>Duration: </strong>{`${props.startTime} - ${props.endTime}`}</h5>
            <p className="card-text"><strong>Description: </strong>{props.description}</p>
            <p className="card-text"><strong>Number of students: </strong>{props.nbStudents}</p>
            {currentUser?.role === 'instructor' && <div className='d-flex flex-row-reverse'>
                <button className='btn bg-black text-white py-2 px-2 rounded' onClick={() => navigate(`/edit-course/${props.id}`)}>Edit</button>
                <button className='btn btn-danger me-2' onClick={() => handleRemove(props.id)}>Delete</button>
            </div>}
        </div>
    </div>
  )
}

export default CourseItem
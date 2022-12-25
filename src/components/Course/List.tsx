import React from 'react'
import { Course } from '../../types/Course'
import CourseItem from './CourseItem'

interface ListProps {
    items: any[]
}

function List(props: ListProps) {
  return (
    <div>
        {props.items.map((item: Course) => {
            return <CourseItem
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                category={item.category}
                subject={item.subject}
                startTime={item.startTime}
                endTime={item.endTime}
                nbStudents={item.nbStudents}
            />
        })
        }
    </div>
  )
}

export default List
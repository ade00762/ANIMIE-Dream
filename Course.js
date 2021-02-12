import courses from '../courses'
import {Link} from 'react-router-dom'

const Course =({match}) => {
    const course = courses.find(c=> c.name ==match.params.courseName)
    return(
        <div className="container mt-5">
            <p>
                {course.details}
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    )
}

export default Course
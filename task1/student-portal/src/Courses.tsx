interface Course {
    id: number;
    title: string;
}
const courses: Course[] = [
    {id: 1, title: "Web design"},
    {id: 2, title: "Introduction to Computer Science"},
    {id: 3, title: "Data Structures and Algorithms"},
];

function Courses() {
    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map((course) => (
                    <li key ={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default Courses;
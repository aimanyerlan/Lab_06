export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const courses: Course[] = [
    {id: 1, title: "Web Design", instructor: "A.B", description: "This course introduces the principles of designing and developing modern websites. Students learn the basics of HTML, CSS, and responsive design, focusing on layout, usability, and visual aesthetics. The course emphasizes creating user-friendly interfaces and understanding fundamental web development concepts."},
    {id: 2, title: "Introduction to Computer Science", instructor: "A.A.", description: "An introductory course that teaches the basics of programming, algorithms, and computational thinking. Students learn fundamental concepts such as variables, control structures, functions, and simple data structures."},
    {id: 3, title: "Data Structures and Algorithms", instructor: "A.D.", description: "A core course focused on organizing data efficiently and designing algorithms. It covers structures like arrays, lists, trees, and graphs, as well as sorting, searching, and complexity analysis using Big-O notation."},
];
export function getCourseById(id: number): Course | undefined {
    return courses.find((c)=>c.id ===id);
}


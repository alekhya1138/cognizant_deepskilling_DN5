import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, name: "React", available: true },
    { id: 2, name: "Angular", available: false }
  ];

  return (
    <div>
      <h2>🎓 Course Details</h2>
      {courses.map((course) =>
        course.available ? (
          <p key={course.id}>{course.name}</p>
        ) : null
      )}
    </div>
  );
}

export default CourseDetails;
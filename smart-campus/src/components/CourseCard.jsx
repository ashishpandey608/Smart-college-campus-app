import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="d-flex justify-content-between">
          {course.title}
          <button className="btn btn-outline-primary btn-sm">View Materials</button>
        </h5>
        <p className="mb-2 small text-muted">{course.prof} • {course.code}</p>
        <div className="row text-center small">
          {course.items.map((item, i) => (
            <div className="col-3" key={i}>
              <div className="fw-semibold">{item.label}</div>
              <div className="text-muted">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i class='bx bxs-award about__icon'></i>
        <h3 className="about__tit1e">Experience</h3>
        <span className="about__subtitle">2 Years</span>
      </div>

      <div className="about__box">
      <i class='bx bxs-briefcase-alt-2 about__icon'></i>
        <h3 className="about__tit1e">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </div>


      <div className="about__box">
      <i class='bx bx-support about__icon'></i>
        <h3 className="about__tit1e">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default Info;

import {React,useState} from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTap = (index) => {
        setToggleState(index);
    }   
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <div className="section__subtitle">My personel journey</div>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "Qualification__button qualification__active button--flex" :
                 "qualification__button button--flex"}
                 onClick={() => toggleTap(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>

                <div className={toggleState === 2 ? "Qualification__button qualification__active button--flex" :
                 "qualification__button button--flex"}
                 onClick={() => toggleTap(2)} >
                    <i className="uil uil-briefcase-alt
                     qualification__icon"></i>{" "}
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <div className="qualification__subtitle">Calicut university</div>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - present
                            </div>
                        </div>

                        <div>
                          <div className="qualification__rounder"></div>
                          <div className="qualification__line"></div>  
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <div className="qualification__rounder"></div>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <div className="qualification__subtitle">Kochi institute</div>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <div className="qualification__subtitle">Kochi institute</div>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - 2022
                            </div>
                        </div>

                        <div>
                          <div className="qualification__rounder"></div>
                          <div className="qualification__line"></div>  
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <div className="qualification__rounder"></div>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <div className="qualification__subtitle">Kochi institute</div>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - 2022
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Product Desginer</h3>
                            <div className="qualification__subtitle">Microsoft</div>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - 2021
                            </div>
                        </div>

                        <div>
                          <div className="qualification__rounder"></div>
                          <div className="qualification__line"></div>  
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <div className="qualification__rounder"></div>
                            <div className="qualification__line"></div>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <div className="qualification__subtitle">Apple Inc - Spain</div>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Desginer</h3>
                            <div className="qualification__subtitle">Kochi</div>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - 2022
                            </div>
                        </div>

                        <div>
                          <div className="qualification__rounder"></div>
                          <div className="qualification__line"></div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
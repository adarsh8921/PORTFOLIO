import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Razal</h1>

            <ul className="footer__list">
                <li>
                    <a href="#" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#" className="footer__link">Project</a>
                </li>

                <li>
                    <a href="#" className="footer__link">Testimonial</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="#" className="footer__social-link" target="_blank">
        <i class="bx bxl-facebook"></i>
        </a>

        <a href="#" className="footer__social-link" target="_blank">
        <i class="bx bxl-instagram"></i>
        </a>

        <a href="#" className="footer__social-link" target="_blank">
        <i class="bx bxl-twitter"></i>
        </a>
            </div>
            <div className="footer__copy">&#169; Crypticalcoder. All rigths reserved</div>
        </div>
    </footer>
  )
}

export default Footer
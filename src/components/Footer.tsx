import React from 'react';

function Footer() {
    return (
        <footer className="container pt-5 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s"
                style={{
                    visibility: 'visible',
                    animationDuration: '1s',
                    animationDelay: '0.3s',
                    animationName: 'fadeInUp',
                }}>
            <div className="row" id="contact">
                <div className="col-full">
                    <div className="seperator"/>
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-center text-md-left">
                        <a href="https://github.com/hoadesign09" rel="nofollow">GitHub</a>
                        <span> • </span>
                        <a href="https://www.linkedin.com/in/hoadesign.09" rel="nofollow">LinkedIn</a>
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <p className="text-center text-md-right">Copyright © 2020 HoaSimp Dev.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

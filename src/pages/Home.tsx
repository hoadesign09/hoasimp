import React from 'react';

function Home() {
    return (
        <main role="main" className="home">
            <section className="container py-5">
                <div className="row">
                    <div
                        className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start wow fadeInUp animated"
                        data-wow-duration="1s" data-wow-delay="0s">
                        <h1 className="home__logo" style={{backgroundImage: `url(/images/logo.jpg`}}>
                            Front-end, JavaScript Developer - HoaSimp
                        </h1>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <p>Hello everyone,</p>

                        <p>Hi,
I'm Nguyen Quoc Hoa (hoasimp), I'm working as a freelance front-end developer. I am currently a student at a university in Ho Chi Minh City. Hopefully with my projects will bring value to you.</p>

                        <p>Some of my certifications:</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                <div className="row home__work py-5">
                    <a href="/portfolyo/" className="home__work__item">
                        <img className="img-fluid" src="/images/gittigidiyor.png" alt="GittiGidiyor"/>
                        <span>See more</span>
                    </a>
                    <a href="/portfolyo/testinium#loadium" className="home__work__item">
                        <img className="img-fluid" src="/images/loadium.png" alt="Loadium"/>
                        <span>See more</span>
                    </a>
                    <a href="/portfolyo/testinium#testinium" className="home__work__item">
                        <img className="img-fluid" src="/images/testinium.png" alt="Testinium"/>
                        <span>See more</span>
                    </a>
                    <a href="/portfolyo/testinium#dashboard" className="home__work__item">
                        <img className="img-fluid" src="/images/dashboard.png" alt="Qa-Dashboard"/>
                        <span>See more</span>
                    </a>
                    <a href="/portfolyo/teknovol" className="home__work__item">
                        <img className="img-fluid" src="/images/teknovol.png" alt="Teknovol"/>
                        <span>See more</span>
                    </a>
                </div>
            </section>
            <section className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0s">
                            My Skills</h3>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h4>Front-end Development</h4>
                        <p>G??ncel teknolojileri kullanarak geli??tirme yap??yorum ve en basit y??ntemle karma????k
                            problemleri ????zmeye
                            ??al??????yorum. G??ncel teknolojileri deniyorum ve di??er teknolojilerle aras??ndaki performans
                            ve kullan??m farklar??yla ilgileniyorum. Temiz kod yazmay?? seviyorum. Bir projenin d??zenli
                            y??r??mesi i??in Agile
                            yakla????mlar??n??n uygulanmas?? taraftar??y??m.</p>
                        <div className="row -small">
                            <div className="col-12">
                                <p className="home__list-title bold">Yeteneklerim</p>
                                <div className="home__tags">
                                    <span>#Angular</span>
                                    <span>#JavaScript</span>
                                    <span>#TypeScript</span>
                                    <span>#ES6</span>
                                    <span>#HTML5</span>
                                    <span>#CSS</span>
                                    <span>#SCSS</span>
                                    <span>#Bootstrap</span>
                                    <span>#jQuery</span>
                                    <span>#React</span>
                                    <span>#Redux</span>
                                    <span>#Ionic</span>
                                    <span>#Webpack</span>
                                    <span>#WordPress</span>
                                    <span>#Git</span>
                                    <span>#JIRA</span>
                                    <span>#Agile & Scrum</span>
                                </div>
                            </div>
                        </div>
                        <div className="row -small">
                            <div className="col-12">
                                <p className="home__list-title bold">Kulland??????m Yaz??l??mlar</p>
                                <div className="home__tags">
                                    <span>#MacOS</span>
                                    <span>#Apple Mail</span>
                                    <span>#Webstorm</span>
                                    <span>#Google Chrome</span>
                                    <span>#Safari</span>
                                    <span>#Postman</span>
                                    <span>#Teams</span>
                                    <span>#Slack</span>
                                    <span>#Telegram</span>
                                    <span>#WhatsApp</span>
                                    <span>#Spotify</span>
                                    <span>#GitHub</span>
                                    <span>#GitLab</span>
                                    <span>#Zsh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s"
                            data-wow-delay="0s">About me</h3>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <p>??lkokul 'da babam??n eve bilgisayar almas??yla birlikte b??y??klerin her bayram sordu??u o
                            standart soru olan
                            "B??y??y??nce ne olmak istiyorsun?" sorusuna yan??t bulmu??tum. Bilgisayar ba????nda saatlerce
                            vakit ge??irip s??k??lmadan
                            ??cretsiz web siteleri a????p haz??r HTML kodlar??n?? yap????t??rarak kendimce web sitesi
                            tasarl??yordum.</p>

                        <p>Lisede biraz daha ilerletip WordPress, Blogger gibi platformlarla ??al????t??m. HTML, CSS
                            JavaScript gibi
                            teknolojileri haz??r tasar??mlar ??zerinde de??i??iklik yaparak devam ettim.</p>

                        <p>??niversiteyi S??leyman Demirel ??niversitesi, Bilgisayar M??hendisli??i b??l??m??nde okudum. Burada
                            farkl?? programlama
                            dilleri ve teknolojilerle u??ra??t??m. ??niversite okurken sekt??rle alakal?? farkl?? e??itimlere ve
                            etkinliklere kat??lmaya ??al????t??m. </p>

                        <p>??niversiteye devam ederken Isparta 'da TEKNOVOL ad??nda bir dijital ajansta
                            part-time olarak ??al????t??m. TEKNOVOL 'de WordPress ba??ta olmak ??zere HTML, CSS, JS, SEO
                            alanlar??nda ??al????t??m.
                            ??al????malar??mdan ????rendiklerimi bu ajans??n bir projesi olan&nbsp;<a
                                href="https://webmaster.kitchen/author/bilal">webmaster.kitchen</a>&nbsp;
                            'de makale olarak yazd??m. Web ile ilgili konularda ayl??k toplant??lar??n yap??ld??????, yeni
                            teknolojilerin konu??uldu??u
                            Webmaster Meetup 'lar d??zenledik. Aktif olarak organizat??r g??revi ??stlendim.</p>

                        <p>??niversite bittikten sonra staj yapt??????m yer olan, Testinium 'da
                            ??al????maya ba??lad??m. Angular, React, Webpack, SCSS, ES6 gibi
                            teknolojilerle ??al????t??m. Testinium, Loadium, QA Dashboard gibi SaaS ??r??nlerinin geli??tirilmesinde etkin rol oynad??m.</p>

                        <p>??u anda Gittigidiyor.com 'da Front-end Engineer olarak ??al??????yorum.</p>
                    </div>
                </div>
            </section>
            <section className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3 className="home__title wow fadeInUp animated" data-wow-duration="1s"
                            data-wow-delay="0s">Contact me</h3>
                    </div>
                    <div className="col-12 col-md-8 wow fadeInUp animated" data-wow-duration="1s" data-wow-delay="0.3s">
                        <p>If you have any problems, please contact me using the information below.</p>
                        <p>I will assist you as soon as possible.</p>
                        <p><a href="mailto:hoadesign.09@gmail.com">hoadesign.09@gmail.com</a></p>
                        <p><a href="tel:+84357790324" className="bold">+84 357 790 324</a></p>
                        <p>HCMC, VietNam</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;

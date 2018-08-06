import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <div className={`page__bg`}></div>

                <section className={`topbar`}>
                    <div className="wrapper">
                        <section className={`topbar__logo`}>
                            LOGO
                    </section>
                        <nav>
                            <ul>
                                <li>navitem</li>
                                <li>navitem</li>
                                <li>navitem</li>
                                <li>navitem</li>
                                <li>navitem</li>
                            </ul>
                        </nav>
                    </div>
                </section>


                <header className={`header`}>
                    <div className={`header__bg`} />
                    <div className="wrapper">
                        <section className={`header__photo`}>
                        </section>
                    </div>
                </header>


                <article className={`about-me`}>
                    <div className={`about-me__bg`} />

                    <section className={`about-me__generally`}>
                        about-me__generally
                    </section>
                    <section className={`about-me__education`}>
                        about-me__education
                    </section>
                    <section className={`about-me__experience`}>
                        about-me__experience
                    </section>
                </article>
                <article className={`my-skills`}>
                    <div className={`my-skills__bg`} />
                    <section className={``}> </section>
                </article>
                <article className={`projects`}></article>
                <article className={`contact`}></article>
                <footer>Footer</footer>
            </div>
        )
    }
}

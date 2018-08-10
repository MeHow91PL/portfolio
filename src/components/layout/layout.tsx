import * as React from 'react';

import headerBg from '../../assets/img/header.png';
import headerPhoto from '../../assets/img/headerPhoto.png';
import Header from './header/header';
import Section from './section/section';

interface IProps {
    history: object
}

export default class Layout extends React.Component<IProps> {
    constructor(props: any) {
        super(props);
    }

    public scrollTo(anchor: string) {
        const doc: HTMLDivElement | null = document.querySelector('#' + anchor);
        if (doc !== null) {
            window.scrollTo(0,doc.offsetTop);

            for (let i = 0; i < 2000; i+=50) {
                setTimeout(() => {
                    window.scroll(0, i);
                }, 200);
                
            }
        }
    }

    public render() {

        return (
            <div>
                <div className={`page__bg`} />

                <Header
                    click={this.scrollTo}
                    photo={headerPhoto}
                    bgImg={headerBg}
                    text={
                        {
                            majorTxt: 'Cześć! Nazywam się Michał Kokosiński',
                            minorTxt: 'veniam ipsum duis ullamco labore nostrud pariatur adipisicin'
                        }}
                />
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

                <div id="about">asd</div>
                <Section  >
                    asd
                 </Section>

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
                    <section className={``}> skills </section>
                </article>
                <article className={`projects`}>proj</article>
                <article className={`contact`}>cont</article>
                <footer>Footer</footer>
            </div>
        )
    }
}

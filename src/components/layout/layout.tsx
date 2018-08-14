import * as React from 'react';

import headerBg from '../../assets/img/header.png';
import headerPhoto from '../../assets/img/headerPhoto.png';
import Header from './header/header';
import Section from './section/section';
import Topbar from './topbar/topbar';

interface IProps {
    history: object
}

export default class Layout extends React.Component<IProps> {


    constructor(props: any) {
        super(props);
    }

    public render() {

        return (
            <div >
                <div className={`page__bg`} />

                <Header
                    id='header'
                    scrollTo='about'
                    photo={headerPhoto}
                    bgImg={headerBg}
                    text={
                        {
                            majorTxt: 'Cześć! Nazywam się Michał Kokosiński',
                            minorTxt: 'veniam ipsum duis ullamco labore nostrud pariatur adipisicin'
                        }}
                />

                <Topbar>
                    <Topbar.MenuItem link="header">
                        <>Home</>
                    </Topbar.MenuItem>
                    <Topbar.MenuItem link="about-me">
                        <>O mnie</>
                    </Topbar.MenuItem>
                    <Topbar.MenuItem link="my-skills">
                        <>Umiejętności</>
                    </Topbar.MenuItem>
                    <Topbar.MenuItem link="projects">
                        <>Projekty</>
                    </Topbar.MenuItem>
                    <Topbar.MenuItem link="contact">
                        <>Kontakt</>
                    </Topbar.MenuItem>
                </Topbar>

                <div id="about">asd</div>

                <article className={`about-me`} id="about-me">
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
                <article className={`my-skills`} id='my-skills'>
                    <div className={`my-skills__bg`} />
                    <section className={``}> skills </section>
                    <Section />

                </article>
                <article className={`projects`} id='projects'>proj</article>
                <article className={`contact`} id='contact'>cont</article>
                <footer>Footer</footer>
            </div>
        )
    }
}

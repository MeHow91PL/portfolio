import * as React from 'react';
import Header, { HeaderLayout } from './header/header';

import headerBg from '../../assets/img/header.png';
import headerPhoto from '../../assets/img/headerPhoto.png';
import Section from './section/section';

interface IProps {
    history: object
}

export default class Layout extends React.Component<IProps> {
    public render() {

        return (
            <div>
                <div className={`page__bg`} />

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

                <Header
                    photo={headerPhoto}
                    bgImg={headerBg}
                    layout={HeaderLayout.photoRight}
                    text={
                        {
                            majorTxt: 'Consectetur aute et eiusmod',
                            minorTxt: 'veniam ipsum duis ullamco labore nostrud pariatur adipisicin'
                        }}
                />
                
                 <Section style={
                     {height: '500px'}
                 } >
                    <Section.Background 
                    style={
                        {
                            background: '#003853',
                            height: '200px'
                        }
                    } />
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

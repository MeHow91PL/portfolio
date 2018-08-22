import * as React from 'react';

import headerBg from '../../assets/img/header.png';
import headerPhoto from '../../assets/img/me.png';
import Timeline from '../timeline/timeline';
import Topbar from '../topbar/topbar';
import Header from './header/header';
import SkillsSection from './section/skillsSection';

import './layout.css';

interface IProps {
    history: object
}

export default class Layout extends React.Component<IProps> {


    constructor(props: any) {
        super(props);
    }

    public render() {
        const topbarHeight = 50;
        return (
            <div >
                <div className={`page__bg`} />

                <Header
                    id='header'
                    bgImg={headerBg}
                    photo={headerPhoto}
                    scrollTo='about'
                    text={
                        {
                            majorTxt: 'Cześć! Nazywam się Michał Kokosiński',
                            minorTxt: 'veniam ipsum duis ullamco labore nostrud pariatur adipisicin'
                        }}
                    topbarHeight={topbarHeight}
                />

                <Topbar height={topbarHeight}>
                    <Topbar.MenuItem link="header">
                        <>Home</>
                    </Topbar.MenuItem>
                    <Topbar.MenuItem link="about">
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

                <article className={`about`} id="about">
                    <section className={`about__generally`}>
                        <div className={`about__generally--text`}>
                            <h3>O mnie</h3>
                            <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolorem ipsum unde numquam illum saepe libero? Tempore earum veritatis quod! ipsum dolor sit amet consectetur adipisicing elit. Animi fuga, laudantium ratione officiis quas quasi nisi quia saepe enim, illum accusamus a labore placeat itaque porro voluptas dignissimos ut reprehenderit sed, explicabo aliquid. Quidem, sint aperiam et saepe suscipit cumque. Obcaecati natus placeat voluptates molestiae ea fugiat perferendis. Odio, voluptatibus!</p>
                        </div>
                        <img src={headerPhoto} alt="" />
                    </section>

                    <section className={`about__education`}>
                        <Timeline>
                            <Timeline.TimelineItem
                                pin={`1`}
                                desc={`Lorem ipsum doldipisicing elit. Provident deserunt sed cupiditate excepturi reprehenderit recusandae laborum, unde est qui iure hic eius nesciunt optio sint cumque, totam nihil asperiores accusamus sunt porro quasi ab fugit! Quas officia asperiores nulla vitae, adipisci ut? Exercitationem numquam nisi dolorum reiciendis, dolor esse nulla.`}
                            />
                            <Timeline.TimelineItem
                                pin={`2`}
                                desc={`Loisicinasdhuasht sed cupiditate excepturi reprehenderit recusandae laborum, unde est qui iure hic eius nesciunt optio sint cumque, totam nihil asperiores accusamus sunt porro quasi ab fugit! Quas officia asperiores nulla vitae, adipisci ut? Exercitationem numquam nisi dolorum reiciendis, dolor esse nulla.`}
                            />
                            <Timeline.TimelineItem
                                pin={`3`}
                                desc={`Lorem ipsum dolor sit amet amet consectetur adipisicing elit. Provident deserunt sed cupiditate excepturi reprehenderit recusandae laborum, unde est qui iure hic eius nesciunt optio sint cumque, totam nihil asperiores accusamus sunt porro quasi ab fugit! Quas officia asperiores nulla vitae, adipisci ut? Exercitationem numquam nisi dolorum reiciendis, dolor esse nulla.`}
                            />
                            <Timeline.TimelineItem pin={`4`} desc={`fsdfasdasddddddddddddddddddddddddddddddddddddddoiweiowghw`} />
                            <Timeline.TimelineItem pin={`5`} desc={`fsdfasdasdddddd dddddddddddddddd ddddddddd dddddddoiweiowghw`} />
                            <Timeline.TimelineItem
                                pin={`6`}
                                desc={`Lorem ipsasdiditate excepturi reprehenderit asdic eius nesciunt optio sint cumque, totam nihil asperiores accusamus sunt porro quasi ab fugit! Quas officia asperiores nulla vitae, adipisci ut? Exercitationem numquam nisi dolorum reiciendis, dolor esse nulla.`}
                            />
                        </Timeline>
                    </section>

                    <section className={`about__experience`}>
                        about__experience
                    </section>
                </article>
                <article className={`my-skills`} id='my-skills'>
                    <div className={`my-skills__bg`} />
                    <section className={``}> skills </section>
                    <SkillsSection />

                </article>
                <article className={`projects`} id='projects'>proj</article>
                <article className={`contact`} id='contact'>cont</article>
                <footer>Footer</footer>
            </div>
        )
    }
}

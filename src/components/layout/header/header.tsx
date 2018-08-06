import * as React from 'react';
import './header.css';


interface IHeaderProps {
    photoPosition?: 'left' | 'right',
    text: { majorTxt: string, minorTxt: string },
    photo: string,
    bgImg: string,
    layout: HeaderLayout
}

export enum HeaderLayout {
    photoRight, photoLeft
}

// const IApp: React.SFC<IAppProps> = (props) => {
const Header = (props: IHeaderProps) => {
    return (
        <header className={`header`}  >
            <div className={`header__bg`}
                style={{
                    backgroundImage: `url(${props.bgImg})`
                }}
            >
                <div className="bgMask" />
            </div>

            <div className={`header__container`}
                style={{
                    gridTemplateAreas: `'${props.layout === HeaderLayout.photoLeft ? 'photo title' : 'title photo'}'`
                }}
            >
                <section className={`header__title`}>
                    <h1>{props.text.majorTxt}</h1>
                    <h3>{props.text.minorTxt}</h3>
                </section>
                <section
                    className={`header__photo`}
                    style={{
                        backgroundImage: `url(${props.photo})`
                    }}
                />

            </div>
        </header>
    );

};


export default Header;
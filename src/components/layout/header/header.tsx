import * as React from 'react';
import './header.css';


interface IHeaderProps {
    bgImg: string,
    photo: string,
    text: { majorTxt: string, minorTxt: string }
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
            >
                <section className={`header__title`}>
                    <h1>{props.text.majorTxt}</h1>
                    <h3>{props.text.minorTxt}</h3>
                </section>
                <section className={`header__desc`}>
                    <div
                        className={`header__desc__photo`}
                        style={{
                            backgroundImage: `url(${props.photo})`
                        }}
                    />
                    <div className={`hr`} />
                    <div
                        className={`header__desc__txt`}
                    >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, voluptas?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, voluptas?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, voluptas?
                    </div>
                </section>
            </div>
        </header>
    );

};


export default Header;
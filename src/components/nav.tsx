export default class Nav {
    public static scrollTo(anchor: string) {
        const doc: HTMLDivElement | null = document.querySelector('#' + anchor);
        console.log(anchor);
        if (doc !== null) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: doc.offsetTop
            });
        }
    }
}
import '../style/style.scss';
import picturefill from 'picturefill';
picturefill();
import Webgl from './components/webgl';
import Scroll from './components/scroll';
import Loading from './components/loading';

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.init();
            },
            false
        );
    }
    init() {
        this.webgl();
        this.scroll();
        new Loading();
    }
    scroll() {
        new Scroll({
            targets: '[data-scroll]',
        });
    }
    webgl() {
        const item00 = new Webgl('[data-canvas="item00"]', ['./img/hi-res/change-image2.png', './img/hi-res/change-image.png', './img/hi-res/effect1.jpg']);
        const item01 = new Webgl('[data-canvas="item01"]', ['./img/hi-res/3d-animation2@2x.png', './img/hi-res/3d-animation@2x.png', './img/hi-res/effect2.jpg']);
        const item02 = new Webgl('[data-canvas="item02"]', ['./img/hi-res/watch2@2x.png', './img/hi-res/watch@2x.png', './img/hi-res/effect3.jpg']);
        const item03 = new Webgl('[data-canvas="item03"]', ['./img/hi-res/juice2@2x.png', './img/hi-res/juice@2x.png', './img/hi-res/effect4.jpg']);
        const item04 = new Webgl('[data-canvas="item04"]', ['./img/hi-res/dice2@2x.png', './img/hi-res/dice@2x.png', './img/hi-res/effect5.jpg']);
        const item05 = new Webgl('[data-canvas="item05"]', ['./img/hi-res/202104122@2x.png', './img/hi-res/20210412@2x.png', './img/hi-res/effect6.jpg']);
        const item06 = new Webgl('[data-canvas="item06"]', ['./img/hi-res/20210208@2x.png', './img/hi-res/20210208@2x.png', './img/hi-res/effect7.jpg']);
        const item07 = new Webgl('[data-canvas="item07"]', ['./img/hi-res/202102022@2x.png', './img/hi-res/20210202@2x.png', './img/hi-res/effect8.jpg']);
        const item08 = new Webgl('[data-canvas="item08"]', ['./img/hi-res/page_transition@2x.png', './img/hi-res/page_transition2@2x.png', './img/hi-res/effect9.jpg']);
        const item09 = new Webgl('[data-canvas="item09"]', ['./img/hi-res/202101212@2x.png', './img/hi-res/20210121@2x.png', './img/hi-res/effect10.jpg']);
        const item10 = new Webgl('[data-canvas="item10"]', ['./img/hi-res/202101142@2x.png', './img/hi-res/20210114@2x.png', './img/hi-res/effect11.jpg']);
        const item11 = new Webgl('[data-canvas="item11"]', ['./img/hi-res/202101132@2x.png', './img/hi-res/20210113@2x.png', './img/hi-res/effect12.jpg']);
        const item12 = new Webgl('[data-canvas="item12"]', ['./img/hi-res/scroll-image-parallax2@2x.png', './img/hi-res/scroll-image-parallax@2x.png', './img/hi-res/effect13.jpg']);
        const item13 = new Webgl('[data-canvas="item13"]', ['./img/hi-res/202101082@2x.png', './img/hi-res/20210108@2x.png', './img/hi-res/effect14.jpg']);
        const item14 = new Webgl('[data-canvas="item14"]', ['./img/hi-res/202101072@2x.png', './img/hi-res/20210107@2x.png', './img/hi-res/effect6.jpg']);
        const item15 = new Webgl('[data-canvas="item15"]', ['./img/hi-res/blender-animation2@2x.png', './img/hi-res/blender-animation@2x.png', './img/hi-res/effect8.jpg']);
    }
}
new App();

import { gsap } from 'gsap';
import { throttle } from '../utils/throttle';

export default class Loading {
    constructor() {
        this.elms = {
            loadingParent: document.querySelector('[data-loading="parent"]'),
            loadingBlock: document.querySelector('[data-loading="block"]'),
            loadingText: document.querySelector('[data-loading="text"]'),
            kvTitle: document.querySelector('[data-kv="title"]'),
            kvSub: document.querySelector('[data-kv="sub"]'),
            kvLink: document.querySelector('[data-kv="link"]'),
            kvItem01: document.querySelector('[data-kv="item01"]'),
            kvItem02: document.querySelector('[data-kv="item02"]'),
            kvItem03: document.querySelector('[data-kv="item03"]'),
        };
        this.wd = window.innerWidth;
        this.sp = 768;
        this.init();
    }
    init() {
        this.start();
        this.handleEvents();
        gsap.config({
            force3D: true,
        });
    }
    start() {
        // マウスが現れる処理
        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });

        if (this.wd <= this.sp) {
            tl.to(this.elms.loadingText, {
                className: '+=loading__block--text is-active',
            });
            tl.to(
                this.elms.loadingText,
                {
                    className: '+=loading__block--text is-active is-second',
                },
                1.7
            );
            tl.to(
                this.elms.loadingParent,
                {
                    duration: 0.45,
                    y: '100%',
                },
                2.7
            );
            tl.to(
                this.elms.kvTitle,
                {
                    className: '+=kv__inner--title is-active',
                },
                3.3
            );
            tl.to(
                this.elms.kvSub,
                {
                    className: '+=kv__inner--sub is-active',
                },
                3.3
            );
            tl.to(
                this.elms.kvLink,
                {
                    duration: 0.45,
                    opacity: 1,
                },
                3.8
            );
            tl.to(
                this.elms.kvItem01,
                {
                    duration: 0.45,
                    opacity: 1,
                    left: '19%',
                },
                3.9
            );
            tl.to(
                this.elms.kvItem02,
                {
                    duration: 0.45,
                    opacity: 1,
                    left: '28%',
                },
                3.6
            );
            tl.to(
                this.elms.kvItem03,
                {
                    duration: 0.45,
                    opacity: 1,
                    left: '10%',
                },
                3.3
            );
        } else {
            tl.to(this.elms.loadingText, {
                className: '+=loading__block--text is-active',
            });
            tl.to(
                this.elms.loadingText,
                {
                    className: '+=loading__block--text is-active is-second',
                },
                1.7
            );
            tl.to(
                this.elms.loadingParent,
                {
                    duration: 0.45,
                    y: '100%',
                },
                2.7
            );
            tl.to(
                this.elms.kvTitle,
                {
                    className: '+=kv__inner--title is-active',
                },
                3.3
            );
            tl.to(
                this.elms.kvSub,
                {
                    className: '+=kv__inner--sub is-active',
                },
                3.3
            );
            tl.to(
                this.elms.kvLink,
                {
                    duration: 0.45,
                    opacity: 1,
                },
                3.8
            );
            tl.to(
                this.elms.kvItem01,
                {
                    duration: 0.45,
                    opacity: 1,
                    left: '25%',
                },
                3.9
            );
            tl.to(
                this.elms.kvItem02,
                {
                    duration: 0.45,
                    opacity: 1,
                    left: '33%',
                },
                3.6
            );
            tl.to(
                this.elms.kvItem03,
                {
                    duration: 0.45,
                    opacity: 1,
                    left: '16%',
                },
                3.3
            );
        }
        tl.play();
    }
    handleEvents() {
        window.addEventListener('resize', throttle(this.handleResize.bind(this)), false);
    }
    handleResize() {
        // リサイズ処理
        if (this.wd !== window.innerWidth) {
            this.wd = window.innerWidth;
        }
    }
}

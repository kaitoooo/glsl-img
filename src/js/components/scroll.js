require('intersection-observer');
import { gsap } from 'gsap';

export default class Scroll {
    constructor(props) {
        this.threshold = [0.5];
        this.addClass = 'is-active';
        this.targets = [...document.querySelectorAll(props.targets)];
        this.init();
    }
    init() {
        if (this.targets.length > 0) {
            this.scroll();
        }
    }
    scroll() {
        gsap.config({
            force3D: true,
        });
        const options = {
            threshold: this.threshold,
        };
        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= this.threshold) {
                    this.checkType(entry.target, observer);
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        this.targets.forEach((elm) => {
            observer.observe(elm);
        });
    }
    checkType(target, observer) {
        const type = target.getAttribute('data-scroll-type');
        if (type) {
            switch (type) {
                case 'fadeIn':
                    this.animateFadeIn(target);
                    if (observer) observer.unobserve(target);
                    break;
                default:
                    break;
            }
            switch (type) {
                case 'addClass':
                    this.animateAddClass(target);
                    if (observer) observer.unobserve(target);
                    break;
                default:
                    break;
            }
            switch (type) {
                case 'title':
                    this.animateTitle(target);
                    if (observer) observer.unobserve(target);
                    break;
                default:
                    break;
            }
        } else {
            target.classList.add(this.addClass);
            if (observer) observer.unobserve(target);
        }
    }
    animateFadeIn(target) {
        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });
        tl.to(
            target,
            {
                duration: 0.45,
                opacity: 1,
            },
            0
        );
        tl.to(
            target,
            {
                duration: 1.5,
                y: 0,
            },
            0
        );
    }
    animateAddClass() {
        const targetItem = document.querySelectorAll('.works__list--item');

        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });
        tl.to(targetItem, {
            className: '+=works__list--item is-active',
        });
    }
    animateTitle() {
        const targetItem = document.querySelectorAll('.works__block');

        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.ease',
            },
        });
        tl.to(targetItem, {
            className: '+=works__block is-active',
        });
    }
}

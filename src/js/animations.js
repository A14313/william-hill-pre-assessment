gsap.registerPlugin(ScrollTrigger);

// Hero Tl
const heroTl = gsap.timeline();
heroTl
	.fromTo('.hero', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 })
	.fromTo('.hero__text > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', duration: 1, stagger: 0.3 }, '-=.8')
	.fromTo('.hero__cta > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', duration: 1, stagger: 0.3 }, '-=.8')
	.fromTo('.hero__footer__contents-container > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', duration: 1, stagger: 0.3 }, '-=.8');

// Intro Tl
const introTl = gsap.timeline();
introTl.fromTo('.intro__contents-container > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', duration: 1, stagger: 0.3 });

// Cards container
const cardsTl = gsap.timeline({
	scrollTrigger: {
		trigger: '.cards__container',
		start: 'top center',
		toggleActions: 'play pause resume reverse',
	},
});
cardsTl.fromTo('.cards__container > *', { autoAlpha: 0, y: '20%' }, { autoAlpha: 1, y: '0%', duration: 1, stagger: 0.3 });

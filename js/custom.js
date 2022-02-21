document.addEventListener('DOMContentLoaded', () => {
	// TABS
	const links = document.querySelectorAll('.tabs-link')
	const contents = document.querySelectorAll('.tabs-content')
	const officeLinks = document.querySelectorAll('.page-offices__tabs-links a')
	const officeContents = document.querySelectorAll(
		'.page-offices__tabs-content'
	)

	function tabs(tLinks, tLinkActive, tContents, tContentActive) {
		tLinks.forEach((link) => {
			link.addEventListener('click', function (e) {
				e.preventDefault()
				tLinks.forEach((i) => i.classList.remove(tLinkActive))
				tContents.forEach((i) => i.classList.remove(tContentActive))
				const contentId = document.getElementById(link.getAttribute('data-id'))
				link.classList.add(tLinkActive)
				contentId.classList.add(tContentActive)
			})
		})
	}

	tabs(links, 'tabs-link_active', contents, 'tabs-content_active')
	tabs(
		officeLinks,
		'active',
		officeContents,
		'page-offices__tabs-content_active'
	)

	// GSAP + SCROLLMAGIC
	let simpleTitle1 = document.querySelector('.advantages__simple-title.v1')
	let simpleDesc1 = document.querySelector('.advantages__simple-desc.v1')
	let simpleTitle2 = document.querySelector('.advantages__simple-title.v2')
	let simpleDesc2 = document.querySelector('.advantages__simple-desc.v2')
	let simpleTitle3 = document.querySelector('.advantages__simple-title.v3')
	let simpleDesc3 = document.querySelector('.advantages__simple-desc.v3')
	let simpleTitle4 = document.querySelector('.advantages__simple-title.v4')
	let simpleDesc4 = document.querySelector('.advantages__simple-desc.v4')
	let simpleTitle5 = document.querySelector('.advantages__simple-title.v5')
	let simpleDesc5 = document.querySelector('.advantages__simple-desc.v5')

	let controller = new ScrollMagic.Controller()
	let horizontalSlide = new TimelineMax()
		.fromTo(
			'.advantages_v1',
			{ y: 380 },
			{
				y: 0,
				duration: 1.5,
				onStart: function () {
					simpleTitle1.classList.add('swipper')
					simpleDesc1.classList.add('swipper')
				},
				onReverseComplete: function () {
					simpleTitle1.classList.add('swipper')
					simpleTitle2.classList.remove('swipper')
					simpleDesc1.classList.add('swipper')
					simpleDesc2.classList.remove('swipper')
				},
				onComplete: function () {
					simpleTitle1.classList.remove('swipper')
					simpleTitle2.classList.add('swipper')
					simpleDesc1.classList.remove('swipper')
					simpleDesc2.classList.add('swipper')
				}
			}
		)
		.fromTo(
			'.advantages_v2',
			{ y: 1000 },
			{
				y: 0,
				duration: 1.5,
				onStart: function () {
					// simpleTitle2.classList.add('swipper')
				},
				onReverseComplete: function () {
					simpleTitle2.classList.add('swipper')
					simpleTitle3.classList.remove('swipper')
					simpleDesc2.classList.add('swipper')
					simpleDesc3.classList.remove('swipper')
				},
				onComplete: function () {
					simpleTitle2.classList.remove('swipper')
					simpleTitle3.classList.add('swipper')
					simpleDesc2.classList.remove('swipper')
					simpleDesc3.classList.add('swipper')
				}
			}
		)
		.fromTo(
			'.advantages_v3',
			{ y: 1000 },
			{
				y: 0,
				duration: 1.5,
				onStart: function () {
					// simpleTitle3.classList.add('swipper')
				},
				onReverseComplete: function () {
					simpleTitle3.classList.add('swipper')
					simpleTitle4.classList.remove('swipper')
					simpleDesc3.classList.add('swipper')
					simpleDesc4.classList.remove('swipper')
				},
				onComplete: function () {
					simpleTitle3.classList.remove('swipper')
					simpleTitle4.classList.add('swipper')
					simpleDesc3.classList.remove('swipper')
					simpleDesc4.classList.add('swipper')
				}
			}
		)
		.fromTo(
			'.advantages_v4',
			{ y: 1000 },
			{
				y: 0,
				duration: 1.5,
				onStart: function () {
					// simpleTitle4.classList.add('swipper')
				},
				onReverseComplete: function () {
					simpleTitle4.classList.add('swipper')
					simpleTitle5.classList.remove('swipper')
					simpleDesc4.classList.add('swipper')
					simpleDesc5.classList.remove('swipper')
				},
				onComplete: function () {
					simpleTitle4.classList.remove('swipper')
					simpleTitle5.classList.add('swipper')
					simpleDesc4.classList.remove('swipper')
					simpleDesc5.classList.add('swipper')
				}
			}
		)
		.fromTo(
			'.advantages_v5',
			{ y: 1000 },
			{
				y: 0,
				duration: 1.5,
				onStart: function () {
					// simpleTitle5.classList.add('swipper')
				},
				onReverseComplete: function () {
					simpleTitle4.classList.add('swipper')
					simpleTitle5.classList.remove('swipper')
					simpleDesc4.classList.add('swipper')
					simpleDesc5.classList.remove('swipper')
				},
				onComplete: function () {
					// simpleTitle5.classList.remove('swipper')
				}
			}
		)

	new ScrollMagic.Scene({
		triggerElement: '.mainbig-wrapper',
		triggerHook: 'onLeave',
		duration: '300%'
	})
		.setPin('.mainbig-wrapper')
		.setTween(horizontalSlide)
		.addTo(controller)
})

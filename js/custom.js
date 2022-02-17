document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('.tabs-link')
	const contents = document.querySelectorAll('.tabs-content')

	Array.from(links).map((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault()
			Array.from(links).map((i) => i.classList.remove('tabs-link_active'))
			Array.from(contents).map((i) => i.classList.remove('tabs-content_active'))
			const contentId = document.getElementById(link.getAttribute('data-id'))
			link.classList.add('tabs-link_active')
			contentId.classList.add('tabs-content_active')
		})
	})
	// wait for document ready

	let controller = new ScrollMagic.Controller()
	let slidesTotal = 6
	let transitionWidth = 480 / slidesTotal
	let horizontalSlide = new TimelineMax()
		// animate panels
		.to('.main-advantages', 1, { x: '-' + transitionWidth + '%' })
		.to('.main-advantages', 1, { x: '-' + transitionWidth * 2 + '%' })
		.to('.main-advantages', 1, { x: '-' + transitionWidth * 3 + '%' })
		.to('.main-advantages', 1, { x: '-' + transitionWidth * 4 + '%' })
		.to('.main-advantages', 1, { x: '-' + transitionWidth * 5 + '%' })

	// create scene to pin and link animation
	new ScrollMagic.Scene({
		triggerElement: '.mainbig-wrapper',
		triggerHook: 'onLeave',
		duration: '100%'
	})
		.setPin('.mainbig-wrapper')
		.setTween(horizontalSlide)
		//.addIndicators() // add indicators (requires plugin)
		.addTo(controller)
})

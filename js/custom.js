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
	let simpleTitle = document.querySelector('.advantages__simple-title')
	let simpleDesc = document.querySelector('.advantages__simple-desc')

	console.log('simpleTitle.textContent()', simpleTitle)

	let controller = new ScrollMagic.Controller()
	let horizontalSlide = new TimelineMax()
		.fromTo(
			'.advantages_v1',
			{ y: 380 },
			{
				y: 0,
				duration: 1.5,
				onStart: function () {
					simpleTitle.innerHTML = 'Офисы в центре города'
					simpleDesc.innerHTML = 'Офисы в центре города'
				},
				onReverseComplete: function () {
					simpleTitle.innerHTML = 'Офисы в центре города'
					simpleDesc.innerHTML = 'Офисы в центре города'
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
					simpleTitle.innerHTML = 'Коммунальные расходы'
					simpleDesc.innerHTML = `Арендуя офис в Arash Business Centre вы не будете думать о коммунальных расходах, так как все расходы включены в арендную плату`
				},
				onReverseComplete: function () {
					simpleTitle.innerHTML = 'Коммунальные расходы'
					simpleDesc.innerHTML = `Арендуя офис в Arash Business Centre вы не будете думать о коммунальных расходах, так как все расходы включены в арендную плату`
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
					simpleTitle.innerHTML = 'Парковочное место'
					simpleDesc.innerHTML =
						'Удобное, охраняемое парковочное место предусмотренная для каждого офиса'
				},
				onReverseComplete: function () {
					simpleTitle.innerHTML = 'Парковочное место'
					simpleDesc.innerHTML =
						'Удобное, охраняемое парковочное место предусмотренная для каждого офиса'
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
					simpleTitle.innerHTML = 'Безопасность'
					simpleDesc.innerHTML =
						'Ваше офисное помещение всегда находится под круглосуточной охраной, в здании установлены системы видеонаблюдения, пожарные сигнализации и датчики движения'
				},
				onReverseComplete: function () {
					simpleTitle.innerHTML = 'Безопасность'
					simpleDesc.innerHTML =
						'Ваше офисное помещение всегда находится под круглосуточной охраной, в здании установлены системы видеонаблюдения, пожарные сигнализации и датчики движения'
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
					simpleTitle.innerHTML = 'Чистота'
					simpleDesc.innerHTML =
						'В помещениях и общих зонах бизнес-центра всегда поддерживается безупречный порядок и чистота'
				},
				onReverseComplete: function () {
					simpleTitle.innerHTML = 'Чистота'
					simpleDesc.innerHTML =
						'В помещениях и общих зонах бизнес-центра всегда поддерживается безупречный порядок и чистота'
				}
			}
		)

	new ScrollMagic.Scene({
		triggerElement: '.mainbig-wrapper',
		triggerHook: 'onLeave',
		duration: '400%'
	})
		.setPin('.mainbig-wrapper')
		.setTween(horizontalSlide)
		.addTo(controller)
})

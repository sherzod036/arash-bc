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
})

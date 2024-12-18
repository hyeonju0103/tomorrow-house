const sectionheaderIconButton = document.querySelector('.product-section-header.sm-only .icon-button')

function showFullSection() {
	const sectionHeader = this.parentNode.parentNode;
	sectionHeader.classList.add('is-open');
}

sectionheaderIconButton.addEventListener('click', showFullSection);
const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children;
const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

function openOrderModal(){
	orderModal.classList.add('is-open');
	orderModalOverlay.classList.add('is-active');
}

function closeOrderModal(){
	orderModal.classList.remove('is-open');
	orderModalOverlay.classList.remove('is-active');
}

function toggleOrderCtaBookmark(){
	// 1. 북마크 버튼에 is-active를 줘서 파랗게
	// 2. 아이콘 클래스를 ic-bookmark-filled로 변경
	// 3. 북마크 아이콘 하단의 숫자에 1을 추가 (카운트값 변경)
	const [icon, countSpasn] = this.children;
	const count = Number(countSpasn.innerHTML.replaceAll(',', ''));
	let newCount = count;
	if (this.classList.contains('is-active')) {
		newCount = newCount - 1;
		icon.classList.add('ic-bookmark');
		icon.classList.remove('ic-bookmark-filled');
		countSpasn.innerHTML = newCount;
		
	} else {
		newCount = newCount + 1;
		icon.classList.add('ic-bookmark-filled');
		icon.classList.remove('ic-bookmark');
		countSpasn.innerHTML = newCount;
	};
	this.classList.toggle('is-active');
	countSpasn.innerHTML = newCount.toLocaleString();
	countSpasn.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`);
	countSpasn.setAttribute('class');
}

orderCtaBuyButton.addEventListener('click', openOrderModal);
orderModalOverlay.addEventListener('click', closeOrderModal);
orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark);
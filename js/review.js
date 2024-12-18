const reviewLikeButtonList = document.querySelectorAll('.review-card-footer button');
const HELPFUL = String('도움됨');
const NOT_HELPFUL = String('도움이 돼요');
// const checkIcon = '<i class="ic-check" aria-hidden></i>';

function toggleReviewLikeButton(){
	
	// 1. btn class를 btn-primary or btn-outlined로 변경
	// 2. 텍스트 변경: 도움됨 > 도움이 돼요 > 도움됨
	// 3. count: n명에게 도움이 되었습니다

	const isLiked = this.classList.contains('btn-primary');
	const textElement = this.nextElementSibling;
	const reviewCardFooter = this.parentNode;

	if (isLiked){
		this.innerHTML = NOT_HELPFUL;
	} else {
		this.innerHTML = HELPFUL;
		const checkIcon = document.createElement('i');
		checkIcon.classList.add('ic-check');
		checkIcon.setAttribute('aria-hidden', 'true');
		this.prepend(checkIcon); // 로직 플로우는 if 안에 넣었을때가 훨씬 자연스러움
	};

	if (textElement){
		// count의 n값을 업데이트
		const countSpan = textElement.querySelector('span');
		const count = Number(countSpan.innerHTML.replaceAll(',', ''));
		let newCount = count;

		if (isLiked){
			// 비활성화 count - 1.
			newCount = newCount - 1;
			countSpan.innerHTML = newCount.toLocaleString();

			if (newCount === 0){ // 카운트에서 값이 커지기만 하는 것은 별 문제가 없으나 비활성화가 되면 카운트가 1일때 1 - 1은 0이므로 아무에게 도움이 되지 않았을 경우 p 태그 내부의 내용을 비워서 동작하지 않게끔 만들어줘야 함
				reviewCardFooter.removeChild(textElement);
			};
		} else {
			// 활성화 count + 1
			newCount =  newCount + 1;
			countSpan.innerHTML = newCount.toLocaleString();
		};
	} else {
		if (!isLiked){ // btn-primary가 활성화가 안되어있을 수 있음(btn-outlined)
			const newTextElement = document.createElement('p');
			newTextElement.innerHTML = '<strong><span>1</span>명</strong>에게 도움이 되었습니다.'; // 그럼 p태그를 하나 만들어서 안에다가 최초의 1명을 넣어주면 됨
			reviewCardFooter.append(newTextElement);
		}

	}

	this.classList.toggle('btn-primary');
	this.classList.toggle('btn-outlined');
}

reviewLikeButtonList.forEach((button) => {
	button.addEventListener('click', toggleReviewLikeButton);
});
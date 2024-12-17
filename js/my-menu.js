const myMenu = document.querySelector('.my-menu');
const myMenuButton = document.querySelector('.my-menu-button');

function closeMyMenu(e) { // 클릭 이벤트 함수
	console.log("clicking window"); // 콘솔창에 clicking window 입력
	if (!myMenu.contains(e.target)) { // 클릭반응 영역을 my-menu가 포함하지 않는다면(my-menu의 바깥을 클릭했을 경우)
		myMenu.classList.remove('is-active'); // my-menu에서 is-active를 빼서 감춤
		window.removeEventListener('click', closeMyMenu); // 이벤트핸들러도 제거
	}
}

function toggleMyMenu() { // 토글 이벤트 함수
	if (!myMenu.classList.contains('is-active')) { // my-menu가 보이고 있다면
		window.addEventListener('click', closeMyMenu); // 클릭 이벤트 함수를 추가
	}
	myMenu.classList.toggle('is-active'); // my-menu에서 is-active를 클릭할때마다 빼고 넣을 수 있는 상태가 됨
}

myMenuButton.addEventListener('click', toggleMyMenu);
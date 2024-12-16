const drawerMenuButtonList = document.querySelectorAll('.sidebar-nav .drawer-menu-button');

function toggledrawerMenu(){
	// 감싸고 있는 부모요소인 drawer-menu 에다가 각각 is-open을 추가
	const drawerMenu = this.parentNode;
	drawerMenu.classList.toggle('is-open');
}

/*
	일일히 할 수 있지만 아래처럼 1줄로 forEach를 써서 한번에 쓰는게 맞음
	drawerMenuButtonList[0].addEventListener('click', toggledrawerMenu);
	drawerMenuButtonList[1].addEventListener('click', toggledrawerMenu);
	drawerMenuButtonList[2].addEventListener('click', toggledrawerMenu);
*/

drawerMenuButtonList.forEach(function(e) {
	e.addEventListener('click', toggledrawerMenu);
});
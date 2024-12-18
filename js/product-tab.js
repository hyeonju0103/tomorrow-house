const productTab = document.querySelector('.product-tab');
const productTabButtonlist = productTab.querySelectorAll('button');

const TOP_HEADER_DESKTOP = 80 + 50 + 54;
const TOP_HEADER_MOBLIE = 50 + 40 + 40;

let currentActiveTab = productTab.querySelector('.is-active');
let disableUpdating = false;

function ActiveTab(){
	// 1. 상단 탭의 버튼을 클릭하면 탭에 is-active가 붙어야 함
	// 2. 동시에 나머지 탭 버튼의 탭에는 is-active가 빠져야 함
	// 3. 탭이 가진 해당 id를 가진 섹션으로 스크롤되며 이동해야 함

	const tabItem = this.parentNode;
	
	if (currentActiveTab !== tabItem){ // 의도치 않게 active 된 탭을 다시 누르면 active가 꺼지는 현상을 막기 위해 if문을 사용
		disableUpdating = true;
		tabItem.classList.add('is-active');
		currentActiveTab.classList.remove('is-active');
		currentActiveTab = tabItem;

		setTimeout(() => {
			disableUpdating = false;
			console.log("disableUpdating = false");
		}, 500);

	}
}

function scrollToTabPanel(){
	const tabPanelId = this.parentNode.getAttribute('aria-labelledby');
	const tabPanel = document.querySelector(`#${tabPanelId}`)
	const scrollAmount = tabPanel.getBoundingClientRect().top - (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBLIE);

	// getBoundingClientRect을 사용해 해당 id 섹션의 위치값을 추출하고 추출한 위치값에서 실시간으로 변한 top 값만 뽑아내서 사용 > 이동하라고 하는 값에 넣어주기
	window.scrollBy({
		top: scrollAmount,
		behavior: "smooth",
	});
};

productTabButtonlist.forEach((button) => {
	button.addEventListener('click', ActiveTab);
	button.addEventListener('click', scrollToTabPanel);
	// 덮히지 않음. 클릭 반응에도 다양한 이벤트를 연결해줄 수 있음. 2개의 이벤트 핸들러가 동작하도록 연결한 것
});

// 각 tabPanel의 y축 위치를 알아야 함
// 요소의 y축 위치 = window.scrollY + element.getBoundingClientRect().top

const productTabPanelIdList = [
	'product-spec',
	'product-review',
	'product-inquiry',
	'product-shipment',
	'product-recommendation'
]

const productTabPanelList = productTabPanelIdList.map((panelId) => {
	const tabPanel = document.querySelector(`#${panelId}`)
	return tabPanel;
});

const productTabPanelPositionMap = {};

function detectTabPanelPosition(){ // 탭의 y축 위치를 감지하는 함수. 이 작업은 각각의 tabPanel의 y축 위치를 찾은 후 그 값을 productTabPanelPositionMap 객체에 업데이트

	console.log("detect tabpanel in window section size");
	
	productTabPanelList.forEach((panel) => {
		// 객체의 키값으로 패널의 Id를, 키에 대한 값으로 위치를 알려주고 있음
		// 1. id를 알아야 하고, 2. y축 위치값을 구하면 됨

		const id = panel.getAttribute('id');
		const position = window.scrollY + panel.getBoundingClientRect().top;
		productTabPanelPositionMap[id] = position;
	});

	updateActiveTabOnScroll();
};

function updateActiveTabOnScroll(){

	// 퍼포먼스에 엄청난 부하가 옴
	console.log("update activetab");

	if (disableUpdating) return;;

	// 스크롤 위치에 따라서 activeTab 업데이트를 하려면
	// 1. 현재 유저가 얼마나 스크롤 했어? < scroll.Y
	// 2. 각 TabPanel의 y축 위치는 어때? < productTabPanelPositionMap

	const scrolledAmount = window.scrollY + (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 240 : TOP_HEADER_MOBLIE + 8);
	let newActiveTab;

	if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']){
		newActiveTab = productTabButtonlist[4];
	} else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']){
		newActiveTab = productTabButtonlist[3];
	} else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']){
		newActiveTab = productTabButtonlist[2];
	} else if (scrolledAmount >= productTabPanelPositionMap['product-review']){
		newActiveTab = productTabButtonlist[1];
	} else {
		newActiveTab = productTabButtonlist[0];
	};

	// 끝까지 스크롤을 하면 newActiveTab이 추천 탭을 향하도록
	// 분기점을 나눠 처리.
	const bodyHeight = document.body.offsetHeight + (window.innerWidth < 1200 ? 56 - orderCta : 0);

	if (window.scrollY + window.innerHeight == bodyHeight){
		newActiveTab = productTabButtonlist[4];
	};

	if (newActiveTab) {
		newActiveTab = newActiveTab.parentNode;
		if (newActiveTab !== currentActiveTab){
			newActiveTab.classList.add('is-active');
			if(currentActiveTab !== null){
				currentActiveTab.classList.remove('is-active');
			};
			currentActiveTab = newActiveTab;
		}
	}

	// console.log(newActiveTab.innerHTML);
}

window.addEventListener('load', detectTabPanelPosition);
window.addEventListener('resize', _.throttle(detectTabPanelPosition, 300));
window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 300));
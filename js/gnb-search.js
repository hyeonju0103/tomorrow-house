const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

const deleteAllButton = gnbSearchHistory.querySelector('.search-history-header button');
const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button');

function closeSearchHistory(){
	gnbSearchHistory.classList.remove('is-active');
	window.removeEventListener('click', closeSearchHistoryClickingOutside);
};

function closeSearchHistoryClickingOutside(e){
	if (!gnbSearch.contains(e.target)){
		closeSearchHistory();
	};
};

function openSearchHistory(){
	if (gnbSearchHistoryList.children.length === 0) return;
	if (!gnbSearchHistory.classList.contains('is-active')){
		window.addEventListener('click', closeSearchHistoryClickingOutside);
	};
	gnbSearchHistory.classList.add('is-active');
};

gnbSearchInput.addEventListener('focus', openSearchHistory)

function deleteAllSearchHistoryItems(){
	gnbSearchHistoryList.innerHTML = '';
	closeSearchHistory();
};

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems);

function deleteSearchHistoryItem(e){
	e.stopPropagation();
	const itemToDelete = this.parentNode;
	gnbSearchHistoryList.removeChild(itemToDelete);

	if (gnbSearchHistoryList.children.length === 0){
		closeSearchHistory();
	}
}

	deleteButtonList.forEach((button) => {
	button.addEventListener('click', deleteSearchHistoryItem);
})
# 내일의 집

### 1. GNB

* 로그인을 하지 않은 경우

``` html

<div class="button-group">
	<button class="gnb-icon-button is-search" type="button" aria-hidden="검색창 열기 버튼"><i class="ic-search"></i></button>
	<a class="gnb-icon-button is-cart" href="/" aria-hidden="장바구니 페이지로 이동">
		<i class="ic-cart"></i>
	</a>
	<div class="gnb-auth sm-hidden">
		<a href="/">로그인</a>
		<a href="/">회원가입</a>
	</div>
</div>

```

* 로그인을 했을 경우

``` html

<div class="button-group">
	<div class="button-group">
		<button class="gnb-icon-button is-search lg-hidden" type="button" aria-hidden="검색창 열기 버튼"><i class="ic-search"></i></button>
		<a class="gnb-icon-button sm-hidden" href="/" aria-hidden="스크랩북 페이지로 이동"><i class="ic-bookmark"></i></a>
		<a class="gnb-icon-button sm-hidden" href="/" aria-label="내 소식 페이지로 이동"><i class="ic-bell"></i></a>
		<a class="gnb-icon-button is-cart" href="/" aria-hidden="장바구니 페이지로 이동">
			<i class="ic-cart"></i>
			<strong class="badge">999</strong>
		</a>
		<button class="gnb-icon-button sm-hidden" type="button" aria-hidden="마이메뉴 열기 버튼"><div class="avatar-32"><img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨"></div></button>
	</div>
</div>

```

### 2. Sidebar

* 로그인을 하지 않은 경우

``` html

<div class="sidebar-auth">
	<a class="btn-outlined btn-40" href="/">로그인</a>
	<a class="btn-primary btn-40" href="/">회원가입</a>
</div>

```

* 로그인을 한 경우

``` html

<div class="sidebar-user">
	<a href="/">
		<div class="avatar-24">
		<img src="./assets/images/img-user-01.jpg" alt="사달라 아저씨" />
		</div>
		<strong class="username">사달라</strong>
	</a>
</div>

```

### 3. Search-input

* 최근 검색어가 있을 경우

``` html

<ol>
	<li><button type="button">김버그</button><button type="button"><i class="ic-close" aria-lebel="검색어 삭제"></i></button></li>
	<li><button type="button">버그</button><button type="button"><i class="ic-close" aria-lebel="검색어 삭제"></i></button></li>
	<li><button type="button">튕김버그</button><button type="button"><i class="ic-close" aria-lebel="검색어 삭제"></i></button></li>
</ol>

```

* 최근 검색어가 없을 경우

``` html

<section>
	<header>
		<h2>최근 검색어</h2>
		<button type="button">전체 삭제</button>
	</header>
	<p>최근 검색한 내역이 없습니다.</p>
</section>

```
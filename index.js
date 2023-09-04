buttonLinks = [
	'https://www.google.co.kr/?hl=ko',
	'https://www.kakaocorp.com/page/service/service/KakaoTalk',
	'https://naver.com', //두번째 버튼을 클릭했을 때 이동할 경로

];

document.querySelectorAll('button#link').forEach((button, index) => {
	button.addEventListener('click', () => {
		let link = buttonLinks[index] ? buttonLinks[index] : '/';
		document.location.href = link;
	});
});

const url = 'https://feedsapi.safe-installation.com/api/GetJackpotTotalAmount?CurrencyCode=USD&currencySymbol=$&BrandID=0';
const jackpot = document.querySelector('#jackpot');

function randomCent() {
	const randomCent = Math.floor(Math.random() * 10) + 1;
	return randomCent;
}
fetch(url)
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		let amount = data.entity.totalAmount;
		let amountConvertedToString = amount.toString();

		// amountConvertedToString.substring(7 + 1)
		let afterDot = amountConvertedToString.substring(amountConvertedToString.indexOf('.') + 1);
		let beforeDot = amountConvertedToString.slice(0, amountConvertedToString.indexOf('.'));

		jackpot.innerHTML = `$ ${beforeDot}.${afterDot}`;

		setInterval(() => {
			afterDot = (parseInt(afterDot) + randomCent()) % 100;
			jackpot.innerHTML = `$ ${beforeDot}.${afterDot}`;
		}, 1000);
	});

// openweathermap api
const api = "3e9de92f315df4a6e0276d9567153fbc";

window.addEventListener("load", () => {
	let long;
	let lat;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			long = position.coords.longitude;
			lat = position.coords.latitude;
			const base = `https://api.openweathermap.org/data/2.5/weatherlat=${lat}&lon=${long}&appid=$%7B${api}&units=metric`;
			console.log(base);
			fetch(base).then((response) => {
				return response.json();
			});
            .then((data) => {
                const { temp } = data.main;
                const place = data.name;
                const { description, icon } = data.weather[0];
                const {sunrise, sunset } = data.sys;

                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                const fahrenheit = (temp * 9) / 5 + 32;

                const sunriseGMT = new DataTransfer(sunrise * 1000);
                const sunsetGMT = new Date(sunset * 1000);
            })
		});
	}
});

var but = document.querySelector(".selection-button");
var popup = document.querySelector(".form-fone");
var date_come = popup.querySelector("[name=coming]");
var date_dep = popup.querySelector("[name=departure]");
var gro = popup.querySelector("[name=grown]");
var	babie = popup.querySelector("[name=babies]");

but.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("display-show");
	date_come.focus();
});
popup.addEventListener("submit", function(evt) {
	if (!date_come.value || !date_dep.value || !gro.value || !babie.value) {
		evt.preventDefault();
		popup.classList.remove("display-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("display-error");
	}
});
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("display-show")) {
			evt.preventDefault();
			popup.classList.remove("display-show");
			popup.classList.remove("display-error");
		}
	}
});




	
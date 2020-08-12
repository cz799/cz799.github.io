(function () {
	function resize() {
		var deviceWidth = document.documentElement.clientWidth;
		document.documentElement.style.fontSize = (deviceWidth / 55) + 'px';
		$("body").css("height", innerHeight + "px")
	}
	resize();
	window.onresize = resize;
})()

function Diet(week, type, staple, vegetable, fruit, drink) {
	this.week = week
	this.type = type
	this.staple = staple
	this.vegetable = vegetable
	this.fruit = fruit
	this.drink = drink
}
function Kcal(food,weight){
	return {food:food,weight:weight}
}
var diet1 = new Diet(1, "gym", Kcal("pasta",200), ["tomato", "potato"], ["apple", "banana"], ["milk", "lemonjuice"])
console.log(diet1);
$(window).on("load", function () {
	$("body").css("height", innerHeight + "px")
	$("#menu").on({
		mouseover: (e) => {
			$(e.target).prevAll().css({
				marginTop: "-10px"
			})
			$(e.target).nextAll().css({
				marginBottom: "-10px"
			})
		},
		mouseleave: (e) => {
			$(e.target).prevAll().css({
				marginTop: "0"
			})
			$(e.target).nextAll().css({
				marginBottom: "0"
			})
		},
		click: (e) => {
			if (parseInt($(e.target).siblings().css("margin-left")) < 0) {
				$(e.target).siblings().css({
					marginLeft: 0,
					opacity: 1
				})
			} else {
				$(e.target).siblings().css({
					marginLeft: "-200px",
					opacity: 0
				})
			}

		}
	})
	$(".dietlist").children().on({
		mouseenter: (e) => {
			if ($(e.target).is("li")) {
				$(e.target).siblings().css("width", "90px")
				$(e.target).css("width", "440px")
			} else {
				$(e.target).parents(".li").siblings().css("width", "90px")
				$(e.target).parents(".li").css("width", "440px")
			}
		},
		mouseleave: () => {
			$(".dietlist").children().css("width", "140px")
		}
	})
	$(".select").on("mouseleave",(e) => {
		$(e.target).parent().scrollTop(0)
	}
	)
	
})
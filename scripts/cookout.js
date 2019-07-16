const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: true,
}

const foods = [hamburger, zucchini, chickenBreast, corn, steak];

const cookedFood = [];


function grill (currentObject) {
    currentObject.cooked = true;

    cookedFood.push(currentObject);
}

foods.forEach(done => {
	grill(done)
});

console.log(foods);
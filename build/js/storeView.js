// Nested array with each candy's flavors
const candyFlavors = [
    [ // Lollipops
        "Apple",
        "Bubblegum",
        "Cherry",
        "Grape",
        "Green Apple",
        "Lemon",
        "Mango",
        "Orange",
        "Peach",
        "Pineapple",
        "Raspberry",
        "Strawberry",
        "Watermelon"
    ],
    [ // Cotton Candy
        "Banana",
        "Black Cherry",
        "Blue Raspberry",
        "Birthday Cake",
        "Coconut",
        "Grape",
        "Maple",
        "Pink Vanilla",
        "Root Beer"
    ],
    [ // Chocolate
        "Bittersweet",
        "Caramel",
        "Dark",
        "Milk",
        "Mint",
        "Ruby",
        "White"
    ],
    [ // Licorice
        "Black",
        "Grape",
        "Green Apple",
        "Lemon",
        "Orange",
        "Red"
    ],
    [ // Taffy
        "Banana",
        "Blueberry",
        "Bubblegum",
        "Butterscotch",
        "Cotton Candy",
        "Honey",
        "Huckleberry",
        "Peanut Butter",
        "Pineapple",
        "Raspberry",
        "Strawberry"
    ],
    [ // Rock Candy
        "Banana",
        "Cherry",
        "Cotton Candy",
        "Grape",
        "Green Apple",
        "Lemon",
        "Lime",
        "Orange",
        "Root Beer",
        "Strawberry",
        "Sugar",
        "Tutti Frutti",
        "Watermelon"
    ],
    [ // Caramel
        "Chocolate",
        "Cinnamon",
        "Coconut",
        "Coffee",
        "Original",
        "Peppermint",
        "Vanilla"
    ],
    [ // Gummies
        "Blue Raspberry",
        "Grape",
        "Lime",
        "Mango",
        "Orange",
        "Pineapple",
        "Pink Grapefruit",
        "Strawberry",
        "Watermelon"
    ],
    [ // Mint
        "Cinnamon",
        "Peppermint",
        "Spearmint",
        "Wintergreen"
    ],
    [ // Chewing Gum
        "Bubblegum",
        "Cotton Candy",
        "Lemon",
        "Orange",
        "Peppermint",
        "Spearmint",
        "Strawberry",
        "Watermelon"
    ],
    [ // Toffee
        "Almond",
        "Butterscotch",
        "Caramel",
        "Coconut",
        "Dark Chocolate",
        "English",
        "Peanut Butter"
    ],
    [ // Seasonal
        "Candy Apple",
        "Candy Cane",
        "Candy Corn",
        "Chocolate Bunny",
        "Peeps"
    ],
    [ // Sour Candy
        "Cherry",
        "Green Apple",
        "Lemon",
        "Lime",
        "Mango",
        "Orange",
        "Pink Grapefruit",
        "Watermelon"
    ],
    [ // Jelly Beans
        "Cantaloupe",
        "Caramel Corn",
        "Cinnamon",
        "Cotton Candy",
        "Lemon Lime",
        "Mango",
        "Peach",
        "Plum",
        "Red Apple",
        "Root Beer",
        "Raspberry",
        "Wild Blackberry"
    ],
    [ // Candy Straw
        "Apple",
        "Blue Raspberry",
        "Grape",
        "Punch",
        "Strawberry",
        "Tangerine",
        "Watermelon"
    ],
    [ // Marshmallow
        "Blue Raspberry",
        "Cinnamon",
        "Cotton Candy",
        "Peppermint",
        "Regular",
        "Vanilla",
        "Watermelon"
    ]
];

const candyPrices = [
    2.99, 1.99, 3.39, 2.99, 2.59, 2.99,
    4.99, 2.29, 2.19, 1.49, 3.99,
    3.79, 2.59, 0.69, 2.29, 1.99
]

const candyNames = [
    "Lollipop",
    "Cotton Candy",
    "Chocolate",
    "Licorice",
    "Taffy",
    "Rock Candy",
    "Caramel",
    "Gummies",
    "Mint",
    "Chewing Gum",
    "Toffee",
    "Seasonal",
    "Sour Candy",
    "Jelly Beans",
    "Candy Straw",
    "Marshmallow"
]

const candyImages = [
    "img/header-lollipop.jpg",
    "img/header-cottoncandy.jpg",
    "img/header-chocolate.jpg",
    "img/header-licorice.jpg",
    "img/header-taffy.jpg",
    "img/header-rockcandy.jpg",
    "img/header-caramel.jpg",
    "img/header-gummies.jpg",
    "img/header-mint.jpg",
    "img/header-chewinggum.jpg",
    "img/header-toffee.jpg",
    "img/header-seasonal.jpg",
    "img/header-sourcandy.jpg",
    "img/header-jellybeans.jpg",
    "img/header-candystraw.jpg",
    "img/header-marshmallow.jpg",
]

var isRefreshing = false;

function changeList(index) {
    var targetList = document.querySelector('#flavor-list');
    targetList.innerHTML = '';

    var clickedArray = candyFlavors[index];
    var candyPrice = candyPrices[index];

    clickedArray.forEach(function (flavor, i) {
        var newListItem = document.createElement('li');
        newListItem.className = 'bg-orange-200 font-semibold rounded-md w-full h-32 pt-4 px-3 text-center text-2xl';

        // Flavor with price
        var flavorWithPrice = '$' + candyPrice.toFixed(2) + ' - ' + flavor;

        // Set text content to include flavor and price
        newListItem.textContent = flavorWithPrice;

        newListItem.id = 'flavor' + (i + 1);
        targetList.appendChild(newListItem);
    });

    // Update the image and text above the flavors
    var candyImage = document.getElementById('candyImage');
    var candyName = document.getElementById('candyName');
    var candyImageSrc = candyImages[index];

    candyImage.src = candyImageSrc;
    candyImage.alt = 'Image of ' + candyNames[index];
    candyName.textContent = candyNames[index];

    // Save the current index to localStorage
    localStorage.setItem('currentViewIndex', index);
}

// Function to clear the saved index when the window is closed
function clearLocalStorage() {
    if (!isRefreshing) {
        localStorage.removeItem('currentViewIndex');
    }
}

// Set the default view to "Lollipops" or retrieve from localStorage
var defaultIndex = localStorage.getItem('currentViewIndex') || 0;
changeList(defaultIndex);

// Add click event listeners to each item in the first list
for (var i = 1; i <= 16; i++) {
    var listItem = document.querySelector('#candy' + i);
    listItem.addEventListener('click', function () {
        var index = parseInt(this.id.slice(5)) - 1;
        changeList(index);
    });
}

// Add event listener for unload to set the isRefreshing flag
window.addEventListener('beforeunload', function () {
    isRefreshing = true;
});

// Add event listener for unload to clear localStorage
window.addEventListener('unload', clearLocalStorage);

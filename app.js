// Here are the different page view ranges and the corresponding monthly price totals:

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

// Slider Range

let priceValue = [8, 12, 16, 24, 36];
let pageViews = ['10k', '50k', '100k', '500k', '1M'];

let range = document.getElementById("myRange");
let price = document.getElementById("price");
let page = document.getElementById("page");

range.oninput = function () {
    // coloration du range. A modifier en créant une fonction avec une boucle ???
    let colorRange = document.getElementById('color-range');
    colorRange.classList.remove('range1', 'range0', 'range2', 'range3', 'range4')
    colorRange.classList.add('range'+ [this.value]);
    price.innerHTML = '$' + priceValue[this.value].toFixed(2);
    page.innerHTML = pageViews[this.value] +" Pageviews"; 

};

range.oninput();



// Toggle billing

let toggle = document.getElementById('billingToggle');
toggle.addEventListener('click', billingToggle);
function billingToggle() {
    if (toggle.checked === true) {
        priceValue = [6, 9, 12, 18, 27]
    }
    else {
        priceValue = [8, 12, 16, 24, 36]
    }
    range.oninput()
}

// Range Color Before



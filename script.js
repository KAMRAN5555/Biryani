var date = new Date();
var day = date.getDay();
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
if (weekday[day] == "Sunday") {
    document.getElementById("sp").innerText = weekday[day] + " special: \nLucknowi Biryani(Chicken)    ₹140\nLucknowi Biryani(Mutton)    ₹190\nFish Fry    ₹120\nFish Curry    ₹150\nCrispy Chicken    ₹90";
} else if (weekday[day] == "Monday") {
    document.getElementById("sp").innerText = weekday[day] + " special: \nArabian Biryani(Chicken)    ₹150\nArabian Biryani(Mutton)    ₹200\nCrispy Fish    ₹130\nHummus    ₹60\nSharwarma    ₹80";
} else if (weekday[day] == "Tuesday") {
    document.getElementById("sp").innerText = weekday[day] + " special: \nPrawn Biryani    ₹200\nFish Biryani    ₹190\nChicken roll    ₹70\nMutton roll    ₹110\nChicken Tikka    ₹100";
} else if (weekday[day] == "Wednesday") {
    document.getElementById("sp").innerText = weekday[day] + " special: \nMughalai Biryani(Chicken)    ₹140\nMughalai Biryani(Mutton)    ₹190\nTandoori Chicken    ₹200\nButter Naan    ₹30";
} else if (weekday[day] == "Thursday") {
    document.getElementById("sp").innerText = weekday[day] + " special: \nHyderabadi dum Biryani(Chicken)    ₹150\nHyderabadi dum Biryani(Mutton)    ₹200\nChicken Kebab    ₹70\nButter Chicken    ₹100\nPalak Paneer    ₹100";
} else if (weekday[day] == "Friday") {
    document.getElementById("sp").innerText = weekday[day] + " special: \nBiryani Combo(Chicken)    ₹700\nBiryani Combo(Mutton)    ₹900\nChilli Chicken    ₹60\nKheema    ₹50\n";
} else if (weekday[day] == "Saturday") {
    document.getElementById("sp").innerText = weekday[day] + " special: \nBiryani Combo(Chicken)    ₹700\nBiryani Combo(Mutton)    ₹900";
}

function placeorder() {
    document.getElementById("nam").value = '';
    document.getElementById("addr").value = '';
    document.getElementById("num").value = '';
    document.getElementById("porder").value = '';
}
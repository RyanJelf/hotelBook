function allFunctions() {
    selection();

}


function selection() {
    let display = document.getElementById('result');
    let vTitle = document.getElementById('title').value;
    let vName = document.getElementById('name').value;
    let vAddress = document.getElementById('address').value;
    let vEmail = document.getElementById('email').value;
    let vHotel = document.getElementById('hotel').value;
    let vGuest = Number(document.getElementById('guest').value);
    let vMeal = document.getElementById('meal').value;
    let vRoom = document.getElementById('rooms').value;
    let vPay = document.getElementById('payment').value;
    let disAmount;
    let total;
    let discount;



    let vSel;
    if (vRoom == "honeymoon") vSel = 190;
    if (vRoom == "duluxe") vSel = 170;
    if (vRoom == "double") vSel = 150;
    if (vRoom == "standard") vSel = 100;

    if ((vGuest > 5) && (vGuest < 10)) {
        discount = 10;
    } else if (vGuest > 9) {
        discount = 15;
    } else {
        discount = 0;
    }



    disAmount = (100 - discount) / 100;

    total = vSel * vGuest * disAmount;


    display.innerHTML =
        '<p>Title: ' + vTitle + '</p>' +
        '<p>Name: ' + vName + '</p>' +
        '<p>Address: ' + vAddress + '</p>' +
        '<p>Email: ' + vEmail + '</p>' +
        '<p>Hotel: ' + vHotel + '</p>' +
        '<p>Guests: ' + vGuest + '</p>' +
        '<p>Meals: ' + vMeal + '</p>' +
        '<p>Room: ' + vRoom + '</p>' +
        '<p>Payment Method: ' + vPay + '</p>' +
        '<p>Discount: ' + discount + '%</p>' +
        '<p>Total Cost: £' + total + '</p>';



}
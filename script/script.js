let car = {
    manufacturer: 'USA',
    model: 'BMW X5',
    graduationYear: 2011,
    averageSpeed: 240,
    fuelVolume: 80,
    drivers: ['Kiril'],
};

function infoCarButton() {
    document.getElementById("infoCarText").textContent = JSON.stringify(car);
}
function addDriver() {
    let newDriver = document.getElementById('driverInput').value;
    if (newDriver) {
        car.drivers.push(newDriver);
        document.getElementById('driverResult').textContent = "Добавлено ще одного водія";
    }
}
function checkDriver(){
    let checkDriver = document.getElementById('checkDriverInput').value;
    if (car.drivers.includes(checkDriver)) {
        document.getElementById('checkDriverResult').textContent = "Так, ми маємо його";
    } else {
        document.getElementById('checkDriverResult').textContent = "Увага!Ми його не маємо!";
    }
}
function hardMatch() {
    const distance = parseInt(document.getElementById('checkFuelIuput').value);
    if (isNaN(distance)) {
        document.getElementById('checkFuelResult').textContent ="Ви ввели не число!";
        return;
    }
    let midlSpeed = car.averageSpeed / 2;
    const timeWithoutBreaks = distance / midlSpeed;
    const breakCount = Math.floor(timeWithoutBreaks / 4);

    const totalTime = timeWithoutBreaks + breakCount;
    const hours = Math.floor(totalTime);
    const minutes = Math.round((totalTime - hours) * 60);
    const time = ` ${hours} годин, ${minutes} та хвилин`;
    document.getElementById('checkFuelResult').textContent = `${time}`;
}


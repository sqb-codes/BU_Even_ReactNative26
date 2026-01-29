const UNITS = {
    celcius: "°C",
    farahneit: "°F"
}

function convertTemp(temp, unitTo) {
    if(unitTo === UNITS.celcius) {
        return (temp - 32) / 1.8;
    } else if(unitTo === UNITS.farahneit) {
        return temp * 1.8 + 32;
    } else {
        throw new Error("Invalid Unit...");
    }
}

function toggleUnit(unit) {
    return unit === UNITS.celcius ? UNITS.farahneit : UNITS.celcius;
}

export {UNITS, convertTemp, toggleUnit};
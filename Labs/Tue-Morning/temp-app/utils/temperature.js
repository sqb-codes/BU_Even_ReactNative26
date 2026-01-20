const UNITS = {
    celcius: "°C",
    farahneit: "°F"
}

function convertTemp(temperature, unitTo) {
    if(unitTo === UNITS.celcius) {
        return (temperature - 32) / 1.8
    } else if(unitTo === UNITS.farahneit) {
        return temperature * 1.8 + 32;
    } else {
        throw new Error("Invalid Unit");
    }
}

function getUnitToggle(unit) {
    return unit === UNITS.celcius ? UNITS.farahneit : UNITS.celcius;
}

export {UNITS, convertTemp, getUnitToggle};
class TourPackage {
    constructor() {
        this.pointOfDestination = null;
        this.type = null;
        this.transport = null;
        this.food = null;
        this.days = null;
        this.price = null;
    }
}

class TourPackageBuilder {
    constructor(pointOfDestination) {
        this.tourPackage = new TourPackage();
        this.tourPackage.pointOfDestination = pointOfDestination;
    }

    addType(type) {
        this.tourPackage.type = type;
        return this;
    }

    addTransport(transport) {
        this.tourPackage.transport = transport;
        return this;
    }

    addPrice(price) {
        this.tourPackage.price = price;
        return this;
    }

    addFood(food) {
        this.tourPackage.food = food;
        return this;
    }

    addDays(days) {
        this.tourPackage.days = days;
        return this;
    }

    build() {
        return this.tourPackage;
    }
}

const tourPackages = [
    new TourPackageBuilder("ЕГИПЕТ")
        .addType("ОТДЫХ")
        .addTransport("САМОЛЕТ")
        .addFood("ВСЕ ВКЛЮЧЕНО")
        .addDays(7)
        .addPrice(2500)
        .build(),
    new TourPackageBuilder("ИСПАНИЯ")
        .addType("ЭКСКУРСИИ")
        .addTransport("АВТОБУС")
        .addFood("ЗАВТРАК")
        .addDays(14)
        .addPrice(1500)
        .build(),
    new TourPackageBuilder("БЕЛАРУСЬ")
        .addType("ЛЕЧЕНИЕ")
        .addTransport("ПОЕЗД")
        .addFood("ПОЛУПАНСИОН")
        .addDays(21)
        .addPrice(200)
        .build(),
    new TourPackageBuilder("ИТАЛИЯ")
        .addType("ШОПИНГ")
        .addTransport("САМОЛЕТ")
        .addFood("БЕЗ ПИТАНИЯ")
        .addDays(10)
        .addPrice(1000)
        .build(),
    new TourPackageBuilder("МАЙАМИ")
        .addType("КРУИЗ")
        .addTransport("КОРАБЛЬ")
        .addFood("ВСЕ ВКЛЮЧЕНО")
        .addDays(14)
        .addPrice(5000)
        .build(),
];

function tourPackageSorter(tourPackages, sortByNameParameter) {
    const sortedTours = tourPackages.sort((a, b) => a[sortByNameParameter] - b[sortByNameParameter]);
    console.log(sortedTours);
}
TourPackageSorter();

function tourPackageFilter(tourPackages, filterByNameParameter, filterByValue) {
    const filteredTours = [];
    for (let i = 0; i < tourPackages.length; i++) {
        if (tourPackages[i][filterByNameParameter].toUpperCase() === filterByValue.toUpperCase()) {
            filteredTours.push(tourPackages[i]);
        }
    }
    if (filteredTours.length === 0) {
        console.log('Тура в перечне нет-мы подберем новый тур согласно Ваших предпочтений!');
    } else {
        console.log(filteredTours);
    }
}
TourPackageFilter();

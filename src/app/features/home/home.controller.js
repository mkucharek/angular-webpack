export default class HomeController {
    constructor(randomNames) {
        'ngInject';

        this.random = randomNames;
        this.name = 'World';
    }

    changeName() {
        this.name = 'angular-tips';
    }

    randomName() {
        this.name = this.random.getName();
    }
}

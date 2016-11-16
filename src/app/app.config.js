export default function routing($stateProvider) {
    'ngInject';

    var helloState = {
        name: 'hello',
        url: '/hello',
        template: `
        <h1 class="title">Hello from Angular !</h1>

        <!-- Images (and assets) are parsed and loaded from within the public directory -->
        <img src="/img/logo.png">
        `
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: `
        <h1>Its the UI-Router hello world app!</h1>
        <!-- Images (and assets) are parsed and loaded from within the public directory -->
        <img src="/img/logo.png">
        `
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);

}

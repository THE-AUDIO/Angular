export class AppareilsService {
    constructor() {
        this.appareils = [
            {
                name: 'Machine à laver',
                status: 'allumé'
            },
            {
                name: 'Ordinateur',
                status: 'éteint'
            },
            {
                name: 'Télévision',
                status: 'allumé'
            }
        ];
    }
    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }
    switchOffAll() {
        for (let appreil of this.appareils) {
            appreil.status = 'éteint';
        }
    }
    switchOnOne(index) {
        this.appareils[index].status = 'allumé';
    }
    switchOfOne(index) {
        this.appareils[index].status = 'éteint';
    }
}
//# sourceMappingURL=appreils.service.js.map
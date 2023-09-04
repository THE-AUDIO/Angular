export class AppareilsService {
    appareils = [
        {
          name: 'Machine à laver',
          status : 'allumé',
          id: 1
        },
        {
          name:'Ordinateur',
          status : 'éteint',
          id: 2
        },
        {
          name: 'Télévision',
          status: 'allumé',
          id: 3,
        }
      ];
      switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = 'allumé'
        }
      }
      switchOffAll(){
        for(let appreil of this.appareils){
            appreil.status = 'éteint'
        }
      }
      switchOnOne(index:number){
          this.appareils[index].status = 'allumé'
      }
      switchOfOne(index:number){
        this.appareils[index].status = 'éteint'

      };
      getAppareilById(id:number){
        const appareil = this.appareils.find(
          (appareilObject) => {
            if (appareilObject) {
              return appareilObject.id === id; 
            } else {
              return null
            }
           
          }
        )
        return appareil || null;

      }
}
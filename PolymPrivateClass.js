function privateClassCreation(){
class privateInfo {
        constructor(name,iban){
            this._name = name
            this._iban = iban
        }
        
        get privacy (){
            return this._name
        }
        get privaIban () {
            return this._iban
        }
        set privacy (updatedIban){
            this._iban = updatedIban
        }
    }
    return privateInfo
}

const privateInfo = privateClassCreation();
const privatePerson1 = new privateInfo ("Alex","GR20109412999")

let privatename = privatePerson1.privacy
let privatIban = privatePerson1.privaIban
console.log(privatename,privatIban);
privatePerson1.privacy="IT193219321"
console.log(privatePerson1.privaIban)

export class UpdateAllData{
    constructor(root){
        this.root = document.querySelector(root)
    }
}

export class UpdateAllDataView extends UpdateAllData{
    constructor(root){
        super(root)
        
    }
}


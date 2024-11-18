export class GetPatientChangeSet {
    constructor(entityID:number, entityType: string)
    {
        this.EntityID = entityID;
        this.EntityType = entityType;
    }
    
    EntityID: number|null;
    EntityType: string|null;
}

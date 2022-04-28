import { Document, Schema, model,Types, models} from 'mongoose';

export interface IManufacturer extends Document {
  name: string;
  machineries?: Types.ObjectId[]

}


const manufacturerSchema = new Schema<IManufacturer>({
    name: String,
    machineries: [{
        type: Types.ObjectId,
        ref: "Machinery"
    }]
})


export const ManufacturerModel = models.Manufacturer || model<IManufacturer>('Manufacturer', manufacturerSchema);
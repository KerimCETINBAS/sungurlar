import { Document, Schema, model,Types} from 'mongoose';

export interface IManufacturer extends Document {
  name: string;
  machineries: Types.ObjectId[]

}


const manufacturerSchema = new Schema<IManufacturer>({
    name: String,
    machineries: [{
        type: Types.ObjectId,
        ref: "Machinery"
    }]
})
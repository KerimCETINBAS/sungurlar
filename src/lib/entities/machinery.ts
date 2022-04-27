import { Document, Schema, model,Types, models} from 'mongoose';
import type { IManufacturer } from './manufacturer';

export interface IMachinery extends Document  {
  _id?: Types.ObjectId
  name: string;
  manufacturers: Types.ObjectId[] | IManufacturer[]
  serialNo: string,
}


const machinerySchema = new Schema<IMachinery>({
    name: String,
    serialNo: String,
    manufacturers: [{
        type: Types.ObjectId,
        ref: "Manufacturer"
    }]
})



export const MachineryModel = models.Machinery || model<IMachinery>('Machinery', machinerySchema);
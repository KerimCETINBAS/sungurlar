import { Document, Schema, model,Types} from 'mongoose';
import type { IManufacturer } from './manufacturer';

export interface IMachinery extends Document {
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
import { Document, Schema, model,Types} from 'mongoose';
import type { IMachinery} from "./machinery"
import type { IManufacturer} from "./manufacturer"


export interface IModel extends Document {
  name: string;
  machinery: Types.ObjectId | IMachinery
  manufacturer: Types.ObjectId | IManufacturer
  images: Types.ObjectId[]
}


const manufacturerSchema = new Schema<IModel>({
    name: String,
    machinery:{
        type: Types.ObjectId,
        ref: "Machinery",
        required: true
    },
    manufacturer: {
        type: Types.ObjectId,
        ref: "Manufacturer",
        required: true
    },
    images: [{
        type: Types.ObjectId,
        ref: "Image"
    }]
})
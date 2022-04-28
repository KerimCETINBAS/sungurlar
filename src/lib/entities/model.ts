import { Document, Schema, model,Types, models} from 'mongoose';
import type { IMachinery} from "./machinery"
import type { IManufacturer} from "./manufacturer"


export interface IModel extends Document {
  name: string;
  machinery?: Types.ObjectId | IMachinery
  manufacturer?: Types.ObjectId | IManufacturer
  images: Types.ObjectId[]
  units: Types.ObjectId[]
}


const modelSchema = new Schema<IModel>({
    name: String,
    machinery:{
        type: Types.ObjectId,
        ref: "Machinery"
    },
    manufacturer: {
        type: Types.ObjectId,
        ref: "Manufacturer"
    },
    images: [{
        type: Types.ObjectId,
        ref: "Image"
    }],
    
    units: [{
        type: Types.ObjectId,
        ref: "Unit"
    }]
})



export const ModelModel = models.Model ||  model<IModel>('Model', modelSchema);
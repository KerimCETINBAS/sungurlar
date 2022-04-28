import { Document, Schema, model,Types, models} from 'mongoose';
import type { IManufacturer } from './manufacturer';
import type { IModel } from './model';

export interface IMachinery extends Document  {
  _id?: Types.ObjectId
  name: string;
  manufacturers?: Types.ObjectId[] | IManufacturer[]
  models?: Types.ObjectId[] | IModel[]
  serialNo?: string,
}


const machinerySchema = new Schema<IMachinery>({
    name: String,
    serialNo: String,
    manufacturers: [{
        type: Types.ObjectId,
        ref: "Manufacturer"
    }],
    models: [{
      type: Types.ObjectId,
      ref: 'Model'
    }]
})



export const MachineryModel = models.Machinery || model<IMachinery>('Machinery', machinerySchema);
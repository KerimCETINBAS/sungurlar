import { Document, Schema, model,Types} from 'mongoose';
import type { IMachinery} from "./machinery"
import type { IManufacturer} from "./manufacturer"
import type { IUnit } from './unit';
import type { IImage  } from './image';
export interface IPart extends Document {
  name: string;
  serialNo: [{
      type: string,
      unique: true
  }]
  applications: Types.ObjectId[] | IUnit[],
  images: Types.ObjectId[] | IImage[]
}


const partSchema = new Schema<IPart>({
    name: String,
    serialNo: [String],
    applications: [{
        type: Types.ObjectId,
        ref: "Unit"
    }],
    images: [{
        type: Types.ObjectId,
        ref: "Image"
    }]
})
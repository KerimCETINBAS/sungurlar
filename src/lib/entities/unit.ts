import { Document, Schema, model,Types} from 'mongoose';
import type { IManufacturer } from './manufacturer';
import type { IModel } from './model';
import type { IPart } from "./part";


export interface IUnit extends Document {
    name: string;
    model: Types.ObjectId | IModel;
    manufacturer: Types.ObjectId | IManufacturer;
    parts: Types.ObjectId[] | IPart[]
  }


const unitSchema = new Schema<IUnit>({
    name: {
        type: String,
        required: true,
    },

    parts: [{
        type: Types.ObjectId,
        ref: "Part"
    }]
})
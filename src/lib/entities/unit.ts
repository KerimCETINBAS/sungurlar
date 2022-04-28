import { Document, Schema, model,Types, models} from 'mongoose';
import type { IManufacturer } from './manufacturer';
import type { IModel } from './model';
import type { IPart } from "./part";


export interface IUnit extends Document {
    name: string;
    model: Types.ObjectId | IModel;
    manufacturer: Types.ObjectId | IManufacturer;
    parts: Types.ObjectId[] | IPart[];
    description?: string;
  }


const unitSchema = new Schema<IUnit>({
    name: {
        type: String,
        required: true,
    },

    parts: [{
        type: Types.ObjectId,
        ref: "Part"
    }],
    
    description: String
})


export const UnitModel = models.Unit ||  model<IUnit>('Unit', unitSchema);
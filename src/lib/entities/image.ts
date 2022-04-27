import { Document, Schema, model,Types} from 'mongoose';

export interface IImage extends Document {
  name: string;
  src: string;
  alt?: string;

}


const imageSchema = new Schema<IImage>({
    name: String,
    src: {
        type: String,
        required: true
    },
    alt: String
})
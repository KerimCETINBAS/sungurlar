import { Document, Schema, model,Types, models} from 'mongoose';

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

/* interface IImageModel extends Model<IImage> {
  myStaticMethod(): number;
}
 */

export const ImageModel = models.Image ||  model<IImage /*, ImageModel */>('Image', imageSchema);
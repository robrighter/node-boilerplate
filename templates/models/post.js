
// Schema
function make(Schema, mongoose) {

    CommentSchema = new Schema({
        body    : { type: String }
     ,  created : { type: Date, default: Date.now }
    });
    mongoose.model('Comment', CommentSchema);

    PostSchema = new Schema({
        title   : { type: String, default: 'New Post' }
     ,  body    : { type: String }
     ,  created : { type: Date, default: Date.now }
     ,  updated : { type: Date, default: Date.now }
     ,  comments: [CommentSchema]
    });
    mongoose.model('Post', PostSchema);
}

module.exports.make = make;


const SchemaBuild = (mongoose) => {
    var Schema = mongoose.Schema;
    return new Schema({
        id: Number,
        brand: String,
        description: String,
        image: String,
        price: Number,
    }, { collection: 'products' });
}

module.exports = SchemaBuild;
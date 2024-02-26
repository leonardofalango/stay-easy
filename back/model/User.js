const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photoURL: {
        type: String,
    },
    provider: {
        type: String,
    },
    birthday: { type: Date, required: false },
    status: { type: Boolean, required: false, default: 1 },
    cpf: { type: String, required: true },
    // veiculo:{type: mongoose.Schema.Types.ObjectId,ref: 'Veiculo',required: true,}
    // referenciar outra coleção do mongo
}, { timestamps: {} });

module.exports = mongoose.model('User', UserSchema);
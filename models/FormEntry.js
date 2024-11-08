const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
    {
        form_name: {
            type: String,
            required: true,
            default: function () {
                return `Form_${Date.now()}`;
            },
        },
        form_data: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Form', formSchema);

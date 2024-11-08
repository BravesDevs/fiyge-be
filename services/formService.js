const Form = require('../models/FormEntry');

class FormService {
    static instance;

    static getInstance() {
        if (!FormService.instance) {
            FormService.instance = new FormService();
        }
        return FormService.instance;
    }

    async saveForm(formData) {
        const { form_name, form_data } = formData;
        const newForm = new Form({ form_name, form_data });
        return await newForm.save();
    }

    async getFormById(formId) {
        return await Form.findById(formId);
    }

    async updateFormById(formId, updateData) {
        const { form_name, form_data } = updateData;
        return await Form.findByIdAndUpdate(
            formId,
            { form_name, form_data },
            { new: true }
        );
    }

    async listForms() {
        return await Form.find({}, 'form_name createdAt updatedAt');
    }
}

module.exports = FormService.getInstance();


const formService = require('../services/formService');

async function saveForm(req, res) {
    try {
        const form = await formService.saveForm(req.body);
        res.status(201).json({ message: 'Form saved successfully', form });
    } catch (error) {
        res.status(500).json({ error: 'Error saving form' });
    }
}

async function getFormById(req, res) {
    try {
        const form = await formService.getFormById(req.params.id);
        if (!form) {
            return res.status(404).json({ error: 'Form not found' });
        }
        res.status(200).json(form);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching form' });
    }
}

async function updateFormById(req, res) {
    try {
        const updatedForm = await formService.updateFormById(req.params.id, req.body);
        if (!updatedForm) {
            return res.status(404).json({ error: 'Form not found' });
        }
        res.status(200).json({ message: 'Form updated successfully', form: updatedForm });
    } catch (error) {
        res.status(500).json({ error: 'Error updating form' });
    }
}

async function listForms(req, res) {
    try {
        const forms = await formService.listForms();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving forms' });
    }
}

module.exports = {
    saveForm,
    getFormById,
    updateFormById,
    listForms
};

const express = require('express');
const router = express.Router();

const { saveForm,
    getFormById,
    updateFormById,
    listForms } = require('../controllers/formController');

router.route('/forms/save').post(saveForm);

router.route('/forms/:id').get(getFormById);

router.route('/forms/update/:id').put(updateFormById);

router.route('/forms').get(listForms);

module.exports = router;
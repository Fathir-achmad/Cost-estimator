const { body, validationResult } = require('express-validator');

module.exports = {
    checkInput: async (req, res, next) => {
        try {
            await body('kodeBarang')
                .trim()
                .notEmpty()
                .withMessage("Item's code is required")
                .isInt()
                .withMessage("Item's code must be a non-zero integer")
                .run(req);

            await body('nilaiKomoditas')
                .trim()
                .notEmpty()
                .withMessage("Commodity value is required")
                .isInt()
                .withMessage("Commodity value must be a non-zero integer")
                .run(req);

            const validation = validationResult(req);
            if (validation.isEmpty()) {
                next();
            } else {
                return res.status(400).send({
                    status: false,
                    msg: 'Invalid validation',
                    error: validation.array()
                });
            }
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    }
};

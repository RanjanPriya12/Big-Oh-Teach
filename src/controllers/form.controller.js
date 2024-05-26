const connection = require("../configs/db");

exports.addForm = async (req, res) => {
    try {
        connection.query('SELECT * FROM forms WHERE title = ?', req.body.title, (err, results) => {
            if (err) {
                return res.status(402).send({ status: false, message: "Something went wrong!" })
            } else {
                if (results.length > 0) {
                    return res.status(309).send({ status: false, message: "Already exists in database!" })
                } else {
                    connection.query('INSERT INTO forms (uniqueId, title, name, email, phoneNumber, isGraduate) VALUES (?, ?, ?, ?, ?, ?, ?)', [uuidv4(), title, name, email, phoneNumber, age, fail], (err, result) => {
                        if (err) {
                            return res.status(402).send({ status: false, message: "Unable to create" })
                        } else {
                            return res.status(201).send({ status: true, message: "Form created successfully!" })
                        }
                    });
                }
            }
        });
    } catch (error) {
        return res.status(500).send({ success: false, error: error.message });
    }
};

exports.addFormData = async (req, res) => {
    try {
        connection.query('SELECT * FROM forms WHERE title = ?', req.query.title, (err, results) => {
            if (err) {
                return res.status(402).send({ status: false, message: "Something went wrong!" })
            } else {
                if (results.length < 0) {
                    return res.status(402).send({ status: false, message: "Form with this title is not present!" })
                } else {
                    connection.query('INSERT INTO formsData (uniqueId, name, email, phoneNumber, isGraduate) VALUES (?, ?, ?, ?, ?, ?, ?)', [uuidv4(), title, name, email, phoneNumber, age, fail], (err, result) => {
                        if (err) {
                            return res.status(402).send({ status: false, message: "Unable to create" })
                        } else {
                            return res.status(201).send({ status: true, message: "Form data added successfully!" })
                        }
                    });
                }
            }
        });
    } catch (error) {
        return res.status(500).send({ success: false, error: error.message });
    }
}

exports.getFormData = async (req, res) => {
    try {
        connection.query('SELECT * FROM forms WHERE title = ?', req.query.title, (err, results) => {
            if (err) {
                return res.status(402).send({ status: false, message: "Something went wrong!" });
            } else {
                if (results.length < 0) {
                    return res.status(402).send({ status: false, message: "Form Data with this title is not present!" })
                } else {
                    connection.query(`SELECT formsData.*
                                      FROM forms
                                      JOIN formsData ON forms.uniqueId = formsData.uniqueId
                                      WHERE forms.title = ${req.query.title}`, (err, result) => {
                        if (err) {
                            return res.status(402).send({ status: false, message: "Unable to fetch records!" });
                        } else {
                            if (result.length < 0)
                                return res.status(402).send({ status: false, message: "No records found!" });
                            else {
                                return res.status(200).send({ status: true, message: "Form data fetched successfully!", result });
                            }
                        }
                    });
                }
            }
        });
    } catch (error) {
        return res.status(500).send({ success: false, error: error.message });
    }
}


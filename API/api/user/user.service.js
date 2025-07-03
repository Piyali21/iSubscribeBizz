const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
         console.log(data);
         console.log(data.firstname);
        pool.query(
            `INSERT INTO Users (irid, firstname, lastname, email, phonenumber, referrername, leadname, registrationdate, subscriptionstartdate, subscriptionenddate, subscriptiontype, qrimage, isprinted, cardcolour) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`,
            [   
                data.irid,
                data.firstname, 
                data.lastname, 
                data.email, 
                data.phonenumber, 
                data.referrername, 
                data.leadname, 
                data.registrationdate,
                data.subscriptionstartdate, 
                data.subscriptionenddate,
                data.subscriptiontype, 
                data.qrimage,
                data.isprinted,
                data.cardcolour
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                } 
                return callback(null, results);
            }
        );
    },
    getUsers: (callback) => {
        pool.query(
            `SELECT * FROM Users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                } 
                return callback(null, results);
            }
        );
    },
    getUsersbyIrid: (irid, callback) => {
        pool.query(
            `SELECT * FROM Users WHERE irid = ?`,
            [irid],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                } 
                return callback(null, results);
            }
        );
    },
    updateUser: (data, callback) => {
        pool.query(
            `UPDATE Users SET firstname = ?, lastname = ?, email = ?, phonenumber = ?, referrername = ?, leadname = ?, registrationdate = ?, subscriptionstartdate = ?, subscriptionenddate = ?, subscriptiontype = ?, qrimage = ?, isprinted = ?, cardcolour = ? WHERE irid = ?`,
            [   
                data.firstname, 
                data.lastname, 
                data.email, 
                data.phonenumber, 
                data.referrername, 
                data.leadname, 
                data.registrationdate,
                data.subscriptionstartdate, 
                data.subscriptionenddate,
                data.subscriptiontype, 
                data.qrimage,
                data.isprinted,
                data.cardcolour,
                data.irid
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                } 
                return callback(null, results);
            }
        );
    },
    deleteUser: (data, callback) => {
        pool.query(
            `DELETE FROM Users WHERE irid = ?`,
            [data.irid],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                } 
                return callback(null, results);
            }
        );
    }
}


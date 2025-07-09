const pool = require('../../config/database');

module.exports = { 
     create: (data, callback) => {
    const {
      irid, firstname, lastname, email, phonenumber,
      referrername, leadname, registrationdate,
      subscriptionstartdate, subscriptionenddate,
      subscriptiontype, qrimage, isprinted, cardcolour
    } = data;

    const checkQuery = `SELECT irid FROM Users WHERE irid = ?`;
    const deleteQuery = `DELETE FROM Users WHERE irid = ?`;
    const insertQuery = `
      INSERT INTO Users (
        irid, firstname, lastname, email, phonenumber, referrername, leadname,
        registrationdate, subscriptionstartdate, subscriptionenddate,
        subscriptiontype, qrimage, isprinted, cardcolour
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Step 1: Check if irid exists
    pool.query(checkQuery, [irid], (checkErr, checkResult) => {
      if (checkErr) {
        console.error("Check error:", checkErr);
        return callback(checkErr);
      }

      const insertValues = [
        irid, firstname, lastname, email, phonenumber,
        referrername, leadname, registrationdate,
        subscriptionstartdate, subscriptionenddate,
        subscriptiontype, qrimage, isprinted, cardcolour
      ];

      const insertNow = () => {
        pool.query(insertQuery, insertValues, (insertErr, insertResult) => {
          if (insertErr) {
            console.error("Insert error:", insertErr);
            return callback(insertErr);
          }
          return callback(null, insertResult);
        });
      };

      if (checkResult.length > 0) {
        // Step 2: Delete if exists
        pool.query(deleteQuery, [irid], (deleteErr) => {
          if (deleteErr) {
            console.error("Delete error:", deleteErr);
            return callback(deleteErr);
          }
          insertNow();
        });
      } else {
        // Step 3: Insert directly
        insertNow();
      }
    });
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


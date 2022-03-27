const firstName = "Mahmut";
const lastName = "Kaya";

const fullName = () => firstName + " " + lastName;

// module.exports.firstName = firstName;
// module.exports.lastName = lastName;

module.exports = {
    ad: firstName,
    lastName,
    fullName
};
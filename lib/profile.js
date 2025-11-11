/**
 * Parse profile.
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function (json) {
    if (typeof json === 'string') {
        json = JSON.parse(json);
    }

    var profile = {};
    profile.id = json.id;
    profile.username = json.nickname;
    profile.displayName = json.name;
    profile.name = {
        familyName: json.last_name,
        givenName: json.first_name
    };

    profile.gender = json.gender;
    profile.profileUrl = json.link;

    profile.emails = json.email ? [{value: json.email}] : [];
    profile.photos = json.image ? [{value: json.image}] : [];

    return profile;
};

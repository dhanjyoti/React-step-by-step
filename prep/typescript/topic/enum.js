var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin_only"] = 2] = "Admin_only";
})(Role || (Role = {}));
console.log(Role);

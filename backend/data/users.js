import bcrypt from "bcryptjs";


const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Adam Mada",
        email: "Adam@Mada.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Mattheos Tasios",
        email: "mattheos@tasios.com",
        password: bcrypt.hashSync("123456", 10),
    },
]


export default users
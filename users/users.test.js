const db = require("../database/dbConfig");
const Users = require("./users-model");

describe("environment", function () {
    it("should be using the testing database", function () {
        expect(process.env.DB_ENV).toBe("testing");
    });
});

describe("users model", function () {
    describe("add()", function () {
        beforeEach(async () => {
            await db("users").truncate();
        });

        it("should add users into database", async () => {
            await Users.add({ username: "jack", password: "pass" });
            await Users.add({ username: "jill", password: "word" });

            const users = await db("users");

            expect(users).toHaveLength(2);
        });
    });
});

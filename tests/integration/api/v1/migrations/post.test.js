import database from "infra/database.js";

beforeAll(cleanDatabase)

async function cleanDatabase() {
   await database.query("DROP SCHEMA PUBLIC CASCADE; CREATE SCHEMA PUBLIC;");
}

test("POST to /api/v1/migrations should return 201", async () => {
   const res = await fetch("http://localhost:3000/api/v1/migrations",{
         method: "POST",
   });
   expect(res.status).toBe(200);

   const responseBody = await res.json();

   expect(Array.isArray(responseBody)).toBe(true);
   expect(responseBody.length).toBeGreaterThan(0);
});

test("POST to /api/v1/migrations should return 200", async () => {
   const res2 = await fetch("http://localhost:3000/api/v1/migrations",{
         method: "POST",
   });
   expect(res2.status).toBe(200);

   const response2Body = await res2.json();

   expect(Array.isArray(response2Body)).toBe(true);
});
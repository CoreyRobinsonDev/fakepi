import personData from "@/util/personData";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const id = Number(searchParams.get("id"));
    const person = personData.find((person) => person.id === id);

    if (person) {
        return Response.json(person);
    } else {
        return Response.json(`id: ${id} not found`, {status: 404});
    }
}

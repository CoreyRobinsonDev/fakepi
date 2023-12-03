import personData from "@/util/personData";

export async function GET(req: Request) {
    return Response.json(personData);
}

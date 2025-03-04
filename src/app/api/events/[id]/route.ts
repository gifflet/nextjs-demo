import eventsData from '../data';

export async function GET(request: Request,
    { params }: { params: { id: string } }
) {
    const { id } = await params;
    return new Response(JSON.stringify(eventsData.events.find(event => event.id === Number(id))), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
import eventsData from './data';

export async function GET(request: Request) {

    return new Response(JSON.stringify(eventsData.events), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}


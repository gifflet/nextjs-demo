
export default async function SpotsLayoutPage({ params }: {params: { eventId: string }}) {
    const {eventId} = await params
    return <p>Spots for event {eventId}</p>
}
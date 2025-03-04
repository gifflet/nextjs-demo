import { EventModel } from "@/models";
import Image from "next/image";
import Link from "next/link";

async function getEvents(): Promise<EventModel[]> {
  return (await fetch('http://localhost:3000/api/events', {
    cache: 'no-cache',
  })).json()
}

export default async function Home() {
  const events = await getEvents();
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Available Shows</h1>
      <div className="grid grid-cols-3 gap-8">
        {events.map((event, key) => (
          <div key={key} className="bg-white shadow-lg rounded-lg">
            <Image className="w-full h-48 object-cover"
              src={event.image_url}
              alt={event.name}
              width={300} height={200} />
            <div className="p-4">
              <h2 className="text-xl text-black font-bold">{event.name}</h2>
              <p className="text-gray-500 mt-2"> {new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-500 mt-2"> {event.available_spots} available spots</p>
              <p className="text-gray-500 mt-2"> $ {event.price}</p>
              <p className="text-gray-500 mt-2">
                <Link href={`/events/${event.id}/spots-layout`} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">See available spots</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

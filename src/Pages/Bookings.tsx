import BookedTravel from "../Components/BookedTravel";
import { TripDetailsProps } from "../types/types";

function Bookings({ bookings, setBookings }: TripDetailsProps) {
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookings.map((trip) => (
          <BookedTravel
            key={`${trip.createdAt}`}
            trip={trip}
            bookings={bookings}
            setBookings={setBookings}
          />
        ))}
      </ul>
    </main>
  );
}

export default Bookings;

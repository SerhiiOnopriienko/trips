import { useState, useEffect } from "react";
import Card from "./Card";
import tripInfo from "../assets/data/trips.json";
import { TravelCardsProps } from "../types/types";

function TravelCards({ searchInputValue, duration, level }: TravelCardsProps) {
  const [tripCards, setTripCards] = useState([...tripInfo]);
  useEffect(() => {
    const regexp = new RegExp(searchInputValue, "i");
    setTripCards(
      tripInfo.filter((trip) => {
        const matchesTitle = trip.title.search(regexp) != -1;
        let matchesDuration = true;
        if (duration === "0_x_5") {
          matchesDuration = trip.duration <= 5;
        } else if (duration === "5_x_10") {
          matchesDuration = trip.duration > 5 && trip.duration <= 10;
        } else if (duration === "10") {
          matchesDuration = trip.duration > 10;
        }
        const matchesLevel = level === "" || trip.level === level;
        return matchesTitle && matchesDuration && matchesLevel;
      })
    );
  }, [searchInputValue, duration, level]);

  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        {tripCards.map((trip) => (
          <Card key={trip.id} trip={trip} />
        ))}
      </ul>
    </section>
  );
}

export default TravelCards;

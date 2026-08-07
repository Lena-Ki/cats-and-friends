import type { Metadata } from "next";
import { EventPage } from "../EventPage";

export const metadata: Metadata = {
  title: "Cats & Friends — 23. avgust, Novi Sad",
  description: "Dobrotvorno veče za podršku posebnim macama.",
};

export default function SerbianHome() {
  return <EventPage language="sr" />;
}

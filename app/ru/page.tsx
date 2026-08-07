import type { Metadata } from "next";
import { EventPage } from "../EventPage";

export const metadata: Metadata = {
  title: "Cats & Friends — 23 августа, Нови-Сад",
  description: "Благотворительный вечер в поддержку особенных котиков.",
};

export default function RussianHome() {
  return <EventPage language="ru" />;
}

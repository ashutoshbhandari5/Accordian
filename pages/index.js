import AccordianLayout from "../components/Accordian";
import Tabs from "../components/Tabs";
import FAQ from "../utils/FAQ.json";
export default function Home() {
  const items = FAQ.items.map((el) => {
    return {
      header: el.name,
      body: el.acceptedAnswer.text,
    };
  });
  return (
    <div className=" h-screen mt-32 flex flex-col w-full items-center">
      <AccordianLayout items={items} />
      <Tabs items={items} />
    </div>
  );
}

import { ListComponentProps, ListComponent } from "./ListComponent";
const data: ListComponentProps[] = [
  {
    header: "Alphabets",
    values: ["A", "B", "C", "D"],
  },
  {
    header: "Numbers",
    values: [1, 2, 3, 4, 5],
  },
];
const RoundTwo = () => {
  return (
    <div>
      {" "}
      {data.map((listItem) => (
        <ListComponent
          key={listItem.header}
          header={listItem.header}
          values={listItem.values}
        />
      ))}
    </div>
  );
};

export default RoundTwo;

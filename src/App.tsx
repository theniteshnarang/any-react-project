import { Container } from "./layout";
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

function App() {
  return (
    <Container>
      {data.map((listItem) => (
        <ListComponent
          key={listItem.header}
          header={listItem.header}
          values={listItem.values}
        />
      ))}
    </Container>
  );
}

export default App;

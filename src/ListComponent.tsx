export interface ListComponentProps {
  header: string;
  values: string[] | number[];
}

export const ListComponent = ({ header, values }: ListComponentProps) => {
  return (
    <>
      <p>{header}</p>
      {values.map((val) => (
        <p key={val}>{val}</p>
      ))}
    </>
  );
};

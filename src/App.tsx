import { PropsWithChildren } from "react";
import { Container } from "./layout";

const fileDirectories = [
  {
    name: "assets",
    childrenObj: [
      {
        name: "react.svg",
      },
    ],
  },
  {
    name: "layout",
    childrenObj: [
      {
        name: "Container",
        childrenObj: [
          {
            name: "ContainerComponent.tsx",
            childrenObj: [],
          },
        ],
      },
      {
        name: "index.ts",
      },
    ],
  },
  {
    name: "App.tsx",
  },
];

interface FileComponentProps {
  name: string;
  childrenObj?: FileComponentProps[];
}

interface ComponentProps extends PropsWithChildren {
  file: FileComponentProps;
}
const FileComponent = ({ file, children }: ComponentProps) => {
  return (
    <div>
      {file.name}
      {children && <div style={{ paddingLeft: "1rem" }}>{children}</div>}
    </div>
  );
};

const FileParentComponent = ({ file }: ComponentProps) => {
  return (
    <FileComponent file={file}>
      {file.childrenObj &&
        file.childrenObj.map((fileItem) => (
          <FileParentComponent file={fileItem} />
        ))}
    </FileComponent>
  );
};

function App() {
  return (
    <Container>
      {fileDirectories.map((file) => (
        <FileParentComponent file={file} />
      ))}
    </Container>
  );
}

export default App;

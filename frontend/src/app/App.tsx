import { Container } from "@local/container";
import { Sidebar } from "@local/sidebar";
import { Tree } from "@local/tree";
import { Alert } from "@local/alert";
import Card from "@local/card";
import { useChapterQuery, useTreeDataNormalizer } from "@local/hooks";
import { useCallback, useMemo, useRef, useState } from "react";
import { Spinner } from "packages/icons";

export function App() {
  const { data = [], isLoading, refetch, isError } = useChapterQuery();
  const listRef = useRef<Record<string, HTMLDivElement>>({});
  const [active, setActive] = useState("");
  const treeData = useTreeDataNormalizer(data);

  const onItemSelectHandler = useCallback((id: string) => {
    setActive(id);
    listRef.current[id]?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  const sortedData = useMemo(() => {
    const regex = /Chapter|./gi;
    return [...data].sort((a, b) =>
      a.name.replace(regex, "").localeCompare(b.name.replace(regex, ""))
    );
  }, [data]);

  if (isError) {
    return (
      <Alert>
        Oops! Something went wrong.
        <button onClick={() => refetch()} className="text-blue-700">
          Try again!
        </button>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <Alert>
        <Spinner className="animate-spin" />
        LOADING...
      </Alert>
    );
  }

  return (
    <>
      <Sidebar>
        <Tree data={treeData} onItemSelect={onItemSelectHandler} />
      </Sidebar>
      <Container testId="app-container">
        {sortedData.map((r) => (
          <Card key={r.id + r.name}>
            <Card.Header
              ref={(ref: HTMLDivElement) => (listRef.current[r.id] = ref)}
            >
              {r.name}
            </Card.Header>
            <Card.Body isActive={active === r.id}>{r.content}</Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
}

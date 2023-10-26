import { FC, ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  testId?: string;
}

export const Container: FC<ContainerProps> = ({ children, testId }) => (
  <main
    className="min-h-screen p-4 ml-64 max-sm:ml-0 max-sm:mt-10"
    data-testid={testId}
  >
    <article>{children}</article>
  </main>
);

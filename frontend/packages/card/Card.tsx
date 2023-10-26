import clsx from "clsx";
import { Ref, forwardRef } from "react";

export interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <section className="p-1 prose lg:prose-xl">{children}</section>;
}

interface CardBodyProps {
  children: React.ReactNode;
  isActive: boolean;
}

const Body = ({ children, isActive = false }: CardBodyProps) => (
  <p className={clsx("px-2", { "bg-neutral-100": isActive })}>{children}</p>
);

interface CardHeaderProps {
  children: React.ReactNode;
}
const Header = forwardRef(
  ({ children }: CardHeaderProps, ref: Ref<HTMLDivElement>) => (
    <h4 ref={ref} className="pt-2">
      {children}
    </h4>
  )
);

Card.Header = Header;
Card.Body = Body;

export default Card;

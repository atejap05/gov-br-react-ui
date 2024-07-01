import { cva } from "class-variance-authority";
import { Avatar } from "../Avatar";

const personaVariants = cva("persona row");

export type PersonaProps = {
  className?: string;
  src: string;
  name: string;
  description?: string;
};

const Persona = ({ src, name, description, className }: PersonaProps) => {
  const classes = personaVariants({ className });
  return (
    <div className={classes}>
      <Avatar className="mr-2 ml-3" size="sm" src={src} alt={name} />
      <div className="persona__info">
        <div className="text-semi-bold">{name}</div>
        {description && (
          <div className="text-weight-light text-down-01">{description}</div>
        )}
      </div>
    </div>
  );
};

Persona.displayName = "Persona";

export { Persona };

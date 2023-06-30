import type { Entity } from "../../../general/models";

interface Expandable {
  expand: (id: Entity) => void;
  isExpanded?: boolean;
}

export default Expandable;

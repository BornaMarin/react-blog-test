import type { Address } from "../../../general/models";
import type { Company } from "../../../general/models";
import type { Entity } from "../../../general/models";

interface UserType extends Entity {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export default UserType;

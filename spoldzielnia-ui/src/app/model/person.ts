import { PersonType } from "./person-type";
import { SexType } from "./sex-type";

export class Person {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public type: PersonType,
    public image: string,
    public description: string,
    public sex: SexType,
    public yearOfBirth: number,
    public region: string,
    public city: string,
    public buildingNr: string,
    public placeNr: string,
    public postCode: string,
    public street: string
  ) {}
}

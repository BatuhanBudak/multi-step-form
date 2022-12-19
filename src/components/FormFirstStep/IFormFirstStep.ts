export interface IFormFirstStep {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  millionare: boolean;
  gender: Gender;
  moreDetail: boolean;
  interests: string;
}

type Gender = "female" | "male" | "other";

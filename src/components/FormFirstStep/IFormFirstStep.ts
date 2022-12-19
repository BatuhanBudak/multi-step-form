export interface IFormFirstStep {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  millionare: boolean;
  gender: Gender;
  moreDetail: boolean;
  interests: string;
}

type Gender = "female" | "male" | "other";

export type ThemeType = "light" | "dark" | undefined;

export type CardItem = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

export type CarsRequestStatus = "LOADING" | "SUCCESS" | "FAIL";

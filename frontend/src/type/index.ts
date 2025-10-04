export interface MessageType {
  type: "user" | "ai";
  text: string;
  date: Date;
}

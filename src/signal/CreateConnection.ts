import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

export const createConnection = (): HubConnection => {
  const connection = new HubConnectionBuilder()
    .withUrl("https://localhost:7205/notificationHub", {
      withCredentials: true, // Automatically send HTTP-only cookies for authentication
    })
    .withAutomaticReconnect()
    .build();

  return connection;
};

export default createConnection;

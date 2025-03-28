import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

// Define the SignalR context type
interface SignalRContextType {
  connection: HubConnection | null;
  user: string;
  message: string;
}

// Create the context
const SignalRContext = createContext<SignalRContextType | null>(null);

export const SignalRProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const signalRUrl = process.env.REACT_APP_SIGNAL_HUB_URL;

  const connectionRef = useRef<HubConnection | null>(null); // Persistent connection reference

  const [user, setUser] = useState<string>(""); // State for user
  const [message, setMessage] = useState<string>(""); // State for message

  // Function to create the SignalR connection and handle events
  const createConnection = (): HubConnection => {
    if (!connectionRef.current) {
      connectionRef.current = new HubConnectionBuilder()
        .withUrl(`${apiUrl}${signalRUrl}`, {
          withCredentials: true, // Automatically send HTTP-only cookies for authentication
        })
        .withAutomaticReconnect()
        .build();

      // Attach the "ReceiveData" handler
      connectionRef.current.on(
        "ReceiveData",
        (receivedUser: string, receivedMessage: string) => {
          console.log("updated user:", receivedUser);
          setUser(receivedUser); // Update the user state
          setMessage(receivedMessage); // Update the message state
        }
      );
    }
    return connectionRef.current;
  };

  useEffect(() => {
    const connectionInstance = createConnection(); // Create connection only once

    // Start the SignalR connection
    if (connectionInstance.state === "Disconnected") {
      connectionInstance
        .start()
        .then(() => console.log("SignalR connection established"))
        .catch((err) => console.error("Error establishing connection:", err));
    }

    // Cleanup: Stop the SignalR connection on unmount
    return () => {
      if (connectionInstance.state === "Connected") {
        connectionInstance
          .stop()
          .then(() => console.log("SignalR connection stopped"))
          .catch((err) => console.error("Error stopping connection:", err));
      }
    };
  }, []); // Dependency array ensures this runs only once

  useEffect(() => {
    // Debugging: Log user and message updates
    console.log("User:", user);
    console.log("Message:", message);
  }, [user, message]);

  return (
    <SignalRContext.Provider
      value={{ connection: connectionRef.current, user, message }}
    >
      {children}
    </SignalRContext.Provider>
  );
};

// Custom hook to use the SignalR context
export const useSignalR = () => {
  const context = useContext(SignalRContext);
  if (!context) {
    throw new Error("useSignalR must be used within a SignalRProvider");
  }
  return context;
};

import {
  Avatar,
  Stack,
  Text,
  Card,
  CardBody,
  Heading,
  Divider,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
const IndexPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        );
        setUsers(response.data.results);
      } catch (error) {
        console.error("Error fetching random users:", error);
      }
    };

    fetchRandomUsers();

    return () => {};
  }, []);

  return (
    <div>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <Card maxW={"sm"} textAlign={"center"} p={5} m={2}>
              <CardBody>
                <Avatar src={user.picture.large} boxSize={"200px"} />

                <Stack mt="2" spacing="3" textAlign="center">
                  <Heading size={"md"}>
                    {user.name.title}. {user.name.first} {user.name.last}
                  </Heading>
                  <Text>{user.email}</Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;

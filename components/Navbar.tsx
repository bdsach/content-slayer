import React from "react";
import {
  ActionIcon,
  useMantineColorScheme,
  Title,
  Container,
  Text,
  Group,
  Box,
  Space,
} from "@mantine/core";
import { Moon, Sun } from "tabler-icons-react";

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Box
      py={20}
      sx={(theme) => ({
        borderBottom: "1px solid",
        borderColor:
          theme.colorScheme === "light"
            ? theme.colors.gray[2]
            : theme.colors.gray[9],
      })}
    >
      <Container>
        <Group sx={{ justifyContent: "space-between" }}>
          <Text
            sx={(theme) => ({
              fontSize: theme.fontSizes.xl,
              fontWeight: 600,
              color:
                theme.colorScheme === "light"
                  ? theme.colors.gray[8]
                  : theme.colors.gray[5],
            })}
          >
            Content ⚡️ Slayer
          </Text>
          <ActionIcon onClick={() => toggleColorScheme()}>
            {dark ? <Moon /> : <Sun />}
          </ActionIcon>
        </Group>
      </Container>
    </Box>
  );
};

export default Navbar;

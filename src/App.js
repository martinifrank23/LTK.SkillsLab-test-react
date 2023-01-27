import * as React from "react";

import {
	Container,
	Typography,
	Box,
	List,
	ListItem,
	Button
} from "@mui/material";

import AccountMenu from "./AccountMenu";
import BasicForm from "./BasicForm";

export default function App() {
  const [openForm, setOpenForm] = React.useState(false);
  const [todoList, setTodoList] = React.useState([]);
  const handleOnClick = (page) => {
    console.log("open");
    if (!openForm) {
      setOpenForm(true);
    } else {
      setOpenForm(false);
    }
  };

  const addTodo = (todo) => {
	setTodoList([...todoList, todo]);
  }

  const deleteTodo = (index) => {
	const newList = todoList.filter((todo, i) => i != index);
	setTodoList(newList);
  }

  return (
    <Container maxWidth="sm">
      <AccountMenu onClick={handleOnClick} />
      {openForm && <BasicForm addTodo={addTodo} />}
	  <List>
		{ todoList.map((todo, index) => (
			<ListItem key={index} secondaryAction={
				<Button onClick={() => deleteTodo(index)}>Delete</Button>
			}>{todo}</ListItem>
		)) }
	  </List>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
    </Container>
  );
}

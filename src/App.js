import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { nextFlashCard, prevFlashCard } from "./components/flashCardSlice";
import FlashCard from "./components/FlashCard";
import CreateFlashCard from "./components/CreateFlashCard";
import BottomNav from "./components/BottomNav";

const useStyles = makeStyles({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
});

const App = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const cards = useSelector((state) => state.flashCards.cards);
  const current = useSelector((state) => state.flashCards.current);

  return (
    <>
      <Route exact path="/">
        <div className={classes.center}>
          <Grid item xs={10} sm={8} md={6} xl={4}>
            <FlashCard
              id={current}
              front={cards[current].front}
              back={cards[current].back}
            />
          </Grid>
        </div>
        <BottomNav
          nextCard={() => dispatch(nextFlashCard())}
          prevCard={() => dispatch(prevFlashCard())}
        />
      </Route>
      <Route path="/create-new-flashcard">
        <CreateFlashCard />
        <BottomNav />
      </Route>
    </>
  );
};

export default App;

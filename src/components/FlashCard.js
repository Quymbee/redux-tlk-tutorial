import React from "react";
import Flip from "react-card-flip";
import { useDispatch, useSelector } from "react-redux";

import { flipFlashCard, deleteFlashCard } from "./flashCardSlice";

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    /*
    styling from:
    Author: Jordan Winslow
    Website: https://JordanWinslow.dev
    */
    //HEADER CONTENT OF FLASHCARD
    "& .MuiCardHeader-root": {
      color: "#EEEEEE",
      background:
        "radial-gradient(circle at 17% 1%, rgba(198, 198, 198,0.03) 0%, rgba(198, 198, 198,0.03) 50%,rgba(42, 42, 42,0.03) 50%, rgba(42, 42, 42,0.03) 100%),radial-gradient(circle at 8% 81%, rgba(253, 253, 253,0.03) 0%, rgba(253, 253, 253,0.03) 50%,rgba(36, 36, 36,0.03) 50%, rgba(36, 36, 36,0.03) 100%),radial-gradient(circle at 83% 29%, rgba(164, 164, 164,0.03) 0%, rgba(164, 164, 164,0.03) 50%,rgba(60, 60, 60,0.03) 50%, rgba(60, 60, 60,0.03) 100%),radial-gradient(circle at 96% 62%, rgba(170, 170, 170,0.03) 0%, rgba(170, 170, 170,0.03) 50%,rgba(169, 169, 169,0.03) 50%, rgba(169, 169, 169,0.03) 100%),linear-gradient(338deg, rgb(2, 141, 213),rgb(5, 172, 81))",
    }, //BOTTOM CONTENT OF FLASHCARD
    "& .MuiCardContent-root": {
      background:
        "linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 50%,rgba(169, 169, 169,0.04) 50%, rgba(169, 169, 169,0.04) 71%,rgba(251, 251, 251,0.04) 71%, rgba(251, 251, 251,0.04) 100%), linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 56%,rgba(169, 169, 169,0.04) 56%, rgba(169, 169, 169,0.04) 67%,rgba(251, 251, 251,0.04) 67%, rgba(251, 251, 251,0.04) 100%), linear-gradient(135deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 4%,rgba(169, 169, 169,0.04) 4%, rgba(169, 169, 169,0.04) 75%,rgba(251, 251, 251,0.04) 75%, rgba(251, 251, 251,0.04) 100%), linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))",
      color: "#EEEEEE",
      minHeight: "25vh",
    }, //TRASHCAN ICON COLOR
    "& .MuiButtonBase-root": {
      color: "white",
    }, //TRASHCAN ICON ALIGNMENT
    "& .MuiCardHeader-action": {
      alignSelf: "auto",
      marginTop: 0,
      marginLeft: 8,
    },
  },
});

const FlashCard = ({ id, front, back }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { flipped } = useSelector((state) => state.flashCards);

  return (
    <div id={`${id + 1}`}>
      <Flip isFlipped={flipped} flipDirection="vertical">
        <Card
          className={classes.root}
          elevation={24}
          key="front"
          onClick={() => dispatch(flipFlashCard())}
        >
          <CardHeader
            action={
              <IconButton
                aria-label="delete"
                onClick={() => dispatch(deleteFlashCard())}
              >
                <DeleteIcon />
              </IconButton>
            }
            title={front.title}
            className={classes.root}
          />
          <CardContent>{front.content}</CardContent>
        </Card>

        <Card
          key="back"
          className={classes.root}
          elevation={24}
          onClick={() => dispatch(flipFlashCard())}
        >
          <CardHeader
            action={
              <IconButton
                aria-label="delete"
                onClick={() => dispatch(deleteFlashCard())}
              >
                <DeleteIcon />
              </IconButton>
            }
            title={back.title}
            className={classes.root}
          />
          <CardContent>{back.content}</CardContent>
        </Card>
      </Flip>
    </div>
  );
};

export default FlashCard;

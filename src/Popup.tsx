import React from "react";

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface PopupThrowerProps {
  popup?: Popup;
  open: boolean;
  close: () => void;
}

const PopupThrower = (props: PopupThrowerProps): React.ReactElement => {
  const { popup, open, close } = props;
  return (
    <Dialog
      open={open}
      onClose={close}
      sx={{
        "color": popup?.ok ? "green" : "red",
      }}
    >
      <DialogTitle>{popup?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {popup?.message}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

interface Popup {
  title: string;
  message: string;
  ok: boolean;
}

const NotAuthorized = {
  title: "Not Authorized",
  message: "You are not Authorized to perform this action.",
  ok: false,
};

const Success = {
  title: "Success",
  message: "Update was Successful.",
  ok: true,
};

const InvalidInput = (message: string): Popup => ({
  title: "Invalid Input",
  message,
  ok: false,
});

const Err = (e: Error): Popup => ({
  title: "Error",
  message: decodeURI(e.message),
  ok: false,
});

export type {
  Popup,
};
export {
  NotAuthorized,
  InvalidInput,
  PopupThrower,
  Success,
  Err,
};
